export class Logger {
    log(message: string): void {
        console.log(message);
    }

    error(message: string): void {
        console.error(`ERROR: ${message}`);
    }
}
