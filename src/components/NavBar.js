import { useNavigate } from "react-router"
import logo from "./images/logo.png"

export default function NavBar(){
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToShop = () => {
        navigate("/store")
    }


    const goToAdmin = () => {
        navigate("/admin")
    }

    
    return (
        <div>
            <div className="navbar">
                <div  onClick={goToHome} className="navbar-logo">
                    <img src={logo} alt="shoppey"></img>
                    <h2>Shoppey</h2>
                </div>
                
                <div className="navbar-content">
                    <button onClick={goToHome}>Home</button>
                    <button onClick={goToShop}>Shop</button>
                </div>
            </div>
        </div>
    )
}