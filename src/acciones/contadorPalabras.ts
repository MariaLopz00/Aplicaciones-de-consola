import inquirer from 'inquirer';

export async function ejecutarContadorPalabras(): Promise<void> {
    const texto: string = await obtenerTexto('Ingresa el texto:');
    const contador: { [palabra: string]: number } = contarPalabras(texto);

    console.log('Conteo de palabras:');
    for (const palabra in contador) {
        console.log(`${palabra}: ${contador[palabra]}`);
    }
}

function contarPalabras(texto: string): { [palabra: string]: number } {
    const palabras: string[] = texto.toLowerCase().split(/\s+/);
    const contador: { [palabra: string]: number } = {};

    for (const palabra of palabras) {
        if (contador[palabra]) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    }

    return contador;
}

async function obtenerTexto(mensaje: string): Promise<string> {
    const { texto } = await inquirer.prompt([
        {
            type: 'input',
            name: 'texto',
            message: mensaje,
        },
    ]);
    return texto;
}


