import * as React from 'react'

import { RouteComponentProps } from 'react-router-dom'

import { authenticate, checkAuthStatus } from '../api/auth'
import { IUserIdentity } from '../models/user'


// компонент не принимает ничего, кроме свойств из роутера
// поэтому указываем их сразу в < >
const Login: React.FC<RouteComponentProps> = props => {

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
        // window.location.href = ('/profile'); // переадресация на profile
        props.history.push('/profile')
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
    
      <div>
        {
          checkAuthStatus() && (
            <h4>
              You are logged in! COOL!!!
            </h4>

          )
        }
        {
          !checkAuthStatus() && (
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
                  type="password"
                  value={user.password}
                  onChange={onInputChange('password')}
                />
                <button>Login</button>
              </form>
            </>
          )
        }        
      </div>    
  )
}

export { Login }