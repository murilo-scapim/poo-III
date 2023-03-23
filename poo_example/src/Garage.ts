import Vehicle from "./Vehicle";

class Garage {
    private address: string;
    private vehicles: Vehicle[] = [];
    // private vehicles: Array<Vehicle> = new Array();

    constructor(address: string) {
        this.address = address;
    }

    public addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
    }
}

export default Garage;