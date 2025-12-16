// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
  ]
// Добавьте в конец массива двух пользователей:

users.push({ name: 'Ann', age: 19, isAdmin: false });
users.push({ name: 'Jack', age: 43, isAdmin: true });

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users),
// которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
    let sum = 0;
    users.forEach(user => {
        sum += user.age;
    });
    return sum / users.length;
}
console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users),
// которая возвращает массив всех администраторов.

function getAllAdmins(users) {
    let admins = new Array();
    users.forEach(user => {
        if (user.isAdmin) admins.push(user);
    });
    return admins;
}
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива.
// Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
    if (n > arr.length) {
        console.error("число больше длины массива");
        return;
    }
    if (n == 0) return new Array();
    let result = new Array();
    if (n == undefined) {
        result[0] = arr[0];
        return result;
    }
    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }
    return result;
}
let arr = [2, 6, 7, 9, 3, 6, 7];
console.log(first(arr, 3));
console.log(first(arr, 0));
console.log(first(arr));
console.log(first(arr, 10));