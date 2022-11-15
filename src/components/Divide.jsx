
import { useContext , useState } from "react"
import ValueContext from "../ValueContext"
const Divide = () => {
  const [divided , setDivided] = useState(6);
  const {value , Divider} = useContext(ValueContext)
  const DividerMain = () => {
    setDivided(divided / value)
    Divider(divided)
  }
  return (
    <div > <button onClick={DividerMain}>Divide</button>
   </div>
  )
}

export default Divide