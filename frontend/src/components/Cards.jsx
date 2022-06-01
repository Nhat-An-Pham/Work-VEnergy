import React from 'react'
import CardItem from './CardItem'
import { useIntl } from 'react-intl';

export default function Cards(props) {

    const lang = useIntl().locale;
    const { projects } = props;

    return (
        <div className='cards__container'>
            {projects.map((card) => 
                <CardItem
                    title={lang=== "en-Us"?card.title_en :card.title_vn}
                    description={lang==="en-Us"?card.shortdesc_en: card.shortdesc_vn}
                    id={card.id}
                    img={card.img}
                    key={card.id}
                />
            )}
        </div>
    )
}

