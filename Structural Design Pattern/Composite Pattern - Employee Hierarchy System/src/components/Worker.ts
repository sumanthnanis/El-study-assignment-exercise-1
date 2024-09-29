// src/components/Worker.ts
export class Worker {
    private name: string;
    private position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    getName(): string {
        return this.name;
    }

    getPosition(): string {
        return this.position;
    }
}
