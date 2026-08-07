import React from 'react'
import UserContext from './contexts/UserContext'
import Home from './components/Home'
const App = () => {

const user = {
  name:"div",
  age:21
}



  return (
    <div>
      <UserContext.Provider value={user}>
      <Home/>
      </UserContext.Provider>


    </div>
  )
}

export default App