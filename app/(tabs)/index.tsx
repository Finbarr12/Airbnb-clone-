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

export default index;
