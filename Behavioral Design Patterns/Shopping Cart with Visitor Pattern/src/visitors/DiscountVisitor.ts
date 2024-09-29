// src/visitors/DiscountVisitor.ts
import { IVisitor } from './IVisitor';
import { Book } from '../items/Book';
import { Clothing } from '../items/Clothing';
import { Electronics } from '../items/Electronics';

export class DiscountVisitor implements IVisitor {
    visitBook(book: Book): number {
        const discount = 0.1; // 10% discount on books
        return book.getPrice() * (1 - discount);
    }

    visitClothing(clothing: Clothing): number {
        const discount = 0.2; // 20% discount on clothing
        return clothing.getPrice() * (1 - discount);
    }

    visitElectronics(electronics: Electronics): number {
        const discount = 0.15; // 15% discount on electronics
        return electronics.getPrice() * (1 - discount);
    }
}
