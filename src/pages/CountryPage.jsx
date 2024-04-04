import React, {useState} from 'react';
import CountryTable from '../components/CountryTable';

function CountryPage(props) {
    const [selectedCountry, setSelectedCountry] = useState([]);
    function selectCountry(country){
      setSelectedCountry(selectCountry=>[...selectCountry, country])
    }
    function removeCountry(indexRemove){
      setSelectedCountry(country=>country.filter((value, index)=>index !== indexRemove))
    }
    return (
        <div>
            <h1>
                Country page!
            </h1>
            <h2>
                Вибрані країни
            </h2>
            <ul className="list-group ">

                {selectedCountry.map((country, index)=>{
                    return <li key={index} className="list-group-item d-flex justify-content-between">{country.name.common} <button className="btn btn-danger" onClick={()=>removeCountry(index)}>Remove country</button></li>
                })}
            </ul>
            
            <CountryTable title='Таблиця країн' onSelectContry={selectCountry}></CountryTable>
        </div>
    );
}

export default CountryPage;<h1>
Country page!</h1>