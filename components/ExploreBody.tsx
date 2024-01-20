import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const ExploreBody = () => {
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.imagehold}>
        <Image
          style={styles.img}
          source={require("../assets/images/house.jpg")}
        />
      </View>
      <View style={styles.hotelhold}>
        <View>
          <Text style={{ fontWeight: "800", fontSize: 18 }}>
            Telgte,Germany
          </Text>
          <Text style={{ fontSize: 14, color: "#c9c7c7" }}>
            Individual Host
          </Text>
          <Text style={{ fontSize: 14, color: "#c9c7c7" }}>24-29 Nov</Text>
          <Text>$400.00 night</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="star" size={17} color="black" />
          <Text>4.95</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagehold: {
    width: "100%",
    height: 400,
    backgroundColor: "red",
    borderRadius: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  hotelhold: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 17,
  },
});

export default ExploreBody;
