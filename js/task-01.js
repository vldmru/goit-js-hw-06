const categoriesEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesEl.length}`);

const listTitleEl = document.querySelectorAll('.item h2');
const listEl = document.querySelectorAll('.item ul');

console.log(`Category: ${listTitleEl[0].textContent}`);
console.log(`Elements: ${listEl[0].children.length}`);

console.log(`Category: ${listTitleEl[1].textContent}`);
console.log(`Elements: ${listEl[1].children.length}`);


console.log(`Category: ${listTitleEl[2].textContent}`);
console.log(`Elements: ${listEl[2].children.length}`);

