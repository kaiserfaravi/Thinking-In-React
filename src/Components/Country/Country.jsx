import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries}) => {
    console.log(country);
    const {name,flags,languages,capital}= country;
    // console.log(country);
    const [visited,setVisited] = useState(false)
    // console.log(visited);
    const handleVisited =()=>{
        setVisited(!visited)
    }

    return (
        <div className="singleCOuntry">
            <img src={flags.png} alt="" />
            <p>Name :{name.common} </p>
            <p>languages: {languages?.eng} </p>
            <p>Capital: {capital} </p>
            <button onClick={handleVisited} >{visited ? 'COUNTRY VISITED': 'not visited'}</button>
            <button onClick={()=> handleVisitedCountries(country)} >visited countries</button>
            
            
        </div>
    );
};

export default Country;