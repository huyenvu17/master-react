import React from 'react'
import { User } from './User/User'
export const AppContext = React.createContext()
export const UseContextComponent = () => {
  const user = {
    name: 'john doe',
    age: 20
  }
  return (
    <div>
      <AppContext.Provider value={user}>
        <User />
      </AppContext.Provider>
    </div>
  )
}
