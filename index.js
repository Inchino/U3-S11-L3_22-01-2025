// DOMANDA 1
var yearOfBirth = 2002;
var surname = "Incalza";
var isCorrect = true;
var empty = null;
var notAssigned = undefined;
var random = "hello";
var uncertain = "how are you";
// Come risultato di una funzione potremmo avere anche "never" e "void"
// DOMANDA 2
var name = "Alessandro";
var age = 22;
var isStuding = true;
// DOMANDA 3
var greet = function (name) {
    return "Ciao " + name;
};
// DOMANDA 4
var sum = function (a, b) {
    return a + b;
};
// DOMANDA 5
var price = function (firstPrice, IVA) {
    if (IVA === void 0) { IVA = 0.22; }
    return firstPrice + firstPrice * IVA;
};
// DOMANDA 6
function calcolaLunghezzaConcat(stringa1, stringa2) {
    var concat = stringa1 + stringa2;
    return concat.length;
}
// DOMANDA 7
// La Type Union è uno strumento che permette di specificare l'utilizzo di più tipi da parte di una  variabile, un parametro o un valore restituito attraverso l'utilizzo del pipe "|"
var variabile;
// DOMANDA 8
var num;
// DOMANDA 10
var numArr = [1, 2, 3];
var numArr = [1, 2, 3];
var students = [
    { nome: "Alessandro", voto: 28 },
    { nome: "Marco", voto: 30 },
    { nome: "Giulia", voto: 24 },
];
// DOMANDA 17
var myCar = {
    marca: "Opel",
    modello: "Astra",
    anno: 2006,
    porte: 5,
    carburante: "diesel",
};
