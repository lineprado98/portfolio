


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, background }) => {

    return (
        < Style props={background} >
            {children}

        </Style >
    )

}



export default Section