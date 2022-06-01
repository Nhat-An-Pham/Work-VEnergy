import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const CardItem = (props) => {
    return (
        <>
            <div className='cards__items__container'>
                <Link className='cards__items__container__link' to={props.id}>
                    <div className='cards__items__img'>
                        <img alt='project' src={props.img} />
                    </div>
                    <div className='cards__items__info'>

                        <h1 className='cards__items__info__title'>{props.title}</h1>
                        <h5 className='cards__items__info__text'>{props.description}</h5>
                        <div className='cards__items__info__btn'><FormattedMessage id="cards.button" /></div>

                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem