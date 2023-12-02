const productosArray = [
    { nombre: 'Pavlova', precio: 13000, },
    { nombre: 'Tarta de frutas', precio: 13800, },
    { nombre: 'Rogel', precio: 10000, },
    { nombre: 'Medialunas (docena)', precio: 1250, },
    { nombre: 'Cheesecake', precio: 10000, },
    { nombre: 'Torta Oreo', precio: 10000, },
]

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
const btnEliminarItemCarrito = document.querySelectorAll(".eliminarItem")
const btnVaciarCarrito= document.querySelector("btnLimpiarCarrito")
const carrito = [];

function agregarAlCarrito(index) {
    divCarritoVacio.remove();
    carrito.push(productosArray[index].precio);
    const nuevoItemCarrito = document.createElement("div")
    nuevoItemCarrito.classList.add("itemCarrito")
    const btnEliminarItemCarrito = document.createElement("button")
    btnEliminarItemCarrito.classList.add("eliminarItem")
    btnEliminarItemCarrito.textContent= ("eliminar Item")
    nuevoItemCarrito.innerHTML = `${productosArray[index].nombre} ${productosArray[index].precio} ${productosArray[index].imagen} ${btnEliminarItemCarrito}`
    carritoLista.appendChild(nuevoItemCarrito);
    totalCarrito();
}
function eliminarItemCarrito() {
    const btnEliminarItem = document.createElement("button")
    btnEliminarItem.classList.add("eliminarItem")
    btnEliminarItem.textContent = "eliminar del carrito"
}
function totalCarrito() {
    const totalCarrito = document.querySelector("#totalCarrito")
    if (carrito.length > 0) {
        
        let subTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        totalCarrito.innerText = `${subTotal.toFixed(2)}`
    }
}
const vaciarCarrito = document.querySelector ("#btnLimpiarCarrito")

localStorage.setItem("productos", JSON.stringify([productosArray]))


