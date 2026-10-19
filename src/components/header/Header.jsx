import logo from './../../img/icons/logo.svg'

import './header.css'


export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="Логотип" />
                        <span className='header__logo-name'>Fashion</span>
                    </div>
                    <nav className="header__nav">
                        <ul className='header__breadcrumbs'>
                            <li className="header__link">
                                <a href="#!">CATALOGUE</a>
                            </li>
                            <li className="header__link">
                                <a href="#!">FASHION</a>
                            </li>
                            <li className="header__link">
                                <a href="#!">FAVOURITE</a>
                            </li>
                            <li className="header__link">
                                <a href="#!">LIFESTYLE</a>
                            </li>
                            <li className="header__link">
                                <a href="#!" className='header__signUp'>SIGN UP</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}