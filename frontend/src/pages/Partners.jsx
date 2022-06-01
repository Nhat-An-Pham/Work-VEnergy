import React from 'react'
import { FormattedMessage } from 'react-intl'

const Partners = () => {
  return (
    <div className='page__container'>
      <div className="page__title Partners__pageTitle">
        <h1><FormattedMessage id='customer.pageTitle' /></h1>
      </div>
      <div className="Partners__description">
        {/* <p><FormattedMessage id='customer.thanks' /></p> */}
        <div className='Partners__icons__container'>
          <div className='Partners__icons__item'>
            <div className='Partners__icons__item__img'>
              <img className='Partners__icons__item__01' src={require("../assets/image/Customers/cng.jpg")} alt=''></img>
            </div>
            <div className='Partners__icons__item__img'>
              <img src={require("../assets/image/Customers/gas.png")} alt=''></img>
            </div>
          </div>
          <div className='Partners__icons__item'>
            <div className='Partners__icons__item__img'>
              <img src={require("../assets/image/Customers/gasdistr.jpg")} alt=''></img>
            </div>
            <div className='Partners__icons__item__img'>
              <img src={require("../assets/image/Customers/gasSouth.png")} alt=''></img>
            </div>
          </div>
          <div className='Partners__icons__item'>
            <div className='Partners__icons__item__img'>
              <img src={require("../assets/image/Customers/pvep.jpg")} alt=''></img>
            </div>
            <div className='Partners__icons__item__img'>
              <img src={require("../assets/image/Customers/pvfcco.jpg")} alt=''></img>
            </div>
          </div>
          <div className='Partners__icons__item'>
            <div className='Partners__icons__item__img'>
              <img src={require("../assets/image/Customers/pvoil.png")} alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Partners