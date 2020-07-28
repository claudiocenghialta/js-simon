/*
Esercizio di oggi: Simons says
Cartella/Repo: js-simon
Un alert espone 5 numeri casuali.
Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, 
parte un timer di 30 secondi.
Dopo i 30 secondi l'utente deve inserire un prompt alla 
volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
quali dei numeri da indovinare sono stati individuati.
*/

//parametri del gioco
var rangeMin = 1;
var rangeMax = 100;
var numGiocate = 5;
var timer = 3 //secondi dopo i quali viene chiesto inserimento valori all'utente -- NB: valore espresso in secondi
var numeri = []; //numeri generati dal pc
var numeriUtente = []; //numeri inseriti dall'utente
var numeriCorretti = []; //numeri indovinati dall'utente

//genero 5 numeri casuali
while (numeri.length < numGiocate) {
    var nuovoNumero;
    nuovoNumero = (random(rangeMin, rangeMax))
    if (trovaElemento(numeri, nuovoNumero) == false) {
        numeri.push(nuovoNumero);
    }
}
console.log('numeri generati: '+numeri);
//mostro all'utente i nueri casuali che sono stati generati
alert('I numeri generati in automatico sono: '+numeri)

setTimeout(function() {

    
    while (numeriUtente.length<numGiocate) {
        //chiedo prompt all'utente
        var numeroUtente = parseInt(prompt('inserisci i numeri che ricordi'))
        //controllo i dati inseriti
        while (isNaN(numeroUtente)==true||numeroUtente<rangeMin||numeroUtente>rangeMax||trovaElemento(numeriUtente,numeroUtente)==true){
            numeroUtente = parseInt(prompt('ATTENZIONE NUMERO NON VALIDO! inserisci i numeri che ricordi'))
        }
        //inserisco nell'array dei numeri utente
        numeriUtente.push(numeroUtente);
        //confronto il numero con quelli generati automaticamente,
        if (trovaElemento(numeri,numeroUtente)){
            // se corretto inserisco nell'array dei numeri corretti
            numeriCorretti.push(numeroUtente);
        }
    }
    console.log('numeri utente: '+numeriUtente);
    console.log('numeri corretti: '+numeriCorretti);
    alert('RISULTATO: hai indovinato '+numeriCorretti.length+' numeri su 5. Questi sono i numeri che hai inserito correttamente: '+numeriCorretti);
}, (timer*1000));




////////// FUNZIONI ///////////////////////////////////

//funzione numero random
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

//funzione trova duplicati
function trovaElemento(lista, elemento) {
    var i = 0;
    while (i < lista.length) {
        if (elemento == lista[i]) {
            return true; //restituisce true se trova l'elemento
        }
        i++;
    }
    return false; //restituisce true se NON trova l'elemento
}


//funzione countdown
function countdown (timer){
    console.log('timer:'+timer);
    if (timer==0) {
        clearInterval(clock)
        
    }
    timer--;
}
