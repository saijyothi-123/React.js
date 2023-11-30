
import useFetch from './useFetch'

const URL = "https://jsonplaceholder.typicode.com/users"

const FirstApi = () => {

    const [userdata,loading,isError] = useFetch(URL)

    if (loading){
        return <h3>loading...</h3>
    }

    if (isError){
        return <h3>somethimg went wrong...</h3>
    }

  return (
    <div style={{textAlign:"center"}}>
        <h3>users</h3>
        <ul>
           {userdata.map((eachUser) => {
               return <li key={eachUser.id}>{eachUser.username}</li>
           })}
        </ul>
    </div>
  )
}

export default FirstApi
