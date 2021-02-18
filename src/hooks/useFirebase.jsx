import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const useFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID
    });
  }
  const auth = firebase.auth()
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    const onAuthStateChanged = () => {
      return auth.onAuthStateChanged(user => {
        setUser(user ? user : {})
        setIsLoggedIn(!!user)
      })
    }
    onAuthStateChanged()
    return () => {
      console.log('unmount')
    }
  }, [])

  const registerWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider)
    } catch(error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      throw error
    }
  }

  return {
    user, isLoggedIn, registerWithGoogle, logout }
};

export default useFirebase