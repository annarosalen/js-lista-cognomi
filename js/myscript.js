// ESERCIZIO: Lista Cognomi

// Chiedere all’utente il cognome
var cognomeUtente = prompt("inserisci il tuo cognome");

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];
console.log(listaCognomi);

listaCognomi.push(cognomeUtente);

// stampa la lista ordinata alfabeticamente
listaCognomi.sort();

var stampaOrdinata = "";
var i = 0;
while (i < listaCognomi.length ) {

  stampaOrdinata = stampaOrdinata + "<li>" + listaCognomi[i] + "</li>";
  i++
}

document.getElementById('lista').innerHTML = stampaOrdinata;

// scrivi anche la posizione “umana” :cara_de_nerd: della lista in cui il nuovo utente si trova
console.log(listaCognomi.indexOf(cognomeUtente));
