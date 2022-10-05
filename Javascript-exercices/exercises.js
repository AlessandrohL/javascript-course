

/*
  Ejercicio 1:

  Programa una función que cuente el número de caracteres de una 
  cadena de texto, pe.miFuncion('Hola Mundo') devolvera 10.
*/

const lengthText = string => {
  return (typeof string === 'string') 
  ? string.length
  : 'Not a text string';
}
lengthText('Hello world');



/*
  Ejercicio 2:

  Programa una función que te devuelva el texto recortado según el
  número de caracteres indicados, pe.miFuncion('Hola Mundo', 4)
  devolvera 'hola'.
*/

const charIndicated = (string, end) => string.substring(0, end);

charIndicated('Hello world', 4);



/*
  Ejercicio 3:

  Programa una función que dada una String te devuelva un Array de 
  textos separados por cierto caracter, pe.miFuncion('Hola que tal', '')'
  devolverá ['hola', 'que', 'tal'].
*/

const separateString = (string, separator) => string.split(separator);

separateChains("Hi I'm Alessandro", ' ');


/*
  Ejercicio 4:  

  Programa una función que repita un texto X veces, pe.miFuncion(
  'Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repeatString = (string, repeat) => string.repeat(repeat);
stringRepeat('Hello world ', 3);


/*
  Ejercicio 5:

  Programa una función que invierta las palabras de una cadena 
  de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertedWords = (string = '') => {
  if (!string) {
    console.warn('Not a text string');
  } else {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }

    return newString;
  }
};

invertedWords('I like to code');



/*
  Ejercicio 6:

  Programa una función para contar el número de veces que se 
  repite una palabra en un texto largo, pe. miFuncion("hola mundo 
  adios mundo", "mundo") devolverá 2.
*/

const countWord = (string = "", word = "") => {
  if (!string) return console.warn('You did not enter the text to evaluate');
  if (!word) return console.warn('You did not enter the search word');

  let i = 0,
    counter = 0;

  while (i !== -1) {
    i = string.indexOf(word, i);
    if (i !== -1) {
      i++;
      counter++;
    }
  }
  return counter;
};

countWord('Hello world, goodbye world', 'world');



/*
  Ejercicio 7:

  Programa una función que valide si una palabra o frase dada, es 
  un palíndromo (que se lee igual en un sentido que en otro), 
  pe.mifuncion("Salas") devolverá true.
*/

const palindrome = (string = '') => {
  if (!string) return console.warn('You did not enter the text to evaluate');

  string = string.toLowerCase();
  let inReverse = string.split("").reverse().join("");

  return string === inReverse
    ? 'If it is a palindrome'
    : 'It is not a palindrome'
};

palindrome('Level');



/*
  Ejercicio 8: 

  Programa una función que elimine cierto patrón de caracteres de un
  texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
  devolverá  "1, 2, 3, 4 y 5.
*/

const deletePat = (string = "", pattern = "") => {
  if (!string) return "You did not enter the text to evaluate";
  if (!pattern) return "You did not enter the character(s) to delete";

  return string.replaceAll(pattern, "");
};

deletePat("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");


/*
  Ejercicio 9:

  Programa una función que obtenga un numero aleatorio entre 501
  y 600.
*/

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

random(501, 600);



/*
  Ejercicio 10:

  Programa una función que reciba un número y evalúe si es capicúa
  o no (que se lee igual en un sentido que en otro), 
  pe. miFuncion(2002) devolverá true.
*/

const capicua = (num = undefined) => {
  if (isNaN(num)) return "You did not enter a number to evaluate";

  let numString = String(num);
  let numReverse = numString.split("").reverse().join("");
  let ParseNum = Number.parseInt(numReverse);

  return (num === ParseNum)
  ? 'If capicuous'
  : 'Not capicuous'
};

capicua(2002);



/*
  Ejercicio 11:

  Programa una función que calcule el factorial de un número 
  (El factorial de un entero positivo n, se define como el 
  producto de todos los números enteros positivos desde 1 hasta n), 
  pe. miFuncion(5) devolverá 120.
*/

const factorial = (num) => {
  let total = 1;
  for (i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
};

factorial(5);