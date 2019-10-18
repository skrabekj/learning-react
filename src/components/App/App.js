import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';
import Hero from '../Hero/Hero.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import listStyle from '../List/List.scss';
class App extends React.Component {

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
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <Hero titleText={listData.title} heroImage={listData.image} />
        <div className={listStyle.description}>
          {ReactHtmlParser(listData.description)}
        </div>
        {this.state.list.map((item,index) =><List {...listData} key={index} title={item} />)}
        <div className={listStyle.creator}>
          <Creator text={'dodaj liste'} action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;
