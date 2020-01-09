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
import { TAPCOLOR } from "../constants/Color";
import { createStackNavigator } from "react-navigation-stack";

const TabNavigator = createBottomTabNavigator(
  {
    홈: {
      screen: createStackNavigator({
        Home: {
          screen: Home,
          navigationOptions: {
            title: "서울 동작구 상도동 521-5"
          }
        }
      }),
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
      screen: createStackNavigator({
        WhatEat: { screen: WhatEat, navigationOptions: { title: "뭐먹지" } }
      }),
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
      screen: createStackNavigator({
        LikeShop: { screen: LikeShop, navigationOptions: { title: "찜한가게" } }
      }),
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
      screen: createStackNavigator({
        OrderList: {
          screen: OrderList,
          navigationOptions: { title: "주문내역" }
        }
      }),
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
      screen: createStackNavigator({
        Mybaemin: { screen: Mybaemin, navigationOptions: { title: "My배민" } }
      }),
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
      },
      style: { backgroundColor: TAPCOLOR }
    }
  }
);

export default createAppContainer(TabNavigator);
