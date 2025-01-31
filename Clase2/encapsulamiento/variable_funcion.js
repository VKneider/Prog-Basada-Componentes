// Encapsulando la información de la sesión dentro de la función crearSesion
function crearSesion(usuario) {
    let autenticado = false; // Estado de autenticación encapsulado

    return {
        iniciarSesion: (password) => {
            if (password === "1234") { // Simulación de autenticación
                autenticado = true;
                console.log(`✅ Usuario ${usuario} autenticado.`);
            } else {
                console.log("❌ Contraseña incorrecta.");
            }
        },
        cerrarSesion: () => {
            autenticado = false;
            console.log(`👋 Usuario ${usuario} cerró sesión.`);
        },
        obtenerEstado: () => autenticado ? "🔓 Sesión activa" : "🔒 Sesión cerrada"
    };
}

// Creación de sesiones para diferentes usuarios
const sesionUsuario1 = crearSesion("Victor");
sesionUsuario1.iniciarSesion("1234"); // ✅ Usuario Victor autenticado.
console.log(sesionUsuario1.obtenerEstado()); // 🔓 Sesión activa

const sesionUsuario2 = crearSesion("Maria");
sesionUsuario2.iniciarSesion("0000"); // ❌ Contraseña incorrecta.
console.log(sesionUsuario2.obtenerEstado()); // 🔒 Sesión cerrada

// Intento de acceder a la variable autenticado directamente
console.log(sesionUsuario1.autenticado); // ❌ undefined (encapsulado)


