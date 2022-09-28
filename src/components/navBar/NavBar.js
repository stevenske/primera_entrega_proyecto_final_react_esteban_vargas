import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () =>{
    const cartImg = './img/shopping_cart_logo.png'
    return(
        <nav className="navbar navbar-expand-lg bg-ice">
            <div className="container-fluid ">
                <div id="header__logo" className="w-10 zoom">
                    <Link className="navbar-brand" to={'/'}><img src="./img/logo.png" width="60" height="60" alt="logo icon"/></Link>
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
                            } className='text-nav fs-4' to={'/category/electronics'}>ELECTRONIC</NavLink>
                        </li>
                        <li className="nav-item zoom">
                            <NavLink style={({isActive})=>
                                isActive
                                ? {fontWeight:'bold', color:'white'}
                                :{}                        
                            } className='text-nav fs-4' to={"/category/men's clothing"}>MEN'S CLOTHING</NavLink>
                        </li>
                        <li className="nav-item zoom">
                            <NavLink style={({isActive})=>
                                isActive
                                ? {fontWeight:'bold', color:'white'}
                                :{}
                            }className="text-nav fs-4" to={'/contact'}>CONTACT</NavLink>
                        </li>
                        <li className="nav-item zoom">
                            <NavLink style={({isActive})=>
                                isActive
                                ? {fontWeight:'bold', color:'white'}
                                :{}
                            } className="text-nav fs-4" to={'/about-us'}>ABOUT US</NavLink>
                        </li>
                    </ul>
                    <ul className='zoom'><Link className='link' to="/cart"><CartWidget img={cartImg}/></Link></ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar