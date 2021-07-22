import React, { useContext } from 'react'
import { AppContext } from '../UseContextComponent'

export const UserProfile = () => {
  const value = useContext(AppContext)
  return (
    <div>
      {/* <AppContext.Consumer>
        {value => {
          return (
            <ul>
              <li>name: {value.name}</li>
              <li>age: {value.age}</li>
            </ul>
          )
        }}
      </AppContext.Consumer> */}
      <ul>
        <li>name: {value.name}</li>
        <li>age: {value.age}</li>
      </ul>
    </div>
  )
}
