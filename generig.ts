//! generic 
//                тип объекта<тип данных содержимого>
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5] // массив из number
const arrayOfString: Array<string> = ["Hello", "Rishat"] // массив из strings
const arrayOfBoolean: Array<boolean> = [true, false] // массив из strings

// с помощью generic можно создавать типы в момент объявления функции:
//        <принимает тип>(параметры типа): => новый тип
function reverse<newType>(array: newType[]): newType[] {
    return array.reverse()
}

// синтакис функции (выше) позволяет принимать и возвращать любой тип данных
reverse(arrayOfNumbers)
reverse(arrayOfString)
reverse(arrayOfBoolean)