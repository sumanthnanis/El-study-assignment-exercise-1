export class LoggerService {
    public logInfo(message: string): void {
        console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
    }

    public logError(message: string): void {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }

    public logWarn(message: string): void {
        console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
    }

    public logDebug(message: string): void {
        console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }
}
