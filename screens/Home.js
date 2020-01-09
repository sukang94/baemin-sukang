import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text> Home </Text>
    <TouchableOpacity onPress={() => navigation.navigate("AllView")}>
      <Text> 모두 보기 > </Text>
    </TouchableOpacity>
  </View>
);
