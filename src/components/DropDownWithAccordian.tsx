import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/Box';
import { Box, Divider } from "@mui/material";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MultipleSelect from './MultipleSelect';

export default function DropDownWithAccordian() {
  return (
    <Box sx={{marginLeft: '20px'}}>
      <Accordion sx={{border: 'solid 1px #efeff1', borderRadius: '5px', backgroundColor: '#fff !important'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize: '18px', fontFamily: 'Rubik'}}>Access Type</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{background: '#fbfbfd'}}>
        <Divider variant="middle" />

            <Typography variant="caption" display="block" sx={{ mt: 2, ml: 2, fontStretch: 'normal', fontSize: '12px', fontFamily: 'Rubik', color: '#b4b4b4', letterSpacing: 'normal', lineHeight: 'normal', fontStyle: 'normal'}} gutterBottom>
                Select access type
            </Typography>
            <MultipleSelect/>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
