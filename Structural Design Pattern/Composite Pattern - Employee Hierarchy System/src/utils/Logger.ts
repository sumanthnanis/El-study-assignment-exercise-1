// src/utils/Logger.ts
export class Logger {
    private static loggingEnabled = true; // Enable/disable logging

    static log(message: string): void {
        if (this.loggingEnabled) {
            console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
        }
    }

    static error(message: string): void {
        if (this.loggingEnabled) {
            console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
        }
    }

    static enableLogging(): void {
        this.loggingEnabled = true;
    }

    static disableLogging(): void {
        this.loggingEnabled = false;
    }
}
