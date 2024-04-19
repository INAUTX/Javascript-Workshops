// Determinar nivel de energía
function powerLevel() {
    let energy = confirm("Tienes la energia alta?")
    console.log(energy)
    if (energy) {
        return 1
    } else {
        return 0
    }
}

// Determinar calidad de clima
function weatherStatus() {
    let weather = confirm("Se aencuentra bien el clima el día de hoy?")
    if (weather) {
        return 1
    } else {
        return 0
    }
}

// Carga de trabajo
function workload() {
    let work = confirm("Tienes una carga de trabajo alta?")
    if (!work) {
        return 1
    } else {
        return 0
    }
}

//   -------------------

alert("El día de hoy realizaremos un análisis para determinar que actividades realizaras este día")

let work = workload;
let weather = weatherStatus;
let energy = powerLevel

if (work === "0" && weather === "0" && energy === "0" || work === "0" && energy === "0") {
    alert("Tomate el dia libre")
} else if (work === "1" || weather === "0") {
    alert("Es recomendable realizar el trabajo pendiente")
} else if (work === "0" || weather === energy){
    alert("Tienes la energia alta y  esta haciendo un buen clima, deberias ir a trotar")
}
