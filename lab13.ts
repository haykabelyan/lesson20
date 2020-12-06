


abstract class User {
    constructor(private name: string, private age: number) {
    }

    logInfo(): void{
        console.log(this.name, this.age);
    }

}

interface ICar {
    model: string;
    color: string;
}

interface IGetBirthYear{
    getBirthYear(): void;
}


class Doctor extends User implements ICar, IGetBirthYear{
    model: string;
    color: string;

    constructor(name: string, age: number, model: string, color: string) {
        super(name, age);
        this.model = model;
        this.color = color;
    }

    getBirthYear() {
    }
}