//! Устанвока TypeScript:  


//! типы данных в ts
//! конспект в документах "LearnTypeScript" и "Проект fullstack MyAppMedicationReminder" по видео: https://youtu.be/nyIpDs2DJ_c

// не можем присвоить иной тип от установленногоы
//* булиан тип
const isFetching: boolean = true
const isLoading: boolean = false

//* числовой тип
const int: number = 42 
const float: number = 4.2
const num: number = 3e10

//* строкой тип
const message: string = 'Hello, TypeScript'

//* массивы - также можноу казать опредеелнные типы данных
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
// другой вид записи (дженерик называется)
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: string[] = ['Hello', 'TypeScript']

//* тип данных Tuple (тапо) - позволяет устанавливать несколько разных типов
//             [              ] - указывает что это массив
const contact: [string, number] = ['Rishat', 1234567] 

//* Any - переопределение на любой тип (как по стандарту в JS)
let variable: any = 42;
variable = "New String"
variable = []

//* входные и выходные типы данных для функций
// 1-пример:
function sayMyName(name: string): void { // void - функция ничего не возвращает
    console.log(name)
}
sayMyName("Хайзенберг"); // в консоли "Хайзенберг"

// 2-пример: входной тип данный string
function sayMyName2(name: string): string { // void - функция возвращает только строку
   return name // вернет строку
}
sayMyName2("Хайзенберг"); // вернет строку "Хайзенберг"

//* типа данный Never 
// 1-пример
// если функция постоянно что-то высчитывает, например выбрасываетs ошибку
function throwError(message: string): never {
    throw new Error(message)
}
// 2-пример (лучше не запускать - пк зависнит): бесконечный цикл
// function infinite(message: string): never {
//     while(true) { 
//     }
// }


//* Type
// Типа данных Type, который позволяет нам "создавать" самим типы данных
// То есть назначать алиасы (имена) для определенных типах данных, например:
type Login = string // назанчили тип алиасу
const login: Login = 'admin'

// также с помощью Type можно назначать несколько типов данных, например:
type ID = string | number
const id1: ID = 1234
const id2: ID = "1234"
// а во булеан тип я не могу уже присвоить - будет ошибка, потому что "string | number"
// const id3: ID = true

// null и undefined - используется редко
// обычно использует в таком контексте
type SomeType = string | null | undefined 


//* type с установкой множества значений
// пример обычного типового (string) кастомного типа"
type LoginOne = string // назначили тип алиасу
const loginOne: LoginOne = 'admin'

//* создам кастомный тип со множеством вариаций значений
type AlertTypes = 'success' | 'danger' | 'warning'

function setAlertTypes(type: AlertTypes) {
    // ...
}
setAlertType('success')
setAlertType('danger')
// setAlertType('не верное значение')
setAlertType('warning')