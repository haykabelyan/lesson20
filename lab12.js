

class Car{
    model;
    color;
    year;
    constructor(model, color, year) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}


class Opel extends Car{
    xxx;
    constructor(model, color, year, xxx) {
        super(model, color, year);
        this.xxx = xxx;
    }
}

let opel1 = new Opel('astra', 2008, 'red', 'ayl ban');
