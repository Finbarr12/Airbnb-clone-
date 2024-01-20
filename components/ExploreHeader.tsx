import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
const ExploreHeader = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.inpHold}>
            <EvilIcons name="search" size={34} color="black" />
            <TextInput />
          </View>
          <View style={styles.circle}>
            <Ionicons name="options" size={24} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inpHold: {
    width: "80%",
    height: 55,
    marginLeft: 15,
    borderRadius: 30,
    backgroundColor: "red",
    flexDirection: "row",
    alignContent: "center",
  },
  circle: {},
});

export default ExploreHeader;
