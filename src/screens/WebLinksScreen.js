import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ListItem from '../components/ListItem'; // Importa el nuevo componente de lista
import { getAllLinks } from '../api/weblinks';
import { LogBox } from 'react-native';
import { size } from 'lodash';

LogBox.ignoreAllLogs();

const WebLinksScreen = ({ navigation }) => {
  const [links, setlinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getAllLinks(signal).then((response) => {
      setlinks(response);
      setLoading(false);
      setFetched(true);
    });

    if (fetched) abortController.abort();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: 200,
          }}
          size="large"
          color="#0000ff"
        />
      ) : size(links) === 0 ? (
        <Text style={styles.text}>No se encontraron Sitios de Interés</Text>
      ) : (
        <View style={styles.view}>
        <Text style={styles.title}>Dinamicas de traslado</Text>
          {links.map((link, key) => (
            <ListItem
              key={key}
              url={link.url}
              icon="https://img.icons8.com/color/48/000000/bookmark.png" // Usa una URL de ícono
              title={link.title}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1, // Permite que el View ocupe todo el espacio disponible
    paddingBottom: 30,
  },
  title: {
      fontFamily: 'NunitoSans-Bold',
      marginTop: 20,
      marginBottom: 20,
      fontSize: 30,
      color: '#566573',
      textAlign: 'center',
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
});

export default WebLinksScreen;
