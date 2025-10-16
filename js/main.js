/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.*/

/* To Do List
	1.	GenerO e faccio visualizzare all'utente 5 numeri casuali da 1 a 100.
	2.	Avvio un timer di 30 secondi.
	3.	Allo scadere del tempo, nascondo i numeri e mostro 5 input all’utente.
	4.	Dopo che l’utente compila i 5 input e clicca su “Invia”:
	•	Confronto i numeri inseriti con quelli mostrati prima.
	•	Mostra quanti numeri ha indovinato e quali.
   Tools
    Math.random() + Math.floor()
    Array.push()
    Array.includes()
    document.getElementById()
    innerHTML
    createElement() + appendChild()
    setTimeout()
    parseInt()
    addEventListener("click", ...)
*/
console.log('It Works');

// Generate 5 random numbers
let generatedNumbers = [];

for (let i = 0; i < 5; i++) {
  let number = Math.floor(Math.random() * 100) + 1;
  generatedNumbers.push(number);
  //console.log(generatedNumbers);
  
}

// Show the numbers
document.getElementById("numbers").innerHTML = "Numeri: " + generatedNumbers.join(" - ");

// After 30 seconds, hide numbers and show inputs





    





