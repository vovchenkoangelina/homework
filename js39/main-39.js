// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас.
// Затем выведите значения этих свойств в консоль.

let person = {
    name: "Ivan",
    surname: "Popov",
    age: 21,
    isEmployed: true,
    occupation: "cook",
};
console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым.
// Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
    let n = 0;
    for (let key in object) {
        n++;
    }
    if (n == 0) return true;
    return false;
}

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора
// spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

let task = {
    title: "study",
    description: "watch Aroken lessons and do homework",
    isCompleted: true,
};

function cloneAndModify(object, modifications) {
    let modificatedObject = { ...object, ...modifications };
    return modificatedObject;
};

let modifications = {
    time: 30,
    title: "study hard"
};

let newTask = cloneAndModify(task, modifications);
for (let key in newTask) {
    console.log(`${key}: ${newTask[key]}`);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

const callAllMethods = (object) => {
    for (let key in object) {
        if (typeof object[key] == "function") {
            object[key]();
        }
}
}

callAllMethods(myObject);