import React from "react";
import { View, StyleSheet, Text } from "react-native";

const NewToDo = () => {
  return (
    <View style={styles.container}>
      <Text>Aqui se agregara una funcion para añadir nuevas tareas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
});

export default NewToDo;
