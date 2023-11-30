import { useState } from "react"
import usePageTitle from './usePageTitle'


const PageTitleone = () => {

    const [count,setCount] = useState(0)

  usePageTitle(count)
  
  return (
    <div style={{textAlign:"center"}}>
       <button onClick={() => setCount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default PageTitleone
