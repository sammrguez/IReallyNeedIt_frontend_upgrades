import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import logoBlack from '../images/LOGO_IRNI_short.png';

function Footer() {
  return (
    <section className='footer'>
      <img src={logoBlack} className='footer__logo' />
      <ul className='footer__social-media'>
        <li className='footer__item'>
          <Link
            className='footer__link'
            to='https://www.facebook.com/IReallyNeedItMx?locale=eo_EO'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} className='footer__media-icon' />
            <h4 className='footer_media-text'> I really Need It</h4>
          </Link>
        </li>
        <li className='footer__item'>
          <Link
            className='footer__link'
            to='https://www.instagram.com/i_really_need_it_mx/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} className='footer__media-icon' />
            <h4 className='footer_media-text'> I_really_Need_It_mx</h4>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
