import { ISubscriber } from '../interfaces/ISubscriber';
import { LoggerService } from '../services/LoggerService';

export class NewsSubscriber implements ISubscriber {
    private name: string;
    private logger: LoggerService;

    constructor(name: string) {
        this.name = name;
        this.logger = new LoggerService();
    }

    public update(article: string): void {
        this.logger.logInfo(`${this.name} received article: ${article}`);
    }

    public getName(): string {
        return this.name;
    }
}
