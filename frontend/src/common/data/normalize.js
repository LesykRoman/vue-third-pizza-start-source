import doughSizes from "./doughSizes";
import ingredients from "./ingredients";
import sauces from "./sauces";
import sizes from "./sizes";

export const normalizeDough = (dough) => {
  return {
    ...dough,
    value: doughSizes[dough.id],
  };
};

export const normalizeIngredients = (ingredient) => {
  return {
    ...ingredient,
    value: ingredients[ingredient.id],
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    value: sizes[size.id],
  };
};

export const normalizeSauces = (sauce) => {
  return {
    ...sauce,
    value: sauce[sauce.id],
  };
};
