import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqData} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image} />
    <p>{faqData.content}</p>
  </Container>
);

export default Faq;
