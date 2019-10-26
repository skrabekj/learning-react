import React from 'react';
import Container from '../Container/Container';
import { infoData } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image={infoData.image} />
    <p>{infoData.content}</p>
  </Container>
);

export default Info;
