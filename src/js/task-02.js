const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');
  const ingredientsParent = document.querySelector('#ingredients');
  ingredientsParent.append(newItem);
});
