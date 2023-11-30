// var> let
// const

// let a  = 12
// console.log(a)
// const b = 25
// console.log(b)
// a = 25
// console.log(a)
// b = 40
// console.log(b)

// let a = 'privet mir'
// alert(a)
// a = prompt('title')
// alert(a)

// ТИПЫ ДАННЫХ?
// ПРЕОБРАЗОВАНИЕ ТИПОВ?
// ОПЕРАТОРЫ?
// УСЛОВНЫЕ ВЕТВЛЕНИЯ IF ELSE,
// ЦИКЛЫ
// Конструкциии
// Функциии
// Стрелочные Функциии
// ...

// let a = 25
// let b = 40
// // let c = a + b
// // alert(c)
// alert(a + b)


// ОПЕРАТОРЫ 

// = - присвоить
// == - равно
// === -  строгое равно ?
// +
// -
// *
// /
// % - остаток от деления 5 / 3 = 1,6 | 5 % 3 = 2
// ** - возведение в степень
// let a = 5
// let b = 3
// alert(a % b)
//  8 % 3

// a = a + 1
// a += 1
// a = b = c = d = f = 25 + 25
// alert(50)

// ОПЕРАТОРЫ СРАВНЕНИЯ

// a<b a>b
// a>=b a<=b
// a == b
// a != b

// ТИПЫ ДАННЫХ 

// n = 12 ЧИСЛО Number
// a = 'привет' строка String
// c = true / false булевый тип Boolean
// typeof - вывод информации о типе ДАННЫХ


// УСЛОВНОЕ  ВЕТВЛЕНИЕ IF 

// if (значение) {
//     результат для выполнения
// }

// let a = prompt('В каком году закончится 2023 год')
// if (a == 2023) {
//     alert('Красава')
// }else if (a < 2023) {
//     alert('не верно')
// }else if (a > 2023) {
//     alert('Чет ты загнул')
// }


// Задача №1 
// написать программу которая проверят сколько вам лет прежде чем пустить на сайт Если указали 18 то вывод сообщения проходите но вам 18, если больше - то просто проходите, если  меньше 18 то не проходите.

// let a = prompt('')
// if (a == 18) {
//     ..
// }else if (a > 18) {
//     ..
// }esle {
//     ..
// }



// #задача  2
// Написать программу которая будет проверять, является ли число четным или нет.
// Число мы вводим с клавиатуры

// let a = prompt()
// if (a % 2 ===0) {
//     alert('Четные')
// }else {
//     alert('не четные')
// }

// Задача 3
// Написать программу которая при сравнее двух числел если они оказываются равными, будет брать сумму этих чисел и прибавлять к ним 1000

// let a = Number(prompt())
// let b = Number(prompt())
// if (a  === b) {
//     let sum = (a + b) + 1000
//     alert(sum)
// }



// ЦИКЛЫ FOR I WHILE
// while for

// while (УСЛОВИЕ) {
//     тело цикла
// }


// Зачачка: вывести числа от  1-10 включительно

// let count = 1
// while (count <= 10) {
//     console.log(count)
//     count++;
// }


// Задачка: найти первое число в последовательности которое делится сразу на 2 и на 3 одвноременно
// let number = 1;
// let found = false;
// while (!found) {
//     if (number % 2 === 0 && number % 3 === 0) {
//         console.log(number)
//     found = true
//     }
//     number++;
//     console.log(number)
// }

// Задача: Подсчет суммы покупок в магазине

// let totalPrice = 0
// let  i = 0
// const prices = [3000,1700,2800,1500,1000]

// while (i < prices.length) {
//     totalPrice += prices[i]
//     i++
// }
// console.log(totalPrice + '$')
// console.log(`Стоимость ${totalPrice}$`)


// Задача Ожидание завершения процессов

// let responseREceived = false
// let timeout = 0

// while (!responseREceived && timeout < 5000 ) {
//     повторные запросы
//     проверки...
//     timeout += 100

// }
// if (responseREceived) {
//     console.log('true')
// }else {
//     console.log('false')
// }


// do...while

// let i = 0
// do {
//     console.log(i)
//     i++
// }while (i > 5)


// let input
// do {
//     input = prompt('введи число больше или равно 10')
// } while (input < 10)
// console.log(input)



// ЦИКЛ FOR 

// for (начало; условие; шаг) {
//     Тело
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let i = 0
// if (i < 3) {console.log(i);i++}
// if (i < 3) {console.log(i);i++}
// if (i < 3) {console.log(i);i++}
// if (i <= 3) {console.log(i);i++}

// let i = 0

// for (; i < 3;i++) {
//     console.log(i)
// }
// let i = 0
// for (;i<3;) {
//     console.log(i++)
// }
// for (;;) {
//     /вечный
// }


