import { useState } from "react"
import usePageTitle from "./usePageTitle"

const PageTitleTwo = () => {

    const [count,setCount] = useState(0)

    usePageTitle(count);

  return (
    <div style={{textAlign:"center"}}>
       <button onClick={() => setCount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default PageTitleTwo
