import './brands.css'

import hm from './../../img/brands/HM.png'
import obey from './../../img/brands/Obey.png'
import shopify from './../../img/brands/Shopify.png'
import lacoste from './../../img/brands/Lacoste.png'
import levis from './../../img/brands/Levis.png'
import amazon from './../../img/brands/Amazon.png'

export default function Brands() {
    return (
        <section className='brands'>
            <div className="container">
                <ul className='brands__list'>
                    <li>
                        <a href="#!">
                            <img src={hm} alt="Логотип" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={obey} alt="Логотип" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={shopify} alt="Логотип" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={lacoste} alt="Логотип" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={levis} alt="Логотип" />
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src={amazon} alt="Логотип" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}