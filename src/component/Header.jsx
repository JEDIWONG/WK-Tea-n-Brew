import "../style/header.css"
import logo from "../assets/icon/logo.png"

function Header(){

    return(
        <>
            <header className="header-container">

                <div className="header-logo">
                    <img src={logo}></img>
                    <h3>WK Tea & Brew</h3>
                </div>
                

                <ul className="nav-bar">
                    <li>Home</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>More</li>
                </ul>
            </header>
        </>        
    )

}

export default Header