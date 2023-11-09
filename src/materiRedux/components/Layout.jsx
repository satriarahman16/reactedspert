import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Layout = () => {
    const navigate = useNavigate()
    return (
        <div style={{display:'flex', width:'100%'}}>
            <div style={{width:'200px', height:'500px', backgroundColor:'orange' }}>
                sidebar
            </div>
            <div style={{width:'100%'}}>
            <div style={{backgroundColor:'teal', width:'100%', height:'200px'}}>
            <div style={{display:"flex", gap:'12px'}}>
                <Button onClick={() => navigate('/')}>Product</Button>
                <Button onClick={() => navigate('/detail/1')}>Detail</Button>
                <Button onClick={() => navigate('/checkout')}>Checkout</Button>
            </div>
            </div>
            <Outlet/>
            </div>  
        </div>
    )
}

export default Layout;