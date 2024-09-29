"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsSubscriber = void 0;
const LoggerService_1 = require("../services/LoggerService");
class NewsSubscriber {
    constructor(name) {
        this.name = name;
        this.logger = new LoggerService_1.LoggerService();
    }
    update(article) {
        this.logger.logInfo(`${this.name} received article: ${article}`);
    }
    getName() {
        return this.name;
    }
}
exports.NewsSubscriber = NewsSubscriber;
