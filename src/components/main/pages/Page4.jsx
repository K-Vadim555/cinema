import React, {useState} from 'react';
import { Link , useParams } from "react-router-dom";

import '../pages/pages.scss'
import '../../Accaordion2/accaordionPage.scss'
import ico from '../../../img/ICO.svg'
import icon from '../../../img/ICON (1).svg'
import icon2 from '../../../img/ICON (2).svg'
import icon3 from '../../../img/ICON (3).svg'
import icon4 from '../../../img/ICON (4).svg'
import icon5 from '../../../img/ICON (5).svg'
import img1 from '../../../img/A.png'
import photo from '../../../img/PHOTO.png'
import Acc from '../../Accaordion2/Acc';
import { useTranslation } from 'react-i18next';
import Accardions from '../../Accardions/Accardions';

const Page4 = ({posts}) => {
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
        const { t, i18n } = useTranslation();
    return (
        <div className='page' >
             
          
             <img className='page-city-img' src={img1} alt="." />
            <h1 className='page-city-p'>{t('country4')}</h1>
          
         
        <Accardions/>
            
             
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

export default Page4;
