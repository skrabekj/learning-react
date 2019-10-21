import React from 'react';
import styles from './Column.scss';
//import List from '../List/List.js';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';

class Column extends React.Component {

  /*state = {
    card: this.props.card || [],
  }


  addCard(title) {
    console.log('addCard', title);
    this.setState(state => ({
      card: [
        ...state.card,
        {
          key: state.card.length ? state.card[state.card.length - 1].key + 1 : 0,
          title,
          icon: 'list-alt',

        },
      ],
    }));
  }*/
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {cards} = this.props; //icon, title,
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div className={styles.card}>
          {/*{this.state.card.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}*/}
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>*/}
      </section>
    );
  }
}

Column.propTypes = {
  cards: PropTypes.array,
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default Column;
