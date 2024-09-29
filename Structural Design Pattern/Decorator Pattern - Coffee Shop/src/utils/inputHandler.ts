import * as readline from 'readline';
import { Logger } from './logger';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class InputHandler {
    logger = new Logger();

    async getToppingChoice(): Promise<string> {
        return new Promise((resolve) => {
            rl.question(
                '\nWhat would you like to add?\nOptions: milk, sugar, done\nYour choice: ',
                (choice) => {
                    const validChoices = ['milk', 'sugar', 'done'];
                    if (!validChoices.includes(choice.trim().toLowerCase())) {
                        this.logger.error('Invalid input. Please enter a valid option.');
                        resolve('');
                    } else {
                        resolve(choice.trim().toLowerCase());
                    }
                }
            );
        });
    }
}
