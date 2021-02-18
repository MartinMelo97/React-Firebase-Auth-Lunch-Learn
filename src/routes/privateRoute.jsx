import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <Route {...props} render={
      propsRoute => isLoggedIn
        ? <Component {...propsRoute} />
        : <Redirect to='/login' />
      }
    />
  )
}
export default PrivateRoute