import { House } from './House';

export class HouseBuilder {
    private rooms: number = 0;
    private color: string = '';
    private hasGarden: boolean = false;
    private hasGarage: boolean = false;

    public setRooms(rooms: number): HouseBuilder {
        this.rooms = rooms;
        return this;
    }

    public setColor(color: string): HouseBuilder {
        this.color = color;
        return this;
    }

    public setGarden(hasGarden: boolean): HouseBuilder {
        this.hasGarden = hasGarden;
        return this;
    }

    public setGarage(hasGarage: boolean): HouseBuilder {
        this.hasGarage = hasGarage;
        return this;
    }

    public build(): House {
        return new House(this.rooms, this.color, this.hasGarden, this.hasGarage);
    }
}
