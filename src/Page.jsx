import React, {useState} from 'react';
import { Link , useParams } from "react-router-dom";
import Acc from './components/Accaordion2/Acc';
import './components/main/pages/pages.scss'
import './components/Accaordion2/accaordionPage.scss'
import ico from './img/ICO.svg'
import icon from './img/ICON (1).svg'
import icon2 from './img/ICON (2).svg'
import icon3 from './img/ICON (3).svg'
import icon4 from './img/ICON (4).svg'
import icon5 from './img/ICON (5).svg'
import LastMainSection from './components/main/LastMainSection';
import photo from './img/PHOTO.png'

const Page = ({posts}) => {
        {/*---------------- функция , чтобы открывать сохдаваемые посты  -------------------------*/ }
    let params = useParams()
    let getpostid = (id, posts) => {
        return posts.filter((post) => post.id == id)
    }
    let [currentPost,setcurrentPost] = useState(getpostid(params.id, posts)[0]);
     console.log(currentPost);



     let [dat, setdat] = useState([
        {
            id:1, 
            data:'18 МАЯ',
            img:'',
            title:'ec4fcr',
            content:'4rc',

        },
        {
            id:2,
            img:'',
            data:'19 МАЯ',
            title:'4rc4c',
            content:'c4rc4',

        },
        
     ])
     let l = dat.map(da => 
        <div className="public">
          
            <p>{da.data}</p>
              <img src={photo} alt="" />
            <p>{da.title}</p>
        <p>{da.content}</p>
        </div>
        
        )
    return (
        <div className='page' >
             
          
             <img className='page-city-img' src={'../' + currentPost.img1} alt="." />
            <h1 className='page-city-p'>{currentPost.title}</h1>
            <Link to={'/'}>aedwfdwef</Link>
         
         <div  className="accordions">
                <Acc
             title={'ПРОГРАММА ФЕСТИВАЛЯ'}
             content={<>
             <iframe className='vid' id="youtubeiframe-349786129-1629749265372"  src="https://www.youtube-nocookie.com/embed/D43FSz3wzrc?"  data-flag-inst="y"></iframe>
             {l}
             </>}
             img={ico}
            
                />
                 <Acc
             title={'АРТИСТЫ'}
             content={<p className='page-acc-content'>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.   Aliquam eget maximus est, id dignissim quam. </p>}
             img={icon}
            
                />
                   <Acc
             title={'БИЛЕТЫ'}
             content={<p>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.   Aliquam eget maximus est, id dignissim quam. </p>}
             img={icon2}
            
                />
                   <Acc
             title={'РАСПИСАНИЕ'}
             content={<p>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.   Aliquam eget maximus est, id dignissim quam. </p>}
             img={icon3}
            
                />
                   <Acc
             title={'ПРОЖИВАНИЕ'}
             content={<p>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.   Aliquam eget maximus est, id dignissim quam. </p>}
             img={icon4}
            
                />
                   <Acc
             title={'КОНТАКТЫ'}
             content={<p>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.   Aliquam eget maximus est, id dignissim quam. </p> }
             img={icon5}
            
                />
       
            </div>   
            
            
             
          {/*
          
          <div className="bg1">
           <div style={{
                             position:'absolute',
                     top:'-7vw',
                     left:'50%', 
                      order:'1',
                        margin:'12vw auto',
                        marginTop:'20vw', 
                         display:'flex',
                        }}>
                            
                            <p className='main-text'>ВЫБЕРИТЕ СТРАНУ</p>
                        </div><LastMainSection/></div>
          */ } 
        </div>
       
    );
}

export default Page;
