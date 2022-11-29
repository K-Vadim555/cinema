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
import fon from '../../../img/Rectangle 20.png'
import fonPublic from '../../../img/BLUR_BG.png'
import sec1 from '../../../img/Rectangle 21.png'
import sec2 from '../../../img/ИНФОРМАЦИЯ СКОРО.png'
import hotel from '../../../img/Rectangle 23.png'
import { useTranslation } from 'react-i18next';
import Accardions from '../../Accardions/Accardions';
const Page1 = ({posts}) => {
        {/*---------------- функция , чтобы открывать сохдаваемые посты  -------------------------*/ }
    let params = useParams()
    let getpostid = (id, posts) => {
        return posts.filter((post) => post.id == id)
    }
    let [currentPost,setcurrentPost] = useState(getpostid(params.id, posts)[0]);
     console.log(currentPost);


     const { t, i18n } = useTranslation();
     let [dat, setdat] = useState([
        {
            id:1, 
            data:'18 ',
            img:'',
            title:t('ПЕРВОЕ СОБЫТИЕ'),
            content:'4rc',

        },
        {
            id:2,
            img:'',
            data:'19 ',
            title:t('ВТОРОЕ СОБЫТИЕ'),
            content:'c4rc4',

        },
        {
            id:3,
            img:'',
            data:'20 ',
            title:t('ТРЕТЬЕ СОБЫТИЕ'),
            content:'c4rc4',

        },
        {
            id:4,
            img:'',
            data:'21 ',
            title:t('ЧЕТВЕРТОЕ СОБЫТИЕ'),
            content:'c4rc4',

        },
        {
            id:5,
            img:'',
            data:'22 ',
            title:t('ПЯТОЕ СОБЫТИЕ'),
            content:'c4rc4',

        },
        {
            id:6,
            img:'',
            data:'23 ',
            title:t('ШЕСТОЕ СОБЫТИЕ'),
            content:'c4rc4',

        },
        {
            id:7,
            img:'',
            data:'24 ',
            title:t('СЕДЬМОЕ СОБЫТИЕ'),
            content:'c4rc4',

        },
        
     ])
     let l = dat.map(da => 
        <div key={da.id} className="public">
          <div className="">
            <p className='public-data'>{da.data}</p><p className='public-data'> {t('МАЯ')} </p> 
          </div>
            
              <img className='public-img' src={photo} alt="" />
          
       
        <img className='public-fon' src={fonPublic} alt="" />
        <div className=""> 
         <p className='public-title'>{da.title}</p>
        <p className='cl'> <span>22.00 - 00.05</span>  - Military Party в Afro Fusion</p>
        <p className='cl'><span>Адрес:</span>  ст.м. Тургеневская/Чистые пруды/Сретенский бульвар Сретенский бульвар, 6/1с2</p>
        <p className='cl'> <span>В ход:</span>   650 рублей</p>
        </div>
        
        </div>
        
        )
    return (
        <div className='page' >
             
          
             <img className='page-city-img' src={img1} alt="." />
            <h1 className='page-city-p'>{t('country1')}</h1>
          
         
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

export default Page1;
