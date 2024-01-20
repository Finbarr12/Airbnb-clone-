import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import HousesBooked from "./HousesBooked";

const ExploreBody = () => {
  return (
    <View style={{ padding: 20 }}>
      <ScrollView>
        <HousesBooked />
        <HousesBooked />
        <HousesBooked />
        <HousesBooked />
      </ScrollView>
    </View>
  );
};

export default ExploreBody;
