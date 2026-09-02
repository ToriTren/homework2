// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]

// Добавьте в конец массива двух пользователей:
users.push (
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
)

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAgeForEach(users) {
  if (users.length === 0) return 0;

  let sum = 0;

  users.forEach(user => {
    sum += user.age;
  });

  return sum / users.length;
}

console.log(getUserAverageAgeForEach(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
  const admins = [];
  
  users.forEach(user => {
    if (user.isAdmin)
      admins.push(user);
  });
  
  return admins;
}
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  if (n === undefined) {
    n = 1;
  }

  const result = [];

  arr.forEach((element, index) => {
    if (index < n) {
      result.push(element);
    }
  });

  return result;
}
