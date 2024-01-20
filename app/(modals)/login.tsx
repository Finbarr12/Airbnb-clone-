import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={styles.line}></Text>
        <Text>Or</Text>
        <Text style={styles.line}></Text>
      </View>
      <View style={styles.googleBox}>
        <AntDesign name="google" size={24} color="red" />
        <Text style={{ marginLeft: 15 }}>Sign in with Google</Text>
      </View>
      <View style={styles.googleBox}>
        <AntDesign name="facebook-square" size={24} color="red" />
        <Text style={{ marginLeft: 15 }}>Sign in with Facebook</Text>
      </View>
      <View style={styles.googleBox}>
        <AntDesign name="twitter" size={24} color="red" />
        <Text style={{ marginLeft: 15 }}>Sign in with Twitter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  googleBox: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 15,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    width: "44%",
    height: 2,
    backgroundColor: "black",
    margin: 9,
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
