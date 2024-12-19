import Logo from '../images/log.jpg'
import Basket from '@mui/icons-material/ShoppingBasket';
import '../css/Navbar.css';
import { DarkMode,LightMode } from '@mui/icons-material';
import {  useState } from 'react';
import ImagesFams from './imagesFams'
//import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function NavBar(){
  const [ changMode , setChangeMode ] = useState(false);
  const LightModeChange = () => {
    setChangeMode(true)
  }
  const DarkModeChange = () => {
    setChangeMode(false)
  }
  return (
    <div className={changMode?'bgAllL':'bgAllD'}> 
    <div className='Navbar' id={changMode==false?'lightMode':'darkMode'}>
      <div className="elament">
         <img className='logo' id='/' src={Logo} alt="" />
         <input type="text" id="" placeholder='write anything...'/>
         <button className={changMode==false?'btnL':'btnD'}>search</button>
         <DarkMode onClick={DarkModeChange}  className={changMode==false?'LightMode':'DarkMode'}/>
         <LightMode onClick={LightModeChange}className={changMode==true?'DarkMode':'LightMode'}/>
      </div>
   <ul>
    <li><a href="#prodact"className={changMode==true?'darkModeItem':'lightModeItem'}> prodact </a></li>
    <li><a href="#"className={changMode==true?'darkModeItem':'lightModeItem'}> contact </a></li>
    <li><a href="#"className={changMode==true?'darkModeItem':'lightModeItem'}> about </a></li>
   </ul>
   <a href="/Panier" className={changMode==true?'panierL':'panierD'}><Basket/> panier</a>
    </div>
    <ImagesFams  changMode={changMode}/> 
       

    </div>
    
  )
}