// // Seleccionar el paquete de objetos dependiendo el dia  <----------
// function weatherF (weather) {
//     let occupiedSpace = []
//     if (weather === "nevado"){
//         alert(`Los objetos mas adecuados para un dia con un clima nevado son:
//         -Chaqueta aislante de calor (20)
//         -Pantalones aislantes  (20)
//         -Guantes para el frio (10)
//         -Botas para la nieve (25)
//         -Gorro para el fio (5)
//         -Calentador (45)
//         Con un peso total de 125 y 6 objetos`);
//         return occupiedSpace = [{peso: 125, objetos: 6}]; // Peso de la maleta
//     } else if (weather=== "soleado") {   
//         alert (`Los objetos mas adecuados para un dia soleado son:
//         -Sombrilla de sol (25)
//         -Protector solar (5)
//         -Traje para la playa (10)
//         -chanclas (10)
//         -Pantalonetas (20)
//         -Gorra (10)
//         Con un peso total de 80 y 6 objetos`);
//         return occupiedSpace = [{peso: 80, objetos: 6}]; // Peso de la maleta
//     } else if (weather === "lluvioso"){
//         alert (`Los objetos mas adecuados para un dia de lluvia son:
//         -Paraguas (20)
//         -Chaqueta impermeable (20)
//         -Botas de lluvia (15)
//         -Bolso impermeable (15)
//         -Pañuelo para secar (10)
//         Con un peso total de 80 y 5 objetos`);
//         return occupiedSpace = [{peso: 80, objetos: 5}]; // Peso de la maleta
//     }
// }

// function weightObject (objects){
//     let weightObjects = 0;
//     for (i = 0; i < objects.length ; i++){
//         weightObjects += objects[i].peso;
//     }
//     return weightObjects;
// }

// function backpackWeight(weather){
//     let backpack =""
//     let f1 = 1
//     let occupiedSpace = []
//     console.log(backpack)
//     if (weather === "nevado"){
//         while (f1){
//             backpack = prompt(`Hay tres mochilas con los siguientes tamaños de equipaje y peso que soportan indica con la letra la que deseas, como esta lloviendo, solo puedes ecoger la mediana o la grande
//             -Pequeña 5 objetos y soporta 110 de peso (p)
//             -Mediana 8 objetos y soporta 120 de peso (m)
//             -Grande 10 objetos y soporta 150 de peso (g)`).toLowerCase();
//             if (backpack === "m" || backpack ==="g"){
//                 f1 = 0
//             } else{
//                 alert("Porfavor colocar un dato valido")
//             }
//         }
//         if( backpack === "m") {
//             alert("Escogiste la maleta mediana 8 objetos y soporta 120 de peso")
//             return occupiedSpace = [{peso: 130, objetos: 8}]
//         }else if ( backpack === "g") {
//             alert("Escogiste la maleta grande 10 objetos y soporta 50 de peso")
//             return occupiedSpace = [{peso: 150, objetos: 10}]
//         }
//     }else{
//         while (f1){
//             backpack = prompt(`Hay tres mochilas con los siguientes tamaños de equipaje y peso que soportan indica con la letra la que deseas
//             -Pequeña 5 objetos y soporta 110 de peso (p)
//             -Mediana 8 objetos y soporta 120 de peso (m)
//             -Grande 10 objetos y soporta 150 de peso (g)`).toLowerCase();
//             if (backpack === "p" || backpack === "m" || backpack ==="g"){
//                 f1 = 0
//             } else{
//                 alert("Porfavor colocar un dato valido")
//             }
//         }

//         if (backpack === "p") {
//             alert("Ecogiste la maleta pequeña, 5 objetos y soporta 100 de peso")
//             return occupiedSpace = [{peso: 110, objetos: 5}]
//         }else if( backpack === "m") {
//             alert("Escogiste la maleta mediana 8 objetos y soporta 120 de peso")
//             return occupiedSpace = [{peso: 130, objetos: 8}]
//         }else{
//             alert("Escogiste la maleta grande 10 objetos y soporta 50 de peso")
//             return occupiedSpace = [{peso: 150, objetos: 10}]
//         }
//     }


// }


// // ---------------------


// const listaObjetos = [
//     { nombre: "Libro", peso: 5 },
//     { nombre: "Mochila", peso: 15 },
//     { nombre: "Botella de agua", peso: 5 },
//     { nombre: "Ordenador portátil", peso: 20 },
//     { nombre: "Ropa de abrigo", peso: 10 }
// ];

// let weather = ""
// let f1 = 1
// while (f1){
//     weather = prompt(`Caual es el clima el dia de hoy?
//     -Nevado
//     -Lluvioso
//     -Soleado`).toLowerCase();
//     if (weather === "lluvioso" || weather === "soleado" || weather ==="nevado"){
//         f1 = 0
//     } else{
//         alert("Porfavor colocar uno de los tres climas")
//     }
// }

// let currentLoad = weatherF(weather)
// let backpackLoad= backpackWeight(weather)

// if (((backpackLoad[0].peso) - (currentLoad[0].peso)) === 0){
//     alert(`Ya no tienes mas espacio. Tu maleta quedo de esta forma:
//     ${weather(weather)}`);
// }else{
//     alert(`Peso restante que soporta la maleta ${((backpackLoad[0].peso) - (currentLoad[0].peso))} y le queda un espacio de ${((backpackLoad[0].objetos) - (currentLoad[0].objetos))}`);
// }
// f1 = 1;
// let objects = 0;
// let weight = 0;
// let objectList = "";
// while (f1){
//     let ObjectNew = prompt(`Indicar con un numero el objeto. Estos son los objeto que puedes adicionar con el peso correspondient:
//     1-Libros (5)
//     2-Mochila (15)
//     3-Botella de agua (5)
//     4-Ordenador portatil (20)
//     5-Ropa de abrigo (10)
//     - No guardar nada mas (para salir indicar el # 10)`) ;

//     objects +=  listaObjetos[ObjectNew].peso
//     objectList += listaObjetos[ObjectNew].nombre
    
//     console.log(objectList )
//     weight += 1
//     if (objects === ((backpackLoad[0].objetos) - (currentLoad[0].objetos)) || weight === ((backpackLoad[0].peso) - (currentLoad[0].peso))){
//         alert(`ya no puedes colocar mas objetos, alcansate el limite : espacio ${((backpackLoad[0].objetos) - (currentLoad[0].objetos))} peso a soportar ${((backpackLoad[0].peso) - (currentLoad[0].peso))} `)
//         f1 = 0
//     }
// }

// alert(`los objetos para el dia de hoy...
// ${weatherF(weather)}
// Objetos adicionales:
// ${objectList}`)








let a = 1 
console.log(a)
function suma (){
    a += 
    console.log(a)
}
console.log(a)