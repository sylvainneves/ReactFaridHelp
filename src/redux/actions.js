import { ADD_RECIPES } from "./actionsType";

export const fetchRecipesAction = (data) => ({
  type: ADD_RECIPES,
  payload: data,
});
