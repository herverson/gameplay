import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../screens/home";
import { SignIn } from "../screens/signin";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}