import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
//import  {listData} from '../../data/dataStore'; //pageContents,
//import Hero from '../Hero/Hero.js';
//import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import listStyle from '../List/List.scss';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  state = {
    list: [],
  }
  addList(title){
    this.setState(state => (
      {
        list: [
          ...state.list,
          title,
        ],
      }
    ));
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        {/*<h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>*/}
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/*<Hero titleText={listData.title} heroImage={listData.image} />
        <div className={listStyle.description}>
          {ReactHtmlParser(listData.description)}
        </div>*/}
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/*{this.state.list.map((item,index) =><List {...listData} key={index} title={item} />)}*/}
        <div className={listStyle.creator}>
          <Creator text={'dodaj liste'} action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;
