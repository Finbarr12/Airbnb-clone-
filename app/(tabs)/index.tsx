import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ExploreHeader from "../../components/ExploreHeader";

const index = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inpHold: {
    width: "80%",
    height: 55,
    marginLeft: 15,
    borderRadius: 30,
    backgroundColor: "red",
  },
  circle: {},
});

export default index;
