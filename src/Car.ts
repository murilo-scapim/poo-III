class Car {
   // propriedades
   // por default é public
   model?: string; // propriedade opcional, union type entre string e undefined
   public color: string;
   private fuelType: string; // só a própria classe acessa
   private _licensePlate: string;
   private _ports: number; 
   private _purchasedOn: Date;

   constructor(model: string, color: string,
    fuelType: string, licensePlate: string,
    ports: number, purchasedOn: Date) {
        this.model = model;
        this.color = color;
        this.fuelType = fuelType;
        this._licensePlate = licensePlate;
        this._ports = ports;
        this._purchasedOn = purchasedOn;
    }

    public purchasedDetails(): string {
        return `Model: ${this.model},
            Fuel type: ${this.fuelType}, License plate: ${this._licensePlate}`;
    }

    // getter
    public getFuelType(): string {
       return this.fuelType;
    }

    public getPorts(): number {
       return this._ports;
    }

    public getPurchasedOn(): Date {
        return this._purchasedOn;
    }

    // setters
    public setFuelType(fuelType: string): void {
        this.fuelType = fuelType;
    }

    public setPorts(ports: number): void {
        this._ports = ports;
    }

    public setPurchasedOn(purchasedOn: Date): void {
        this._purchasedOn = purchasedOn;
    }
}

export default Car;