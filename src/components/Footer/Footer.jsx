import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <>
    <div>
      <h1 className={styles.faq}>FAQs</h1>
    </div>
    <footer className={styles.footer}>
      <div className={styles.faqcontainer}>
        <FaqAccordion question="Is Qtify free to use?" answer="Yaa it is 100% free and has 0% add!" />
        <FaqAccordion question="Can I download and listen to songs offline?" answer="Sorry, unfortunately we don't provide the service to download any songs." />
      </div>
    </footer>
    </>
  );
};

const FaqAccordion = ({ question, answer }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion className={styles.faqaccordion} expanded={expanded} onChange={handleChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="faq-content"
        id="faq-header"
      >
        <span className={styles.questiontext}>{question}</span>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.faqanswer}>{answer}</div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Footer;
