import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Colors from "./constants/colors";
import { HomeScreen } from "./src/screens";
import { cachedFonts } from "./helpers";
import { LoadingScreen } from "./src/commons";

EStyleSheet.build(Colors);

class App extends Component {
  componentDidMount() {
    this.loadAsyncAssets();
  }

  state = {
    fontLoaded: false
  };

  async loadAsyncAssets() {
    const fontsAssets = cachedFonts([
      {
        kalam_bold: require("./assets/fonts/Kalam-Bold.ttf")
      },
      {
        kalam_Light: require("./assets/fonts/Kalam-Light.ttf")
      },
      {
        kalam_Regular: require("./assets/fonts/Kalam-Regular.ttf")
      }
    ]);
    await Promise.all(fontsAssets);
    this.setState({
      fontLoaded: true
    });
  }
  render() {
    if (!this.state.fontLoaded) {
      return <LoadingScreen />;
    }
    return <HomeScreen />;
  }
}
export default App;
