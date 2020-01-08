import React from "react";
import { AppLoading } from "expo";
import MainNavigation from "./navigation/MainNavigation";
import * as Font from "expo-font";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  LoadingError = error => console.log(error);
  LoadingEnd = () => this.setState({ loaded: true });
  LoadingStart = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <MainNavigation />;
    } else {
      return (
        <AppLoading
          startAsync={this.LoadingStart}
          onFinish={this.LoadingEnd}
          onError={this.LoadingError}
        />
      );
    }
  }
}
