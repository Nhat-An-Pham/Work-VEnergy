import React from 'react'

import TradingData from '../assets/data/TradingData';
import { FormattedMessage, useIntl } from 'react-intl';
import supplierData from '../assets/data/supplierData';

function TradingList() {

  const lang = useIntl().locale;

  const CNG = "CNG";
  const TradingProjects_CNG = TradingData.filter((p) => p.cate === (CNG));
  const VTTB = "VTTB";
  const TradingProjects_VTTB = TradingData.filter((p) => p.cate === (VTTB));
  const EquipmentSupply = "EquipmentSupply";
  const TradingProjects_EquipmentSupply = TradingData.filter((p) => p.cate === (EquipmentSupply));



  return (
    <div className='page__container'>
      <div className='page__title ProjectList_pageTitle'>
        {/* <img src={require('../assets/image/pageTitleBackground.png')} alt='pageTitle' /> */}
        <h1><FormattedMessage id='trading.pageTitle' /></h1>
      </div>
      <div className='ProjectList__container'>
        <p className='trading__pageDescr'>
          {/* <FormattedMessage id="trading.descr" /> */}
        </p>
        <div className='trading__container'>
          <div className='trading__section'>
            {/* CNG */}
            <div className='trading__section__Title'>
              <h1>1. <FormattedMessage id='trading.CNG.title' /></h1>
            </div>
            <div className='trading__section__CNG__container'>
              {TradingProjects_CNG.map((trading, index) =>
                <div className='trading__section__CNG__wrapper' key={index}>
                  <div className='trading__section__CNG__img'>
                    <img src={trading.img} alt=""></img>
                  </div>
                  <div className='trading__section__CNG__content'>
                    {lang === "en-Us" ? <p>{trading.name_us}</p> : <p>{trading.name_vn}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='trading__section trading__section__VTTB'>
            {/* VTTB */}
            <div className='trading__section__Title'>
              <h1>2. <FormattedMessage id='trading.VTTB.title' /></h1>
            </div>
            <div className='trading__section__VTTB__container'>
              {TradingProjects_VTTB.map((trading, index) =>
                <div className='trading__section__VTTB__wrapper' key={index}>
                  - {lang === "en-Us" ? <p>{trading.name_us}</p> : <p>{trading.name_vn}</p>}
                </div>
              )}
            </div>
          </div>
          <div className='trading__section'>
            {/* EquipmentSupply */}
            <div className='trading__section__Title'>
              <h1>3. <FormattedMessage id='trading.EquipmentSupply.title' /></h1>
            </div>
            <div className="trading__section__EQ__container">
            {TradingProjects_EquipmentSupply.map((trading, index) =>
              <div className='trading__section__EQ__wrapper' key={index}>
                <h3>{trading.name}</h3>
                <p>{trading.description}</p>
              </div>
            )}
            </div>
          </div>
          <div className='trading__section trading__section__supplier'>
            {/* supplier */}
            <div className='trading__section__supplier__container'>
              {supplierData.map((trading, index)=>
              <div className='trading__section__supplier__img' key={index}>
                <img src={trading.img} alt= ""></img>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingList;