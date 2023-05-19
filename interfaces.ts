//! интерфейсы  
interface Rect {
    readonly id: string // string и только для чтения
    color?: string // string и ? - не обязательный параметр (можно и добавлять в объект, а можно нет)
    size: {
        width: number
        height: number
    }

}

//  создаем объект основываясь на типовом объекте Rect
const rect1: Rect = {
    id: '1',
    //color: "blue", // необязательное поле, т.к. - ?
    size: {
        width: 5,
        height: 5
    }
}

// не присваиваю свойство "color", т.к. - ?
const rect2: Rect = {
    id: '5',
    size: {
        width: 10,
        height: 10
    }
}
// укажем отдельно (const позволяет менять его содержимое по отдельности)
rect2.color = "green"
// если попробовать перезаписать свойство, 
// которое помечено readonly (можно только читать), то будет ошибка
//*rect2.id = '1234' // ошибка

// установить интерфейс еще пустому объекту:
const rect3 = {} as Rect
// альтернативная старая версия этой записи
const rect4 = <Rect>{}

//========================наследование от интерфейса=============================
interface RectWithArea extends Rect {
    // метод
    getArea: () => number // должен вернуть тип number
}

// создаем объект на основе интерфейса
const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    },
}


//======================взаимодействие интерфейсов с классами===============================
// имплементация - имплементировать – это реализовывать в программе какой-либо функционал.
// создадим интерфейс
interface IClock {
    time: Date // тип данных Дата
    setTime(date: Date): void // метод ничего не возвращает
}

// создадим класс и наследуем от интерфейса 
class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void { 
        this.time = date
    }
}

// ========================указание типа данных для всех данных========================
// [для всех ключей: string]: для всех значений: string
interface Styles {
    [key: string]: string // поле == строка : значение == строка
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}