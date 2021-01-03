


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, props }) => (
    console.log('props');
    <Style >
        {children}

    </Style>
)

export default Section