import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
import Creator from '../Creator/Creator.js';
import listStyle from '../List/List.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }
  state = {
    list: [],
  }
  render() {
    const {title, subtitle, lists, addList} = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
        <div className={listStyle.creator}>
          <Creator text={'dodaj liste'} action={title => addList(title)}/>
        </div>
      </main>
    );
  }
}

export default Home;
