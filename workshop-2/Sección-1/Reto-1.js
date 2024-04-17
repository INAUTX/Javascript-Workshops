const trip = prompt("Cual es el destino del viaje (Una vez establecido, el destino no debería cambiar).")

let travelDays = parseInt(prompt("Cuantos dias Estaras de viaje? 🎉"))

let budget = parseInt(prompt("Presupuesto para el viaje? 💸 "))

if ((travelDays*1500) > budget){
    let variableChange = parseInt(prompt(`el costo del viaje supera el presupuesto, cambia el presupuesto o dias de viaje.
    Indica la modificación:
    1=Modificar el presupuesto
    2=Modificar dias     de viaje`))
    if (variableChange === 1){
        budget = parseInt(prompt("Nuevo presupuesto para el viaje 💸 "))
    }   else{
        travelDays = parseInt(prompt("Cuantos dias Estaras de viaje? 🎉"))
    }
}

alert(`Tu destino de viaje es: ${trip} 📍
Estaras ${travelDays} dias(cada dia cuesta 1500$) ⏳ 
Presupuesto de viaje: ${budget} 💸`)

let change = confirm("¿Desea cambiar el presupuesto de viaje o los dias de viaje?")

if (change){
    let variableChange = parseInt(prompt(`Qué desea modifiar?
    1= Dias de viaje
    2= Presupuesto de viaje
    3=no hacer cambios`))
    if (variableChange === 1){
        travelDays = parseInt(prompt("Cuantos dias Estaras de viaje? 🎉"))
    }   if (variableChange === 2){
        budget = parseInt(prompt("Nuevo presupuesto para el viaje 💸 "))
    }   else{
        alert(`Gracias por agendar su viaje.

        Tu destino de viaje es: ${trip} 📍
        Estaras ${travelDays} dias ⏳ 
        Presupuesto de viaje: ${budget} 💸
    
        Unas felices vacaciones!!!`)
    }
}   else{
    alert(`Gracias por agendar su viaje.

    Tu destino de viaje es: ${trip} 📍
    Estaras ${travelDays} dias ⏳ 
    Presupuesto de viaje: ${budget} 💸
    
    Unas felices vacaciones!!!`)
}