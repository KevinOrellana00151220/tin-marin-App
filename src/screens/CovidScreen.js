import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { getAllCovidRecommendations } from '../api/covid';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { size } from 'lodash';

/**
 * Pantalla que muestra una lista de recomendaciones sobre el COVID-19
 */
const CovidScreen = ({ navigation }) => {
  const [covid, setCovid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCovidRecommendations().then((response) => {
      setCovid(response);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator
            style={{
              marginTop: 200,
            }}
            size="large"
            color="#0000ff"
          />
        ) : size(covid) == 0 ? (
          <Text style={styles.text}>No se encontraron Recomendaciones</Text>
        ) : (
          <View style={styles.view}>
            {/* Imagen en la parte superior */}
            <Image
              source={{
                uri: 'https://i.ibb.co/pPsMJc2/imagen-2024-10-25-094058375-removebg-preview.png',
              }}
              style={styles.image}
            />

            <Text style={styles.title}>Salvaguarda</Text>
            <View style={styles.line}></View>

            {/* Muestra solo los títulos en una lista con puntos */}
            <CovidList covidRecs={covid} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Componente que itera sobre los títulos y los muestra con un punto
 */
const CovidList = ({ covidRecs }) => {
  return covidRecs.map((covid, index) => (
    <View key={index} style={styles.item}>
      <Text style={styles.bullet}>{`\u2022`}</Text>
      <Text style={styles.titleItem}>{covid.title}</Text>
    </View>
  ));
};

export default CovidScreen;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    marginTop: 20,
    fontSize: 30,
    color: '#566573',
    textAlign: 'center',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#D5D8DC',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
    fontSize: 20,
    color: 'gray',
  },
  image: {
    width: '70%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 0,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '90%',  // Se ajusta el ancho total de la vista
    justifyContent: 'flex-start',  // Alinea el contenido al principio
  },
  bullet: {
    fontSize: 18,
    marginRight: 10,
    color: '#333',
  },
  titleItem: {
    flex: 1,  // Asegura que el texto ocupe todo el espacio disponible
    fontSize: 18,
    color: '#333',
    textAlign: 'left',  // Asegura que el texto esté alineado a la izquierda
  },
});



