//KATA 1 (filtrar nombres de amigos que tengan 4 letras)

function friendName(name) {
    return name.length === 4;  // Verificamos si el nombre tiene exactamente 4 letras
}

function filterFriends(names) {
    return names.filter(friendName);  // Filtramos usando la función isFriend
}

// KATA 2 (Dada una cadena, escriba en mayúscula las letras que ocupan índices pares e índices impares por separado y regrese como se muestra a continuación)

function capitalize(string){
    let array = string.split('');
    let evenArray =[];
    let oddArray = [];
    
    for (let i = 0; i < array.length; i++){
      if ( i % 2 === 0){
        evenArray.push(array[i].toUpperCase());
        oddArray.push(array[i]);
      }
      else {
        evenArray.push(array[i]);
        oddArray.push(array[i].toUpperCase());
      }
    }
    return [evenArray.join(''), oddArray.join('')];
  };
  
  //KATA 3

  function calculate(string) {

    const lista = string.split(" ");
    let operador = " "
    let numeroOne = null;
    let numeroTwo = null;
    
    for (let i = 0; i < lista.length; i++){
      if(!isNaN(lista[i])){
        if(numeroOne === null) {
          numeroOne = Number(lista[i]);
          }else{
            numeroTwo = Number(lista[i]);
          }
        }
      lista[i] === 'loses' ? operador = lista[i] :
      lista [i] === 'gains' ? operador = lista[i] : null
     }
      if (operador === 'gains'){
        return numeroOne + numeroTwo;
      }else if (operador === 'loses'){
        return numeroOne -numeroTwo;
      }
    }
     calculate("Panda has 48 apples and loses 4")
    calculate("Jerry has 34 apples and gains 6")
  
    //KATA 4 ()

    function reverseSlice(str) {
        let cadenaInvertida = []; // Inicializa un array vacío para almacenar los resultados
        for (let i = str.length; i > 0; i--) { // Itera desde la longitud de la cadena hasta 1
            cadenaInvertida.push(str.slice(0, i).split('').reverse().join('')); // Añadir a la lista de forma invertida
        }
        return cadenaInvertida; // Devuelve el array de resultados
    }
    
    console.log(reverseSlice("123"));
    console.log(reverseSlice("abcde"))

    //KATA 5

    function solve(arr) {
        const abecedario = 'abcdefghijklmnopqrstuvwxyz'; 
      
        return arr.map(arr => {
          let count = 0;
          
          // Recorremos cada letra de la palabra y comprobamos su posición
          for (let i = 0; i < arr.length; i++) {
            const lowerChar = arr[i].toLowerCase(); // Convertimos a minúscula para comparar
            if (abecedario.indexOf(lowerChar) === i) { // Si la posición de la letra en el alfabeto coincide
              count++;
            }
          }
          
          return count; // Devolvemos el número de coincidencias para esta palabra
        });
      }


      //KATA 6


function closest(numeros) {
    if (numeros.length === 0) {
       return null; // Retorna null si la lista está vacía
   }

   let masCercano = numeros[0];
   let hayConflicto = false;

   for (let i = 1; i < numeros.length; i++) {
       let actual = numeros[i];

       // Si encuentro un cero, lo retorno
       if (actual === 0) {
           return 0;
       }

       // Verifico si el número actual está más cerca de cero que el que ya tengo
       if (Math.abs(actual) < Math.abs(masCercano)) {
           masCercano = actual;
           hayConflicto = false; // No hay conflicto, tenemos un único candidato
       } 
       // Si la distancia es igual, compruebo si los números son de signos opuestos
       else if (Math.abs(actual) === Math.abs(masCercano) && actual !== masCercano) {
           hayConflicto = true; // Hay conflicto entre un número positivo y negativo
       }
   }

   // Si hay conflicto, retornO null
   return hayConflicto ? null : masCercano;
}

// KATA 7 (crear una función que convierta un número entero dado como cadena en letras mayúsculas o espacios ASCII.)

function convert(number){

    let resultado = '';
    
    // Recorremos la cadena de dos en dos (cada par de dígitos corresponde a un valor ASCII)
    for (let i = 0; i < number.length; i += 2) {
        let codigoAscii = parseInt(number.substring(i, i + 2));
        
        // Convertimos el código ASCII a su carácter correspondiente
        if (codigoAscii >= 65 && codigoAscii <= 90) {
            // Solo convertimos a letras mayúsculas (A-Z) y espacio (ASCII 32)
            resultado += String.fromCharCode(codigoAscii);
        } else if (codigoAscii === 32) {
            resultado += ' ';
        }
    }
    
    return resultado;
  }


  //KATA 8 (CreAR una función que verifique si el primer argumento n es divisible por todos los demás argumentos (devuelve verdadero si no hay otros argumentos)

  function isDivisible(n) {
    // Si no hay otros argumentos, devuelve true
    if (arguments.length === 1) {
      return true;
    }
  
    // Recorre los argumentos a partir del segundo
    for (var i = 1; i < arguments.length; i++) {
      if (n % arguments[i] !== 0) {
        return false;
      }
    }
  
    return true;
  }

  // KATA 9 (Escribir la función sort_cards() que ordene una lista barajada de tarjetas, de modo que cualquier lista de tarjetas dada se ordene por rango, sin importar la colección inicial.)
  function sort_cards(cards) {
    //  orden de las cartas segun codewars
    var order = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    
    // Función para comparar dos cartas basadas en el orden
    function compararCards(card1, card2) {
        return order.indexOf(card1) - order.indexOf(card2);
      }
    
      // Ordenar las cartas usando la función de comparación
      return cards.sort(compararCards);
    }

    // kATA 10

    function sortGrades(lst) {
        // Determinar el orden de los grados
        var gradeOrder = {
            'VB': 0,
            'V0': 1, 'V0+': 2,
            'V1': 3, 'V2': 4, 'V3': 5, 'V4': 6, 'V5': 7, 'V6': 8, 'V7': 9,
            'V8': 10, 'V9': 11, 'V10': 12, 'V11': 13, 'V12': 14, 'V13': 15,
            'V14': 16, 'V15': 17, 'V16': 18, 'V17': 19
        };
    
        // Función de comparación para ordenar
        function compare_grades(a, b) {
            return gradeOrder[a] - gradeOrder[b];
        }
    
        // Ordenar la lista utilizando la función de comparación
        return lst.sort(compare_grades);
    
    }

    //KATA 11 (pelota rebotando)
    function bouncingBall(initial, proportion) { 
        let bouncing = 0; 
        // Mientras la altura sea mayor que 1, sigue contando rebotes 
        while (initial > 1) { initial *= proportion; bouncing++; } 
        return bouncing; }
        
        console.log(bouncingBall(4, 0.5));



        // kATA 12
        function isItLetter(character) {
            // Verifica si el carácter está entre 'a'-'z' o 'A'-'Z', se utiliza una expresión regular (/^[a-zA-Z]$/) para comprobar si el carácter ingresado es una letra, ya sea minúscula o mayúscula.
            return /^[a-zA-Z]$/.test(character); 
        }           
        
    

    