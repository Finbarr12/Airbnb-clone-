import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mont",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
