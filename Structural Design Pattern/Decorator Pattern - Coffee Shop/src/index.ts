import { SimpleCoffee } from './models/coffee';
import { Milk, Sugar } from './models/toppings';
import { InputHandler } from './utils/inputHandler';
import { Logger } from './utils/logger';

const logger = new Logger();
const inputHandler = new InputHandler();

async function coffeeShop() {
    logger.log('Welcome to the Coffee Shop!');
    let coffee = new SimpleCoffee();

    while (true) {
        logger.log('\nYour current coffee:');
        logger.log(`Description: ${coffee.getDescription()}`);
        logger.log(`Cost: $${coffee.cost().toFixed(2)}`);

        const toppingChoice = await inputHandler.getToppingChoice();
        
        if (!toppingChoice) continue;

        switch (toppingChoice) {
            case 'milk':
                coffee = new Milk(coffee);
                logger.log('Added Milk.');
                break;
            case 'sugar':
                coffee = new Sugar(coffee);
                logger.log('Added Sugar.');
                break;
            case 'done':
                logger.log('Order complete.');
                logger.log(`Final Coffee Description: ${coffee.getDescription()}`);
                logger.log(`Total Cost: $${coffee.cost().toFixed(2)}`);
                process.exit(0);
            default:
                logger.error('Invalid choice.');
        }
    }
}

coffeeShop();
