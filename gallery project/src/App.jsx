import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {


const [userData, setUserData] = useState([])

const getData = async()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=50")
  setUserData(response.data)
  console.log(response)
}

useEffect(function(){
  getData()
},[])



let printData = "no user found"
if(userData.length>0){
  printData = userData.map(function(elem, index){


    return <div className=''> 
      <div className='h-60 w-60 bg-amber-50 rounded-4xl overflow-hidden' key={index}>
      <img className='h-full w-full object-cover rounded-4xl ' src={elem.download_url} alt="" />
    </div>
    <h2 className='font-bold text-lg'>{elem.author}</h2>
    </div>

  })
}





  return (
    <>

<div className='background overflow-auto bg-black h-screen p-4  text-white'>
  <div className= 'flex flex-wrap gap-10 justify-around  '>
  {printData}
</div>
</div>


    </>
  )
}

export default App