import "../../styles/components/Competence/style.css"

import * as React from 'react';

type CompetenceProps = {
    image: string
    text: string
}

function Competence({image, text}: CompetenceProps) {
    return (
        <div className='component_competence'>
            <img src={image} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default Competence;