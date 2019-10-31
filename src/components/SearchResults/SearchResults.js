import React from 'react';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class SearchResults extends React.Component {

  render() {
    const {cards} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.cards}>
            {cards.map(cardData => {
              const column = this.props.columns.find(column =>column.id==cardData.columnId);
              const list = this.props.lists.find(list => list.id==column.listId );
              return <article key={cardData.id}>{cardData.title} columna {column.title} lista {ReactHtmlParser(list.title)}</article>;
            })}
          </div>
        </section>
      </Container>
    );
  }
  static propTypes = {
    cards: PropTypes.array,
    columns: PropTypes.array,
    lists: PropTypes.array,
  };
}

export default SearchResults;
