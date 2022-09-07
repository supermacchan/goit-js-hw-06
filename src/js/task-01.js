const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const count = categories.forEach(category => {
    const heading = document.querySelector('.item > h2');
    console.log(heading);

})