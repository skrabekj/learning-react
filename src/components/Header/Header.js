import React from 'react';
import styles from './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='compass' />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
