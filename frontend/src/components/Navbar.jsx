import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo_white.jpg'

import { FormattedMessage } from 'react-intl'
import { Context } from './intl'
// import { useIntl } from 'react-intl'



const Navbar = () => {

  // const lang = useIntl().locale;

  const context = useContext(Context);

  return (
    <div className='Navbar__container'>
      {/* Navbar PC */}
      <nav className='Navbar'>
        <Link to='/Home'><img src={logo} alt='logo' className='Navbar__logo' /></Link>
        <div className='Navbar__item'>
          {/* About */}
          <div className='Navbar__dropdown'>
            <button>
              <FormattedMessage id="navbar.about.about" defaultMessage="Về VNERGY"
              />
            </button>
            <div className='Navbar__dropdown__content'>
              <Link to="/About/Company"><FormattedMessage id="navbar.about.company" /></Link>
              <Link to="/About/Partners"><FormattedMessage id="navbar.about.customer" /></Link>
            </div>
          </div>
          {/* Projects */}
          <div className='Navbar__dropdown'>
            <button><FormattedMessage id="navbar.projects.projects" /></button>
            <div className='Navbar__dropdown__content'>
              <Link to="/Projects/Engineering"><FormattedMessage id="navbar.projects.engineering" /></Link>
              <Link to="/Projects/Trading"><FormattedMessage id="navbar.projects.trading" /></Link>
              <Link to="/Projects/GreenEnergy"><FormattedMessage id="navbar.projects.greenEnergy" /></Link>
            </div>
          </div>
          <div className='Navbar__dropdown'>
            {/* Contact */}
            <Link to="/Contact">
              <button><FormattedMessage id="navbar.contact" /></button>
            </Link>
          </div>
        </div>
        <div className='navbar__languageIconDropDown'>
          <select value={context.locale} onChange={context.selectLang}>
            <option value="vi-Vn">Vietnamese</option>
            <option value="en-Us">English</option>
          </select>
        </div>
      </nav>


      {/* Navbar Mobile */}
      <label for='navbar__switch' className="Navbars__btn">
        <img src={require('../assets/image/icon/NavbarsMobileIcon.png')} alt='' />
      </label>
      <input type='checkbox' hidden className='nav__input' id='navbar__switch'></input>

      <label for='navbar__switch' className='Navbars__overlay'></label>

      <div className="Navbar__mobile">
        <div className='Navbar__mobile__logo'>
          <img src={require('../assets/image/logo_white.jpg')} alt=''></img>
        </div>
        <label for='navbar__switch' className='Navbar__mobile__closeBtn'>
          <img src={require('../assets/image/icon/NavbarsMobileCloseButton.png')} alt='' />
        </label>
        <div className='Navbar__mobile__wrapper'>
          <Link to="/Home">
            <div className='Navbar__mobile__links'>Home</div>
          </Link>
          <h1>About Us</h1>
          <Link to="/About/Company">
            <div className='Navbar__mobile__links'>Company</div>
          </Link>
          <Link to="/About/Partners">
            <div className='Navbar__mobile__links'>Customers</div>
          </Link>
          <h1>Projects</h1>
          <Link to="/Projects/Engineering">
            <div className='Navbar__mobile__links'>Engineering</div>
          </Link>
          <Link to="/Projects/Trading">
            <div className='Navbar__mobile__links'>Trading</div>
          </Link>
          <Link to="/Projects/greenEnergy">
            <div className='Navbar__mobile__links'>Green Energy</div>
          </Link>
          <h1>Contact Us</h1>
          <Link to="/Contact">
            <div className='Navbar__mobile__links'>Contact Us</div>
          </Link>

          <div className='navbar__languageIconDropDown'>
          <select value={context.locale} onChange={context.selectLang}>
            <option value="vi-Vn">Vietnamese</option>
            <option value="en-Us">English</option>
          </select>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;