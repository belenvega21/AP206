const edad1 = 20
const edad2 = 30

console.log("Promedio de edad");
console.log((edad1 + edad2) / 2);

console.time('mi proceso');
for(let i=0; i <10000000000; i++) {
    // Simulamos un proceso pesado
}
console.timeEnd('mi proceso');

//IMPRIMIR EN TABLAS
let usuarios =[
    {nombre: "Belen", Edad: 20},
    { nombre: "Gabriel", Edad: 25}
]
console .table (usuarios);