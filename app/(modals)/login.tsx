import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const login = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Input Name ...." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    width: "100%",
    height: 35,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default login;
