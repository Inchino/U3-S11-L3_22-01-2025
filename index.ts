// DOMANDA 1

let yearOfBirth: number = 2002;
let surname: string = "Incalza";
let isCorrect: boolean = true;
let empty: null = null;
let notAssigned: undefined = undefined;
let random: any = "hello";
let uncertain: unknown = "how are you";
// Come risultato di una funzione potremmo avere anche "never" e "void"

// DOMANDA 2

let name: string = "Alessandro";
let age: number = 22;
let isStuding: boolean = true;

// DOMANDA 3

const greet = (name: string) => {
  return "Ciao " + name;
};

// DOMANDA 4

const sum = (a: number, b: number): number => {
  return a + b;
};

// DOMANDA 5

const price = (firstPrice: number, IVA: number = 0.22): number => {
  return firstPrice + firstPrice * IVA;
};

// DOMANDA 6

function calcolaLunghezzaConcat(stringa1: string, stringa2: string): number {
  const concat = stringa1 + stringa2;
  return concat.length;
}

// DOMANDA 7

// La Type Union è uno strumento che permette di specificare l'utilizzo di più tipi da parte di una  variabile, un parametro o un valore restituito attraverso l'utilizzo del pipe "|"

let variabile: string | number;

// DOMANDA 8

const num: number | null | undefined;

// DOMANDA 9

type dayOfTheWeek =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

// DOMANDA 10

const numArr: number[] = [1, 2, 3];
const numArr: Array<number> = [1, 2, 3];

// DOMANDA 11

type myTupla = [string, string, string, number, number];

// DOMANDA 12

//"type" viene usato per definire "alias" di tipo, unioni, intersezioni e tuple, mentre "interface" è specifico per descrivere la struttura di oggetti e classi ed è estensibile tramite ereditarietà e dichiarazioni multiple.

// DOMANDA 13

interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

// DOMANDA 14

interface User {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  phoneNumber?: number;
}

// DOMANDA 15

interface Student {
  nome: string;
  voto: number;
}

const students: Student[] = [
  { nome: "Alessandro", voto: 28 },
  { nome: "Marco", voto: 30 },
  { nome: "Giulia", voto: 24 },
];

// DOMANDA 16

interface Vehicle {
  marca: string;
  modello: string;
  anno: number;
}

interface Car extends Vehicle {
  porte: number;
  carburante: "benzina" | "diesel" | "elettrico" | "ibrido";
}

// DOMANDA 17

const myCar: Car = {
  marca: "Opel",
  modello: "Astra",
  anno: 2006,
  porte: 5,
  carburante: "diesel",
};

// DOMANDA 18

// I Generics in TypeScript sono un meccanismo che consente di definire tipi riutilizzabili e flessibili, permettendo di specificare il tipo esatto da utilizzare al momento dell'uso, garantendo il controllo dei tipi senza perdere generalità.

// DOMANDA 19

// Si, è possibile

// DOMANDA 20

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}
