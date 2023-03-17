import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contactanos"/>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Encuéntranos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Termina Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Horario de apertura</p>
        <p className='p__opensans'>Lun - Vie: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sab - Dom: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button' style={{ marginTo: '2rem' }}>Visitanos</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
