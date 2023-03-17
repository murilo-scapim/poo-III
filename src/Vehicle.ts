class Vehicle {
    // propriedades
   // por default é public
   model?: string; // propriedade opcional, union type entre string e undefined
   public color: string;
   private _purchasedOn: Date;

   constructor(model: string, color: string, purchasedOn: Date) {
        this.model = model;
        this.color = color;
        this._purchasedOn = purchasedOn;
    }

    public purchasedDetails(): string {
        return `Model: ${this.model},
            Color: ${this.color}, Purchased On: ${this._purchasedOn}`;
    }

    public getModel(): string | undefined {
        return this.model;
    }

    public setModel(model: string) {
        this.model = model;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getPurchasedOn(): Date {
        return this._purchasedOn;
    }

    public setPurchasedOn(purchasedOn: Date): void {
        this._purchasedOn = purchasedOn;
    }
}