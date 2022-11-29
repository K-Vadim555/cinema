import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accardion.scss'

const Accardion = (props) => {
    return (
        < >
              <Accordion style={props.style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component='span' sx={ {
           
            fontSize:'1.3vw !important',
            
fontStyle: 'normal',

alignItems:'center',
minWidth:'4vw',
textAlign:'center',
textTransform: 'uppercase',
          } }>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='span' style={props.styleCont}>
            {props.buttons}
            {props.content}
            {props.countres}
            
          </Typography>
        </AccordionDetails>
      </Accordion>
        </>
    );
}

export default Accardion;
