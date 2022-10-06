/*
  Ejercicio 1:

  Programa una función que cuente el número de caracteres de una 
  cadena de texto, pe.miFuncion('Hola Mundo') devolvera 10.
*/

const lengthText = (string) => {
  return typeof string === "string" ? string.length : "Not a text string";
};
lengthText("Hello world");

/*
  Ejercicio 2:

  Programa una función que te devuelva el texto recortado según el
  número de caracteres indicados, pe.miFuncion('Hola Mundo', 4)
  devolvera 'hola'.
*/

const charIndicated = (string, end) => string.substring(0, end);

charIndicated("Hello world", 4);

/*
  Ejercicio 3:

  Programa una función que dada una String te devuelva un Array de 
  textos separados por cierto caracter, pe.miFuncion('Hola que tal', '')'
  devolverá ['hola', 'que', 'tal'].
*/

const separateString = (string, separator) => string.split(separator);

separateChains("Hi I'm Alessandro", " ");

/*
  Ejercicio 4:  

  Programa una función que repita un texto X veces, pe.miFuncion(
  'Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repeatString = (string, repeat) => string.repeat(repeat);
stringRepeat("Hello world ", 3);

/*
  Ejercicio 5:

  Programa una función que invierta las palabras de una cadena 
  de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertedWords = (string = "") => {
  if (!string) {
    console.warn("Not a text string");
  } else {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }

    return newString;
  }
};

invertedWords("I like to code");

/*
  Ejercicio 6:

  Programa una función para contar el número de veces que se 
  repite una palabra en un texto largo, pe. miFuncion("hola mundo 
  adios mundo", "mundo") devolverá 2.
*/

