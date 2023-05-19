//! проверка на наследие (как instanceof в JS)

// пример без проверки на наследие, просто typeof
function strip(x: string | number) {
    if(typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
} 

// чтобы определить MyResonse или MyError используем instanceof
function handle(res: MyResponse | MyError) { // параметр вида MyResponse или MyError
    // определим предка
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result // используются поля от MyResponse: header и result
        }
    }
     else { // подразумевается (res instanceof MyError)
        return {
            info: res.header + res.message 
        }
    }

}

//* type с установкой множества значений
// пример обычного типового (string) кастомного типа"
type Login1 = string // назначили тип алиасу
const login1: Login = 'admin'

//* создам кастомный тип со множеством вариаций значений
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // ...
}
setAlertType('success')
setAlertType('danger')
// setAlertType('неверное значение')
setAlertType('warning')