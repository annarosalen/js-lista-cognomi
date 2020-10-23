// ESERCIZIO: Lista Cognomi

// Chiedere all’utente il cognome
var cognomeUtente = prompt("inserisci il tuo cognome");

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];
console.log("lista iniziale", listaCognomi);

listaCognomi.push(cognomeUtente);
console.log("lista push", listaCognomi);

// stampa la lista ordinata alfabeticamente
listaCognomi.sort();
console.log("lista ordinata", listaCognomi);

var stampaOrdinata = "";
var i = 0;
while (i < listaCognomi.length ) {

  stampaOrdinata = stampaOrdinata + "<li>" + listaCognomi[i] + "</li>";
  i++
}

document.getElementById('lista').innerHTML = stampaOrdinata;

// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova
var numb = listaCognomi.indexOf(cognomeUtente);
console.log("posizione", ++numb);

document.getElementById("numero").innerHTML = "il tuo cognome si trova alla posizione n° " + ++numb;
