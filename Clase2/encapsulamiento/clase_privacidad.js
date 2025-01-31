class CarritoDeCompras {
    // Propiedades privadas (encapsuladas)
    #productos;
    #total;

    constructor() {
        this.#productos = []; // Lista de productos
        this.#total = 0; // Total del carrito
    }

    // Método público para agregar productos
    agregarProducto(nombre, precio, cantidad = 1) {
        if (precio <= 0 || cantidad <= 0) {
            console.log("❌ Precio o cantidad inválidos.");
            return;
        }

        // Buscar si el producto ya existe
        const productoExistente = this.#productos.find(p => p.nombre === nombre);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            this.#productos.push({ nombre, precio, cantidad });
        }

        this.#actualizarTotal();
        console.log(`✅ ${cantidad} x ${nombre} agregado(s) al carrito.`);
    }

    // Método público para eliminar un producto
    eliminarProducto(nombre) {
        const index = this.#productos.findIndex(p => p.nombre === nombre);
        if (index !== -1) {
            this.#productos.splice(index, 1);
            this.#actualizarTotal();
            console.log(`🗑️ Producto "${nombre}" eliminado del carrito.`);
        } else {
            console.log("❌ Producto no encontrado.");
        }
    }

    // Método privado para actualizar el total (no accesible desde fuera)
    #actualizarTotal() {
        this.#total = this.#productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    }

    // Método público para obtener el total
    obtenerTotal() {
        return `💰 Total del carrito: $${this.#total.toFixed(2)}`;
    }

    // Método público para mostrar el contenido del carrito
    mostrarCarrito() {
        if (this.#productos.length === 0) {
            console.log("🛒 El carrito está vacío.");
        } else {
            console.log("🛒 Carrito de Compras:");
            this.#productos.forEach(p => 
                console.log(`📦 ${p.cantidad} x ${p.nombre} - $${(p.precio * p.cantidad).toFixed(2)}`)
            );
            console.log(this.obtenerTotal());
        }
    }
}

// Uso del Carrito de Compras
const carrito = new CarritoDeCompras();
carrito.agregarProducto("Laptop", 1200);
carrito.agregarProducto("Mouse", 25, 2);
carrito.mostrarCarrito();

carrito.eliminarProducto("Mouse");
carrito.mostrarCarrito();

console.log(carrito.obtenerTotal());

// Intento de acceder a la propiedad privada (No funcionará)
console.log(carrito.#total); // ❌ Error: Propiedad privada
console.log(carrito.#productos); // ❌ Error: Propiedad privada

console.log(carrito.actualizarTotal()); 
