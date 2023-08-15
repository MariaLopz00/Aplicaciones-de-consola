import inquirer from 'inquirer';

async function obtenerNumero(mensaje: string): Promise<number> {
    const { numero } = await inquirer.prompt([
        {
            type: 'input',
            name: 'numero',
            message: mensaje,
            validate: (input: string) => !isNaN(Number(input)) || 'Por favor, ingresa un número válido',
        },
    ]);
    return parseFloat(numero);
}

export async function calcular(op: string) {
    let numero1 : number = 0;
    let numero2 :  number = 0;

    if (op !== 'Multiplicación' && op !== 'División') {
        numero1 = await obtenerNumero('Ingresa el primer número:');
        numero2 = await obtenerNumero('Ingresa el segundo número:');
    } else {
        numero1 = await obtenerNumero('Ingresa el primer número:');
    }

    switch (op) {
        case 'Suma':
            return numero1 + numero2;
        case 'Resta':
            return numero1 - numero2;
        case 'Multiplicación':
            const multiplicador = await obtenerNumero('Ingresa el número por el cual multiplicar:');
            return numero1 * multiplicador;
        case 'División':
            const divisor = await obtenerNumero('Ingresa el número por el cual dividir:');
            if (divisor === 0) {
                console.log('No es posible dividir por cero.');
                return 'Operación no válida';
            }
            return numero1 / divisor;
        default:
            return 'Operación no válida';
    }
}
