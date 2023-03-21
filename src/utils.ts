import chalk from "chalk";
import {IBlock} from "./index";

export const paint = (arg: any, arg1?: any, arg2?: any): void => {
    console.warn(chalk.green(...[arg, arg1, arg2].filter(Boolean)));
}
export const lintCode = <Data>(data: Data): string => {
    return JSON.stringify(data, null, 4)
}

export const paintStatusOfValidBlockchain = (valid: boolean) => {
    paint(`Blockchain is ${valid ? 'valid' : 'not valid'}.`);
}
