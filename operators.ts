// вспомогаетльные оперторы для взаимодействия с типами

//*======= keyof =========== 
// например создаим интерфейс
interface Person {
    name: string
    age: number
}

// и создам кастомный тип -  назначим ключи от интерфеса Person
type PersonKeys = keyof Person // Теперь значение PersonKeys может быть "name" или "age"
let val: PersonKeys = 'name'
val = 'age'
//val = 'job' // будет ошибка

//*======Exclude=========
type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// если нужно исключить некоторые поля:
//-----------------Исключить <из ключей катомного типа User, "поле 'id'" И 'createdAt'
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // останется поля: 'name' | 'email'

//* ===== Pick==========
//Pick - это как Exclude, только не исключает поля, а наоборот отбирает.
type UserKeysNoMeta2 = Pick<User, 'name' | 'email' > //  выбрать поля: 'name' | 'email'

const u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' // будет ошибка
