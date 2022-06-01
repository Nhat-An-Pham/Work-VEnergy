import React from 'react'
import { FormattedMessage } from 'react-intl'

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <h3>VNERGY</h3>
        <h4><FormattedMessage id='footer.title'/></h4>
        <div className='footer__wrapper'>
          <div className='footer__item'>
            <p><strong><FormattedMessage id='footer.address'/></strong>: <FormattedMessage id='footer.address.address'/></p>
          </div>
          <div className='footer__item'>
            <p><strong>Email</strong>: info@vnergy.vn</p>
          </div>
          <div className='footer__item'>
            <p><strong><FormattedMessage id='footer.phone'/>: </strong>(+84)8 6682 0875</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer