import './App.css'
import NavBar from './component/navBar'
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import SignUp from './component/signUp'
import Panier from './component/panier'
//import Categorie  from './component/Categorie'
//import SliderBook from './component/sliderBook'
//import LogIn from './component/logIn'
function App() {
  

  return (
  <>
   <BrowserRouter>
   <Routes>
     <Route path='/'   element={<NavBar  />}/>
     <Route path='/SignUp'   element={<SignUp  />}/>
     <Route path='/Panier' element={<Panier />}/>
   </Routes>
   </BrowserRouter>
  
   
  </>
  )
}

export default App;
