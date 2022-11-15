import { useContext, useState } from "react";
import ValueContext from "../ValueContext";

const Multiply = () => {
  const [MultiplyVal, setMultiplyVal] = useState(5);
  const { value } = useContext(ValueContext);
  const { Multiply } = useContext(ValueContext);
  const Multiplication = () => {
    setMultiplyVal(MultiplyVal * value);
    Multiply(MultiplyVal);
  }


  return (
    <div>
      <button onClick={Multiplication}>Multiply</button>
  
    </div>
  );
};

export default Multiply;
