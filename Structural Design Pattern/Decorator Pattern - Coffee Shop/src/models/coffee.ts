export interface Coffee {
    cost(): number;
    getDescription(): string;
}

export class SimpleCoffee implements Coffee {
    cost(): number {
        return 5.0;
    }

    getDescription(): string {
        return 'Simple Coffee';
    }
}
