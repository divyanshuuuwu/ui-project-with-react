import React from 'react'
import axios from 'axios'


const App = () => {

const getData = async()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
  console.log(response.data[0].author)
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