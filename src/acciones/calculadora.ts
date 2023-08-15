import inquirer from 'inquirer';
import { calcular } from '../utilities/calculos';

export async function ejecutarCalculadora() {
    const { operacion } = await inquirer.prompt([
        {
            type: 'list',
            name: 'operacion',
            message: 'Selecciona la operación:',
            choices: ['Suma', 'Resta', 'Multiplicación', 'División'],
        },
    ]);

    const resultado = await calcular(operacion);

    console.log(`El resultado de la  ${operacion} es: ${resultado}`);
}
