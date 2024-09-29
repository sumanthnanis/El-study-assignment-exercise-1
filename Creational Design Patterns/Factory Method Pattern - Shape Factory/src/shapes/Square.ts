// src/shapes/Square.ts
import { IShape } from './IShape';

export class Square implements IShape {
    draw(): void {
        console.log('Drawing a Square');
    }
}
