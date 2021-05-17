import React, { useEffect, useState } from "react";
import { Root } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import * as Font from "expo-font";
import Login from "./views/Login";
import NewPassword from "./views/NewPassword";
import Incident from "./views/Incident";
import Routing from "./views/Routing";

const Stack = createStackNavigator();

// Redux
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });

    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <Root>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Iniciar Sesión",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewPassword"
              component={NewPassword}
              options={{
                title: "Iniciar Sesión",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Routing"
              component={Routing}
              options={{
                title: "Ruta",
              }}
            />
            <Stack.Screen
              name="Incident"
              component={Incident}
              options={{
                title: "Registrar Incidente",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Root>
  );
}
