import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import useFirebase from '../../hooks/useFirebase'

const Navbar = () => {
  const { isLoggedIn, user } = useContext(AuthContext)
  const { logout } = useFirebase()

  return (
    <div style={{
      width: '100%',
      height: '10vh',
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: '10px'
    }}>
        {isLoggedIn ?
        <>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <p>{user.displayName} ({user.email})</p>
            <img src={user.photoURL} alt={user.displayName} style={{ width: '15%', marginLeft: '20px' }}/>
          </div>
          <button onClick={logout} style={{ backgroundColor: '#fff', border: 'none', padding: '10px', marginRight: '20px' }}>Cerrar sesión</button>
        </>
        : <Link to='login' style={{ color: '#fff', marginRight: '20px' }}>Iniciar sesión</Link>}
    </div>
  )
}

export default Navbar