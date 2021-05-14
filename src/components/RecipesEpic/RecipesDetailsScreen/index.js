import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const RecipesDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RecipesDetailsScreen</Text>
      <Button
        title="Revenir"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});
