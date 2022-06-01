import React from 'react'
import { FormattedMessage } from 'react-intl'

const Contact = () => {
  return (
    <>
      <div className='page__container'>
        <div className='page__title contact__pageTitle'>
          {/* <img src={require('../assets/image/pageTitleBackground.png')} alt='pageTitle' /> */}
          <h1><FormattedMessage id="contact.pageTitle"/></h1>
        </div>
        <div className='contact__quotes'>
          {/* <h1><FormattedMessage id='contact.getInTouch'/></h1> */}
        </div>
        <div className='contact__wrapper'>
          <div className='contact__item'>
            <h2>Email</h2>
            <p><strong> info@vnergy.vn</strong></p>
          </div>
          <div className='contact__item'>
            <h2><FormattedMessage id='contact.phone'/></h2>
            <p>(+84)8 6682 0875</p>
          </div>
          <div className='contact__item'>
            <h2><FormattedMessage id='contact.address'/></h2>
            <p><FormattedMessage id='contact.address.address'/></p>
          </div>

        </div>

        
      </div>
    </>
  )
}

export default Contact