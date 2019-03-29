import { IUserIdentity } from '../models/user'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

// вновь определяем интерфейс для ответа от бэкэнда
// где в качестве data - указываем any (то есть, что угодно)
// здесь, это в качестве примера, так как бэкэнда у нас нет,
// и мы не знаем, что от него может прийти (будто бы)

interface IAuthResponse {
  status: number;
  data?: any; //[1]
  errorText?: string;
}

// функция-заглушка, которая будто-бы проверяет админ это или нет
// в качестве аргумента принимает тип IUserIdentity
// в качестве результата - возвращает boolean значение (true или false)

const checkCredentials = (data: IUserIdentity): boolean => {
  if (data.username === 'Admin' && data.password === '12345') {
    return true
  } else {
    return false
  }
}

// запрос к "псевдо-бэкэнду", принцип точной такой же, как и в случае с новостями
// разница лишь в том, что теперь наша функция принимает 1 аргумент - data
// вовзращает так же Promise<T>, где T - типа IAuthResponse

export const authenticate = (data: IUserIdentity): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    if (!checkCredentials(data)) {
      reject({
        status: 500,
        errorText: 'incorrect_login_or_password',
      })
    }
    window.localStorage.setItem('tstz.authenticated', 'true')
    resolve({
      status: 200,
      data: 'ok', // так как наш псевдо-бэкэнд отвечает string, мы можем исправить в IAuthResponse [1] any на string
    })
  })

  return promise
}

// функция для проверки, авторизован ли пользователь
// принимает 0 аргументов ()
// вовзвращает true или false (тип boolean)

export const checkAuthStatus = (): boolean => {
  if (localStorage.getItem('tstz.authenticated')) {
    return true
  } else {
    return false
  }
}

// функция для логаута, принимает 0 аргументов
// ничего не возвращает (для этого используется тип void)

export const logout = (): void => {
  window.localStorage.removeItem('tstz.authenticated')
  history.push('/')
}