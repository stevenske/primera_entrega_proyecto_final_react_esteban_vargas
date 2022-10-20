import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import shoppingLogo from '../assets/images/shopping_cart_logo.png'
const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-ice">
            <div className="container-fluid ">
                <div id="header__logo" className="w-10 zoom">
                    <Link className="navbar-brand" to={'/'}><img src={logo} width="60" height="60" alt="logo icon"/></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navDeco gap-1 lh-3 border-2" id="navbarNav">
                    <ul className="navbar-nav container-fluid d-flex justify-content-evenly">
                        <li className="nav-item zoom">
                            <NavLink style={({isActive})=>
                                isActive
                                ? {fontWeight:'bold', color:'white'}
                                :{}                        
                            } className='text-nav fs-4' to={'/category/smartphone'}>Smarthpones</NavLink>
                        </li>
                        <li className="nav-item zoom">
                            <NavLink style={({isActive})=>
                                isActive
                                ? {fontWeight:'bold', color:'white'}
                                :{}                        
                            } className='text-nav fs-4' to={"/category/headphone"}>Headphones</NavLink>
                        </li>
                        
                    </ul>
                    <ul className='zoom'><Link className='link' to="/cart"><CartWidget img={shoppingLogo}/></Link></ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar