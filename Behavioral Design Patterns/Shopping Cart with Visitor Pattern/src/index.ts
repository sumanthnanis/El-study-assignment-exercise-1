// src/index.ts
import { ShoppingCart } from './ShoppingCart';
import { Book } from './items/Book';
import { Clothing } from './items/Clothing';
import { Electronics } from './items/Electronics';
import { DiscountVisitor } from './visitors/DiscountVisitor';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const cart = new ShoppingCart();
const discountVisitor = new DiscountVisitor();

function askForItemDetails() {
    rl.question('Enter item type (book/clothing/electronics) or "done" to finish: ', (type) => {
        if (type === 'done') {
            const total = cart.calculateTotal(discountVisitor);
            console.log(`Total price after discount: $${total.toFixed(2)}`);
            rl.close();
            return;
        }

        rl.question('Enter item price: ', (priceStr) => {
            const price = parseFloat(priceStr);

            if (isNaN(price) || price <= 0) {
                console.log('Please enter a valid positive number for the price.');
                askForItemDetails(); // Ask for item details again
                return;
            }

            let item: Book | Clothing | Electronics;

            switch (type.toLowerCase()) {
                case 'book':
                    item = new Book(price);
                    break;
                case 'clothing':
                    item = new Clothing(price);
                    break;
                case 'electronics':
                    item = new Electronics(price);
                    break;
                default:
                    console.log('Invalid item type. Please enter "book", "clothing", or "electronics".');
                    askForItemDetails(); // Ask for item details again
                    return;
            }

            cart.addItem(item);
            console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} added to the cart.`);
            askForItemDetails(); // Ask for next item details
        });
    });
}

askForItemDetails();
