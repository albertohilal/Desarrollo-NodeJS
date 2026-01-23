/*console.log('Hola desde Node.js!');*/

import fileSystem from 'fs';

/*fileSystem.writeFileSync(
      'test.txt', 
      '¡Hola desde Node.js!',
      { encoding: 'utf-8' }
);*/
/*
let dato=fileSystem.readFileSync('dato.txt', 
{ encoding: 'utf-8' });
console.log(dato);*/

// Leer el primer número y guardarlo en una variable
let numero1 = fileSystem.readFileSync('numero_1.txt', { encoding: 'utf-8' });

// Leer el segundo número y guardarlo en una variable
let numero2 = fileSystem.readFileSync('numero_2.txt', { encoding: 'utf-8' });

// Convertir a números y sumar
let resultado = parseInt(numero1) + parseInt(numero2);

// Crear resultado.txt con la suma
fileSystem.writeFileSync('resultado.txt', resultado.toString(), { encoding: 'utf-8' });

console.log(`${numero1.trim()} + ${numero2.trim()} = ${resultado}`);