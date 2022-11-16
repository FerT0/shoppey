import { useNavigate } from "react-router"


export default function SideBar() {
    const navigate = useNavigate()
    const adminUsers = () => {
        navigate("/admin/users")
    }
    const adminProducts = () => {
        navigate("/admin/products")
    }

    const adminCarts = () => {
        navigate("/admin/carts")
        
    }

    return (
        <div>
            <div className="sideBarAdmin">
                <button onClick={adminUsers}>Users</button>
                <button onClick={adminProducts}>Products</button>
                <button onClick={adminCarts}>Carts</button>
                
            </div>
            
        </div>
    )
}