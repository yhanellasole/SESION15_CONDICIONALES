/*SESION 15*/
/*EJERCICIO 1


let nombre = prompt("Ingrese el nombre del trabajador:");
let sueldofijo =+prompt("Ingrese su sueldo básico:");
let numerodehijos = +prompt("Ingrese la cantidad de número de hijos:");
let bono = (sueldofijo*0.07).toFixed(0); 

if(numerodehijos>0){
    document.write(`Hola ${nombre}, te corresponde un 7% de bonificación del sueldo básico: ${bono} <br> El total de su sueldo es de: ${sueldofijo+Number(bono)}`);
}else{
  document.write(`Hola ${nombre}, no te corresponde la bonificación, por lo tanto tu sueldo es: ${sueldofijo}`);
}

*/

/* EJERCICIO 2

let numero=+prompt("Ingrese un numero:");
let menos18= numero*0.18
if(numero>500){
    document.write(`El 18% del número es: ${menos18}`);
  }else{
    alert("El numero es menor o igual a 500");
  }
*/

/* EJERCICIO 3

let dato = +prompt("Ingrese un número:");
let c = 1

for(let i = dato; i>0; i--){
c *= i;
}

alert(c)
*/

/* EJERCICIO 4

let compra = +prompt("Digite el importe de la compra:")

let descuento = compra * 0.12

let pagar = compra-descuento

if(compra >= 150){
    alert("El descuento del 12% es de:" + " " + descuento + " " + " " + "El monto a pagar es de:" + " " + pagar);
}
else {
    alert("NO APLICA EL DESCUENTO - El monto a pagar es menor o igual a 150.")
}
*/


/* EJERCICIO 5
let nombre = prompt("Ingrese su nombre:");
let nota1 = +prompt("Ingrese la nota del examen parcial:")
let nota2 = +prompt("Ingrese la nota del examen final:")
let practicas = +prompt ("Ingrese el promedio de sus prácticas:")
let promedio = nota1 + (nota2*2) + practicas 

let final = promedio/4

if(final>10){
    alert(nombre +" "+ "su promedio es de:" + " " + final);
}

else{
    alert("Desaprobado")
}

*/



