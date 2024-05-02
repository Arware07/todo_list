import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, TextInput, FlatList} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const NewToDo = () => {
  const [newTodo, setNewTodo] = React.useState([]);
  const [textInput, setTextInput] = React.useState("");

  useEffect(() => {
    loadData();
  }, [])

  const saveTodo = async () => {
    try {
      const data = [...newTodo, textInput]
      await AsyncStorage.setItem('data', JSON.stringify(data))
      alert('La tarea se guardo correctamente.')
      setTextInput('')
      setNewTodo(data)
    } catch (error) {
      console.error("Error al almacenar datos", error);
    }
  };

  const loadData = async () => {
    try{
      const stored = await AsyncStorage.getItem('data');
      if (stored !== '' || stored !== null){
        setNewTodo(JSON.parse(stored));
      }
    } catch(error){
      console.log('Error al cargar datos:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Nueva Tarea</Text>
      <Button title="Agregar" onPress={() => saveTodo()} />
      <TextInput
        onChangeText={setTextInput}
        value={textInput}
        style={styles.input}
      />
      <FlatList
      data={newTodo}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
      style={styles.flatList}
      />
    </View>
  );
};

const TaskList = ({ tasks, onRemoveTask }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <Text style={styles.task}>{item}</Text>
            <Text style={styles.removeButton} onPress={() => onRemoveTask(index)}>
              Remove
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  flatList: {
    marginTop: 20,
  },
});

export default NewToDo;
