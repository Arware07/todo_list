import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.menuItem}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Lista de Tareas')}>
        <Text style={styles.menuItem}>Acerca de</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Pendientes')}>
        <Text style={styles.menuItem}>Servicios</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Terminadas')}>
        <Text style={styles.menuItem}>Contacto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Menu;
