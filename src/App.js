import React, { useEffect, useState } from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import './App.scss';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Page from './Page';
import { Button } from '@mui/material';
import LastMainSection from './components/main/LastMainSection';
import N1 from './components/main/pages/N1';
import Page1 from './components/main/pages/Page1';
import Page2 from './components/main/pages/Page2';
import Page3 from './components/main/pages/Page3';
import Page4 from './components/main/pages/Page4';
import Page5 from './components/main/pages/Page5';
import Page6 from './components/main/pages/Page6';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [posts, setPosts] = useState( [
    {id: 1,
      img1:'./img/A.png',
      img:'/img/Rectangle\ 8\ \(1\).png',
      title:'Кипр ',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
     },
     {id: 2,
     
       img:'./img/Rectangle\ 8\ \(2\).png',
       title:'ОАЭ ',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      },
      {id: 3,
       
       img:'./img/Rectangle\ 8\ \(3\).png',
      title:'Россия ',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      },
      {id: 4,
       
        img:'./img/Rectangle\ 9\.png',
       title:'Португалия ',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       },
       {id: 5,
       
        img:'./img/Rectangle\ 8\ \(4\).png',
       title:'Индонезия',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       },
       {id: 6,
      
        img:'/img/Rectangle\ 9\.png',
       title:'Новая страна скоро',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
       }
  ])
  let [ok, setok] = useState({color:'black'})
  let okk = () => {
     setok({color:'while '})
  }
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const changebtns = <>
  <Button  sx={{
                fontSize:'1.3vw',
                lineHeight:'0',
                width:'5vw',
                minWidth:'3vw',
                padding:'1vw'
                }} onClick={() => changeLanguage("en")}>EN</Button>
   <Button sx={{fontSize:'1.3vw',
             lineHeight:'0',
             width:'5vw',
             minWidth:'3vw',
             padding:'1vw'
            }} onClick={() => changeLanguage("ru")}>RU</Button>
 
  </> 
 return (
    <div className="App">
    
     <BrowserRouter>
     <ScrollToTop/>
      <Header changebtns={changebtns}  posts={posts}/>  
     
     
    <Routes>
     
        <Route path={"/"} element={<N1 setPosts={setPosts} posts={posts}/>} />
        <Route path={"/posts/1"} element={<Page1 posts={posts}  />} />
        <Route path={"/posts/2"} element={<Page2 posts={posts}  />} />
      
         <Route path={"/posts/3"} element={<Page3 posts={posts}  />} />
        <Route path={"/posts/4"} element={<Page4 posts={posts}  />} />
        <Route path={"/posts/5"} element={<Page5 posts={posts}  />} />
        <Route path={"/posts/6"} element={<Page6 posts={posts}  />} />
     
       
    </Routes> 
  
    
      <LastMainSection/>
  
   
  </BrowserRouter>
      
   
    </div>
  );
}

export default App;
//fvsdvsvsdvsdv