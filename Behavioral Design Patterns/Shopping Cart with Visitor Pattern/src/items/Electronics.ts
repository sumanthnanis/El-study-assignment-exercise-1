// src/items/Electronics.ts
import { IShoppingCartItem } from './IShoppingCartItem';
import { IVisitor } from '../visitors/IVisitor';

export class Electronics implements IShoppingCartItem {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitElectronics(this);
    }

    getPrice(): number {
        return this.price;
    }
}
