import inquirer from 'inquirer';

export async function ejecutarConvertidorTemperatura(): Promise<void> {
    const temperaturaCelsius: number = await obtenerNumero('Ingresa la temperatura en grados Celsius:');
    const temperaturaFahrenheit: number = celsiusToFahrenheit(temperaturaCelsius);
    
    console.log(`${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaFahrenheit} grados Fahrenheit.`);
}

function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
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

