import Logo from '../images/log.jpg'
import Basket from '@mui/icons-material/ShoppingBasket';
import '../css/Navbar.css';
import { DarkMode,LightMode } from '@mui/icons-material';
import imageP from '../images/book1.png'
import {  useState } from 'react';
import '../css/panier.css'
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Panier = () => {
    const [ changMode , setChangeMode ] = useState(false);
    const LightModeChange = () => {
      setChangeMode(true)
    }
    const DarkModeChange = () => {
      setChangeMode(false)
    }
    return (
        <div className="content">

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
      <li><a href="/"className={changMode==true?'darkModeItem':'lightModeItem'}> prodact </a></li>
      <li><a href="#"className={changMode==true?'darkModeItem':'lightModeItem'}> contact </a></li>
      <li><a href="#"className={changMode==true?'darkModeItem':'lightModeItem'}> about </a></li>
     </ul>
     <a href="/Panier" className={changMode==true?'panierL':'panierD'}><Basket/> panier</a>
      </div>
      
      </div>
<div className='panierCardL' >
    <div className="products">
        <h3>panier <span>(3)</span></h3>
        <hr />
        <div className="productDetils">
            <img src={imageP} alt="" />
            <p>This novel is a multi-generational 
                saga that focuses on the Buendía family</p>
            <div className="price">
                <h4>16.5 $ </h4>
                <h6 >17.9 $</h6>
            </div>
        </div>
        <div className="button">
            <Button style={{width:15,fontSize:10}} variant="contained" >Delete <DeleteOutlineIcon/></Button>
              </div>
    </div>
    <div className="Total">
    <h3>Shopping cart summary</h3><hr />
    <h4>TOTAL : <span>120 $</span></h4>
    </div>
   
</div>
        </div>
      
    )
}

export default Panier
