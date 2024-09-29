"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsPublisher = void 0;
const LoggerService_1 = require("../services/LoggerService");
class NewsPublisher {
    constructor() {
        this.subscribers = [];
        this.logger = new LoggerService_1.LoggerService();
    }
    subscribe(subscriber) {
        this.logger.logInfo(`Subscribing user: ${subscriber.getName()}`);
        this.subscribers.push(subscriber);
    }
    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
        this.logger.logInfo(`Unsubscribed user: ${subscriber.getName()}`);
    }
    publish(article) {
        this.logger.logInfo(`Publishing article: ${article}`);
        this.subscribers.forEach(subscriber => {
            try {
                subscriber.update(article);
            }
            catch (error) {
                this.logger.logError(`Failed to update ${subscriber.getName()}: ${error}`);
            }
        });
    }
}
exports.NewsPublisher = NewsPublisher;
