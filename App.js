import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Home";
import Income from "./Income";
import AuthPage from "./AuthPage";
import Expensess from "./Expensess";
import Saving from "./Saving";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AuthWithGoogle" component={AuthPage} />

        <Stack.Screen name="income" component={Income} />
        <Stack.Screen name="Expensess" component={Expensess} />
        <Stack.Screen name="Saving" component={Saving} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
