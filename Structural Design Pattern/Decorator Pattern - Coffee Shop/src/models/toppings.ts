import { Coffee } from './coffee';

export abstract class ToppingDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    abstract cost(): number;
    abstract getDescription(): string;
}

export class Milk extends ToppingDecorator {
    cost(): number {
        return this.coffee.cost() + 1.5;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ', Milk';
    }
}

export class Sugar extends ToppingDecorator {
    cost(): number {
        return this.coffee.cost() + 0.5;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ', Sugar';
    }
}
