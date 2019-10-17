import React from 'react';
import styles from './Card.scss';
import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import creatorstyles from '../Creator/Creator.scss';

class Card extends React.Component {

  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange(event){
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0
    });
  }

  handleOK(){
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false
      });
    }
  }

  handleCancel(){
    this.setState({
      value: '',
      visibleButtons: false
    });
  }

  render() {
    return (
      <div className={styles.component}>
        {this.props.title}
      </div>
      );
  }
}

export default Card;