// ПРЕРЫВАНИЕ ЦИКЛА

// let i = 0
// while (true) {
//     let value = +prompt('Чилсо')
//     if (!value) break
//     i += value
// }
// console.log(i)

// ПЕРЕХОД К СЛЕДУЮЩЕЙ ИТЕРАЦИИ

// for (let i = 0; i <10; i++) {
//     if (i % 2 == 0) continue
//     console.log(i)
// }
// Сумма чисел на билете
// let  sum = 0
// for (let i = 1; i <=20;i++) {
//     sum += i
// }
// console.log(sum)

// вывод всех элементов в массиве
// const colors = ['Красный','Желтый','Синий']
// for (let i = 0; i < colors.length;i++) {
//     console.log(colors[i])
// }



// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// || - или
// && - и
// ! - НЕ



// МАССИВЫ

// пустой массив
// let arr = new Array()
// let arr = []

// let fru = ['Эрик','Кот','Ноутбук']
// console.log(fru[2])


// const users = [
//     {name: 'Erik', age: 25},
//     {name: 'Yota', age: 30},
//     {name: 'aLice', age: 12},
//     {name: 'Mark', age: 99},
//     {name: 'Adalinda', age: 123},
//     {name: 'Grim', age: 54},
//     {name: 'Alex', age: 34},
//     {name: 'Blade', age: 22},
//     {name: 'Strelok', age: 20},
    
// ]

// let count = 0
// const targetLetter = "A"
// for (let i = 0; i < users.length;i++) {
//     const firstLetter = users[i].name.charAt(0).toUpperCase()
//     if (firstLetter === targetLetter) {
//         count++;
//     }
// }
// console.log(count)




// Конструкция switch case

// let a = prompt('string')
// console.log(typeof(a))

// switch(a) {
//     case 3:
//         alert('Не угарадл, слишком мало');
//         break;
//     case 6:
//         alert('Все равно мало');
//         break;
//     case 8:
//         alert('Угадал');
//         break;
//     default:
//         alert('такого нет в игре')
// }


// let a = 10
// switch(a) {
//     case 4:
//         alert()
//         break
//     case 6:
//     case 8:
//         alert('error')
//         break
// }   



//     if (day == 1) {
//         return 'понедельник'
//     }else if (day ==2) {
//         return 'Вторник'
//     }else if (day ==3) {
//         return 'Среда'
//     }else if (day ==4) {
//         return 'Четверг'
//     }else if (day ==5) {
//         return 'Пятница'
//     }else if (day ==6) {
//         return 'Суббота'
//     }else if (day ==7) {
//         return 'Воскресенье'
//     }else {
//         return 'не коректное значение'
//     }

// switch (day) {
//     case 1:
//         return 'понедельник'
//     case 2:
//         return 'вторник'
//     case 3:
//         return 'Среда'
//     ...
//     default:
//         return 'Некоректное значение'
// }

// switch(action) {
//     case 'login':
//         // выполнит вход в систему
//         break
//     case 'logout':
//         //выйти из системы
//         break
//     case 'create':
//         //создание нового элемента
//         break
//     default:
//         //обрабатываем другие сценарии.
    
// }


// function имя(параметр) {
//     //Тело функции
// }
// имя()


// function showmMessage() {
//     alert('hello world')
// }
// showmMessage()

// let user = 'erik'
// function showmMessage() {
//     user = 'Masha'
//     let message = 'hello    ' + user
//     alert(message)
// }
// showmMessage()

// function showmMessage() {
//     let message = 'Hello'
//     alert(message)
// }
// showmMessage();

// function showmMessage(from, text){
//     alert(from + ': ' + text)
// }
// showmMessage('Erik', 'Когда отправите html/css работу на проверку?)')


// Задача 1 Функция проверки на четность.

// function isEven(num) {
//     return num % 2 ===0;
// }
// console.log(isEven(4))
// console.log(isEven(5))
// console.log(isEven(6))
// console.log(isEven(7))

// document.getElementById("myButton").addEventListener("click", function() {
//     document.getElementById("output").innerText = 'Hello World'
// });



// let button = document.getElementById("myButton")
// let output = document.getElementById("output")
// let isTextVisible = false


// button.addEventListener("click",
// function() {
//     if (isTextVisible) {
//         output.style.display ="none"
//         isTextVisible = false
//     }else {
//         output.innerText = "Hello world"
//         output.style.display = "block"
//         isTextVisible = true
//     }
// })

// let button = document.getElementById("myButton")
// let output = document.getElementById("output")

// button.addEventListener("click",
// function() {
//     if (output.style.display === "none" || output.innerText === "") {
//         output.innerText = "hello"
//         output.style.display = "block"
//     }else {
//         output.style.display = "none"
//     }
// })

