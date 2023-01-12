const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const makeItemIngredients = ingredient => {
  return ingredient.map(ingred => {
    const itemIngredientsEl = document.createElement('li');
    itemIngredientsEl.textContent = ingred;
    itemIngredientsEl.classList.add('item');
    return itemIngredientsEl;
  });
};

const listIngredients = document.querySelector('#ingredients');
const itemElementsArray = makeItemIngredients(ingredients);
listIngredients.append(...itemElementsArray);

