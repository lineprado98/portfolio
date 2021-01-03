


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, background }) => {

    console.log('props', props)
    return (
        < Style >
            {children}

        </Style >
    )

}



export default Section