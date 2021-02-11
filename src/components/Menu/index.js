import React from "react"
import Style from '../Menu/style'
import Link from 'next/link'
const Menu = () => {

    return (
        <Style>
            <ul>

                <li>  <Link href="/teste">
                    <a>Home</a>
                </Link></li>
                <li>Sobre</li>
                <li>Experiências</li>
            </ul>
        </Style>

    )
}


export default Menu