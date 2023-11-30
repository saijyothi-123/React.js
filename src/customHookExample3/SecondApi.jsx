
import useFetch from './useFetch'

const URL= "https://jsonplaceholder.typicode.com/users"
const SecondApi = () => {

    const [postdata,loading,isError] = useFetch(URL)

    if (loading){
        return <h3>loading...</h3>
    }

    if (isError){
        return <h3>somthing went wrong</h3>
    }

  return (
    <div style={{textAlign:"center"}}>
        <h3>email</h3>
        <ul>
           {postdata.map((eachUser) => {
            return <li key={eachUser.id}>{eachUser.email}</li>
           })}
        </ul>
    </div>
  )
}

export default SecondApi
