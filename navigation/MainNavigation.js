import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigation";
import BMart from "../screens/BMart";

const MainNavigation = createStackNavigator(
  {
    tab: { screen: TabNavigator, navigationOptions: { header: null } },
    BMart: { screen: BMart }
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);
