import useCounter from "./useCounter"

const SecondCounter = () => {
    const [count,increment,decrement,reset] = useCounter(10)

  return (
    <div style={{textAlign:"center"}}>
        <h2>Count == {count}</h2>
       <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
       <button onClick={reset}>reset</button>
      
    </div>
  )
}

export default SecondCounter
