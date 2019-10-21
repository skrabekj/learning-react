import React from 'react';
import styles from './Card.scss';
//import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
//import Button from '../Button/Button';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  }
  render() {
    //const {title} = this.props;
    return (
      <div className={styles.component}>
        {this.props.title}
      </div>
    );
  }
}

export default Card;
