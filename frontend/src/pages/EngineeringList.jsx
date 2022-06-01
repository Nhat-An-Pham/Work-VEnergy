import React from 'react'

import Cards from '../components/Cards'
import engineeringData from '../assets/data/engineeringData'

import { FormattedMessage, useIntl } from 'react-intl';

function EngineeringList() { 

  const engineering = "Engineering";
  const engineeringProjects = engineeringData.filter((p) => p.cate === (engineering));

  return (
    <div className='page__container'>
      <div className='page__title ProjectList_pageTitle'>
        <h1><FormattedMessage id='engineering.pageTitle' /></h1>
      </div>
      <div className='ProjectList__container'>
        <Cards projects={engineeringProjects} />
      </div>
    </div>
  )
}

export default EngineeringList