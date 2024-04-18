
// Costo de alojamiento
function accommodation(){
    let accommodationCost = Number(prompt("Cuanto es el costo de alojamiento?"));

    if (isNaN(accommodationCost)){
        alert("Porfavor ingresar un numero!");
        accommodation();
    } else{
        return accommodationCost
    }
}

// Costo de transporte
function transport(){
    let transportCoste = Number(prompt("Cuanto es el costo de transporte?"));

    if (isNaN(transportCoste)){
        alert("Porfavor ingresar un numero!");
        transport();
    } else{
        return transportCoste
    }
}

// Costo de comida
function food(){
    let foodCost = Number(prompt("Porfavor ingresar el costo de la comida"));

    if (isNaN(foodCost)){
        alert("Porfavor ingresar un numero!");
        food();
    } else{
        return foodCost
    }
}


function calcBuget(budget, foodCost, transportCoste, accommodationCost){
    let calcBuget = foodCost + transportCoste + accommodationCost

    if (calcBuget > budget){
        alert("No cuentas con el suficiente presupuesto, porfavor recarga lapagina y coloca nueva información");
    } else {
        let budgetNew = budget - calcBuget
        alert(`Tu presupuesto es ${budgetNew}`)
        if (budgetNew < 100){
            alert("No es recomendable realizar una compra adicional")
        } else{
            alert(`Cuentas con presupuesto para hacer una compra de ${budgetNew}`)
        }
    }
}
// --------------------------

alert("Realizaremos un presupuesto para tu viaje, que incluira: alojamiento, comida, transporte.")

const budget = prompt("Cual es tu presupuesto inicial")
let accommodationAmount = accommodation()
let transportAmount = transport()
let foodAmount = food()
let sumBuget = calcBuget(budget, foodAmount, transportAmount, accommodationAmount)

