


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, background }) => {

    console.log('props', background)
    return (
        < Style backgo >
            {children}

        </Style >
    )

}



export default Section