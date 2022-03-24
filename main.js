/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


//chiediamo all'utente il numero di km da percorrere
const trip_km = Number(prompt("Quanti KM vuoi percorrere in treno?"))
console.log(trip_km);

if (isNaN(trip_km)) {
    alert("Per favore inserisci un valore numerico per indicare la distanca che vuoi percorrere in treno!")
}

//chiediamo all'utente la sua età
const user_age = Number(prompt("Quanti anni hai?"))
console.log(user_age)

if (user_age < 1) {
    alert("Per favore inserisci un valore numerico compreso tra 1 e 120!")
} else if (user_age > 120) {
    alert("Per favore inserisci un valore numerico compreso tra 1 e 120!")
} else if (isNaN(user_age)) {
    alert("Per favore inserisci un valore numerico compreso tra 1 e 120!")
}


//calcoliamo la tariffa del viaggio
let trip_cost = trip_km * 0.21


//calcoliamo gli sconti in base all'età dell'utente
if (user_age < 18) {
    trip_cost = (trip_km * 0.21) * 0.80
    document.getElementById("discount").innerHTML = "Sei minorenne! Abbiamo aggiunto per te uno sconto del 20%!"
} else if (user_age >= 65) {
    document.getElementById("discount").innerHTML = "Sei over 65! Abbiamo aggiunto per te uno sconto del 40%!"
    trip_cost = (trip_km * 0.21) * 0.60
} 

console.log(trip_cost.toFixed(2) + " €")

//stampiamo il risultato all'utente
document.getElementById("cost").innerHTML = "Ecco il tuo preventivo per il viaggio: " + trip_cost.toFixed(2) + " €"

//bonus - avvisiamo l'utente se ha ricevuto uno sconto


