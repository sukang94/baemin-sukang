import React from "react";
import { Text, View } from "react-native";
import { AppLoading } from "expo";
import { TabNavigation } from "./navigation/TabNavigation";

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
      return (
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
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
