// Your code here

class Cat{
    constructor(name, sex){
        this.name = name;
        this.age = sex;
    }

    meow(){
        return `${this.name} says meow!`;
    }
} 

class Dog{ 
    constructor(name,sex) {
        this.name = name;
        this.age = sex;
    }
     
    bark(){
       return `${this.name}says woof!`;
    }

}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squawk!`;
        }
    }
}

let myCat = new Cat('Will','female');
console.log(myCat.speak()); // Will says meow!

let myDog = new Dog('Bruno', 'male');
console.log(myDog.speak());// Bruno says woof!

let myBird = new Bird ('Holly','male');
console.log(myBird.speak()); // It's me! Holly, the parrot!

let myOtherBird = new Bird('Cate', 'female');
console.log(myOtherBird.speak()); // Cate says squawk!

