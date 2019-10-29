import React from 'react';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {

  render() {
    const {cards} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
  static propTypes = {
    cards: PropTypes.array,
  };
}

export default SearchResults;
