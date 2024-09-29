// src/index.ts
import { Manager } from './components/Manager';
import { InputHandler } from './utils/InputHandler';
import { ActionService } from './services/ActionService';

async function main() {
    const inputHandler = new InputHandler();
    const manager = new Manager('Alice', 'General Manager');
    const actionService = new ActionService(inputHandler);

    const menuOptions = `
Select an action:
1. Add Subordinate
2. Show Manager Details
3. Exit
`;

    try {
        let running = true;
        while (running) {
            const action = await inputHandler.askQuestion(menuOptions);

            switch (action.trim()) {
                case '1':
                    await actionService.addSubordinate(manager);
                    break;
                case '2':
                    await actionService.showManagerDetails(manager);
                    break;
                case '3':
                    running = false;
                    console.log('Exiting program.');
                    break;
                default:
                    console.error('Invalid action selected. Please choose again.');
            }
        }
    } catch (error: any) {
        console.error(`Unexpected error occurred: ${error.message}`);
    } finally {
        inputHandler.close();
    }
}

main();
