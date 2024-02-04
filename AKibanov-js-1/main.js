// 1 задание - создание элемента h1 и вывод на страницу.
const header = document.createElement("h1");
const  headerText = document.createTextNode("Hello World!");
header.appendChild(headerText);
document.body.append(header);

// 2 задание - создать список ol и вывести его на страницу.
var employees = [
    { firstName: 'Иван', lastName: 'Петров' },
    { firstName: 'Петр', lastName: 'Кузнецов' },
    { firstName: 'Мария', lastName: 'Журавлева' },
    { firstName: 'Анна', lastName: 'Новикова' },
    { firstName: 'Сергей', lastName: 'Смирнов' },
    { firstName: 'Василий', lastName: 'Пупкин' }
];
var ol = document.createElement('ol');
for (var i = 0; i < employees.length; i++) {
    var Item = employees[i];
    var listItem = document.createElement('li');
    listItem.textContent = Item.firstName + ' ' + Item.lastName;
    ol.appendChild(listItem); }
document.body.appendChild(ol);

// 3 задание - создать красный контейнер с анимацией смены формы при нажатии.
var container = document.getElementById('container');
    container.addEventListener('click', function() {
        if (container.style.borderRadius === '50%') {
            container.style.width = '50px';
            container.style.height = '50px';
            container.style.borderRadius = '0';
        } else {
            container.style.width = '50px';
            container.style.height = '50px';
            container.style.borderRadius = '50%';
        }
    });

// 4 задание - создать калькулятор и выполнить примеры операций.
var calculator = {
    add: function (num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        } else {
            console.error('Пожалуйста, введите числа для сложения.');
        }
    },
    subtract: function (num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 - num2;
        } else {
            console.error('Пожалуйста, введите числа для вычитания.');
        }
    },
    multiply: function (num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 * num2;
        } else {
            console.error('Пожалуйста, введите числа для умножения.');
        }
    },
    divide: function (num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                console.error('Деление на ноль невозможно.');
            }
        } else {
            console.error('Пожалуйста, введите числа для деления.');
        }
    }
};
// Примеры вызова методов калькулятора
console.log('Сложение:', calculator.add(2, 2));
console.log('Сложение:', calculator.add(5, 4));
console.log('Вычитание:', calculator.subtract(16, 9));
console.log('Вычитание:', calculator.subtract(7, 13));
console.log('Умножение:', calculator.multiply(5, 2));
console.log('Умножение:', calculator.multiply(4, 3));
console.log('Деление:', calculator.divide(18, 3));
console.log('Деление:', calculator.divide(11, 2));
// Обработка пограничных случаев
console.log('Деление на ноль:', calculator.divide(14, 0));
console.log('Некорректный ввод:', calculator.add('abсd', 12));

// 5 задание - создать кнопку, которая будет сохранять текст в localStorage и выводить его в консоль.
var textInput = document.getElementById('textInput');
var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', function() {
    var inputValue = textInput.value;
    localStorage.setItem('Text', inputValue);
    setTimeout(function() {
        var storedText = localStorage.getItem('Text');
        console.log(storedText);
    }, 2000);
});