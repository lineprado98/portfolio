


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, props }) => (
    <Style >
        {children}

    </Style>
)

export default Section