const countWord = (string = "", word = "") => {
  if (!string) return console.warn("You did not enter the text to evaluate");
  if (!word) return console.warn("You did not enter the search word");

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

countWord("Hello world, goodbye world", "world");

/*
  Ejercicio 7:

  Programa una función que valide si una palabra o frase dada, es 
  un palíndromo (que se lee igual en un sentido que en otro), 
  pe.mifuncion("Salas") devolverá true.
*/

const palindrome = (string = "") => {
  if (!string) return console.warn("You did not enter the text to evaluate");

  string = string.toLowerCase();
  let inReverse = string.split("").reverse().join("");

  return string === inReverse
    ? "If it is a palindrome"
    : "It is not a palindrome";
};

palindrome("Level");

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

  return num === ParseNum ? "If capicuous" : "Not capicuous";
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

/*
  Ejercicio 12:

  Programa una función que determine si un número es primo 
  (aquel que solo es divisible por sí mismo y 1) o no, pe. 
  miFuncion(7) devolverá true.
*/

const primeNumber = (num = undefined) => {
  if (num === undefined) return "You did not enter a number";

  if (typeof num !== "number")
    return `El valor '${num}'
  no es un número`;

  if (num === 0 || Math.sign(num) === -1 || num === 1) {
    return "The number cannot be 0, 1 or negative.";
  }

  let divisible = false;

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? `The number ${num}, is not prime.`
    : `The number ${num}, is prime.`;
};

primeNumber(7);

/*
  Ejercicio 13:

  Programa una función que determine si un número es par 
  o impar, pe. miFuncion(29) devolverá Impar.
*/

const oddEven = (num) => {
  if (num % 2 === 0) {
    return `The number ${num} is even`;
  } else {
    return `The number ${num} is odd`;
  }
};

oddEven(2);

/*
  Ejercicio 14:

  Programa una función para convertir grados Celsius a Fahrenheit 
  y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const grados = (grade, escale = "") => {
  if (isNaN(grade)) return "You did not enter a number to evaluate";

  if (!escale) return "You did not enter the scale to convert";

  if (escale === "C" || escale === "c" || escale === "F" || escale === "f") {
    let celToFahrenheit = grade * 1.8 + 32;
    let fahToCelsius = (grade - 32) / 1.8;

    if (escale === "C" || escale === "c") {
      return `The ${grade}º${scale} is ${celToFahrenheit}ºF`;
    } else {
      return `The ${grade}º${scale} is ${fahToCelsius}ºC`;
    }
  } else {
    return "You did not enter a valid temperature scale to convert.";
  }
};

grados(32, "C");

/*
  Ejercicio 15:

  Programa una función para convertir números de base binaria a 
  decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

const convertBinary = (binarieOrDec = 0, base = 0) => {
  if (isNaN(binarieOrDec) || isNaN(base)) {
    return `You did not enter a number to evaluate`;
  }

  if (base === 2) {

    let binaryToString = String(binarieOrDec).split("").reverse();
    let decimal = 0;

    for (i = 0; i < binaryToString.length; i++) {
      decimal = decimal + parseInt(binaryToString.at(i)) * 2 ** i;
    }
    return `The binary entered is ${decimal} in decimal, with base ${base}`;

  } else if (base === 10) {

    let bits = [128, 64, 32, 16, 8, 4, 2, 1];
    let binary = "";

    for (i = 0; i < bits.length; i++) {
      if (binarieOrDec >= bits[i]) {
        binarieOrDec = binarieOrDec - bits[i];
        binary = binary + "1";
      } else {
        binary = binary + "0";
      }
    }
    return `The decimal entered is ${binary} in binary, with base ${base}`;
  } else {
    return `The base '${base}' is not a decimal or binary base`
  }
};

convertBinary(100, 2);

/*
  Ejercicio 16:

  Programa una función que devuelva el monto final después de aplicar 
  un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const discountSalary = (salary = undefined, discount = undefined) => {
  if (salary === 0 || discount === 0) 
    return  'The deposited salary cannot be discounted';
  if (typeof salary !== "number")
    return 'The salary earned is not a number'
  if (typeof discount !== "number")
    return 'The discount entered is not a number';

  let discountSalary = (discount / 100) * salary;
  let finalMount = salary - discountSalary;

  return `Your final amount is ${finalMount}`;
};

discountSalary(1000, 20);

/*
  Ejercicio 17:

  Programa una función que dada una fecha válida determine cuantos 
  años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
  devolverá 35 años (en 2020).
*/

const getYearDate = (date) => {
  date = date.getFullYear();

  currentDate = new Date();
  currentDate = currentDate.getFullYear();

  let yearDiff = currentDate - date - 1;
  return `It has been ${yearDiff} years`;
};

getYearDate(new Date(1984, 4, 23));

/*
  Ejercicio 18:

  Programa una función que dada una cadena de texto cuente el número de 
  vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, 
  Consonantes: 5.
*/

const vocalsCons = (string) => {
  const vocals = /[aeiou]/i;
  const consonants = /[bcdfghjklmnñpqrstvwxyz]/i;
  let totalVocals = 0;
  let totalConson = 0;

  for (i = 0; i < string.length; i++) {
    if (vocals.test(string[i]) === true) totalVocals++;
    if (consonants.test(string[i]) === true) totalConson++;
  }
  return {
    totalVocals,
    totalConson,
  };
};

vocalsCons("Universidad Alas Peruanas");

/*
  Ejercicio 19: 

  Programa una función que valide que un texto sea un nombre válido, 
  pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const validateName = (name) => {
  const regexp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regexp.test(name);
};

validateName("Jonathan MirCha");

/*
  Ejercicio 20: 

  Programa una función que valide que un texto sea un email válido, 
  pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const validateEmail = (email) => {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexp.test(email);
};

console.log(validateEmail("random@gmail.com"));

/*
  Ejercicio 21:

  Programa una función que dado un array numérico devuelve otro array 
  con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) 
  devolverá [1, 16, 25].
*/

const numbersElevated = (arreglo) => {
  let newNumbers = [];

  for (i = 0; i < arreglo.length; i++) {
    newNumbers.push(arreglo[i] ** 2);
  }
  return newNumbers;
};

numbersElevated([1, 4, 5]);


/*
  Ejercicio 22:

  Programa una función que dado un array devuelva el número mas alto 
  y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) 
  devolverá [99, -60].
*/

const MaxMin = (array) => {
  let newArray = [];
  newArray.push(Math.max(...array), Math.min(...array));

  return newArray;
};

MaxMin([1, 4, 5, 99, -60]);



/*
  Ejercicio 23:

  Programa una función que dado un array de números devuelva un objeto
  con 2 arreglos en el primero almacena los números pares y en el 
  segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá 
  {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const arrayPares = (array) => {
  const objeto = {
    pares: [],
    impares: [],
  };

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      objeto.pares.push(array[i]);
    } else {
      objeto.impares.push(array[i]);
    }
  }

  return objeto;
};

arrayPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/*
  Ejercicio 24:

  Programa una función que dado un arreglo de números devuelva un 
  objeto con dos arreglos, el primero tendrá los numeros ordenados 
  en forma ascendente y el segundo de forma descendiente, 
  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], 
  desc: [8,7,7,6,5] }.
*/

const order = (array) => {
  let ascending = structuredClone(array).sort((a, b) => a - b);
  let descending = structuredClone(ascending).reverse();

  const objeto = {
    ascending,
    descending,
  };

  return objeto;
};

order([7, 5, 7, 8, 6]);

/*
  Ejercicio 25:

  Programa una función que dado un arreglo de elementos, elimine 
  los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
  devolverá ["x", 10, 2, "10", true].
*/

const duplicate = (array) => {
  const result = [];

  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

duplicate(["x", 10, "x", 2, "10", 10, true, true]);

/*
  Ejercicio 26:

  Programa una función que dado un arreglo de números obtenga el 
  promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (array) => {
  let result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  result = result / array.length;

  return result;
};

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

/*
  Ejercicio 27:

  Programa una clase llamada Pelicula.

  La clase recibirá un objeto al momento de instanciarse con los siguentes 
  datos: id de la película en IMDB, titulo, director, año de estreno, 
  país o países de origen, géneros y calificación en IMBD.

    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean 
      letras y los 
      7 restantes números. [1]

    - Valida que el título no rebase los 100 caracteres. [2]

    - Valida que el director no rebase los 50 caracteres. [3]

    - Valida que el año de estreno sea un número entero de 4 dígitos. [4]

    - Valida que el país o paises sea introducidos en forma de arreglo. [5]

    - Valida que los géneros sean introducidos en forma de arreglo. [6]

    - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*. [7]

    - Crea un método estático que devuelva los géneros aceptados*. [8]

    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición. [9]

    - Crea un método que devuelva toda la ficha técnica de la película. [10]

    - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha 
      técnica de cada película. [11]

  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
  * Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, 
  * Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 
  * Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificación }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificación = calificación;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificación);

    Pelicula.generosAceptados();
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  // Valida si el valor ingresado no es una cadena.
  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "string")
      return console.error(`${propiedad} "${valor}" ingresado, NO
    es una cadena de texto`);

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

    if (typeof valor !== "number")
      return console.error(`${propiedad} "${valor}" ingresado, NO
    es un número`);

    return true;
  }

  // Valida la longitud de la cadena.
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(`${propiedad} "${valor}" excede el número
    de caracteres premitidos (${longitud})`);

    return true;
  }

  // Valida el arreglo
  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vació`);

    if (!(valor instanceof Array))
      return console.error(`${propiedad} "${valor}" ingresado, NO es
    un arreglo`);

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.warn(`El valor "${cadena}" ingresado, NO es
      una cadena de texto`);
    }

    return true;
  }

  // Valida el Id. [1]
  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.warn(`IMDB "${id}" no es valido, debe tener 9 caracteres, los 2 primeros
        letras minúsculas, los 7 restantes números.`);
      }
    }
  }

  // Valida el titulo. [2]
  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  // Valida el director. [3]
  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  // Valida el año de estreno. [4]
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(`El año de estreno "${estreno}" no es valido, debe ser un número de
        4 digitos`);
      }
    }
  }

  // Valida el pais. [5]
  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  // Valida los generos [6]
  validarGeneros(generos) {
    if (this.validarArreglo("Genéros", generos)) {
      for (let iterator of generos) {
        // console.log(iterator, Pelicula.listaGeneros.includes(iterator));
        if (!Pelicula.listaGeneros.includes(iterator)) {
          console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
        }
      }
    }
  }

  validarCalificacion(calificación) {
    if (this.validarNumero("Calificación", calificación)) {
      return calificación < 0 || calificación > 10
        ? console.error(
            "La calificación tiene que estar en un rango entre 0 y 10"
          )
        : (this.calificación = calificación.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info(
      `Titulo: "${this.titulo}"\nDirector: "${this.director}"\nAño de Estreno: ${this.estreno}\nPaís de Origen: ${this.pais}\nGeneros: ${this.generos}\nCalificación: ${this.calificación}\nIMDb Id: ${this.id}`
    );
  }
}

const peli = new Pelicula({
  id: "tt1028532",
  titulo: "Siempre a tu lado",
  director: "Lasse Hallstrom",
  estreno: 2009,
  pais: ["EE.UU"],
  generos: ["Biography", "Drama", "Family"],
  calificación: 8.1,
});

peli.fichaTecnica();
