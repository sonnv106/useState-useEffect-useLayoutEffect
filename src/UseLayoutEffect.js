import { useState, useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = ()=>{
    const [count, setCount] = useState(0)
    useLayoutEffect(()=>{
        if(count>3){
            setCount(0)
        }
    },[count])
    const increment = ()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default UseLayoutEffect;