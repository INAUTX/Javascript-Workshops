// const datosFinancieros = () =>{
//     alert("Simulador de costos financieros")
//     alert("Tu presupuesto inicial es ")
//     let presupuesto
//     let gastos = prompt("cuales son sus gastos (colocarlos todos separados por espacios) ")
//     let totalgastos = gastos.split(" ")
//     console.log(totalgastos)
// }
// datosFinancieros()  
const newBudget  = (budget, savings) => budget - savings

function calcularCompra (food, books, budget){
    let bills = parseInt(food + books)
    if (budget > bills){
        alert (`Puedes realizar las compras y tines de cambio de ${budget - bills} `)
    } else{
        if (books > budget){
                alert(`Solo puedes comprar los libros y si quieres comprar las dos cosas, faltan ${bills - budget} monedas`)
        } else{
                alert (`Solo puedes comprar la comida y si quieres comprar los dos, faltan ${bills - budget} monedas`)
        }
    }
}



while (true){
    let decision = confirm("Desea realizar un presupesto(ok) o uno realizar nada(cancelar)")
    if (decision){  
        let budget = parseFloat(prompt("¿Cuál es el presupuesto inicial?"));
        let savings = parseFloat(prompt("¿Cuánto desea ahorrar del presupuesto inicial?"));
        let food = parseFloat(prompt("¿Cuánto es el valor de la comida?"));
        let books = parseFloat(prompt("¿Cuánto es el valor de los libros?"));
        calcularCompra (food, books, newBudget(budget, savings))
    } else{
        alert ("Gracias, nos vemos pronto")
        break
    }
}

