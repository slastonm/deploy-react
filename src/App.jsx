import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import MyButton from "./components/customButton/MyButton"
import logo from './assets/netflix.png'
import Counter from "./components/Counter"
import ProductList from "./components/ProductList"
import UseEffectComponent from "./components/UseEffectComponent"
import React, {useState} from "react"
import UseRefComponent from "./components/UseRefComponent"
import Main from "./components/usersOrder/Main"
import CountryTable from "./components/CountryTable"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CountryPage from "./pages/CountryPage"
function App() {
  // let path = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s';
  const [showCounter, setShowCounter] = useState(true);
  const [propTitle, setPropTitle] = useState('Old title value');
  function changeTitle(){
    setPropTitle('New value');
  }


  return (
    <>
    <div className="container py-3">
      
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/country" element={<CountryPage></CountryPage>}></Route>
        </Routes>
      </Router>

      {/* <Main></Main> */}

      {/* <UseRefComponent title={propTitle}></UseRefComponent> */}
      {/* <button className="btn btn-primary" onClick={changeTitle}>Change title</button> */}
      {/* <button className="btn btn-danger" onClick={()=>setShowCounter(!showCounter)}>
        {showCounter?'Приховати лічильник': 'Показати лічильник'}
      </button>
      {showCounter && <UseEffectComponent></UseEffectComponent>} */}
      
      {/* <ProductList></ProductList> */}
      {/* <img src={path} alt="logo" /> */}
      {/* <Counter></Counter>
      <img src={logo} alt="logo" />
      <MyButton></MyButton>
      <div className="small-wrapper my-block">
        Test css
      </div> */}
      <Footer></Footer>
    </div>

    </>
  )
}

export default App
