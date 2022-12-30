alert("                                    Bienvenidos a TV Compras \n                                           Comencemos!!")


alert("Superando la Compra de 150mil pesos el ENVIO ES GRATIS!!!!")

alert("Aca te dejamos las opciones:\n 1) Combo económico: TV 32 pulgadas + Base de pared simple. Precio: $140.000. \n 2) Combo inicial: TV 43 pulgadas + Base de pared simple. Precio: $220.000. \n 3) Combo medio: TV 55 pulgadas + Mueble de madera. Precio: $450.000. \n 4) Combo premium: TV 65 pulgadas 4k + Mueble de madera reforzado. Precio: $750.000")

function saludoFinal(){
    let nombre = prompt("Indicanos tu nombre para registrar el pedido.")
    let apellido = prompt("Indicanos tu apellido para registrar el pedido")
    let email = prompt("Ingresa tu Correo Electronico")
    const dni = prompt("Indicanos tu DNI para registrar el pedido.")
    let direccion = prompt("Indicanos tu dirección para guardarte en nuestra base de datos")

    alert("El pedido esta hecho a Nombre de \n" + nombre + " " + apellido +  " \n" + 
    "Correo Electronico " + email + "\n" +"DNI N°" + dni + "\n" +"Dirección " + direccion)
    alert("En unos minutos recibiras un mensaje de confirmacion en tu Correo Electronico " + email)
}


let combo = prompt("Indicanos cual combo te gusto (con numeros):")
let totalAPagar = Number

switch (combo) {
    case "1":
        totalAPagar = 140000

        break;

    case "2":
        totalAPagar = 220000

        break;

    case "3":
        totalAPagar = 450000

        break;
    case "4":
        totalAPagar = 750000

        break;

    default:
        break;
}


alert("Como quieres abonar? \n En efectivo tenes un 10% de descuento y con tarjeta tenes 1, 3 o 6 cuotas sin interes.")

let metodoPago = prompt("Indicanos como queres pagar: \n Efectivo \n Tarjeta")
let efectivo = "efectivo" || "Efectivo"
let tarjeta = "tarjeta" || "Tarjeta"
let total = Number

let descuento = (n1) => {return resultado = n1 - (n1 * 0.1) }
let cuota1 = (n1, n2) => {return resultado = n1 / n2}
let cuota3 = (n1, n2) => {return resultado = n1 / n2}
let cuota6 = (n1, n2) => {return resultado = n1 / n2}

if (efectivo == metodoPago) {
    total = descuento(totalAPagar)
        alert("Tu total a pagar es $" + total)
} else if (tarjeta == metodoPago) {

    let cuotas = prompt("En cuantas cuotas queres pagar? En 1, 3 o 6 (respuesta con numeros).")
    switch (cuotas) {
        case "1":
            total = cuota1(totalAPagar, 1)
            alert("El precio a pagar es $" + totalAPagar + ", en 1 cuota de $" + total)
            break;

        case "3":
            total = cuota3(totalAPagar, 3)
            alert("El precio a pagar es $" + totalAPagar + ", en 3 cuotas de $" + total)
            break;

        case "6":
            total = cuota6(totalAPagar, 6)
            alert("El precio a pagar es $" + totalAPagar + ", en 6 cuotas de $" + total)
            break;

    default:
        break;
    }
}

while(totalAPagar >= 200000){
    alert("Tu Envio es Gratis")
    break;
}while(totalAPagar <= 150000 ){
    alert("Debes ir a Buscar tu compra")
    break;

}

saludoFinal()