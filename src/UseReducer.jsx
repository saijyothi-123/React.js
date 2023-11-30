import { useEffect, useReducer, useState } from "react"

const reducer = (state,action)=>{
    if (action.type === "UPDATE_USERS_DATA"){
        return{
            ...state,
            userData:action.payload,
        };
    }

    if (action.type === "LOADING"){
        return{
            ...state,
            isLoading:action.payload,
        }
    }

    if (action.type === "DELETE_USER"){
        const newUsers = state.userData.filter(
            (eachUser) => eachUser.id !== action.payload
        )
        return{
            ...state,
            userData:newUsers,
        }
    }

    if (action.type === "ONCLICK_EDIT"){
        return{
            ...state,
            isEditing:action.payload
        }
    }
    return state;
}
const UseReducer = () => {
    const fetchUsersData = async (URL) => {
        dispatch ({type:"LOADING",payload:true})
        dispatch({type:"ERROR",payload:{status:false,msg:""}})
    try{
        const response = await fetch(URL)
        const data=await response.json();
        dispatch({type:"UPDATE_USERS_DATA",payload:data});
        dispatch({type:"LOADING",payload:false});
        dispatch({type:"ERROR",payload:{status:false,msg:""}})
    }catch(error){
        dispatch({type:"LOADING",payload:false})
        dispatch({type:"Error",payload:{status:true,msg:error.message}})
    }
    };

    useEffect(() => {
        fetchUsersData("https://jsonplaceholder.typicode.com/users")
    },[]);

    const initialState = {
        userData : [],
        isLoading:false,
        isError:{status:false,msg:""}
        isEditing:{status:false,id:'',name:'',email:''}
    }

    const [state,dispatch]=useReducer(reducer,initialState)

    const handleDelete = (id) => {
        dispatch({type:"DELETE_USER",payload:id});
    }

    const updateData = () => {};

    if(state.isLoading){
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    return (
    <div style={{textAlign:"center"}}>
      <h2>Users information</h2>
      {state.isEditing?.status && <EditFormContainer id={state.isEditing.id} comingTitle={state.isEditing.name} comingEmail={state.isEditing.email} updateData={updateData}/>}
      {state.userData.map((eachUser)=>{
        const{id,name,email}=eachUser;
        return (
            <div key={id} style={{background:"lightblue",}}>
                <h3>{name}</h3>
                <p>{email}</p>
                <button onClick={() => handleDelete(id)}>delete</button>
                <button onClick={() =>dispatch({
                    type:"ONCLICK_EDIT",
                    payload:{status:true,id:id,name:name,email:email
                }})
                    
                }
                 >edit</button>
            </div>
      )
      }
        )}
    </div>
  )
}


const EditFormContainer = ({id, comingTitle, comingEmail,updateData}) => {

    const [title,setTitle]=useState(comingTitle) || '';
    const [email,setEmail]=useState(comingEmail) || '';
    return (
    <>
      <form>
        <input type="text" name="title" id="title" value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <input type="email" name="email" id="email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={() => updateData(id,title,email)}>update data</button>
      </form>
    </>
  )

}

export default UseReducer
