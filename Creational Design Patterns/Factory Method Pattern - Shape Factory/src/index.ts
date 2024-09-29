// src/index.ts
import { ShapeFactory } from './shapes/ShapeFactory';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the shape type (circle or square): ', (shapeType) => {
    try {
        const shape = ShapeFactory.createShape(shapeType);
        shape.draw();
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('An unknown error occurred');
        }
    } finally {
        rl.close();
    }
});
