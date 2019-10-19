import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
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
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK(){
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel(){
    let result = window.confirm('Bak;sk');
    console.log(result);
    if(result==true){
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={() => this.handleOK()}>OK</Button>
          <Button onClick={() => this.handleCancel()} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}

Creator.propTypes = {
  action: PropTypes.func,
};

export default Creator;
