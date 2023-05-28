//1
let i = 0;
while(i <= 100) {
    console.log(i)
    i++;
}
//2
let i2 = 0;
do {
    if (i2 === 0) {
        console.log("0 - це нуль")
        i2++;
        continue;
    }
    if (i2 % 2 === 0)
        console.log(i2 + " - це парне число")
    else
        console.log(i2 + " - це непарне число")

    i2++;
} while (i2 <= 10)
//3
let numb = 10000;
let counter = 0;
let result = 0;
while (true) {
    counter++;

    if ((numb /= 2) < 50) {
        result = numb;
        break;
    }
}
console.log("Count is " + counter);
console.log("Result is " + result);
//4
let month = parseInt(prompt('Введіть число від 1 до 12:'));
let season, monthName;
switch (month) {
    case 1:
    case 2:
    case 12:
        season = 'зима';
        break;
    case 3:
    case 4:
    case 5:
        season = 'весна';
        break;
    case 6:
    case 7:
    case 8:
        season = 'літо';
        break;
    case 9:
    case 10:
    case 11:
        season = 'осінь';
        break;
    default:
        season = 'невідомо';
        break;
}
switch (month) {
    case 1:
        monthName = 'січень';
        break;
    case 2:
        monthName = 'лютий';
        break;
    case 3:
        monthName = 'березень';
        break;
    case 4:
        monthName = 'квітень';
        break;
    case 5:
        monthName = 'травень';
        break;
    case 6:
        monthName = 'червень';
        break;
    case 7:
        monthName = 'липень';
        break;
    case 8:
        monthName = 'серпень';
        break;
    case 9:
        monthName = 'вересень';
        break;
    case 10:
        monthName = 'жовтень';
        break;
    case 11:
        monthName = 'листопад';
        break;
    case 12:
        monthName = 'грудень';
        break;
    default:
        monthName = 'невідомо';
        break;
}
alert(`Пора року: ${season}\nНазва місяця: ${monthName}`);
//5
let temperatureCelsius = parseFloat(prompt('Введіть температуру в градусах Цельсія:'));
let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
alert(`Температура за Фаренгейтом: ${temperatureFahrenheit}°F`);
//6
let dayNumber = parseInt(prompt('Введіть число від 1 до 7:'));
let day;
switch (dayNumber) {
    case 1:
        day = 'понеділок';
        break;
    case 2:
        day = 'вівторок';
        break;
    case 3:
        day = 'середа';
        break;
    case 4:
        day = 'четвер';
        break;
    case 5:
        day = 'пятниця';
        break;
    case 6:
        day = 'субота';
        break;
    case 7:
        day = 'неділя';
        break;
    default:
        day = 'невідомо';
        break;
}
alert(`День тижня: ${day}`);