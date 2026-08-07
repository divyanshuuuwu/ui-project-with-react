import {useContext} from "react"
import UserContext from '../contexts/UserContext'


const Avatar = () => {

 const user = useContext(UserContext)


  return (
<h1>
    {user.age}
</h1>  )
}

export default Avatar