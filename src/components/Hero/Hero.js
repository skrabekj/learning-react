import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

/*class Hero extends React.Component {

  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="image" />
      </header>
    )
  }

}*/

const Hero = props => {
  return <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image}>{props.heroImage}</img>
  </header> }

Hero.propTypes = {
titleText: PropTypes.node,
}
export default Hero;
