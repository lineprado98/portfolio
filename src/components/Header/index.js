import React from "react"
import Style from '../Header/style'
import Menu from '../Menu'
const Header = ({ children }) => {

    return (
        <Style>
            {children}

        </Style>

    )
}


export default Header