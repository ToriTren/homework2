// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Алексей",
  age: 28,
  city: "Санкт-Петербург",
  profession: "Frontend-разработчик",
  isAvailable: true
};

console.log(person.name); 
console.log(person.age); 
console.log(person.city);  
console.log(person.profession); 
console.log(person.isAvailable);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
  for (let key in obj) {
    return false; // любое свойство → не пустой
  }
  return true;
}

console.log(isEmpty({}));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Изучить JS",
  description: "Пройти урок по объектам",
  isCompleted: false
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task, { isCompleted: true });

for (let key in updatedTask) {
  if (updatedTask.hasOwnProperty(key)) {
    console.log(`${key}: ${updatedTask[key]}`);
  }
}


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);


function callAllMethods(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'function') {
      obj[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод'
};

callAllMethods(myObject);