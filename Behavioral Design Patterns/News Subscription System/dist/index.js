"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const NewsPublisher_1 = require("./models/NewsPublisher");
const NewsSubscriber_1 = require("./models/NewsSubscriber");
const LoggerService_1 = require("./services/LoggerService");
const Validator_1 = require("./utils/Validator");
const readline = __importStar(require("readline"));
// Initialize the NewsPublisher
const publisher = new NewsPublisher_1.NewsPublisher();
const logger = new LoggerService_1.LoggerService();
// Readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Helper function to prompt users
const promptUser = (query) => {
    return new Promise((resolve) => rl.question(query, (answer) => resolve(answer)));
};
// Function to show the main menu
function mainMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            console.log('\n===== News Subscription System =====');
            console.log('1. Subscribe');
            console.log('2. Unsubscribe');
            console.log('3. Publish News');
            console.log('4. Exit');
            const choice = yield promptUser('Choose an option (1-4): ');
            switch (choice) {
                case '1':
                    yield subscribeUser();
                    break;
                case '2':
                    yield unsubscribeUser();
                    break;
                case '3':
                    yield publishNews();
                    break;
                case '4':
                    rl.close();
                    process.exit(0);
                default:
                    console.log('Invalid option. Please choose again.');
            }
        }
    });
}
// Subscribe a user
function subscribeUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const subscriberName = yield promptUser('Enter your name to subscribe: ');
        // Validate the name
        if (!Validator_1.Validator.validateNonEmptyString(subscriberName)) {
            console.log('Invalid name. Subscription failed.');
            return;
        }
        const subscriber = new NewsSubscriber_1.NewsSubscriber(subscriberName);
        publisher.subscribe(subscriber);
        console.log(`${subscriberName} has successfully subscribed.`);
    });
}
// Unsubscribe a user
function unsubscribeUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const subscriberName = yield promptUser('Enter your name to unsubscribe: ');
        // Find the subscriber by name
        const subscriber = publisher.subscribers.find(sub => sub.getName() === subscriberName);
        if (!subscriber) {
            console.log('Subscriber not found.');
            return;
        }
        publisher.unsubscribe(subscriber);
        console.log(`${subscriberName} has successfully unsubscribed.`);
    });
}
// Publish news
function publishNews() {
    return __awaiter(this, void 0, void 0, function* () {
        const newsContent = yield promptUser('Enter the news content: ');
        // Validate the content
        if (!Validator_1.Validator.validateNonEmptyString(newsContent)) {
            console.log('Invalid content. News publishing failed.');
            return;
        }
        publisher.publish(newsContent);
        console.log('News has been published successfully.');
    });
}
// Run the main menu
mainMenu();
