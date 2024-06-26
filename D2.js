/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log(
  "Esercizio 1: Scrivi un algoritmo per trovare il più grande tra due numeri interi."
);
const int = 20;
console.log(int, "è il primo valore scelto");
const int1 = 18;
console.log(int1, "è il secondo valore scelto");

if (int > int1) {
  console.log(int, "è il più grande");
} else {
  console.log(int1, "è più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log(
  "Esercizio 2 - Scrivi un algoritmo che mostri -not equal- console se un numero intero fornito è diverso da 5."
);
const int3 = 15;
console.log(int3, "è il valore scelto");
if (int3 > 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
console.log(
  "Esercizio3 -  Scrivi un algoritmo che mostri - divisibile per 5- in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)"
);
const num1 = 25;
const num2 = 34;
console.log(num1, "è il valore scelto");

if (num1 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log(
  "ESERCIZIO 4 Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8."
);
const num3 = 38;
const num4 = 68;

if (num3 + num4 === 8) {
  console.log("la somma dei due numeri è otto");
} else if (num3 - num4 === 8 || num4 - num3) {
  console.log("la sottrazione di uno dei numeri è otto");
} else if (num3 === 8 || num4 === 8) {
  console.log("uno dei numeri è ugale a otto");
} else {
}
Math.abs;
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log(
  "ESERCIZIO 5 Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile (totalShoppingCart).C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout."
);
console.log("esempio1");
let totalShoppingCart = 65;
console.log("TOTALE CARRELLO €", totalShoppingCart);

if (totalShoppingCart > 50) {
  console.log(
    "COMPLIMENTI solo per oggi la spedizione è gratuita con una spesa minina di €50,00"
  );
} else if (totalShoppingCart < 50) {
  console.log(
    "il costo delle spedizione di € 10,00 saranno aggiunti al tuo carrello"
  );
}
console.log("esempio 2");
totalShoppingCart = 25;
console.log("TOTALE CARRELLO €", totalShoppingCart);
if (totalShoppingCart > 50) {
  console.log(
    "COMPLIMENTI solo per oggi la spedizione è gratuita con una spesa minina di €50,00"
  );
}
if (totalShoppingCart > 50) {
  console.log(
    "COMPLIMENTI solo per oggi la spedizione è gratuita con una spesa minina di €50,00"
  );
} else if (totalShoppingCart < 50) {
  console.log(
    "il costo delle spedizione di € 10,00 saranno aggiunti al tuo carrello"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log(
  "ESERCIZIO 6 Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto. Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale."
);
console.log("esempio1");
totalShoppingCart = 65;
const sconto = 20;
console.log("TOTALE CARRELLO €", totalShoppingCart);
console.log("Sconto Black Fiday", sconto, "%");

if (((totalShoppingCart / sconto) * 0, 8) < 50) {
  console.log(
    "COMPLIMENTI solo per oggi la spedizione è gratuita con una spesa minina di €50,00"
  );
}
if (((totalShoppingCart / sconto) * 0, 8) > 50) {
  console.log(
    "il costo delle spedizione di € 10,00 saranno aggiunti al tuo carrello"
  );
}
console.log("esempio 2");
totalShoppingCart = 25;
console.log("TOTALE CARRELLO €", totalShoppingCart);
console.log("Sconto Black Fiday", sconto, "%");

if (((totalShoppingCart / sconto) * 0, 8) > 50) {
  console.log(
    "COMPLIMENTI solo per oggi la spedizione è gratuita con una spesa minina di €50,00"
  );
} else if (((totalShoppingCart / sconto) * 0, 8) < 50) {
  console.log(
    "il costo delle spedizione di € 10,00 saranno aggiunti al tuo carrello"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const valNnumerico1 = 8;
const valNnumerico2 = 9;
const valNnumerico3 = 84;

if (valNnumerico1 >= valNnumerico2) {
  console.log(valNnumerico3, valNnumerico2, valNnumerico1);
} else if (valNnumerico1 >= valNnumerico3) {
  console.log(valNnumerico2, valNnumerico1);
} else if (valNnumerico3 >= valNnumerico1) {
  console.log(valNnumerico3, valNnumerico2, valNnumerico1);
} else {
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
