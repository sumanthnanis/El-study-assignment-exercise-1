import { ISubscriber } from '../interfaces/ISubscriber';
import { LoggerService } from '../services/LoggerService';

export class NewsPublisher {
    public subscribers: ISubscriber[] = [];
    private logger: LoggerService;

    constructor() {
        this.logger = new LoggerService();
    }

    public subscribe(subscriber: ISubscriber): void {
        this.logger.logInfo(`Subscribing user: ${subscriber.getName()}`);
        this.subscribers.push(subscriber);
    }

    public unsubscribe(subscriber: ISubscriber): void {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
        this.logger.logInfo(`Unsubscribed user: ${subscriber.getName()}`);
    }

    public publish(article: string): void {
        this.logger.logInfo(`Publishing article: ${article}`);
        this.subscribers.forEach(subscriber => {
            try {
                subscriber.update(article);
            } catch (error) {
                this.logger.logError(`Failed to update ${subscriber.getName()}: ${error}`);
            }
        });
    }
}
