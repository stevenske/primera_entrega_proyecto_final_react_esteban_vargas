import React from 'react'
import { Link } from 'react-router-dom'
import twitter from '../assets/images/icon_twitter.png'
import facebook from '../assets/images/icon_facebook.png'
import instagram from '../assets/images/icon_instagram.png'
import '../footer/Footer.css'
const Footer = () => {
    return (
        <footer className="py-3 border-top navDeco border-dark bg-ice">
            <ul className="nav justify-content-center border-bottom border-dark pb-3 mb-3">
                <li className="nav-item"><Link className='text-nav fs-4 px-3' to={'/'}>Home</Link></li>
                <li className="nav-item"><Link className='text-nav fs-4 px-3' to={'/category/smartphone'}>Smartphones</Link></li>
                <li className="nav-item"><Link className='text-nav fs-4 px-3' to={'/category/headphone'}>Headphones</Link></li>
            </ul>
            <p class="text-center text-muted">© 2022 SmartFound, INC</p>
            <div class="container d-flex justify-content-around">
                <div>
                    <a href="https://www.facebook.com" target="_blank">
                        <img className="zoom" src={facebook} alt="logo of facebook"/>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com" target="_blank">
                        <img className="zoom" src={instagram} alt="logo of instagram"/>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com" target="_blank">
                        <img className="zoom" src={twitter} alt="logo of twitter"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer