// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categoriesLength = document.querySelectorAll(".item");
const length = categoriesLength.length
console.log(length)
const categories = document.querySelector("ul").children;
console.log(categories)
// const elementCategories = document.querySelector("ul").children;
//    for (let i=0, child; child=elementChildrens[i]; i++) {
//         // elementChildrens - коллекция детей списка
//         // child - последовательно, каждый из элементов elementChildrens
//         alert(child.innerHTML);
// }
//    console.log(elementCategories)