// src/House.ts
export class House {
    public rooms: number;
    public color: string;
    public hasGarden: boolean;
    public hasGarage: boolean;

    constructor(rooms: number, color: string, hasGarden: boolean, hasGarage: boolean) {
        this.rooms = rooms;
        this.color = color;
        this.hasGarden = hasGarden;
        this.hasGarage = hasGarage;
    }

    public showDetails(): void {
        console.log(`House Details:
        Rooms: ${this.rooms}
        Color: ${this.color}
        Garden: ${this.hasGarden ? 'Yes' : 'No'}
        Garage: ${this.hasGarage ? 'Yes' : 'No'}
        `);
    }
}
