import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import WhatEat from "../screens/WhatEat";
import LikeShop from "../screens/LikeShop";
import OrderList from "../screens/OrderList";
import Mybaemin from "../screens/Mybaemin";
import TabBarIcon from "../components/TabBarIcon";
import { ACTIVE_COLOR } from "../constants/Color";
import { Platform } from "react-native";

const TabNavigator = createBottomTabNavigator(
  {
    홈: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-home" : "md-home"}
          />
        )
      }
    },
    뭐먹지: {
      screen: WhatEat,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-play" : "md-play"}
          />
        )
      }
    },
    찜한가게: {
      screen: LikeShop,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.os === "ios" ? "ios-heart" : "md-heart"}
          />
        )
      }
    },
    주문내역: {
      screen: OrderList,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.os === "ios" ? "ios-list-box" : "md-list-box"}
          />
        )
      }
    },
    my배민: {
      screen: Mybaemin,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.os === "ios" ? "logo-snapchat" : "logo-snapchat"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: ACTIVE_COLOR,
      title: {
        Color: "black"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
