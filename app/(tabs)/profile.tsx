import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const profile = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        <Text>Login</Text>
      </Link>
    </View>
  );
};

export default profile;
