// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  const priceAfterDiscount = basePrice * (1 - discountPercent / 100);
  const finalPrice = priceAfterDiscount * (1 + taxRate / 100);
  return finalPrice;
}

console.log(calculateFinalPrice(1000, 30, 18));

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(username, password) {
  return (username === 'admin' && password === '123456') 
    ? 'Доступ разрешен' 
    : 'Доступ запрещен';
}

console.log(checkAccess('admin', '123456'));
console.log(checkAccess('admin', '654321'));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(hour) {
  if (hour < 0 || hour > 23 || hour % 1 !== 0) {
    return 'Некорректное время';
  }

  if (hour < 6) return 'Ночь';
  if (hour < 12) return 'Утро';
  if (hour < 18) return 'День';
  return 'Вечер';
}

console.log(getTimeOfDay(3));    // "Ночь"
console.log(getTimeOfDay(24));   // "Некорректное время"

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(5, 5)); 


// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
