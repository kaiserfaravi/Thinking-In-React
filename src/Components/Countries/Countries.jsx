import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [visitedCountries,setvisitedCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    
    const handleVisitedCountries =country=>{
        const newVisitedCountries = [...visitedCountries,country];
        setvisitedCountries(newVisitedCountries);
    } 

    return (
        <div>
            <h1>Country length {countries.length} </h1>
            <div>
                <h1>Visited countries length :{visitedCountries.length} </h1>

                {
                    visitedCountries.map((c,idx)=><li key={idx} > {c.name.common} </li>)
                }
            </div>
            {
                countries.map((country,index)=><Country
                country={country}
                key = {index}
                handleVisitedCountries ={handleVisitedCountries}
                ></Country>)
            }

            
        </div>
    );
};

export default Countries;