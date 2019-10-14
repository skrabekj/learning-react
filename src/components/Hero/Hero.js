import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';


const Hero = props => {
  return <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img src={props.heroImage.src} alt={props.heroImage.alt} className={styles.image} />
  </header> }

Hero.propTypes = {
titleText: PropTypes.node,
heroImage: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
}
export default Hero;
