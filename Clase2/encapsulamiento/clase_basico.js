class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerProductos() {
        return this.productos;
    }
}

const miCarrito = new Carrito();
miCarrito.agregarProducto("Teclado");
console.log(miCarrito.obtenerProductos()); // ["Teclado"]

