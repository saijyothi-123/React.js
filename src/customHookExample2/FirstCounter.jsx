import useCounter from "./useCounter"


const FirstCounter = () => {

    const [count,increment,decrement,reset] = useCounter()


  return (
    <div style={{textAlign:"center"}}>
        <h2>Count == {count}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default FirstCounter
