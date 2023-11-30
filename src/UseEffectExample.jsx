import { useEffect, useState } from "react";
import './App.css'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const UseEffectExample = () =>{

  const [drinksData,setDrinksData] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const [loading,setLoading] = useState(false);
  const [isError,setIsError] = useState({status:false,msg:""})

  const fetchDrink = async (apiURL) => {
    setLoading(true);
    setIsError({status:false,msg:""})
    try{
      const response = await fetch(apiURL);
      const {drinks} = await response.json();
      setDrinksData(drinks);
      setLoading(false);
      setIsError({status:false,msg:""})
      if (!drinks){
        throw new Error ("data not found")
      }
    }catch(error){
       setLoading(false);
       setIsError({status:true, msg:error.message || "somthing went wrong.."})
    }
    };

  useEffect ( () => {
    const correctURL = `${URL}${searchTerm}`
    fetchDrink(correctURL);
  },[searchTerm]);


  return(
    <div>
      <form>
        <input className="search-bar"
          type="text"
          name="search"
          id="search"
          placeholder="search something new..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
      </form>

      {loading && !isError?.status && <h3>loading...</h3>}
      {isError?.status && <h3 style={{color:"red"}}>{isError.msg}</h3>}
      {
        !loading && !isError?.status && <ul className="cocktail-data">
        {
          drinksData.map((eachDrink) => {
            const {idDrink,strDrink,strDrinkThumb} = eachDrink;
            return <li key={idDrink}>
              <div>
                <img src={strDrinkThumb} alt="strDrink"/>
              </div>
              <h3>{strDrink}</h3>
            </li>
          })
        }
      </ul>
      }
    </div>
  )
}
export default UseEffectExample;