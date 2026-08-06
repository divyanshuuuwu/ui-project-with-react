import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {


  const [userData, setUserData] = useState([])

const getData = async()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
  setUserData(response.data[0].author)

}



  return (
    <>

<div className='background bg-black h-screen p-5 text-white'>
  <button
  onClick={getData} 
  className='bg-green-500 py-3 px-5 rounded-4xl'>show data
  </button>
</div>


    </>
  )
}

export default App