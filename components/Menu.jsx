import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigation = useNavigation();

  const handleOptionSelect = (option) => {
    setSelectedOption('MyTasks');
  }

  const handleNavigateNewToDo = (option) => {
    navigation.navigate('NewToDo')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos a Nuestro To-Do List </Text>
      <TouchableOpacity
        style={[
          styles.option, styles.selectedOption,
        ]}
        onPress={() => handleNavigateNewToDo()}>
        <Text>Agregar nueva tarea</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedOption, styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect()}>
        <Text>Ver Tareas</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Opción 3' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Opción 3')}>
        <Text>Opción 3</Text>
      </TouchableOpacity>
      <Text style={styles.selectedText}>
        Opción seleccionada: {selectedOption}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#86AAB3',
    backgroundColor:'#AABAC4',
    borderRadius: 5,
  },
  selectedOption: {
    borderColor: '#86AAB3',
    backgroundColor:'#AABAC4',
  },
  selectedText: {
    marginTop: 20,
  },
});

export default Menu;
