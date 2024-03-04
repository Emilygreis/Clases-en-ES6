// Import
import { Impuestos } from "./impuestos";
import { Cliente } from "./cliente";

// CLiente 1
var impuesto1 = new Impuestos(100000, 20000);
var cliente1 = new Cliente("Fuentes SA", impuesto1);
console.log(cliente1.calcularImpuesto());

// CLiente 2
var impuesto2 = new Impuestos(10, 5);
var cliente2 = new Cliente("Fuentes SA", impuesto2);
console.log(cliente2.calcularImpuesto());

// CLiente 3
var impuesto3 = new Impuestos(282737373, 449239);
var cliente3 = new Cliente("Fuentes SA", impuesto3);
console.log(cliente3.calcularImpuesto());