

import React, { Children } from 'react'
import Style from '../Container/style'

const Container = ({ children }) => (
    <Style>
        {children}

    </Style>
)

export default Container