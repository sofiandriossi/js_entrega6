let ingreso = false
let consumiciones = 0
const tragosMaximos= 2
let tragoPedido
let tragoElegido

class Trago {
    constructor(id, nombre, precio, stock){
        this.id=id
        this.nombre=nombre
        this.precio=precio
        this.stock=stock
    }
    aplicarDescuento() {
        this.precio = this.precio /2

    }
    vender(cantidad) {
        this.stock = this.stock - cantidad
    }
}

const margarita= new Trago ("T-006", "Margarita", 1000, 5)
const fernet= new Trago ("T-001", "Fernet", 1200, 7)
const mojito= new Trago("T-002", "Mojito", 900, 4)
const ginTonic= new Trago( "T-004", "Gin Tonic", 1400,8)
const caipirinha= new Trago ("T-005", "Caipirinha", 1500, 6)
const cubaLibre= new Trago ("T-007", "Cuba Libre", 1000, 7)
const daiquiri= new Trago ("T-008", "Daiquiri", 1300, 3)
const negroni= new Trago ("T-009","Negroni", 1200, 4 )
const aperol= new Trago ("T-010", "Aperol Spritz", 1000, 8)
const tragosStock = [margarita, fernet, mojito, ginTonic, caipirinha, cubaLibre]

tragosStock.push(daiquiri)
tragosStock.unshift(negroni)

const tragoEliminado = tragosStock.pop()

alert(`Se ha eliminado el elemento: ${tragoEliminado.nombre}`)


const indiceCubaLibre = tragosStock.indexOf(cubaLibre)
tragosStock.splice(indiceCubaLibre, 1, aperol)

for (const trago of tragosStock) {
    console.log(`${trago.nombre} - precio inicial: ${trago.precio} - stock inicial: ${trago.stock}`)
}
const tragosDisponibles = tragosStock.filter((trago) => trago.stock >= tragosMaximos)
console.log(tragosDisponibles)


function mostrarTragos() {
    const listado = tragosDisponibles.map((trago) => `Trago: ${trago.nombre} - $${trago.precio}`) 
    alert(`Estos son los tragos, elegí uno:\n${listado.join("\n")}`)
}

esMayorDeEdad(Number(prompt("ingrese su edad")))

if (ingreso) {
    hayDescuento(Number(prompt("ingrese la hora")))
}

const tragosRestantes = (max, consumidos) => max - consumidos;

while (consumiciones < tragosMaximos && ingreso) {
    consumiciones++;
    tragoElegido.vender(1)
    alert(`te quedan ${tragosRestantes(tragosMaximos, consumiciones)} ${tragoPedido}`)
}

if (tragoElegido) {
    console.log(`${tragoElegido.nombre} - precio final: ${tragoElegido.precio} - stock final: ${tragoElegido.stock}`)
}


function hayDescuento(hora){
    if (hora <= 21) {
        tragoElegido.aplicarDescuento()
    }
    alert(`el precio de ${tragoElegido.nombre} es ${tragoElegido.precio}`)
}

function esMayorDeEdad (edad){
   if (edad >= 18){
        ingreso = true
        alert(`podes ingresar, tenes ${tragosMaximos} tragos`)
        mostrarTragos()

        tragoPedido = prompt(`¿Qué querés tomar? Hoy no hay ${tragoEliminado.nombre}`)
        tragoElegido = tragosDisponibles.find((trago) => trago.nombre === tragoPedido)

        while (!tragoElegido) {
            tragoPedido = prompt(`No tenemos ${tragoPedido}. Elegí otro:`)
            tragoElegido = tragosDisponibles.find((trago) => trago.nombre === tragoPedido)
        }

    } else{
        alert("acceso denegado")
  }
}
