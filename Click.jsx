import React , {useState} from "react";


const Counter= (props) => {
    const[count, setCount] = useState(0);
const increment =() => {

    setCount(count +1)

}
const decrement = () =>
 {
setCount(count-2)
}

    
  return (<div>
    <h1>{count}</h1>
    <h2>clickCounter</h2>
    <button onClick={increment}>click on increase</button>
    <button onClick={decrement}>click on decrease</button>
  </div>);
}


export default Counter ;