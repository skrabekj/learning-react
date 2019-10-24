import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';

class Column extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {cards, addcard} = this.props; //icon, title,
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div className={styles.card}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addcard}/>
        </div>
      </section>
    );
  }
}

Column.propTypes = {
  cards: PropTypes.array,
  icon: PropTypes.node,
  title: PropTypes.string,
  addcard: PropTypes.func,
};

export default Column;
