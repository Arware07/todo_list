import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú de la Aplicación</Text>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Opción 1' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Opción 1')}>
        <Text>Opción 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Opción 2' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Opción 2')}>
        <Text>Opción 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Opción 3' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Opción 3')}>
        <Text>Opción 3</Text>
      </TouchableOpacity>
      <Text style={styles.selectedText}>
        Opción seleccionada: {selectedOption}
      </Text>
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
