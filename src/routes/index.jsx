import { Switch, Route } from 'react-router-dom'
import App from '../components/App'
import PrivateRoute from './privateRoute'
import Login from '../components/Login'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/app' component={App} />
    </Switch>
  )
}

export default Routes