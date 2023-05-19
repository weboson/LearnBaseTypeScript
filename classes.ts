//! классы
class Typescript {
    version: string // свойство классов: https://learn.javascript.ru/class#svoystva-klassov

    constructor(version: string) {
        this.version = version
    }

    // метод
    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
} 

// class Car {
//     // только для чтения - перезаписать мы можем только в constructor(), в других методах мы уже не сможем
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

// альтернативная короткая запись - если свойство model = параметру в constructor()
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}



//========================модификаторы====================================
class Animal {
    protected voice: string = '' // доступны как в родном классе, так и в классах наследуемых, но не в экземплярах
    public color: string = 'black'

    // также можно метод
    private go() {  // только в родном классе
        console.log('Go');  
    }
}

// наследуется
class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice // тот который protected
    }
}

// экземпляр 
const cat = new Cat()
// cat.voice - нельзя так как это экземпляр
console.log(cat.color); // public
cat.setVoice('мяу') // public


// ===================абстрактные классы=================================

abstract class Component {
    abstract render(): void // должен быть render => void
    abstract info(): string // должен быть info => string
}

// наследуемый класс, обязан иметь установленные поля с установленными типами
class AppComponent extends Component {
    render(): void {
        console.log('Component on render'); 
    }
    info(): string {
        return "This is info"
    }
}