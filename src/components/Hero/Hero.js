import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => {
  //console.log('img', props.heroImage);
  return <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img src={props.heroImage} className={styles.image} />
  </header> }

Hero.propTypes = {
titleText: PropTypes.node,
//heroImage: PropTypes.shape({ src: PropTypes.string })

}
export default Hero;
