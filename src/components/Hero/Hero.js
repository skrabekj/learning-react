import React from 'react';
import styles from './Hero.scss';


class Hero extends React.Component {
  const Hero = props => { return <div>{props.title}</div> }
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="image" />
      </header>
    )
  }

}

export default Hero;
