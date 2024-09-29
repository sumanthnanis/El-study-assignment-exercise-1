// src/items/IShoppingCartItem.ts
import { IVisitor } from '../visitors/IVisitor';

export interface IShoppingCartItem {
    accept(visitor: IVisitor): number; 
}
