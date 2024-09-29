import { IShoppingCartItem } from './IShoppingCartItem';
import { IVisitor } from '../visitors/IVisitor';

export class Book implements IShoppingCartItem {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    accept(visitor: IVisitor): number {
        return visitor.visitBook(this);
    }

    getPrice(): number {
        return this.price;
    }
}
