import React, {useState, useEffect} from 'react';
// useEffect(()=>)
// useEffect(()=>,[])]
// useEffect(()=>,[value])

function UseEffectComponent(props) {
    let [count, setCount] = useState(0);
    function upCounter(){
        setCount(count=>count+1);
    }
    useEffect(()=>{
        document.title = `Count ${count}`;
        return ()=>{
            console.log('Компонент був створений, компонент був прихований або видалений');
        }
    });
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    //     return ()=>{
    //         console.log('Компонент був створений, компонент був прихований або видалений');
    //     }
    // },[]);
    // useEffect(()=>{
    //     document.title = `Count ${count}`;
    //     return ()=>{
    //         console.log('Компонент був створений, компонент був прихований або видалений');
    //     }
    // },[count]);
    return (
        <div>
            <p>
                Count: {count}
            </p>
            <button onClick={upCounter} className='btn btn-primary'>Add +1</button>
        </div>
    );
}

export default UseEffectComponent;