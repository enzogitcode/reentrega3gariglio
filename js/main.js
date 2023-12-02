//Array
const productosArray = [
    { nombre: 'Pavlova', precio: 13000, },
    { nombre: 'Tarta de frutas', precio: 13800, },
    { nombre: 'Rogel', precio: 10000, },
    { nombre: 'Medialunas (docena)', precio: 1250, },
    { nombre: 'Cheesecake', precio: 10000, },
    { nombre: 'Torta Oreo', precio: 10000, },
]

//creación de las cards
const contenedorProductos = document.querySelector("#cardsContainer")


function crearCardHTML(producto) {
    return `<div class="cardBody">
    <div class="cardImg"><></div>
    <div class="cardTitle">${producto.nombre}</div>
    <div class="cardPrecio">${producto.precio}</div>
    <button class="addCart" onclick="agregarAlCarrito(${productosArray.indexOf(producto)})">Agregar al carrito</button>
    </div>
    `
}

productosArray.forEach(producto => {
    const cardHTML = crearCardHTML(producto);
    contenedorProductos.innerHTML += cardHTML;
});

function crearError() {
    return `<div class="divError">Hubo un error, intentá nuevamente</div> `
}

const carritoLista = document.querySelector("#carritoLista");
const divCarritoVacio = document.querySelector("#carritoVacio")
const eliminarItem= document.querySelectorAll(".eliminarItem")
const carrito = [];

function agregarAlCarrito(index) {
    divCarritoVacio.remove();
    carrito.push(productosArray[index].precio);
    const nuevoItemCarrito = document.createElement("div")
    nuevoItemCarrito.classList.add("itemCarrito")
    const btnEliminarItemCarrito = document.createElement("button")
    btnEliminarItemCarrito.id= document.createElement
    nuevoItemCarrito.innerHTML = `${productosArray[index].nombre} ${productosArray[index].precio} ${productosArray[index].imagen} ${eliminarItem}`
    carritoLista.appendChild(nuevoItemCarrito);
    totalCarrito();
}
function eliminarItemCarrito() {
    const btnEliminarItem= document.createElement("button")
    btnEliminarItem.classList.add ("eliminarItem")
    btnEliminarItem.textContent= "eliminar del carrito"
}
function totalCarrito() {
    const totalCarrito = document.querySelector("#totalCarrito")
    if (carrito.length > 0) {
        let subTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        totalCarrito.innerText = `${subTotal.toFixed(2)}`
    }
}
const vaciarCarrito =
    function vaciarCarrito() {

    }

/*

class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, curso)=> acumulador + curso.precio, 0)
        }
    }
}
 */
//Local storage
//localStorage.setItem("pro")
//localStorage.setItem("productos", JSON.stringify([productos]))
//const mistock = JSON.parse(localStorage.getItem("productos"))