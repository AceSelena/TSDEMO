function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label)
}

let myObj ={size:10,label:'Size 10 object'};

printLabel(myObj)
//readonly赋值一次无法修改
interface Point{
    readonly x:number;
    readonly y:number;
}
let p1:Point={x:10,y:20}

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

function identity<T>(arg: T): T {
    return arg;
}