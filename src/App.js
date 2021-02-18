import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'
import Routes from './routes'
import Navbar from './components/Navbar'

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  const history = useHistory()

  useEffect(() => {
    if (isLoggedIn) history.push('/app')
  }, [isLoggedIn, history])

  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
