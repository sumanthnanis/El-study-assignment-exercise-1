// src/shapes/Circle.ts
import { IShape } from './IShape';

export class Circle implements IShape {
    draw(): void {
        console.log('Drawing a Circle');
    }
}
