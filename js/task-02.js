// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все
// li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemUL = document.createElement("ul");
const element = ingredients.map(ingredient => {

    const item = document.createElement("li");
    itemUL.appendChild(item);
    document.body.appendChild(itemUL);
    item.textContent = ingredient;

    return itemUL;
});
console.log(itemUL)
