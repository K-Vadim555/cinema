import { Box, TextField, Typography } from '@mui/material';
import React from 'react'
import './popup.scss'

import hin from './img/hin.png'
import '../main/pages/pages.scss'
import hinn from './img/hinn.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import icon4 from './img/icon4.png'
import sot from './img/Group 30.png'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';


export const Popup = ({buttonText,className}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name,setName] = React.useState('')
  const [nam,setNam] = React.useState('')
  const [tel,setTel] = React.useState('')
  const [num,setNum] = React.useState('')

  const [nameer,setNameer] = React.useState(false)
  const [teler,setTeler] = React.useState(false)
  const [numer,setNumer] = React.useState(false)

   const err = (e) => {
    
        if (name == e.target.value , tel == e.target.value ,num == e.target.value) {
          setNam('')
    }
    else {
      setNam('')
    }
  }
  const click = (e) => {
  
    e.preventDefault()
    if (name == '',tel == '',num== '') {
       setNam(<Typography
       textAlign='center'
       color='error'
       border='1px solid red'
    
       marginBottom='1vw'
      
       padding='0.5vw'

       >Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.</Typography>)
    }

     
     
   
    setTeler(false)
    setNameer(false)
    setNumer(false)

    if (name == '') {
      setNameer(true)
    }
    if (tel == '') {
      setTeler(true)
    }
    if (num == '') {
      setNumer(true)
    }
   
  
  

 
 }
 const { t, i18n } = useTranslation();
  return (
    <div id='contacts' className='contacts'>
    
      
           
       
            
                <Button 
              
                onClick={handleOpen}

                 variant='outlined' className={className} style={{
                    transition: 'all ease 5s'
                }}>{buttonText}</Button>
           
          
            <div>
     
      <Modal
       
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='popup'  sx={{
          
           maxWidth:'30vw',
           position: 'absolute' ,
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)',
           width: '25vw',
           bgcolor: 'background.paper',
           border: '2px solid #000',
           boxShadow: 24,
           p: 4,
           
        }}>
          <Typography
       
           textAlign='center' m=' 0 auto' id="modal-modal-title" variant="h6" component="h2">
          {buttonText}
          </Typography>
          <form noValidate autoComplete='off' onSubmit={click} >
            <TextField 
          onChange={(e) => setName(e.target.value)}
           error={nameer}
          autoFocus
          variant='standard'
          fullWidth
           margin='dense'
          m=' 0 auto'
         
           
           label='Имя'
           type='name'
           required
           
           color='primary'
          />
              <TextField 
                onChange={(e) => setTel(e.target.value)}
                error={teler}
          variant='standard'
          fullWidth
           margin='dense'
          m=' 0 auto'
         
           
           label='E-mail'
           type='email'
           required
           
           color='primary'
          />
             <TextField 
                onChange={(e) => setTel(e.target.value)}
                error={teler}
          variant='standard'
          fullWidth
           margin='dense'
          m=' 0 auto'
         
           
           label='Кол-во человек'
           type='email'
           required
           
           color='primary'
          />
              <TextField 
               onChange={(e) => setNum(e.target.value)}
               error={numer}
          variant='standard'
          fullWidth
           margin='dense'
          m=' 0 auto'
          multiline
          minRows={3}
          
           label='Сообщение'
           type='text'
           required
           
           color='primary'
          /> 
          
           <Button 
              type='submit'
              onClick={err}
                className='modal-btn'
               variant='contained' style={{
                  display:'flex',
                  transition: 'all ease 5s',
                  border: '2px solid #85241F',
                  borderRadius: '55px',
                  fontFamily: 'BPG Glaho',
                  fontStyle: 'normal',
                  fontWeight:' 400',
                  fontSize: '1.2vw',
                  lineHeight: '30px',
                  textAlign: 'center',
                  margin:'1vw auto',
                  color: 'white',
                  marginBottom:"2vw",
                  width:"100%",
                  height:"4vw",
                  background:'red'

              }}>Отправить</Button>
          </form>
          {nam}
          
        </Box>
       
      </Modal>
    </div>
    </div>
        
  )
}
export default Popup;
