import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const login = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Input Name ...." />
      <TextInput style={styles.input} placeholder="Input Email ...." />
      <TextInput style={styles.input} placeholder="Input Password ...." />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20 }}>
        Already have an account? <Text style={{ color: "blue" }}>Sign in</Text>
      </Text>
      <Text>
        <Text style={styles.line}></Text> <Text>Or</Text>{" "}
        <Text style={styles.line}></Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: 10,
    height: 2,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 30,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "red",
    color: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default login;
