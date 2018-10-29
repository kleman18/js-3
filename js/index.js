// IIFE
(function() {
    let teslaX = {};
    teslaX.name = 'Tesla X';
    teslaX.color = 'red';
    teslaX.price = 100000;
    teslaX.beep = beep;
    teslaX.beep();

    let teslaS = {};
    teslaS.name = 'Tesla S';
    teslaS.color = 'black';
    teslaS.price = 900000;
    teslaS.beep = beep;
    teslaS.beep();

    function beep() {
        alert(this.name + 'beep-beep');
    }

    let tesla3 = {
        name: 'Tesla 3',
        color: 'blue',
        price: 50000,
        beep: beep
    };
    tesla3.beep();

    function Car(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
        return this;
    }
    Car.prototype.beep = beep;

    let teslaRoadster = new Car('TeslaRoadster', 'red', 200000);
    teslaRoadster.beep();


    class SuperCar {
        constructor(name, color, price) {
            this.name = name;
            this.color = color;
            this.price = price;
        }
        beep() {
            alert(this.name + ' ' + this.color + ' beep-beep!');
        }
    }

    let ferrariF430 = new SuperCar('Ferrari F430', 'red', 300000);
    ferrariF430.beep();

    let ferrariF430Black = Object.create(ferrariF430);
    ferrariF430Black.color = 'black';
    ferrariF430Black.price = 320000;
    ferrariF430Black.beep();

    const carStr = `
{
    "name": "Chevrolet Corvette",
    "color": "silver",
    "price": 90000
}
`

    let corvette = JSON.parse(carStr);
    corvette.beep = beep;
    corvette.beep();
    
    // Closure
    function counter() {
        let cntr = 0;
        return function () {
            return ++cntr;
        }
    }
    let cntr = counter();
    alert(cntr());
    alert(cntr());
    
    setInterval( () => document.body.innerHTML = (new Date()).toLocaleTimeString(), 1000 );
    
})();


let students = {};
students['Ivanov'] = {name: 'Ivan', surname: 'Ivanov'};
students['Petrov'] = {name: 'Petro', surname: 'Petrov'};
students['Shevchenko'] = {name: 'Vasyl', surname: 'Shevchenko'};
alert(students['Shevchenko'].name);
// alert(students.Shevchenko.name); - not OK

let teachers = new Map();
teachers.set('Ivanov', {name: 'Ivan', surname: 'Ivanov'});
teachers.set('Shevchenko', {name: 'Vasyl', surname: 'Shevchenko'});
alert(teachers.get('Shevchenko').name);

const nums = [1, 2, 3, 3, 3, 4, 4, 6, 1, 2];
const uniqueNums = new Set(nums);
console.log(uniqueNums);

for (let num of uniqueNums) {
    alert(num);
}
