export class Validator {
    public static validateString(input: string, fieldName: string): boolean {
        if (!input || input.trim().length === 0) {
            throw new Error(`${fieldName} cannot be empty`);
        }
        return true;
    }
    
    public static validateSubscriberName(name: string): boolean {
        return Validator.validateString(name, 'Subscriber name');
    }

    static validateNonEmptyString(input: string): boolean {
        return input.trim().length > 0;
    }

}


