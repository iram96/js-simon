/*Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// function randomNumber(min, max) {
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomNumber;
// }

// ! FUNCTIONS

let userAnswer;
const userNumbers = [];

const askTheNumbers = () => {
    for ( let i = 0; i < 5; i++){
        userAnswer = prompt('Quale numero ti ricordi?');
        console.log(userAnswer);
        userNumbers.push(userAnswer);
    }
};
// ! create a 5 random numbers array

const randomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
};

const computerNumbers = [];
console.log(typeof computerNumbers);

for ( let i = 0; i < 5; i++){
    computerNumbers.push( `${randomNumber(1,100)}`);
    console.log(computerNumbers);   
}

console.log(computerNumbers);

alert(`${computerNumbers}`);

// ! set timer before asking the numbers

const answerBlock = setTimeout (askTheNumbers(), 3000);
console.log(answerBlock);   

console.log(userNumbers);
