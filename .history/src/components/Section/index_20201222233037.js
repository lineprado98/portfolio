


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, props }) => return(
    console.log('props')
    <Style >
        {children}

    </Style>
)}

export default Section