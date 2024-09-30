import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function QuestionsSection(): JSX.Element {
  return (
    <div className='bg-gray-50 shadow-none'>
      {/* First accordion item */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="bg-white"
        >
          <Typography className="text-black font-semibold">
            Phasellus sed efficitur dolor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
          <Typography className="text-gray-700">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
            elementum. Phasellus sed efficitur dolor, et ultricies sapien.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Second accordion item */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="bg-white"
        >
          <Typography className="text-black font-semibold">
            Quisque fringilla sit amet dolor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
          <Typography className="text-gray-700">
            Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse rhoncus laoreet purus quis elementum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Third accordion item */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className="bg-white"
        >
          <Typography className="text-orange-500 font-semibold">
            Aliquam et sem odio?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
          <Typography className="text-gray-700">
            Answer. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie
            ipsum iaculis sit amet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}