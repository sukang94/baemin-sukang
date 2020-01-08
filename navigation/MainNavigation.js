import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigation";
import BMarts from "../screens/BMart";

const MainNavigation = createStackNavigator(
  {
    Home: { screen: TabNavigator, navigationOptions: { header: null } },
    BMart: { screen: BMarts, navigationOptions: { title: "BMart" } }
  },
  {
    // mode: "modal"
    mode: "card"
  }
);

export default createAppContainer(MainNavigation);
