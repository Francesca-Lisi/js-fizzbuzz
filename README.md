FizzBuzz
===
Esercizio 14/11/2024
## Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per?

Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

## Svolgimento:
1. Ho individuato due variabili per i numeri multipli di 3 o 5 ed ho assegnato a ciascuna il valore in stringa richiesto dalla consegna.

2. Ho impostato il ciclo in modo che partisse da 1 e si ripetesse per 100 volte, incrementando di 1 ogni volta.

3. All'interno del ciclo ho inserito le istruzioni condizionali affinchè, attraverso moduli (%) e operatori logici (&&) potessi individuare i numeri che corrispondevano alle richieste della traccia, in modo da associarvi la variabile *output* che devono mostrare. 

4. Inserisco nel ciclo (dopo le istruzioni condizionali) il *console.log(output)* per stampare il risultato.
