// src/ShoppingCart.ts
import { IShoppingCartItem } from './items/IShoppingCartItem';
import { IVisitor } from './visitors/IVisitor';

export class ShoppingCart {
    private items: IShoppingCartItem[] = [];

    addItem(item: IShoppingCartItem): void {
        this.items.push(item);
    }

    calculateTotal(visitor: IVisitor): number {
        let total = 0;
        for (const item of this.items) {
            total += item.accept(visitor);
        }
        return total;
    }
}
