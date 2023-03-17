import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Boletín"/>
      <h1 className='headtext__cormorant'>Suscríbete</h1>
      <p className='p__opensans'>¡Y nunca te pierdas las últimas actualizaciones!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Coloca tu correo electrónico' />
      <button className='custom__button'>Subscribete</button>
    </div>
  </div>
);

export default Newsletter;
