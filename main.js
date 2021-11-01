// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const frase = prompt('Inserisci una parola')
palindromo(frase)
function palindromo() {
  let reverse = '';
  for(let i = frase.length - 1; i >= 0; i--){
    reverse = reverse + frase[i]
  }
  if(frase === reverse){
    document.getElementById('palindromo').innerHTML = `la parola inserita '${frase}' é palindroma`;
    console.log(`la parola inserita '${frase}' é palindroma`);
  }else{
    document.getElementById('palindromo').innerHTML = `la parola inserita '${frase}' non é palindroma`;
    console.log('La parola non é palindroma');
  }
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//scelte
const scelta = prompt('scegli pari o dispari');
const numero = parseInt(prompt('Inserisci un numero da 1 a 5'));

const somma = casuale() + numero;
const valore = events(somma);

// Condizioni
if (valore === scelta) {
    document.getElementById("risultato").innerHTML = "hai vinto";
    document.getElementById("somma").innerHTML = `La somma é di: ${somma}`;
} else{
    document.getElementById("risultato").innerHTML = "hai perso";
    document.getElementById("somma").innerHTML = `La somma é di: ${somma}`;
}

// Random
function casuale() {
    let num;
    num = Math.floor(Math.random() * 5) + 1;
    console.log(num)
    return num
}

// Somma
function events(somma){
    let risultato
    if(somma % 2 == 0){
        risultato = 'pari';
    }else{
        risultato = 'dispari';
    }
    return risultato
}