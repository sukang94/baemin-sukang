import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";

const TabNavigation = createBottomTabNavigator({
  홈: { screen: Home }
});

export default createAppContainer(TabNavigation);
