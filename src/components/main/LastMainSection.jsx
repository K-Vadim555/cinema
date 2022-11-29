import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import one from '../../img/1 Slide.png'
import { useTranslation } from 'react-i18next';

export default function LastMainSection() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState( [
    {id: 1,
      path:'/posts/1',
      img:'/img/Rectangle\ 8\ \(1\).png',
      title:'country1',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
     },
     {id: 2,
      path:'/posts/2',
       img:'/img/Rectangle\ 8\ \(2\).png',
       title:'country2',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      },
      {id: 3,
        path:'/posts/3',
       img:'/img/Rectangle\ 8\ \(3\).png',
      title:'country3',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      },
      {id: 4,
        path:'/posts/4',
        img:'/img/Rectangle\ 9\.png',
       title:'country4',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       },
       {id: 5,
        path:'/posts/5',
        img:'/img/Rectangle\ 8\ \(4\).png',
       title:'country5',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       },
       {id: 6,
        path:'/posts/6',
        img:'/img/Rectangle\ 9\.png',
       title: 'Новая страна скоро' ,
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       }
  ])
  
  const postsss = posts.map(post =>   
    <Link key={post.id} to={post.path} className='main-cart'>    
    
      <img className='main-city-img' src={post.img} alt="." />
      <p className='main-city-p'>{t(post.title)}</p>
      <div className='next'>
            <div className="next-div"><NavigateNextIcon sx={{
                width:'2vw',
                height:'auto',
                color:'black',
               
            }}/> </div>
      </div>
   
  </Link>
    )
  return (
    <>
      <div className="bg1">
                        <div className='one' style={{
                             position:'absolute',
                     top:'-7vw',
                     left:'50%', 
                      order:'1',
                        margin:'12vw auto',
                        marginTop:'20vw', 
                         display:'flex',
                        }}>
                             <img style={{   width:'1vw',
                    
                    width:'1vw',
                    
                    display:'flex',
                        transform:'rotate(180deg)'}} src={one} alt="" />
                            <p className='main-text'>{t('change-country')}</p>
                        </div>
                        
                        <p className='main-text main-text-mob'>{t('change-country')}</p>
                           {postsss}
                       
                     </div>
        
    </>
  )
}
