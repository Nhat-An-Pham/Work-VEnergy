import React from 'react'
import { FormattedMessage } from 'react-intl'

const Company = () => {
  return (
    <div className='page__container'>
      <div className='Company__wrapper'>
        <div className='page__title Company__pageTitle'>
          {/* <img src={require('../assets/image/pageTitleBackground.png')} alt='pageTitle' /> */}
          <h1><FormattedMessage id='company.pageTitle' /></h1>
        </div>
        <div className='Company__descr'>
          <div className="Company__descr__item01">
            <p><FormattedMessage id='company.description'
            values={{code: (word) => <code>{word}</code>}}/></p>
          </div>
        </div>
        {/* <h3><FormattedMessage id='company.prouds'/></h3> */}
      </div>
    </div>
  )
}

export default Company