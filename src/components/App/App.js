import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import Creator from '../Creator/Creator.js';
import listStyle from '../List/List.scss';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
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
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        <div className={listStyle.creator}>
          <Creator text={'dodaj liste'} action={title => addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;
