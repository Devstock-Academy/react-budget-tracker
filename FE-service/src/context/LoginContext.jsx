import { createContext, useState } from 'react'

export const LoginContext = createContext(null)

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  )
}
