import inquirer from 'inquirer';
import { menuOptions } from './options';

export async function iniciarAplicacion() {
    console.clear();

    const options = [
        {
            type: 'list',
            name: 'action',
            message: 'Seleccione una opción:',
            choices: menuOptions.map(option => option.label),
        },
    ];

    const respuesta = await inquirer.prompt(options);
    const selectedOption = menuOptions.find(option => option.label === respuesta.action);

    if (selectedOption) {
        console.log(`¡Has seleccionado: ${selectedOption.label}!\n`);
        if (selectedOption.action) {
            await selectedOption.action();
        } else {
            console.log('Opción no implementada.');
        }
    } else {
        console.log('Opción no reconocida.');
    }
}
