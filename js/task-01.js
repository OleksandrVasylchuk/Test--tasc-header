// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


// const categoriesLength = document.querySelectorAll(".item");
// const length = categoriesLength.length
// console.log(length)
// const categories = document.querySelector(".item").children;
// console.log(categories)
// // const textTitle = categories.forEach(categoria => categoria)
// // console.log(textTitle)

const catogoriesValue = document.querySelector( `#categories` ).children.length;
console.log( `В списке ${catogoriesValue} категории` );
const categoryArray = document.querySelectorAll( `.item` );
for( let elem of categoryArray ) {
    console.log( `Категория: `, elem.firstElementChild.textContent );
    console.log( `Количество элемментов: `, elem.lastElementChild.children.length )
};