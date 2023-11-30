import { useEffect, useRef, useState } from "react";


const UseRef_1 = () => {

  const [firstName,setFirstName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current +1
  }

  );
  return (
    <div>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={(e) => {setFirstName(e.target.value)
      }}/>
      <h5>Typing:{firstName}</h5>
      <h5>Component renderd {renderCount.current} times</h5>
    </div>
  )
}

export default UseRef_1
