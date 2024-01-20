import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
const ExploreHeader = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.inpHold}>
            <EvilIcons
              name="search"
              size={34}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Where do you want to go...."
            />
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
  inputText: {
    flex: 1,
    backgroundColor: "transparent",
    height: "100%",
    paddingLeft: 7,
  },
  inpHold: {
    width: "80%",
    height: 55,
    marginLeft: 15,
    borderRadius: 30,
    backgroundColor: "white",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    boxShadow:
      "box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 360,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExploreHeader;
