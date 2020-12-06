

class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

class Doctor extends User{
    xxx;
    constructor(name, age, xxx) {
        super(name, age);
        this.xxx = xxx;
    }
}

let d1 = new Doctor('kim', 21, 'ayl ban');
