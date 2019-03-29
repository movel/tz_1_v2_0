import * as React from 'react'

import { RouteComponentProps } from 'react-router-dom'

import { authenticate } from '../api/auth'
import { IUserIdentity } from '../models/user'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

// компонент не принимает ничего, кроме свойств из роутера
// поэтому указываем их сразу в < >
const Login: React.FC<RouteComponentProps> = () => {

  // useStaet так же, как и useEffect - дженерик,
  // поэтому указываем тип переменной, которая будет участвовать в state
  const [user, setField] = React.useState<IUserIdentity>({
    username: '',
    password: '',
  })

  // аналогично, указываем тип переменной (простая строка) для "уведомления"
  const [notification, setNotification] = React.useState<string>('')

  // для e (event) указываем, что это <input />
  // запись имеет вид: React.SyntheticEvent<HTMLInputElement>
  const onInputChange = (fieldName: string) => (
    e: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setField({
      ...user,
      [fieldName]: e.currentTarget.value,
    })
    setNotification('')
  }

  // для e (event) указываем, что это тэг form
  // запись имеет вид: React.SyntheticEvent<HTMLFormElement>
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticate(user)
      .then(() => {
        history.push('/profile') // переадресация на profile
      })
      .catch(err => {
        if (err.errorText) {
          setNotification(err.errorText)
        } else {
          // tslint:disable-next-line: no-console
          console.warn('request problem', err)
        }
      })
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        {notification ? <p>{notification}</p> : null}
        <input
          type="text"
          value={user.username}
          onChange={onInputChange('username')}
        />
        <input
          type="text"
          value={user.password}
          onChange={onInputChange('password')}
        />
        <button>Login</button>
      </form>
    </>
  )
}

export { Login }