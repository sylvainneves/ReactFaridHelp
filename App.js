import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { RecipesDetailsScreen } from "./src/components/RecipesEpic/RecipesDetailsScreen/index";
import { RecipesListScreen } from "./src/components/RecipesEpic/RecipesList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./src/redux/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="RecipesListScreen"
              component={RecipesListScreen}
            />
            <Stack.Screen
              name="RecipesDetailsScreen"
              component={RecipesDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
