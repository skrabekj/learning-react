import React from 'react';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {cards, addcard, id} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <Droppable droppableId={id}>
          {provided => (
            <div className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map((cardData, index) => (
                <Card key={cardData.id} {...cardData} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
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
  id: PropTypes.string,
};

export default Column;
