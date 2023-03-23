import Car from './Car';
import Bike from './Bike';
import Garage from './Garage';

const car = new Car('Creta','Red','flex','BHI-9097',
    4, new Date('2023-03-03'));
console.log(car);

// car.fuelType = 'Flex'; propriedade privada
console.log(car.getFuelType());

car.setPurchasedOn(new Date('2023-03-08'));
console.log(car.getPurchasedOn());

console.log(car.purchasedDetails());

const bike = new Bike('Sport', 'Black',
        new Date('2023-03-17'));

const garage = new Garage('Rua da Maravilhas, 24');
garage.addVehicle(car);
garage.addVehicle(bike);

console.log(garage);