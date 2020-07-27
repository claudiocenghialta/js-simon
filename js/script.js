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


//genero 5 numeri casuali
var numeri = [];
var nuovoNumero;
while (numeri.length < 5) {
    nuovoNumero = (random(1, 100))
    if (trovaElemento(numeri, nuovoNumero) == false) {
        numeri.push(nuovoNumero);
    }
}
console.log('numeri generati: '+numeri);
var numeriUtente = [];
var numeriCorretti = [];
//mostro all'utente i nueri casuali che sono stati generati
alert('I numeri generati in automatico sono: '+numeri)

setTimeout(function() {

    //chiedo prompt e salvo in array
    while (numeriUtente.length<5) {
        var numeroUtente = parseInt(prompt('inserisci i numeri che ricordi'))
        while (isNaN(numeroUtente)==true||numeroUtente<1||numeroUtente>100||trovaElemento(numeriUtente,numeroUtente)==true){
            numeroUtente = parseInt(prompt('ATTENZIONE NUMERO NON VALIDO! inserisci i numeri che ricordi'))
        }
        numeriUtente.push(numeroUtente);
        //confronto il numero con quelli generati automaticamente,
        if (trovaElemento(numeri,numeroUtente)){
            // se corretto lo inserisco nell'apposito array
            numeriCorretti.push(numeroUtente);
        }
    }
    console.log('numeri utente: '+numeriUtente);
    console.log('numeri corretti: '+numeriCorretti);
    alert('RISULTATO: hai indovinato '+numeriCorretti.length+' numeri su 5. Questi sono i numeri che hai inserito correttamente: '+numeriCorretti);
}, 30000);




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
