// src/utils/InputHandler.ts
import * as readline from 'readline';

export class InputHandler {
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    askQuestion(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    close(): void {
        this.rl.close();
    }

    validateString(input: string, fieldName: string): string {
        if (!input.trim()) {
            throw new Error(`${fieldName} cannot be empty.`);
        }
        if (/\d/.test(input)) {
            throw new Error(`${fieldName} should not contain numbers.`);
        }
        return input;
    }
}
