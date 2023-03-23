import Vehicle from './Vehicle';

// Carro é um Veículo
class Car extends Vehicle {
   private fuelType: string; // só a própria classe acessa
   private _licensePlate: string;
   private _ports: number;

   constructor(model: string, color: string, fuelType: string,
    licensePlate: string, ports: number, purchasedOn: Date) {
        super(model, color, purchasedOn)
        this.fuelType = fuelType;
        this._licensePlate = licensePlate;
        this._ports = ports;
    }

    // getters
    public getFuelType(): string {
       return this.fuelType;
    }

    public getLicensePlate(): string {
        return this._licensePlate;
    }

    public getPorts(): number {
       return this._ports;
    }

    // setters
    public setFuelType(fuelType: string): void {
        this.fuelType = fuelType;
    }

    public setLicensePlate(licensePlate: string): void {
        this._licensePlate = licensePlate;
    }

    public setPorts(ports: number): void {
        this._ports = ports;
    }
}

export default Car;