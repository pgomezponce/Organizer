import {
  Button,
  Divider,
  Icon,
  IconProps,
  Input,
  Layout,
  Text,
} from "@ui-kitten/components";
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface propsI {}
interface stateI {
  passwordShown: boolean;
}

export default class Login extends Component<propsI, stateI> {
  constructor(props: propsI) {
    super(props);
    this.state = {
      passwordShown: false,
    };
  }

  eyeOff(props?: IconProps) {
    return <Icon {...props} name="eye-off-outline" />;
  }

  eye(props?: IconProps) {
    return <Icon {...props} name="eye-outline" />;
  }

  togglePasswordShown() {
    this.setState({
      passwordShown: !this.state.passwordShown,
    });
  }
  passwordAccessory(iconProps: IconProps) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.togglePasswordShown();
        }}
      >
        <Icon
          {...iconProps}
          name={this.state.passwordShown ? "eye-off-outline" : "eye-outline"}
        />
      </TouchableWithoutFeedback>
    );
  }
  render() {
    return (
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <Layout style={styles.container}>
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              width: "100%",
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Layout level="2" style={styles.form}>
              <Text category="h1">Welcome</Text>
              <Layout
                level="3"
                style={{ padding: 10, marginVertical: 5, borderRadius: 5 }}
              >
                <View style={{ marginBottom: 10 }}>
                  <Input
                    keyboardType="email-address"
                    autoCapitalize="none"
                    label={"Email address"}
                  />
                  <Input
                    label={"Password"}
                    textContentType="password"
                    secureTextEntry={!this.state.passwordShown}
                    caretHidden={true}
                    accessoryRight={this.passwordAccessory(styles.captionIcon)}
                  />
                </View>
                <Button>Sign in</Button>
                <Divider />
                <Layout
                  level="4"
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: 5,
                    marginVertical: 5,
                    borderRadius: 5,
                  }}
                >
                  <Button>Sign In with Google</Button>
                  <Button>Sign In with Apple</Button>
                </Layout>
              </Layout>
            </Layout>
          </KeyboardAvoidingView>
        </Layout>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: Platform.OS === "web" ? "center" : "flex-end",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  form: {
    width: "100%",
    maxWidth: Platform.OS === "web" ? 500 : "100%",
    padding: 20,
    borderRadius: Platform.OS === "web" ? 10 : 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 40,
  },
  captionIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
