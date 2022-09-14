import Cart from '../cart/Cart'
import './NavBar.css'

const NavBar = () =>{
    const cartImg = './img/shopping_cart_logo.png'
    return(
        <nav className="navbar navbar-expand-lg bg-ice">
            <div className="container-fluid ">
                <div id="header__logo" className="w-10 zoom">
                    <a className="navbar-brand" href="index.html"><img src="./img/logo.png" width="60" height="60" alt="logo icon"/></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navDeco gap-1 lh-3 border-2" id="navbarNav">
                    <ul className="navbar-nav container-fluid d-flex justify-content-evenly">
                        <li className="nav-item zoom">
                            <a className="text-ice" href="#">SOBRE NOSOTROS</a>
                        </li>
                        <li className="nav-item zoom">
                            <a className="text-ice" href="#">CONTACTO</a>
                        </li>
                    </ul>
                    <Cart img={cartImg}/>
                </div>
            </div>
        </nav>
    )
}


export default NavBar