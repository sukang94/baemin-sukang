import React from "react";
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigation";
import AllView from "../screens/AllView";
import TodayL from "../screens/TodayL";

const MainNavigation = createStackNavigator(
  {
    Home: { screen: TabNavigator, navigationOptions: { headerShown: false } },
    AllView: {
      screen: AllView,
      navigationOptions: { title: "이벤트", headerBackTitleVisible: false }
    },
    TodayL: {
      screen: TodayL,
      navigationOptions: { title: "이벤트", headerBackTitleVisible: false }
    }

    //스크롤뷰, 하단 스크롤뷰, 공지, 이벤트, 발표
  },
  {
    mode: "card" //modal 아래에서 위로
  }
);

export default createAppContainer(MainNavigation);
