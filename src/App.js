import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.jsx/Navbar';
import Shop from './Components/pages/Shop';
import ShopCategory from './Components/pages/ShopCategory'
import Product from './Components/pages/Product'
import Cart from './Components/pages/Cart'
import LoginSignup from './Components/pages/LoginSignup'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
       <BrowserRouter>
          <Navbar/>
            <Routes>
               <Route path='/' element={<Shop/>}/>
               <Route path='/mens' element={<ShopCategory category="men" banner={men_banner}/>}/>
               <Route path='/womens' element={<ShopCategory category="women" banner={women_banner}/>}/>
               <Route path='/kids' element={<ShopCategory category="kid" banner={kid_banner}/>}/>
              
               <Route path='/product' element={<Product/>}>
               <Route path=':productId' element={<Product/>} /> 
               </Route>
               
               <Route path='/loginsignup' element={<LoginSignup/>} />
               <Route path='/cart' element={<Cart/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
