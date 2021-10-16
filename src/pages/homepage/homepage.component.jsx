import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => {
  document.title = `Crwn Clothing - Home`
  return (
  <div className='homepage'>
    <Directory />
  </div>
)};

export default HomePage;
