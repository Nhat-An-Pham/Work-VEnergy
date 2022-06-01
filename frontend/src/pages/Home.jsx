import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import engineeringData from '../assets/data/engineeringData'
import Slider from '../components/Slider';



const Home = () => {

  const lang = useIntl().locale;

  const projects = engineeringData.find((p) => p.id === ("01"));

  return (
    <div className='Home__container'>

      {/* first image section */}
        
      <div className='Home__section Home__section__slider'>
        <Slider/>
        <div className='Home__section__slider__text Home__section__slider__hs01'><FormattedMessage id="home.slider.title.01" /></div>
        <div className='Home__section__slider__text Home__section__slider__hs02'><FormattedMessage id="home.slider.title.02" /></div>
        <div className='Home__section__slider__text Home__section__slider__hs03'><FormattedMessage id="home.slider.title.03" /></div>
        <div className='Home__section__slider__text Home__section__slider__hs04'><FormattedMessage id="home.slider.title.04" /></div>
      </div>

      {/* statistic */}
      <div className='Home__section Home__section__statistic'>
        <div className='Home__section__statistic__wrapper'>
          <div className="Home__section__statistic__contentContainer">
            <Link to="/Projects/Engineering" className='Home__section__statistic__contentContainer__box__01'>
              <div className="Home__section__statistic__contentContainer__box__01__img">
                <img src={require('../assets/image/Home/Home__statistic/projects.png')} alt='' />
              </div>
              <div className='Home__section__statistic__contentContainer__box__01__text__01'>
                <h3>+20 <FormattedMessage id='home.stats.ongoing' /></h3>
              </div>
            </Link>
            <Link to="/About/Partners" className='Home__section__statistic__contentContainer__box__02'>
              <div className='Home__section__statistic__contentContainer__box__02__text__02'>
                <h3><FormattedMessage id='home.stats.customer' /></h3>
              </div>
              <div className="Home__section__statistic__contentContainer__box__02__img">
                <img src={require('../assets/image/Home/Home__statistic/partner.png')} alt='' />
              </div>
            </Link>
          </div>

          <div className="Home__section__statistic__contentContainer">
            <Link to="/Projects/Engineering" className='Home__section__statistic__contentContainer__box__01'>
              <div className="Home__section__statistic__contentContainer__box__01__img">
                <img src={require('../assets/image/Home/Home__statistic/offshore.png')} alt='' />
              </div>
              <div className='Home__section__statistic__contentContainer__box__01__text__01'>
                <h3><FormattedMessage id='home.stats.engineering' /></h3>
              </div>
            </Link>
            <Link to="/Projects/Trading" className='Home__section__statistic__contentContainer__box__02'>
              <div className='Home__section__statistic__contentContainer__box__02__text__02'>
                <h3><FormattedMessage id='home.stats.trading' /></h3>
              </div>
              <div className="Home__section__statistic__contentContainer__box__02__img">
                <img src={require('../assets/image/Home/Home__statistic/onshore.png')} alt='' />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards on-going projects */}
      <div className='Home__section__title'>
        <h1><FormattedMessage id="home.ongoing.title" /></h1>
      </div>
      <div className='Home__section Home__section__ongoingContain'>
        <div className='Home__section__ongoinglayout'>
          <div className='Home__section__ongoing'>
            <Link to={`/Projects/Engineering/${projects.id}`} className='Home__section__ongoing__img'>
              <img src={projects.img} alt="" />
            </Link>
            <div className='Home__section__ongoing__titleBox'>
              <Link to={`/Projects/Engineering/${projects.id}`} className='Home__section__ongoing__titleBox__projectTitle'>
                {lang === "en-Us" ? <p>{projects.title_en}</p> : <p>{projects.title_vn}</p>}
              </Link>
              <Link to={`/Projects/Engineering/${projects.id}`} className='Home__section__ongoing__titleBox__item'>
                {lang === "en-Us" ? <h2>{projects.shortdesc_en}</h2> : <h2>{projects.shortdesc_vn}</h2>}
              </Link>
              <div className='Home__section__ongoing__button'>
                <div className='Home__section__ongoing__button__in'>
                  <Link to={`/Projects/Engineering`} >
                    <div><FormattedMessage id="home.ongoing.button" /></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* short desc about what GreenEnergy do */}
      <div className='Home__section__title'>
        <h1><FormattedMessage id='home.greenEnergy.title' /></h1>
      </div>
      <div className='Home__section__greenEnergy__quotes'>
        <h2>"<FormattedMessage id="home.greenEnergy.quotes" />"</h2>
      </div>
      <div className='Home__section Home__section__greenEnergyContain'>
        <div className='Home__section__greenEnergy__wrapper'>
          <div className="Home__section__greenEnergy__descriptionBox">
            <div className="Home__section__greenEnergy__descriptionBox__textAndButton">
              <p><FormattedMessage id='home.greenEnergy.description' /></p>
              <div className='Home__section__greenEnergy__descriptionBox__textAndButton__button'>
                <Link to="/Projects/GreenEnergy">
                  <div className="Home__section__greenEnergy__descriptionBox__textAndButton__button__in"><div><FormattedMessage id='home.greenEnergy.button' /></div></div>
                </Link>
              </div>
            </div>
            <Link to="/Projects/GreenEnergy" className='Home__section__greenEnergy__descriptionBox__img'>
              <img src={require("../assets/image/Home__greenEnergyImage.jpg")} alt='' />
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Home