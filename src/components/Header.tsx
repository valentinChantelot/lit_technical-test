import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../assets/Logo.svg'

import './Header.scss'

interface NavigationItem {
    label: string
    path: string
}

export interface Props {
    navigation: NavigationItem[]
}

const Header = ({ navigation }: Props) => {
    return (
        <header className="header">
            <nav>
                {navigation &&
                    navigation.length > 0 &&
                    navigation.map((item: NavigationItem, index: number) => (
                        <Link to={item.path} key={index}>
                            {item.label}
                        </Link>
                    ))}
            </nav>
            <nav>
                <Link to="/">
                    <Logo className="header__logo" />
                </Link>
            </nav>
            <nav>
                <a
                    href="https://github.com/valentinChantelot/lit_technical-test"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See code
                </a>
            </nav>
        </header>
    )
}

export default Header
