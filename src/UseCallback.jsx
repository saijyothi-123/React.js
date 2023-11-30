import { useCallback, useState } from "react"
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";


const ParentComp = () => {

    const [age,setAge] = useState(0);
    const [salary,setSalary] = useState(5000)

    const incrementAge = useCallback(()=> {
        setAge(age+1)
    },[age]);
    
    const incrementSalary = useCallback (() => {
        setSalary(salary+1000)
    },[salary]);

  return (
    <div style={{textAlign:"center"}}>
      <Title/>
      <Count text={"age"} number={age}/>
      <Button clickHandler={incrementAge}>incrementAge</Button>
      <Count text={"salary"} number={salary}/>
      <Button clickHandler={incrementSalary}>incrementSalary</Button>
    </div>
  )
}

export default ParentComp
