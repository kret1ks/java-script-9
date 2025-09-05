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
    const words = split(" ");
    let longText = "";

    for(let i = 0; i < array.length; i += 1){
        if(words[i].length > longText.length){
            longText = words[i];
        }
    }
return longText
}


console.log(findLongestWord);
