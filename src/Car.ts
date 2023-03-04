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
}

export default Car;