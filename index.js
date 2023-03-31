//Importación de Clases
import {Cliente} from "./Cliente.js" 
import {CuentaCorriente} from "./CuentaCorriente.js"

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("Maria", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

//cuentaLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
saldo = cuentaDeLeonardo.transferirParaCuenta(50, cuentaDeMaria);

console.log (CuentaCorriente.cantidadCuentas);
console.log (cuentaDeLeonardo.cliente);
console.log(cuentaDeMaria.cliente);
