


import React, { Children } from 'react'
import Style from '../Section/style'

const Section = ({ children, background }) => {
console.log()
    return (
        < Style background='red'>
            {children}

        </Style >
    )

}



export default Section