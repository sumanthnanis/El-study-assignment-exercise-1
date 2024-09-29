// src/shapes/ShapeFactory.ts
import { IShape } from './IShape';
import { Circle } from './Circle';
import { Square } from './Square';

export class ShapeFactory {
    static createShape(shapeType: string): IShape {
        switch (shapeType.toLowerCase()) {
            case 'circle':
                return new Circle();
            case 'square':
                return new Square();
            default:
                throw new Error('Shape type not recognized');
        }
    }
}
