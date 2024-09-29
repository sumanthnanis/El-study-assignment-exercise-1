"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static validateString(input, fieldName) {
        if (!input || input.trim().length === 0) {
            throw new Error(`${fieldName} cannot be empty`);
        }
        return true;
    }
    static validateSubscriberName(name) {
        return Validator.validateString(name, 'Subscriber name');
    }
    static validateNonEmptyString(input) {
        return input.trim().length > 0;
    }
}
exports.Validator = Validator;
