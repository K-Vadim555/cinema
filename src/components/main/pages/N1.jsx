import React, { useEffect, useState } from 'react';
import { BrowserRouter ,Route,Routes,Link } from 'react-router-dom';
import bagifr from '../../../img/LIGHT.png'
import '../pages/pages.scss'
import logo from '../../../img/KIZZAFRO.png'
import one from '../../../img/1 Slide.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastMainSection from '../LastMainSection';
export default function N1(props) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
  return (
    <div className='main'>
      
        <img className='bagifr' src={bagifr} alt="" />
        <iframe style={{
            border:'0',
            verticalAlign: 'top',
        }} id="89b737af-af71-4475-9d77-82754f0e6bfa" src="https://www.vectary.com/viewer/v1/?model=89b737af-af71-4475-9d77-82754f0e6bfa&env=studio3&turntable=2&showPreloader=0&showInteractionPrompt=0"  ></iframe> 

        <img className='KIZZAFRO' src={logo} alt="" />
        <img className='one' style={{width:'fit-content',
                      width:'1vw',
                      position: 'sticky',
                      zIndex:'20',
                    margin:'12vw auto',
                    marginBottom:'20vw',
                     display:'flex'}} src={one} alt="" />
                   
    </div>
  )
}
