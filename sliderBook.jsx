import image1 from '../images/slidrBook1.jpg';
import image2 from '../images/slidrBook2.jpg';
import image3 from '../images/slidrBook3.jpg';
import image4 from '../images/slidrBook4.jpg';
import image5 from '../images/slidrBook5.jpg';
import image6 from '../images/slidrBook6.jpg';

import Card from '@mui/material/Card';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import '../css/sliderBook.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderBook = ({ changMode }) => {
  const array = [
    {
      name:'The Catcher in the Rye' ,
      image:image1 ,
      rivrios:1.432,
      id:0
    },
    {
      name:' Lolita' ,
      image:image2 ,
      rivrios:2.201,
      id: 1
    },
    {
      name:' Nineteen Eighty Four' ,
      image:image3 ,
      rivrios:1.013 ,
      id: 2
    },
    {
      name:' Anna Karenina' ,
      image:image4 ,
      rivrios:1.113 ,
      id: 3
    },
    {
      name:' Moby-Dick' ,
      image:image5 ,
      rivrios:1.902 ,
      id : 4
    },
    {
      name:'Wuthering Heights ' ,
      image:image6 ,
      rivrios:1.734 ,
      id: 5
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  return (
    <div className='containerSlick' id='prodact'>
            <Slider {...settings} style={{}} >
       {array.map((e)=> (
        <Card key={e.id} className={changMode?'sliderCardL':'sliderCard'}>
        <p>{e.name}</p>
        <img src={e.image} alt="image" />
        <div className="visible"> <VisibilityIcon/> <p>{e.rivrios}</p></div> 
        <div className="star"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
        </Card> ))} 
        </Slider> 
    </div>
  )
}
export default SliderBook;
