import React from "react"
import { useState } from "react"
function Demo() {
    const [count,setCount]=useState(0)
    function add(){
        setCount(count + 1)
        return count
    }
    // function sub(){
    //     return count-1
    // }
    
    return (
    <div>
        <h1>Functional Component</h1>
        <p>This is a functional component</p>
        <h1>usestate</h1>
        
        <button onClick={add}>increment</button>
          <h1>{count}</h1>
        <button onClick={() => setCount(count-1)}>decrement</button>
    </div>
    )
}
export default Demo 
