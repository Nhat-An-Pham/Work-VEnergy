import React, { useEffect } from 'react'
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom'
import engineeringData from '../assets/data/engineeringData'

function EngineeringDetail() {

  const lang = useIntl().locale;

  const { id } = useParams();
  const projects = engineeringData.find((p) => p.id === (id));

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projects])

  return (
    <div className='ProjectDetail__container'>
      <div className='ProjectDetail__titleBox'>
        {lang==="en-Us"? <h1>{projects.title_en}</h1> : <h1>{projects.title_vn}</h1> }
      </div>
      <div className='ProjectDetail__bodyBox'>
          <div className='ProjectDetail__bodyBox__item'>
              <div className='ProjectDetail__bodyBox__item__desc'>
                  {lang==="en-Us"?<p>{projects.descr_en[1]}</p>:<p>{projects.descr_vn[1]}</p>}<br/>
              </div>
              <div className='ProjectDetail__bodyBox__item__desc'>
                  {lang==="en-Us"?<p>{projects.descr_en[2]}</p>:<p>{projects.descr_vn[2]}</p>}<br/>
              </div>
              <div className='ProjectDetail__bodyBox__item__desc'>
                  {lang==="en-Us"?<p>{projects.descr_en[3]}</p>:<p>{projects.descr_vn[3]}</p>}<br/>
              </div>
              <div className='ProjectDetail__bodyBox__item__desc'>
                  {lang==="en-Us"?<p>{projects.descr_en[4]}</p>:<p>{projects.descr_vn[4]}</p>}<br/>
              </div>
              <div className='ProjectDetail__bodyBox__item__desc'>
                  {lang==="en-Us"?<p>{projects.descr_en[5]}</p>:<p>{projects.descr_vn[5]}</p>}<br/>
              </div>
              <div className='ProjectDetail__bodyBox__item__desc'>
                  {lang==="en-Us"?<p>{projects.descr_en[6]}</p>:<p>{projects.descr_vn[6]}</p>}<br/>
              </div>
          </div>
          <div className='ProjectDetail__bodyBox__item'>
              <img src={projects.img} alt=''/>
          </div>
      </div>
    </div>
  )
}

export default EngineeringDetail;