import { useMemo, useState } from "react"


const UseMemo = () => {

    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    },[number]);

    const themeChange = useMemo(() => {
        return{
            backgroundColor:dark?"black":"white",
            color:dark?"white":"black",
        };
    },[dark]);

  return (
    <div style={{textAlign:"center"}}>
      <div>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
        <br/>
        <div>
            <button onClick={() => setDark(!dark)}>change theme</button>
        </div>
        <h3 style={themeChange}>number:{doubleNumber}</h3>
    </div>
  )
}

const slowFunction = (number) => {
    for (let i = 0; i <1000000000000; i++)
    return number*2;
}
export default UseMemo
