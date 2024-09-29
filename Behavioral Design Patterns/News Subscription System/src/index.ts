// src/index.ts
import { NewsPublisher } from './models/NewsPublisher';
import { NewsSubscriber } from './models/NewsSubscriber';
import { LoggerService } from './services/LoggerService';
import { Validator } from './utils/Validator';
import * as readline from 'readline';

// Initialize the NewsPublisher
const publisher = new NewsPublisher();
const logger = new LoggerService();

// Readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to prompt users
const promptUser = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, (answer) => resolve(answer)));
};

// Function to show the main menu
async function mainMenu() {
    while (true) {
        console.log('\n===== News Subscription System =====');
        console.log('1. Subscribe');
        console.log('2. Unsubscribe');
        console.log('3. Publish News');
        console.log('4. Exit');
        
        const choice = await promptUser('Choose an option (1-4): ');

        switch (choice) {
            case '1':
                await subscribeUser();
                break;
            case '2':
                await unsubscribeUser();
                break;
            case '3':
                await publishNews();
                break;
            case '4':
                rl.close();
                process.exit(0);
            default:
                console.log('Invalid option. Please choose again.');
        }
    }
}

// Subscribe a user
async function subscribeUser() {
    const subscriberName = await promptUser('Enter your name to subscribe: ');

    // Validate the name
    if (!Validator.validateNonEmptyString(subscriberName)) {
        console.log('Invalid name. Subscription failed.');
        return;
    }

    const subscriber = new NewsSubscriber(subscriberName);
    publisher.subscribe(subscriber);
    console.log(`${subscriberName} has successfully subscribed.`);
}

// Unsubscribe a user
async function unsubscribeUser() {
    const subscriberName = await promptUser('Enter your name to unsubscribe: ');

    // Find the subscriber by name
    const subscriber = publisher.subscribers.find(sub => sub.getName() === subscriberName);
    if (!subscriber) {
        console.log('Subscriber not found.');
        return;
    }

    publisher.unsubscribe(subscriber);
    console.log(`${subscriberName} has successfully unsubscribed.`);
}

// Publish news
async function publishNews() {
    const newsContent = await promptUser('Enter the news content: ');

    // Validate the content
    if (!Validator.validateNonEmptyString(newsContent)) {
        console.log('Invalid content. News publishing failed.');
        return;
    }

    publisher.publish(newsContent);
    console.log('News has been published successfully.');
}

// Run the main menu
mainMenu();
