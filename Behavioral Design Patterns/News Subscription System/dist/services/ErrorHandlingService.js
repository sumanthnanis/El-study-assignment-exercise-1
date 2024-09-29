"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlingService = void 0;
const LoggerService_1 = require("./LoggerService");
const RetryStrategy_1 = require("../utils/RetryStrategy");
class ErrorHandlingService {
    constructor() {
        this.logger = new LoggerService_1.LoggerService();
        this.retryStrategy = new RetryStrategy_1.RetryStrategy();
    }
    handleError(error, retryCount = 3) {
        if (this.retryStrategy.shouldRetry(error)) {
            this.logger.logWarn(`Retrying due to transient error: ${error.message}`);
            for (let attempt = 0; attempt < retryCount; attempt++) {
                try {
                    // Retry logic
                    break; // exit loop on success
                }
                catch (retryError) {
                    this.logger.logError(`Retry attempt ${attempt + 1} failed`);
                }
            }
        }
        else {
            this.logger.logError(`Fatal error: ${error.message}`);
            throw error; // propagate fatal errors
        }
    }
}
exports.ErrorHandlingService = ErrorHandlingService;
