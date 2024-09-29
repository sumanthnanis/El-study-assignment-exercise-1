// src/services/ActionService.ts
import { Manager } from '../components/Manager';
import { Worker } from '../components/Worker';
import { InputHandler } from '../utils/InputHandler';
import { Logger } from '../utils/Logger';

export class ActionService {
    private inputHandler: InputHandler;

    constructor(inputHandler: InputHandler) {
        this.inputHandler = inputHandler;
    }

    async addSubordinate(manager: Manager): Promise<void> {
        try {
            const name = this.inputHandler.validateString(
                await this.inputHandler.askQuestion('Enter subordinate name: '),
                'Subordinate name'
            );

            const position = this.inputHandler.validateString(
                await this.inputHandler.askQuestion('Enter subordinate position: '),
                'Position'
            );

            const worker = new Worker(name, position);
            manager.addSubordinate(worker);

            Logger.log('Subordinate added successfully.');
            console.log('Subordinate added successfully.\n');
        } catch (error: any) {
            Logger.error(`Failed to add subordinate: ${error.message}`);
            console.error(`Error: ${error.message}\n`);
        }
    }

    async showManagerDetails(manager: Manager): Promise<void> {
        console.log(manager.getDetails());
    }
}
