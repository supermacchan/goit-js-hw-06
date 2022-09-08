const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

const count = categoryList.forEach(category => {
    const headingEl = category.querySelector('h2');
    console.log(`Category: ${headingEl.textContent}`);
    const elementsList = category.querySelectorAll('ul > li');
    console.log(`Elements: ${elementsList.length}`);
});