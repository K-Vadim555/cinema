import React, {useState} from 'react';
import { Link , useParams } from "react-router-dom";
import '../main/pages/pages.scss'
import '../Accaordion2/accaordionPage.scss'
import ico from '../../img/ICO.svg'
import icon from '../../img/ICON (1).svg'
import icon2 from '../../img/ICON (2).svg'
import icon3 from '../../img/ICON (3).svg'
import icon4 from '../../img/ICON (4).svg'
import icon5 from '../../img/ICON (5).svg'
import img1 from '../../img/A.png'
import photo from '../../img/PHOTO.png'

import fon from '../../img/Rectangle 20.png'
import fonPublic from '../../img/BLUR_BG.png'
import sec1 from '../../img/Rectangle 21.png'
import sec2 from '../../img/ИНФОРМАЦИЯ СКОРО.png'
import hotel from '../../img/Rectangle 23.png'
import { useTranslation } from 'react-i18next';
import Acc from '../Accaordion2/Acc';
import Popup from '../popup/Popup';

export default function Accardions() {
            {/*---------------- функция , чтобы открывать сохдаваемые посты  -------------------------*/ }
            let params = useParams()
            let getpostid = (id, posts) => {
               
            }
            
        
        
             const { t, i18n } = useTranslation();
             let [dat, setdat] = useState([
                {
                    id:1, 
                    data:'18 ',
                    img:'',
                    title:'ПЕРВОЕ СОБЫТИЕ',
                    content:'4rc',
        
                },
                {
                    id:2,
                    img:'',
                    data:'19 ',
                    title:'ВТОРОЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:3,
                    img:'',
                    data:'20 ',
                    title:'ТРЕТЬЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:4,
                    img:'',
                    data:'21 ',
                    title:'ЧЕТВЕРТОЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:5,
                    img:'',
                    data:'22 ',
                    title:'ПЯТОЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:6,
                    img:'',
                    data:'23 ',
                    title: 'ШЕСТОЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                {
                    id:7,
                    img:'',
                    data:'24 ',
                    title:'СЕДЬМОЕ СОБЫТИЕ',
                    content:'c4rc4',
        
                },
                
             ])
             let l = dat.map(da => 
                <div key={da.id} className="public">
                  <div className="">
                    <p className='public-data'>{t(da.data)}</p><p className='public-data'> {t('МАЯ')} </p> 
                  </div>
                     {t('')}
                      <img className='public-img' src={photo} alt="" />
                  
               
                <img className='public-fon' src={fonPublic} alt="" />
                <div className="public-div2"> 
                 <p className='public-title'>{t(da.title)}</p>
                <p className='cl'> <span>22.00 - 00.05</span>  - {t('Military Party в Afro Fusion')}</p>
                <p className='cl'><span>{t('Адрес')}:</span> {t(' ст.м. Тургеневская/Чистые пруды/Сретенский бульвар Сретенский бульвар, 6/1с2')}</p>
                <p className='cl'> <span>{t('В ход:')}</span>  {t(' 650 рублей')}</p>
                </div>
                
                </div>
                
                )
  return (
   
          <div  className="accordions">
                <Acc
                 style={'acc'}
             title={t('program')}
             content={<>
             <iframe className='vid' id="youtubeiframe-349786129-1629749265372"  src="https://www.youtube-nocookie.com/embed/D43FSz3wzrc?"  data-flag-inst="y"></iframe>
             {l}
             </>}
             img={ico}
            
                />
                 <Acc
                  style={'acc'}
             title={t('artists')}
             content={<img className='fon' src={fon}></img>}
             img={icon}
            
                />
                   <Acc
                    style={'acc'}
             title={t('ticets')}
             content={<>
             <p className='ticet-title'>{t('УСЛОВИЯ ПОКУПКИ БИЛЕТОВ')} </p>
                <p className='ticet-content'>{t('lorem')}</p>
             
                <Popup buttonText={t('buyTicets')} className={'ticet-get'}/>
             </>}
             img={icon2}
            
                />
                   <Acc
                    style={'acc'}
             title={t('TIMETABLE')}
             content={
             <div className='rasp'>
                <div className="sec1">
                    <p> {t('РАСПИСАНИЕ НА МАСТЕР-КЛАССЫ')} </p>
                    <img src={sec1} alt="" />
                </div>
                <div className="sec2">
                    <p>{t('РАСПИСАНИЕ НА ДИДЖЕЙСТВО')}</p>
                <img src={sec2} alt="" />
                </div>
             </div>}
             img={icon3}
            
                />
                   <Acc
                    style={'acc'}
             title={t('ACCOMMODATION')}
             content={<div className='get-hotel'>  <div className='hotel'>

                <img className='hotel-logo' src={hotel} alt="" />
                <div className="hotel-text">
                    <div className="">
                           <p className="title1">{t('THE NAME OF THE HOTEL')}</p>
                    <p className="content1">{t('lorem')}</p>
                    </div>
                    <div className="">
                           <p className="title1">{t('price')}</p>
                    <p className="content1">{t('lorem')}</p>
                    </div>
                    <div className="">
                           <p className="title1">{t('PROMO CODE')}</p>
                    <p className="content1">{t('lorem')}</p>
                    </div>
                 
                </div>
               
             </div> 
             <Popup buttonText={t('ЗАБРОНИРОВАТЬ')} className={'ticet-get'}/>
             <div className="photos">
             <img src={hotel} alt="" />
             <img src={hotel} alt="" />
             <img src={hotel} alt="" />
             <img src={hotel} alt="" />
             </div>
             </div>
           }
             img={icon4}
            
                />

       
            </div>   
   
  )
}
