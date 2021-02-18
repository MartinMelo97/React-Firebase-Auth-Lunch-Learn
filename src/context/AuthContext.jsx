import { createContext } from 'react'
import useFirebase from '../hooks/useFirebase'

const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
  const { isLoggedIn, user } = useFirebase()
  return (
    <AuthContext.Provider value={{
      isLoggedIn, user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContext }