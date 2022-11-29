import React from 'react'
import './Header.scss'
import logo from '../../img/LOGO.svg'
import icon from '../../img/ICON.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Accardion from '../accardion/Accardion';
import { style } from '@mui/system';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastMainSection from '../main/LastMainSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Acc from '../Accaordion2/Acc';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
export default function Header(props) {
    const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const { t, i18n } = useTranslation();
  return (
    <header className='header'>
         <Link style={{
            display:'flex',
            alignItems:'center'
         }} to='/'><img className='img' src={logo} alt="" /></Link>
          <div className='header-acc2' style={{
            paddingTop:'3vw',
            display:'none'
         }}>
          <Acc
          style={'acc cc'}
          title={t('change-country')}
          content={    <Box sx={{
            display:'block',
            backgroundColor:'wheat',
            borderRadius:'5%',
            padding:'1vw',
            
        }}>
            
              <Link className='country-link' to='/posts/1'>{t('country1')}</Link>
              <Link className='country-link' to='/posts/2'>{t('country2')}</Link>
              <Link className='country-link' to='/posts/3'>{t('country3')}</Link>
              <Link className='country-link' to='/posts/4'>{t('country4')}</Link>
              <Link className='country-link' to='/posts/5'>{t('country5')}</Link>
 
              
             
         
           
        </Box>}
          />
          <Acc
          style={'acc'}
          title={t('lang')}
          content={
            <Box className='nav-buttons'>
            {props.changebtns}
            {/*<Button
              sx={{
                fontSize:'1.3vw',
                lineHeight:'0',
                width:'5vw',
                minWidth:'3vw',
                padding:'1vw'
            }}>RU</Button><br></br>
        <Button sx={{fontSize:'1.3vw',
     lineHeight:'0',
     width:'5vw',
     minWidth:'3vw',
     padding:'1vw'
    }}>EN</Button>
            */ } 
        </Box>
          }
          /></div>
         <div className='header-acc' style={{
            paddingTop:'3vw',
            display:'flex'
         }}>
           
         <Accardion
          countres={
            <Box sx={{
                display:'block',
                backgroundColor:'wheat',
                borderRadius:'5%',
                padding:'1vw',
                
            }}>
                
                  <Link className='country-link' to='/posts/1'>{t('country1')}</Link>
                  <Link className='country-link' to='/posts/2'>{t('country2')}</Link>
                  <Link className='country-link' to='/posts/3'>{t('country3')}</Link>
                  <Link className='country-link' to='/posts/4'>{t('country4')}</Link>
                  <Link className='country-link' to='/posts/5'>{t('country5')}</Link>
     
                  
                 
             
               
            </Box>
           
         
           
         }
        
         styleTitle={{
            
             textTransform: 'uppercase',
         }} styleCont={{
               
                fontSize: '1.3vw',
                textTransform: 'uppercase',
         }} style={{
            zIndex:'10',
            width:'22vw',
            color:'white',
            backgroundColor:'transparent',
            border: 'none',
         
         }}  title={t('change-country')} content={''}/>   


            <Accardion 
            style={{
              zIndex:'10',
                width:'2vw',
                color:'white',
                backgroundColor:'transparent',
                border: '0px solid',
                marginLeft:'4vw '
             }}  title={t('lang')} content={''}
             buttons={
                <Box className='nav-buttons'>
                    {props.changebtns}
                    {/*<Button
                      sx={{
                        fontSize:'1.3vw',
                        lineHeight:'0',
                        width:'5vw',
                        minWidth:'3vw',
                        padding:'1vw'
                    }}>RU</Button><br></br>
                <Button sx={{fontSize:'1.3vw',
             lineHeight:'0',
             width:'5vw',
             minWidth:'3vw',
             padding:'1vw'
            }}>EN</Button>
                    */ } 
                </Box>
               
             }
          />

     
    </div>
    </header>
  )
}
