import inquirer from 'inquirer';

export async function ejecutarContadorNumeros(): Promise<void> {
    const hasta: number = await obtenerNumero('Hasta qué número deseas contar:');
    const { pares, impares } = contarNumerosParesImpares(hasta);

    console.log(`En los números del 1 al ${hasta}:`);
    console.log(`Números pares: ${pares}`);
    console.log(`Números impares: ${impares}`);
}

function obtenerNumero(mensaje: string): Promise<number> {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'numero',
                message: mensaje,
                validate: (input: string) =>
                    !isNaN(Number(input)) && parseInt(input) > 0 || 'Por favor, ingresa un número válido y mayor que cero',
            },
        ])
        .then((respuestas) => parseFloat(respuestas.numero));
}

function contarNumerosParesImpares(hasta: number): { pares: number; impares: number } {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= hasta; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}
