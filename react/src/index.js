function obtenerDatos() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("¡Datos obtenidos!");
                }, 2000);
            });
}

async function mostrarDatos() {
            console.log("Esperando los datos...");
            const datos = await obtenerDatos();  // Aquí esperamos a que la promesa se resuelva
            console.log(datos);  // Esto se ejecuta después de 2 segundos
}

mostrarDatos();
