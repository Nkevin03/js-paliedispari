const frase = prompt('Inserisci una parola');

palindromo(frase);

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