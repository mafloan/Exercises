js
// Día 1

//Ejercicio 1
//Declaración de variables
let numeroUn = 1
let stringUn = '1'

if (numeroUn == stringUn) {  // Compara solo el valor
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

// Segunda condición corregida
if (numeroUn === stringUn) {  // Compara valor y tipo
  console.log('Las variables numeroUn y stringUn son estrictamente iguales');
} else {
  console.log('Las variables numeroUn y stringUn no son estrictamente iguales');
}

//Ejercicio 2
// Declaración de variables
let numeroTreinta = 30;
let stringTreinta = "30";

if (numeroTreinta === stringTreinta) {  // Comparación estricta (valor y tipo)
  console.log("Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo");
} else {
  console.log("Las variables numeroTreinta y stringTreinta no tienen el mismo tipo");
}

if (numeroTreinta != stringTreinta) {  // Comparación por valor (sin importar el tipo)
  console.log("Las variables numeroTreinta y stringTreinta no tienen el mismo tipo");
} else {
  console.log("Las variables numeroTreinta y stringTreinta tienen el mismo tipo");
}

//Ejercicio 3
//Declaración de variables
let numeroDiez=10
let stringDiez="10"

if(numeroDiez==stringDiez){
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
} else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}

if(numeroDiez!==stringDiez){
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
} else {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor');
}

   //Día 2
   //Ejercicio 1Por eso, hoy te voy a enseñar a desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:
// - ¿Cuál es tu nombre?
// - ¿Cuántos años tienes?
// - ¿Qué lenguaje de programación estás estudiando?
// A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.
// Al final, el sistema mostrará el mensaje: "Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

function mostrarAlerta(){
    let nombreUsuario=prompt("¿Cuál es tu nombre?");
    let edadUsuario=prompt("¿Cuántos años tenés?");
    let lenguajeProgramacionUsuario=prompt("¿Qué lenguaje de programación estás estudiando?");
    alert("Hola "+nombreUsuario+",tenés "+edadUsuario+" años y ya estás aprendiendo "+lenguajeProgramacionUsuario+" ")
        }

 //Ejercicio 2 
 if (respuesta == 1) {    // da la respuesta positiva
 }
 // Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:
 // ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
 // Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
 
 // 1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
 // 2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
 
 // Puedes usar la estructura condicional if para resolver el Ejercicio Opcional. Algo como:
if (respuesta == 2) {     // da la respuesta negativa
}

function estudiarProgramacion(){
  let respuestaDeProgramacion=prompt("¿Te gusta estudiar el ${lenguajeProgramacionUsuario?} Responde con el número 1 para SÍ o 2 para NO");
  if(respuestaDeProgramacion==1){    // respuesta positiva
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito")
} else {
  alert("Oh, qué pena¿Ya intentaste otros lenguajes?")
}
}

//Día 3 Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:
/*Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
Si está en el área de Front-End, si quiere aprender React o aprender Vue. 
Si está en el área de Back-End, podrá aprender C# o aprender Java.
Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose 
en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.
Aquí, la persona puede responder N tecnologías, una a la vez.
Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", 
sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. 
Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.

Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender
y desarrollarse en el área de programación.
Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
*/

function mostrarCarrera() {
  let areaASeguir=prompt("¿Qué querés estudiar? Respondé con el número 1 para Front-End o número 2 para Back-End");
  if(areaASeguir==1){
    
    alert('¿Querés estudiar React?');
  }
  else{
  alert('¿Querés estudiar Vue?');
  }
  else if(areaASeguir==2){
    alert('¿Querés aprender C#?');
  }
  else{
  alert('¿Querés aprender Java?');
  }
  else {
  alert('¿Querés estudiar Fullstack?');
  }
  
alert('¿Hay alguna otra tecnología que te gustaría aprender?');
}

//Día 4- Ejercicio Debes crear un pequeño programa que comience con un valor // específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7). 

/*A continuación, el programa te preguntará cuál es el valor que deseas adivinar  y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.
Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial. Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.*/

//Declaración de variables
let numeroSecreto= generar numeroSecreto;
console.log(numeroSecreto)

function generarNumeroSecreto() {
  let numeroSecreto=Math.floor(Math.random()*10)+1;
  return numeroSecreto
 }
function limpiarCaja(){
  document.querySelector"('#valueUsuario').value";
  }
  asignarTextoElemento('p' Acertaste el número en ${intentos} ${intentos===1}? 'vez':'veces');

function condicionesIniciales (){
  asignarTextoElemento('h1','Juego del número secreto');
  asignarTextoElemento('p','Indica un número del 1 al 10');
  numeroSecreto=generarNumeroSecreto();
  intentos=1
  console.log(numeroSecreto);
}

//Dia 5 Entonces hoy, para facilitar tu visita al supermercado, 
// debes crear un programa en Javascript que pregunte 
// si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".

 /*A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".Después, deberá preguntar en qué categoría  se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. 
 Así podrás separar todo en su respectivo grupo.
Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas  "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, 
 de la siguiente manera:
Si añades a tu lista:banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:
Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados: 
Dulces: chicle y gominola*/

let listaCompras = [];
listaCompras.push("Banana");
listaCompras.push("Manzana");
listaCompras.push("Uva");
listaCompras.push("Tomate");
listaCompras.push("Aguacate");
listaCompras.push("Chicle");
listaCompras.push("Gominola");
listaCompras.push("Leche de vaca");
listaCompras.push("Leche en polvo");
listaCompras.push("Bebida vegetal");