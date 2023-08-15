import inquirer from 'inquirer';

export async function ejecutarFibonacci(): Promise<void> {
    const limite: number = await obtenerNumero('Ingresa el número de términos para la secuencia de Fibonacci:');

    const secuencia: number[] = calcularSecuenciaFibonacci(limite);
    console.log(`Secuencia de Fibonacci con ${limite} términos:`);
    console.log(secuencia.join(', '));
}

function calcularSecuenciaFibonacci(n: number): number[] {
    const secuencia: number[] = [];
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            secuencia.push(i);
        } else {
            secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
        }
    }
    return secuencia;
}

async function obtenerNumero(mensaje: string): Promise<number> {
    const { numero } = await inquirer.prompt([
        {
            type: 'input',
            name: 'numero',
            message: mensaje,
            validate: (input: string) => !isNaN(Number(input)) && parseInt(input) >= 0 || 'Por favor, ingresa un número válido y mayor o igual a cero',
        },
    ]);
    return parseInt(numero);
}


