import { useContext, useState } from "react"
import ValueContext from "../ValueContext"

const Subtract = () => {
  const {value,Subtraction} = useContext(ValueContext);
  const [subtractValueDefault,setSubtractValueDefault] = useState(4)
  const Subtracted = () => {
    if(subtractValueDefault <= 0){
      console.log("Can't Subtract More Be Positive")
    }
    else{
      setSubtractValueDefault(subtractValueDefault - value)
      Subtraction(subtractValueDefault)
    }
  }
  return (
    <div>
       <div > <button onClick={Subtracted}>Subtract</button>
   </div>
    </div>
  )
}

export default Subtract