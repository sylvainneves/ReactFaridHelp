import axios from "axios";
import { fetchRecipesAction } from "../../redux/actions";

/* const */

const ENDPOINT_RECIPES = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "e5e52760931049aebe44ddea67a92493";
const MAX_PER_PAGE = 10;

export const fetchRecipes = async (dispatch) => {
  try {
    console.log("dans fetch recipies");
    const response = await axios
      .get(ENDPOINT_RECIPES, {
        params: {
          apiKey,
          number: MAX_PER_PAGE,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        dispatch(fetchRecipesAction(res.data.results));
      });
  } catch (e) {
    console.log("error requete recipes", e);
  }
};
