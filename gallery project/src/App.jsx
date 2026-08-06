import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {


const [userData, setUserData] = useState([])

const getData = async()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
  setUserData(response.data)
  console.log(response)
}



let printData = "no user found"
if(userData.length>0){
  printData = userData.map(function(elem, index){


    return <div  key={index}>
      <img className='h-40' src={elem.download_url} alt="" />
    </div>

  })
}





  return (
    <>

<div className='background overflow-auto bg-black h-screen p-5 text-white'>
  <button
  onClick={getData} 
  className='bg-green-500 py-3 px-5 rounded-4xl'>show data
  </button>
  <div className= 'flex flex-wrap gap-4'>
  {printData}
</div>
</div>


    </>
  )
}

export default App