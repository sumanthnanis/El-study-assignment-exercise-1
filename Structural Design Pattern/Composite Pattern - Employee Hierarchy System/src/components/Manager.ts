// src/components/Manager.ts
import { Worker } from './Worker';

export class Manager {
    private name: string;
    private position: string;
    private subordinates: Worker[] = [];

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    addSubordinate(worker: Worker): void {
        this.subordinates.push(worker);
    }

    getDetails(): string {
        const workerDetails = this.subordinates.map(
            (worker) => `- ${worker.getName()}, ${worker.getPosition()}`
        ).join('\n');
        return `${this.name}, ${this.position}\nSubordinates:\n${workerDetails}`;
    }
}
