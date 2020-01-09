import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import navigation from "../navigation/MainNavigation";

const SWIPER_HEIGHT = Layout.height / 4;

const View = styled.View`
  background-color: white
  height: ${SWIPER_HEIGHT};
`;
const Text = styled.Text``;

const HomeSlider = ({ Homes }) => (
  <Swiper
    showsPagination={false}
    autoplay={true}
    style={{ height: SWIPER_HEIGHT }}
  >
    <View>
      <TouchableOpacity onPress={() => Homes.navigate("TodayL")}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/Silder1.png")}
        />
      </TouchableOpacity>
    </View>
    <View>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/Silder2.png")}
      />
    </View>
    <View>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/Silder3.png")}
      />
    </View>
  </Swiper>
);

HomeSlider.PropTypes = {
  Homes: PropTypes.array.isRequired
};

export default HomeSlider;
