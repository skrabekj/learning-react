import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';

const MainLayout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
