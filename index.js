// Función para mostrar la hora actual en el header
function mostrarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
}

// Mostrar la fecha actual en el footer
function mostrarFecha() {
    const hoy = new Date();
    const fecha = hoy.toLocaleDateString();
    document.getElementById("fecha-footer").textContent = `Hoy es ${fecha}`;
}

// Calcular los días desde el 16 de septiembre de 2024
function diasDesdeFecha() {
    const fechaInicial = new Date('2024-09-16');
    const fechaHoy = new Date();
    const diferencia = Math.floor((fechaHoy - fechaInicial) / (1000 * 60 * 60 * 24));
    document.getElementById("diasdesde").textContent =`${diferencia} días han pasado desde el 16 de septiembre de 2024.`;
}

setInterval(mostrarReloj, 1000);
mostrarReloj();
mostrarFecha();
diasDesdeFecha();