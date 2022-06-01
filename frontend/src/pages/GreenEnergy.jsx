import React from 'react'
import { FormattedMessage } from 'react-intl';

function GreenEnergy() {
  return (
    <div className='page__container'>
      <div className='page__title GreenEnergy__pageTitle'>
        <h1><FormattedMessage id='greenEnergy.pageTitle' /></h1>
      </div>
      <div className="greenEnergy__contentContain">
        <div className="greenEnergy__content__section">
          <p><FormattedMessage id='greenEnergy.content.01' />
          </p><br />
        </div>
        <div className="greenEnergy__content__section">
          <p>
            <FormattedMessage id='greenEnergy.content.02' />
          </p><br />
        </div>
        <div className="greenEnergy__content__section">
          <p>
            <FormattedMessage id='greenEnergy.content.03' />
          </p><br />
        </div>
        <div className="greenEnergy__content__section">
          <p>
            <FormattedMessage id='greenEnergy.content.04' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default GreenEnergy;