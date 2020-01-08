import React from "react";
import { createAppContainer } from "react-navigation";
import TabNavigator from "../navigation/TabNavigation";
import BMart from "../screens/BMart";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigation = createStackNavigator(
  {
    Tab: { screen: TabNavigator, navigationOptions: { header: null } },
    BMart: BMart
  },
  {
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);
