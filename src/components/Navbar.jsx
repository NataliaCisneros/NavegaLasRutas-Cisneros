import {Link} from "react-router-dom"
import CartWidget from './CartWidget'

function  Navbar(){
    return (
        <div style={{ display: 'flex', gap: 15 }}>
            <Link to="/">logo</Link>
            
            <Link to="/category/accesorio" >Accesorios</Link>
            <Link to="/category/alhaja" >Alhajas</Link>
            <Link to="/category/complemento" >Complementos</Link>
            <CartWidget></CartWidget>
        </div>
    )
}

export default Navbar