


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, background }) => {
    console.log('--', background)
    return (
        < Style background={background}>
            {children}

        </Style >
    )

}



export default Section