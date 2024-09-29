"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryStrategy = void 0;
class RetryStrategy {
    shouldRetry(error) {
        // Example logic: retry if it's a network-related error
        return error.message.includes('network') || error.message.includes('timeout');
    }
}
exports.RetryStrategy = RetryStrategy;
