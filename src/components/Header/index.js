import React from "react"
import Style from '../Header/style'
import Menu from '../Menu'
const Header = ({ }) => {

    return (
        <Style>
            <div className="opac">
                <Menu></Menu>
            </div>

        </Style>

    )
}


export default Header