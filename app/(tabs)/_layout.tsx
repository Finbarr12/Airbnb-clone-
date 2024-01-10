import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
        }}
      />
    </Tabs>
  );
};

export default _layout;
