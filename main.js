/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */


//chiediamo all'utente il numero di km da percorrere
const trip_km = Number(prompt("Quanti KM vuoi percorrere in treno?"))
console.log(trip_km);

//chiediamo all'utente la sua età
const user_age = Number(prompt("Quanti anni hai?"))
console.log(user_age)

//calcoliamo la tariffa del viaggio
let trip_cost = trip_km * 0.21


//calcoliamo gli sconti in base all'età dell'utente
if (user_age < 18) {
    trip_cost = (trip_km * 0.21) * 0.80
} else if (user_age >= 65) {
    trip_cost = (trip_km * 0.21) * 0.60
} 

console.log(trip_cost.toFixed(2) + " €")