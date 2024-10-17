import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native'; // Importa Linking

// Componente que renderiza cada elemento de la lista
const ListItem = ({ icon, title, url }) => {
  const openLink = () => {
    if (url) {
      Linking.openURL(url); // Abre el enlace en el navegador
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openLink}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
});

export default ListItem;

