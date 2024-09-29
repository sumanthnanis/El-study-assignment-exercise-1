export class RetryStrategy {
    public shouldRetry(error: any): boolean {
        // Example logic: retry if it's a network-related error
        return error.message.includes('network') || error.message.includes('timeout');
    }
}
