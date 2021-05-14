import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { fetchRecipes } from "../../../API/Recipies/index";
import { useSelector } from "react-redux";
import { getRecipes } from "../../../redux/selectors";
import { useDispatch } from "react-redux";

export const RecipesListScreen = ({ navigation }) => {
  const recipes = useSelector(getRecipes);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRecipes(dispatch);
  }, []);
  return (
    <View style={styles.container}>
      <Text>RecipesListScreen</Text>
      {recipes.map((recipe) => {
        return <Text>{recipe.title}</Text>;
      })}
      <Button
        onPress={() => {
          navigation.navigate("RecipesDetailsScreen");
        }}
        title="Aller sur l'ecran d'accueil"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
