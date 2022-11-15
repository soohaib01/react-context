import { createContext , useState } from "react";

const ValueContext = createContext();

export function ValueProvider({children}){
    const defaultValue = 1;
    const [value,setValue] = useState(defaultValue);
    
    const Multiply = (multiplyVal) => {
    setValue(multiplyVal * value)
    }
    const Increment = (incrementVal) => {
        setValue(incrementVal)
    }
    const Decrement = (decrementVal) => {
        setValue(decrementVal)
    }
    const Divider = (devideVal) => {
        setValue(devideVal)
    }
    const Subtraction = (subVal) => {
        setValue(subVal)
    }
    return (
        <ValueContext.Provider value={{ value, Multiply, Increment ,Decrement , Divider ,Subtraction}}>
            {children}
        </ValueContext.Provider>
    )
}

export default ValueContext