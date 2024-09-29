// src/items/Clothing.ts
import { IShoppingCartItem } from './IShoppingCartItem';
import { IVisitor } from '../visitors/IVisitor';

export class Clothing implements IShoppingCartItem {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitClothing(this);
    }

    getPrice(): number {
        return this.price;
    }
}
