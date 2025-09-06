logItems(['Mango', 'Poly', 'Ajax']);


function logItems(array){
    for(let i = 0; i < array.length; i += 1){
        console.log(`${i + 1}  ${array[i]}`);
    }
}

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord){

const word = message.split("");
const wordCount = message.length;
return wordCount * pricePerWord
}

console.log(calculateEngravingPrice("круто", 2));





// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.


function findLongestWord(string){
    const words = string.split(" ");
    let longText = "";

    for(let i = 0; i < words.length; i += 1){
        if(words[i].length > longText.length){
            longText = words[i];
        }
    }
return longText
}


console.log(findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellat nemo? Quo reprehenderit delectus accusamus iste sint itaque sequi ipsam rerum ipsa rem. Nisi natus iusto pariatur itaque asperiores non.")); 




// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.



function formatString(string){
if (string.length <= 40){
    return string;
} else {
    return string.slice(0, 40) + "..."
}
}
console.log(formatString("короткий рядок до 40 символів"));
console.log(formatString("це довгий рядок який поміщає в собі більше ніж 40 символів"));



// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.


function checkForSpam(message){
    const lowerCase = message.toLowerCase();

    return lowerCase.includes("spam") || lowerCase.includes("sale");
}

console.log("1-", checkForSpam("Купуй зараз найкращі ціни"));
console.log("2-", checkForSpam("в розетки ювілей 20 років"));
console.log("3-", checkForSpam("обережно Spam повідомлення"));
console.log("4-", checkForSpam("найкращі sale в всьому Львові"));




// Напиши скрипт з наступним функціоналом:



// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.


// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.



let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число, натисніть Cancel при завершенні:");

    if (input === null) {
        break;
    }

    const number = Number(input);

    if (Number.isNaN(number)) {
        alert("Було введено не число, введіть ще раз.");
        continue;
    }

    numbers.push(number);
}

if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній.");
}
   