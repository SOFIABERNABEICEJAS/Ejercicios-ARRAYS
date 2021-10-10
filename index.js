
//ARRAY

//EJERCICIO DE CLASE//

// const hayMayorA18 = (array) => {
//   let hayMayoresDe18 = false // variable bandera o "flag" o "javascript, levanta la mano"

//    for (let index = 0; index < array.length; index++) {
//      if (array[index] > 18) {
//       hayMayoresDe18 = true
//      }  
//    }
   
//    return hayMayoresDe18
// }

// const edades = [5, 88, 3] // TRUE 


// const numeros = [22, 33, 1, 99]
// const menores = [2, 4, 6, 1, 3, 1]

// console.log(mayoresA18(edades))

// console.log(mayoresA18(numeros))


//   1) -Definí una función obtenerMenor que tome por parámetro 
// un array de números numeros y devuelva el menor de ellos. 
// jemplo:


// const obtenerMenor = (numeros) => {
//     let resultado = numeros[0]
//     for (let i = 0; i < numeros.length; i++) {
//         if(numeros[i]< resultado){
//             resultado = numeros[i]
//             console.log(resultado)
//           }  
//     }
     
//  return resultado
    
// }


//  obtenerMenor([5, 7, 99, 34, 54, 2, 12])


//  2)-   Definí una función sumar que reciba como argumento un
//  array de números numeros y devuelva la suma de ellos. 


// const sumar = (numeros) => {
//   let resultado= 0
//   for(let i = 0; i < numeros.length; i++){
//   resultado = resultado + numeros[i]
          
//       }
//       return resultado
      
//     }
  
//  sumar([5, 7, 10, 12, 24])
 

 //58

//  3)-  Definí una función contiene que reciba como argumentos un 
//  número numero y un array de números numeros y devuelva si el 
//  número se encuentra en dicho array.

// const contiene = (numero, numeros) => {
//   let resultado = false
//   for(let i = 0; i<numeros.length; i++){
//      if(numero === numeros[i])
//        resultado=true
    
//   }
//    return resultado
 
//  }


// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])
//true
 //contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
//false




// 4)   Definí una función invertirCaso que tome por parámetro un
//  string string y devuelva un string donde cada letra tiene el caso 
//  invertido, es decir, cada letra está mayúscula si estaba en 
//  minúscula, y viceversa.


// const invertirCaso = (string) => {
//   let array=[]

//   puedo recorrer string como si fueran arrays con un for 

//   for(let i=0; i < string.length; i++){
//     let letra = string[i]
//     if(letra.toUpperCase()=== letra){  si la letra es mayuscula
//       array.push(letra.toLowerCase())
//     }
//     else{
//       array.push(letra.toUpperCase())
//     } 
//   }
//   let resultado= array.join("")      para retorna un string
//   return resultado
// }

// invertirCaso('Ada Lovelace') 
// 'aDA lOVELACE'
// invertirCaso('feliz cumple') 
// 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT')
// 'JaVaScRiPt'



// 5)-  Definí una función gano que reciba como argumento un array
//  tragamonedas  con 5 símbolos y nos indique si son iguales. Si el
//   array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.
   

//   const gano = (tragamonedas) => {
//     let resultad = true
//     for(let i=0;i<5; i++){
//       if(tragamonedas[0] !== tragamonedas[i]){
//         resultado= false
//       }
      
//     }
//     return resultado
//   }



// gano(['⭐ '⭐️', '⭐️', '💫', '✨']) // 
// false
// gano(['💫', '💫', '💫', '💫', '💫']) 
// true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) 
// true




// 6)    Definí una función estanJuntos que reciba como argumento un 
// array de strings personajes, y devuelva si Sam se encuentra al 
// lado de Frodo, puede encontrarse antes o después.


// const estanJuntos = (personajes) => {
//   let resultadoFinal= false
//   for (let i = 0; i < personajes.length; i++) {
    
//     if(personajes[i] === "Sam" && personajes[i+1] === "Frodo" || "Frodo" === personajes[i] && "Sam" ===  personajes[i +1]){
//       resultadoFinal = true
    
//     }

// }

//  return resultadoFinal
// }





// estanJuntos(['Sam', 'Frodo', 'Legolas','sofia','dulce','nico','mario']) 
// true
// estanJuntos(['Aragorn', 'Frodo', 'Sam']) 
// true
// estanJuntos(['Sam', 'Orco', 'Frodo']) 
// false



// 7)-   Definí una función separar que tome por parámetro un string 
// con emojis de perros y gatos y devuelva un string con los perros 
// agrupados por un lado y los gatos por otro.


// const separar = (string) => {
//   let resultado =[]
//  for (let i = 0; i < string.length; i++) {
//   console.log(string[i])
//     if(string[i] === "p"){
//       resultado.push(string[i])
//     }
//     else{
//       resultado.unshift(string[i])
//     }
  
//   }
//   let resultadoFinal= resultado.join("")
// console.log(resultado)

// }


// separar('pgpggpp') 
// // separar('🐶🐱🐶🐱🐱🐶🐶') 
// // '🐶🐶🐶🐶🐱🐱🐱'

