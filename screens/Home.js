import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import HomeSlider from "./HomeSlider";

const Container = styled.ScrollView``;

export default ({ navigation }) => (
  <ImageBackground
    style={{ width: "100%", height: "100%" }}
    source={require("../assets/background.png")}
  >
    <Container>
      <HomeSlider>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Home </Text>
          <TouchableOpacity onPress={() => navigation.navigate("AllView")}>
            <Text> 모두 보기 </Text>
          </TouchableOpacity>
        </View>
      </HomeSlider>
    </Container>
  </ImageBackground>
);
