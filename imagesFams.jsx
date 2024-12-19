import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  Button  from '@mui/material/Button';
import '../css/ImageFrems.css';
import LogIn from './logIn'
import  Categorie from './Categorie' 
import SliderBook from './sliderBook'

import imag1 from '../images/book1.png';
import imag2 from '../images/book2.jpg';
import imag3 from '../images/book3.jpg';
import imag4 from '../images/book4.jpg';
export default function ImagesFams({ changMode }){
  
const DataCard= [{
    name: 'One Hundred Years of Solitude ',
    imag: imag1,
    id: 1
},
{
    name: 'The Great Gatsby ',
    imag: imag2,
    id: 2
},
{
    name: 'Ulysses ',
    imag: imag3,
    id: 3
},
{
    name: 'In Search of Lost Time ',
    imag: imag4,
    id: 4
}
]
    return (
        <>

    <div className={changMode==false?'ContentCardsD':'ContentCardsL'}>
    {DataCard.map((e)=>
    (
        <Card className='cards' key={e.id}  sx={{background:'grey',  display:'flex',flexDirection:'column',margin:2,width:260,height:330,marginLeft:4,marginTop:4  }}>
        <CardContent sx={{ display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center'}}>
        <h5>{e.name}</h5>
        <img style={{height:200, margin:5}} src={e.imag} alt="imag" />
        <Button  style={{ margin:5}} variant="contained">shop</Button>
        </CardContent>
    </Card>
    )
)}  
    </div>

    <LogIn />
    <Categorie />
    <SliderBook  changMode ={changMode}/>
    
    </>
    )
} 