import React,{useState, useEffect} from 'react';

function CountryTable({title, onSelectContry}) {
    const [countries, setCountries] = useState([]);
    const [visability, setVisability] = useState(5);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(resp=>resp.json())
        .then(data=>setCountries(data.slice(0, visability)));
    },[visability]);
    function loadMore(){
        setVisability(visability=>visability+5);
    }
    return (
        <div>
            <h3 className='text-center'>
                {/* {props.title} */}
                {title}
            </h3>
            <div className='p-5 text-center' onClick={loadMore}>
                <button className="btn btn-success">Завантажити ще країн</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Назва</th>
                        <th scope="col">Офіційна назва</th>
                        <th scope="col">Регіон</th>
                        <th scope="col">Населення</th>
                        <th scope="col">Прапор</th>
                        <th scope="col">Дії</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country, index)=>{
                        return<tr key={index}>
                            <td>
                                {country.name.common}
                            </td>
                            <td>
                                {country.name.official}
                            </td>
                            <td>
                                {country.region}
                            </td>
                            <td>
                                {country.population}
                            </td>
                            <td>
                                <img style={{maxWidth:'100px'}} src={country.flags.png} alt={country.flags.alt} />
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>{onSelectContry(country)}}>
                                    Додати до списку вибраних
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className='p-5 text-center' onClick={loadMore}>
                <button className="btn btn-success">Завантажити ще країн</button>
            </div>
        </div>
    );
}

export default CountryTable;