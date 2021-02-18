import useFirebase from '../../hooks/useFirebase'

const Login = () => {
  const { registerWithGoogle } = useFirebase()
  return (
    <div style={{
      width: '100%',
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <button onClick={registerWithGoogle}>Iniciar sesión con Google</button>
    </div>
  )
}

export default Login