import { Book } from '../items/Book';
import { Clothing } from '../items/Clothing';
import { Electronics } from '../items/Electronics';

export interface IVisitor {
    visitBook(book: Book): number;
    visitClothing(clothing: Clothing): number;
    visitElectronics(electronics: Electronics): number;
}
