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

const itemUL =  document.querySelector('#ingredients');

const element = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  itemUL.appendChild(item);
  return item;
  
});
itemUL.append(...element);
  
