import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Menu = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigation = useNavigation();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNavigateNewToDo = () => {
    navigation.navigate('NewToDo')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú de la Aplicación</Text>
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
          selectedOption === 'Opción 2' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Opción 2')}>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#e0e0e0',
  },
  selectedText: {
    marginTop: 20,
  },
});

export default Menu;
