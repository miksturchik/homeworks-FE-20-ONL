const data1 = [
    {
        age: 3,
        name: "Curtis Greene",
        email: "curtis.greene@zaj.ca",
    },
    {
        age: 23,
        name: "Nikki Lowe",
        email: "nikki.lowe@darwinium.tv",
    },
    {
        age: 39,
        name: "Barr Copeland",
        email: "barr.copeland@nipaz.me",
    },
];
const data2 = [
    {
        age: 29,
        name: "Calhoun Woodward",
        email: "calhoun.woodward@medmex.info",
    },
    {
        age: 21,
        name: "Leta Lee",
        email: "leta.lee@qnekt.com",
    },
    {
        age: 40,
        name: "James Dinh",
        email: "j.dink@erw.com",
    },
];

// 1. Нужно найти и сохранить в переменную индекс пользователя в массиве data1,
//     у которого возраст равен 23 года. (ожидаемый результат: 1),
//         все остальное нужно искать в документации к пакету lodash

const _ = require("lodash");

const goal = _.findIndex(data1, (user) => user.age === 23);
console.log(goal);

// 2. Объединить два массива data1 и data2 в один и записать этот результат в новую переменную
//     (ожидаемый результат - это новый массив длиной 6 элементов)

const newArray = [...data1, ...data2];
// console.log(newArray);

const other = _.concat(data1, data2);
// console.log(other);

// 3. Взять любой объект из любого массива и на его основе создать новый объект, но выкинув из него поле “age”.
// Опять же нужно использовать функцию из библиотеки lodash.Пример исходного объекта и результата см.во вложениях.

const noAge = _.omit(data1[0], ["age"]);
console.log(noAge);
// 4. Суперзадание - как выполнить задачу 3 без библиотек, а только средствами javascript ? ( Иммутабельно, не используя delete )

const obj = data1[0];
const newObj = obj;
delete newObj.age;
