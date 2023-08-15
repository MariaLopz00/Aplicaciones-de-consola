import { OpcionMenu } from './interfaces/options';
import { ejecutarCalculadora } from './acciones/calculadora';
import { ejecutarContadorNumeros } from './acciones/constadorNumeros';
import { ejecutarTablaMultiplicar } from './acciones/tablaMultiplicar';
import { ejecutarFibonacci } from './acciones/fibonacci';
import { ejecutarConvertidorTemperatura } from './acciones/convertidorTemperatura';
import { ejecutarContadorPalabras } from './acciones/contadorPalabras';

export const menuOptions: OpcionMenu[] = [
    {
        label: 'Calculadora simple',
        action: ejecutarCalculadora,
    },
    {
        label: 'Contador de Numeros Pares e Impares',
        action: ejecutarContadorNumeros,
    },
    {
        label: 'Tabla de Multiplicar',
        action: ejecutarTablaMultiplicar,
    },
    {
        label: 'Secuencia Fibonacci',
        action: ejecutarFibonacci,
    },
    {
        label: 'Convertidor de temperatura',
        action: ejecutarConvertidorTemperatura,
    },
    {
        label: 'Contador de palabras',
        action: ejecutarContadorPalabras,
    },
];
