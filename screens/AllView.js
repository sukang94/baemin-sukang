import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => (
  <View style={style.container}>
    <Text> 지금 진행중!</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
