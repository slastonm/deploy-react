import React, {useState} from 'react';

function ProductList(props) {
    // const productsList = [
    //     {
    //         productionYear:2024,
    //         productMaker:'Apple',
    //         productModel:'Iphone Pro'
    //     }
    // ]
    const [productsList, setProductsList] = useState([]);
    const [productionYear, setProductionYear] = useState(new Date().getFullYear());
    const [productMaker, setProductMaker] = useState('');
    const [productModel, setProductModel] = useState('');

    function addProduct(){
        const newProduct ={
            productionYear:productionYear,
            productMaker:productMaker,
            productModel:productModel
        }
        // productsList.push(newProduct);
        setProductsList(productsList=>[...productsList, newProduct]);
        setProductMaker('');
        setProductModel('');
    }
    function changeYear(e){
        setProductionYear(e.target.value);
    }
    function changeMaker(e){
        setProductMaker(e.target.value);
    }
    function changeModel(e){
        setProductModel(e.target.value);
    }
    function removeItem(indexEl){
        setProductsList(productsList=>productsList.filter((item, index)=>index != indexEl));
    }

    return (
        <div className='container'>
            <div className='row mb-3'>
                <div className="col-4 mx-auto">
                    <div className='mb-3'>
                        <input 
                        className='w-100'
                        onChange={changeYear}
                        value={productionYear} 
                        placeholder='Product create year' 
                        type="text" />
                    </div>
                    <div className='mb-3'>
                        <input 
                        className='w-100'
                        onChange={changeMaker}
                        value={productMaker} 
                        placeholder='Product maker' 
                        type="text" />
                    </div>
                    <div className='mb-3'>
                        <input 
                        className='w-100'
                        onChange={changeModel}
                        value={productModel}  
                        placeholder='Product model' 
                        type="text" />
                    </div>
                    <div>
                        <button className='btn btn-primary w-100' onClick={addProduct}>
                            Add product
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8 mx-auto">
                <ul className="list-group">
                    {productsList.map((item, index)=>{
                        return <li 
                        key={index} 
                        className="list-group-item d-flex justify-content-between">
                            Is{item.productModel}  {item.productMaker} production year {item.productionYear}<button 
                            onClick={()=>removeItem(index)} 
                            className='btn btn-danger'>Delete</button>
                        </li>
                    })}
                </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductList;