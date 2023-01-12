import React, { Component } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Divider,
  IconRegistry,
  Input,
  Layout,
  Text,
} from "@ui-kitten/components";
import {
  Appearance,
  ColorSchemeName,
  KeyboardAvoidingView,
  View,
} from "react-native";
import Login from "./screens/login/login";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

let colorSchemeBoolean = Appearance.getColorScheme();

Appearance.addChangeListener((prefs: Appearance.AppearancePreferences) => {
  colorSchemeBoolean = prefs.colorScheme;
});

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

interface propsI {}
interface stateI {
  theme: ColorSchemeName;
}

export default class App extends Component<propsI, stateI> {
  constructor(props: any) {
    super(props);

    this.state = {
      theme: Appearance.getColorScheme(),
    };

    Appearance.addChangeListener((prefs: Appearance.AppearancePreferences) => {
      console.log(prefs);
      this.setState({ theme: prefs.colorScheme });
    });
  }

  render() {
    return (
      <ApplicationProvider
        {...eva}
        theme={this.state.theme === "light" ? eva.light : eva.dark}
      >
        <IconRegistry icons={EvaIconsPack} />

        <Login />
      </ApplicationProvider>
    );
  }
}
