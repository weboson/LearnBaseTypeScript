//! функции и перегрузка функции

// функция ожидает параметры определенного типа, и на выходе должен вернуть определенный тип (number)
function add(a: number, b: number): number { // возращает тип number
    return a + b
}
// на входе строка, на выходе тоже строка
function toUpperCase(str: string): string { // возращает тип string
    return str.trim().toUpperCase()
}



//* =============перегрузка функций====================

// интерфейс для функций, случай 1-й (ниже)
interface MyPosition {
    x: number | undefined // number ИЛИ undefined
    y: number | undefined 
}

// интерфейс наследует от другого
interface MyPositionWithDefault extends MyPosition {
    default?: string // значение строка
}

// создаем правила для функции, при разных случаев
//1-й случай, если в функцию вызовут без параметров 
function position(): MyPosition
// 2-й случай, если функцию вызовут с одним параметром => вренет MyPosiyion + MyPositionWithDefault
function position(a: number): MyPositionWithDefault
// 3-й случай, если функцию вызовут с двумя параметрами => вернет MyPosiyion со значениями undefined
function position(a: number, b: number): MyPosition

// сама функция
function position(a?: number, b?: number) { // a? и b? т.к. парметры не обязательны, для этого определен случай №1
    //реализация случаев
    if (!a && !b) { // если нет параметров (1-й случай)
        return {x: undefined, y: undefined} // вернуть объект по правилам шаблона интрефейса MyPosition
    }
    if (a && !b) { // если 1 параметр
        return {x: a, y: undefined, default: a.toString()} // вернет по MyPosition и MyPositionWithDefault
    }
    // и если все параметры
    return {x: a, y: b} // вернуть присвоенные данные,заполняя шаблон MyPosition
    
}

// запустим 3 случая функции position
console.log('Emty: ', position());
console.log('One params: ', position(42));
console.log('Two params: ', position(12, 11));