// 8)-      Definí una función obtenerChatStatus que reciba como argumento un array de 
// strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
//  obtenerChatStatus(['Ada'])
// 'Ada está conectada'
//  obtenerChatStatus(['Ada', 'Grace'])
// 'Ada y Grace están conectadas'
//  obtenerChatStatus(['Ada', 'Grace', 'Marie'])
// 'Ada, Grace y 1 persona(s) más están conectadas'



//  9)-   Definí una función germinar que tome por parámetro un string de plantines con
//  flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver 
//  un string con los plantines convertidos en flores. El plantín se debe convertir en la
//   primera flor que encuentre a su izquierda. Ejemplo:


// const germinar = (plantines) => {
//   let resultado = [plantines[0]]
//   for (let i = 0; i < plantines.length; i++) {
//     if( `B`===plantines[i])
//        resultado.push(plantines[i-1])
//       //  console.log(resultado)
//        console.log(plantines[i-1])    
//   }
// no me sale
// }
   


// germinar(`RBMBFBRBM`)
// (RRMMFFRRM)

//  germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')
// '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
//  germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱')
// '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
//  germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱')
// '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'




// 10)     Definí una función comer que reciba como argumento un string que 
// consista en plantas, un conejo y una señal de prohibido. El conejo se come
//  todas las plantas que hay a su derecha, hasta que se encuentra con la señal
//   de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas
//    las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// comer('🐰🥕🥬🥕🚫') 
// ''
// comer('🥕🥬🐰🥕🥕🥕🚫')
// '🥕🥬'
// comer('🐰🥕🥬🥕🚫🥕') 
// '🥕'
// comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷')
// '🌱🥕🌱🌷'




// 11)-Definí una función multiplicar que reciba como argumentos un 
// número multiplicador y un array de números numeros, y que devuelva 
// un array donde cada elemento es el resultado del elemento del primer
//  array (en la misma posición) multiplicado por el número ingresado. Ejemplo:


// const multiplicar = (multiplicador, numeros) => {
//   let resultado = []
//   for (let i = 0; i < numeros.length; i++) {
//     let multiplicado = numeros[i] * multiplicador
//      resultado.push(multiplicado)
//   }

    
//   return resultado
// }


// multiplicar(2, [5, 7, 15, 22, 40])
// [10, 14, 30, 44, 80]
// multiplicar(10, [2, 5, 77])
// [20, 50, 770]




// 12)- Definí una función filtrarPorLongitud que tome por parámetro
//  un número longitud y un array de strings palabras y que devuelva 
//  un array con las palabras que tengan una cantidad de letras mayor 
//  a longitud. Ejemplo:

// const filtrarPorLongitud=(longitud, palabras)=>{
//   let resultado = []

//   for (let i = 0; i < palabras.length; i++) {
//     console.log(palabras[i].length)
//      if(palabras[i].length > longitud){
//        resultado. push(palabras[i])
//      }
    
//   }
//   return resultado 

// }


// filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde',])
// ['remolacha', 'sorpresa', 'verde']


// 13)-    Definí una función recortar que reciba como argumentos un número 
// cantidadLetras y un array de strings palabras y devuelva un array con 
// las mismas palabras pero recortadas. Las palabras se recortan dejando 
// cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, 
// elefante recortada a 4 letras queda elef.

// const recortar = (cantidadLetras, palabras)=>{
//   let resultado =[]
//   for (let i = 0; i < palabras.length; i++) {
//     resultado.push(palabras[i].slice(0,cantidadLetras))
//     console.log(resultado)
    
//   }
// return resultado 

// }



// recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])
// ['elef', 'dino' 'choc', 'avio', 'amer']
// recortar(1, ['algoritmo', 'bug', 'compilador'])
// ['a', 'b', 'c']


// 14)-   Definí una función sonIguales(a, b) que reciba como argumentos dos 
// arrays a y b y devuelva si ambos arrays tienen los mismos valores en la misma posición.

//  const sonIguales = (arrayA, arrayB) => {
//    let resultado= true
//    for (let i = 0; i < arrayA.length; i++) {
//      if(arrayA[i] !== arrayB[i]){
//        resultado = false
//      }
//      console.log(resultado)
//    }
//   return resultado
  
//  }


  //  sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])
// true
  //  sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])
// false
//  sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])
// false

// 15)-Definí una función obtenerResultado que tome por parámetros dos strings 
// jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays
// de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un 
// string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, 
// debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora 
// correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

// const puntajesA = [3, 5, 2]
// const puntajesB = [4, 6, 2]

// // puntajesA[0] vs. puntajesB[0] -> Gana B
// // puntajesA[1] vs. puntajesB[1] -> Gana B
// // puntajesA[2] vs. puntajesB[2] -> Empate

// // Resultado final: Gana Jugadora B
//  obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])
// Ada
//  obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9])
// Empate
//  obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])
// Grace










// const sumar = (matriz) => {
//     let resultado = 0
//     for(let i=0; i<matriz.length; i++){
//       for(let j=0; j<matriz[i].length; i++){
//         resultado= resultado + matriz[i][j]
//       }
//     }
//     return resultado
//     console.log(resultado)
//   }
//   console.log(sumar([[4, 5],[2, 7, 1],[8, 10],]))