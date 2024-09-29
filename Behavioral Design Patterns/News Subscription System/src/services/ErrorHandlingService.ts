import { LoggerService } from './LoggerService';
import { RetryStrategy } from '../utils/RetryStrategy';

export class ErrorHandlingService {
    private logger: LoggerService;
    private retryStrategy: RetryStrategy;

    constructor() {
        this.logger = new LoggerService();
        this.retryStrategy = new RetryStrategy();
    }

    public handleError(error: any, retryCount: number = 3): void {
        if (this.retryStrategy.shouldRetry(error)) {
            this.logger.logWarn(`Retrying due to transient error: ${error.message}`);
            for (let attempt = 0; attempt < retryCount; attempt++) {
                try {
                    // Retry logic
                    break; // exit loop on success
                } catch (retryError) {
                    this.logger.logError(`Retry attempt ${attempt + 1} failed`);
                }
            }
        } else {
            this.logger.logError(`Fatal error: ${error.message}`);
            throw error; // propagate fatal errors
        }
    }
}
