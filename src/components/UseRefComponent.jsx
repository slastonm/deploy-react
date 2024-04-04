import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

UseRefComponent.propTypes = {
    
};

function UseRefComponent(props) {
    const inputEl = useRef(null);
    function changeStyle(){
        if(inputEl.current){
            inputEl.current.style.backgroundColor = 'orange';
            inputEl.current.style.color = 'white';
            inputEl.current.style.padding = '20px';
        }
    }

    const colorRef = useRef(null);
    const divEl = useRef(null);
    function colorChange(){
        if(divEl.current){
            divEl.current.style.backgroundColor = colorRef.current.value;
        }
    }

    let [count, setCount] = useState(0);
    let prevValue = useRef(null);
    useEffect(()=>{
        prevValue.current = count;
    }, [count])

    let [changeLog, setChangeLog] = useState('');
    const initialProp = useRef(props.title);
    useEffect(()=>{
        if(initialProp.current !== props.title){
            setChangeLog(`Taйтл змінився з ${initialProp.current} на нове значення ${props.title}`);
        }
    }, [props])
    return (
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={changeStyle}>Change style</button>
            <h3>
                Change color
            </h3>
            <input type="color" ref={colorRef} onChange={colorChange} />
            <div className='p-3 text-center border' style={{width:'200px', height:'100px'}} ref={divEl}>
                Color div element
            </div>
            <h3>
                State counter
            </h3>
            <h4>
                Prev Value {prevValue.current}
            </h4>
            <h4>
                State value {count}
            </h4>
            <button className='btn btn-primary' onClick={()=>setCount(count=>count+1)}>+1</button>
            <div>
                <h3>
                    {props.title}
                </h3>
                <h3>
                    {changeLog}
                </h3>
            </div>
        </div>
    );
}

export default UseRefComponent;