"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
class LoggerService {
    logInfo(message) {
        console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
    }
    logError(message) {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }
    logWarn(message) {
        console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
    }
    logDebug(message) {
        console.debug(`[DEBUG] ${new Date().toISOString()}: ${message}`);
    }
}
exports.LoggerService = LoggerService;
