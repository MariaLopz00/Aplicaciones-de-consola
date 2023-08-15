import inquirer from 'inquirer';

export async function ejecutarTablaMultiplicar(): Promise<void> {
    const numero: number = await obtenerNumero('Ingresa el número para generar su tabla de multiplicar:');
    const limite: number = await obtenerNumero('Ingresa el límite de la tabla de multiplicar:');

    console.log(`Tabla de multiplicar del ${numero} hasta ${limite}:`);
    for (let i = 1; i <= limite; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

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
