


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, background }) => {

    return (
        < Style background='red'>
            {children}

        </Style >
    )

}



export default Section