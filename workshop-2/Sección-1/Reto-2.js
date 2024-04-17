// Determinar y verificar si es una letra
function productName(){
    let product = prompt("Que producto desea incluir?");
    if (isNaN(product)){
        alert("Sigue respondiendo");
        return product
    } else{
        alert("Ingresar letras!!!");
        productName();
    }
}

// Determinar y seleccionar el costo del producto
function productCost(){
    let cost = prompt("Cuanto cuesta el producto?");
    if (isNaN(cost)){
        alert("Porfavor ingresar solo numeros!");
        productCost();
    } else{
        alert("Gracias por responder!!!");
        return cost
    }
}

// Verifica si hay Stock
function productStock(){
    let stock = confirm("Hay stock del producto?");
    if (stock){
        alert("Se puede comprar");
        return ("Hay stock del producto");
    } else{
        alert("No hay producto, regresa pronto");
        return ("no hay producto");
    }
}

// Une los datos de "product", "cost", "stock"
function allSouvenirs(product,cost,stock){
    let suvenirs = (`{name: ${product}, cost: ${cost}, stock: ${stock}}`);
    return suvenirs;
}


// --------------------------------------------

let souvenirs = [
    {name: "mango", cost: 1333, stock: 1 },
]
let product = productName()
console.log(product, "FLSDJKHSDHSD")
let cost = productCost()
let stock = productStock()
newSouveneir = allSouvenirs(product, cost, stock)

souvenirs.push(newSouveneir)


console.log(souvenirs)

