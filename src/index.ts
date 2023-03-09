import Car from './Car';

const car = new Car('Creta','Red','flex','BHI-9097',
    4, new Date('2023-03-03'));
console.log(car);

// car.fuelType = 'Flex'; propriedade privada
console.log(car.getFuelType());

car.setPurchasedOn(new Date('2023-03-08'));
console.log(car.getPurchasedOn());

console.log(car.purchasedDetails());