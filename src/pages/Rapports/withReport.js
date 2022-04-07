import { useState } from "react"

const withReport = Component => (props) => {

  const [user, setUser] = useState(null) 

  if(user == null){
    return <LoginPage handlerLogin={setUser} />  
  }else{
    return <Component {...props} />
  }  
}

export default withReport