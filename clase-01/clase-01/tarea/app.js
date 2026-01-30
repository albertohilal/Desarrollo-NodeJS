const os = require("os");
const { mensajePersonalizado } = require("./mensaje");

// Presentación
const nombre = "Alberto Hilal";
const motivo = "Quiero aprender backend para desarrollar aplicaciones eficientes y escalables.";

console.log("=== Presentación ===");
console.log("Nombre:", nombre);
console.log("Motivo:", motivo);
console.log("");

// Uso del módulo nativo os
console.log("=== Información del sistema ===");
console.log("Sistema operativo:", os.type());
console.log("Memoria libre (MB):", (os.freemem() / 1024 / 1024).toFixed(2));
console.log("");

// Uso del módulo propio
console.log("=== Módulo propio ===");
console.log(mensajePersonalizado());
