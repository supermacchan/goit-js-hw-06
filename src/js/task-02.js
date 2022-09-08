const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = [];
const ingredientsParent = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');
  ingredientsList.push(newItem);
});

ingredientsParent.append(...ingredientsList);