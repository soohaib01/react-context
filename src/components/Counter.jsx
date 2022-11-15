import { useContext, useState } from "react"
import ValueContext from "../ValueContext"

const Counter = () => {
  const {value} = useContext(ValueContext)
  const {Increment, Decrement} = useContext(ValueContext)
  const [count,setCount] = useState(value)
  const minus = () => {
    if(count <= 0) {
      alert("You can't have more than")
    }
    else{
      setCount(count - 1)
      Decrement(count)
    } 
  }
  const plus = () => {
    setCount(count + 1)
    Increment(count)    
  }
  return (
    <div className="counter">
      <button className="plus" onClick={plus}>Plus +</button>
      <h2>{value}</h2>
      <button className="minus" onClick={minus}>Minus -</button>
    </div>
  )
}

export default Counter