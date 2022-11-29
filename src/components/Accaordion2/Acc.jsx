import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../../img/LOGO.svg'
import './accaordionPage.scss'
export default function Acc(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={props.style}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         <img className='page-acc-img' src={props.img} alt="" />
          <Typography className='page-acc-title'>
            {props.title}
          </Typography> 
          
           
        
         
        </AccordionSummary>
         
        <AccordionDetails>
        
            {props.content}
            
      
        </AccordionDetails>
       
      </Accordion>
   
    </div>
  );
}
