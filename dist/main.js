"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const options_1 = require("./options");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = [
            {
                type: 'list',
                name: 'action',
                message: 'Seleccione una opción:',
                choices: options_1.menuOptions.map(option => option.label),
            },
        ];
        const respuesta = yield inquirer_1.default.prompt(options);
        const selectedOption = options_1.menuOptions.find(option => option.label === respuesta.action);
        if (selectedOption) {
            console.log(`¡Has seleccionado: ${selectedOption.label}!\n`);
            selectedOption.action();
        }
        else {
            console.log('Opción no reconocida.');
        }
    });
}
main();
