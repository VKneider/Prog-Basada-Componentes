class Usuario {
    #nombre;  // Propiedad privada
    #edad;    // Propiedad privada

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad >= 0 ? edad : 0; // Validación en el constructor
    }

    // Getter para obtener el nombre
    get nombre() {
        return this.#nombre;
    }

    // Setter para cambiar el nombre
    set nombre(nuevoNombre) {
        if (nuevoNombre.length > 2) {
            this.#nombre = nuevoNombre;
        } else {
            console.log("❌ El nombre debe tener al menos 3 caracteres.");
        }
    }

    // Getter para obtener la edad
    get edad() {
        return this.#edad;
    }

    // Setter para modificar la edad con validación
    set edad(nuevaEdad) {
        if (nuevaEdad >= 0 && nuevaEdad <= 120) {
            this.#edad = nuevaEdad;
        } else {
            console.log("❌ Edad inválida. Debe estar entre 0 y 120 años.");
        }
    }

    #dañarAlgoComoBuenUsuarioQueSoy() {
        console.log("Dañando algo...");
    }

}

// Crear una instancia de Usuario
const usuario1 = new Usuario("Juan", 25);

console.log(usuario1.nombre); // "Juan"
usuario1.nombre = "Al";       // ❌ "El nombre debe tener al menos 3 caracteres."
usuario1.nombre = "Carlos";   // ✅ Cambio exitoso
console.log(usuario1.nombre); // "Carlos"

console.log(usuario1.edad); // 25
usuario1.edad = -5;        // ❌ "Edad inválida. Debe estar entre 0 y 120 años."
usuario1.edad = 30;        // ✅ Cambio exitoso
console.log(usuario1.edad); // 30

// Intentando acceder directamente a una propiedad privada
//console.log(usuario1.#edad); // ❌ Error: Property '#edad' is not accessible

// Intentando acceder a un método privado
//usuario1.#dañarAlgoComoBuenUsuarioQueSoy(); // ❌ Error: Method '#dañarAlgoComoBuenUsuarioQueSoy' is not accessible