
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../cartSlice.jsx";

export default function Navbar() {
    const cartCount = useSelector(selectCartCount);

    return (
        <header className="navbar">
            <Link className="brand" to="/">
                🌿 Paradise Nursery
            </Link>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/plants">Plants</NavLink>
                <NavLink to="/cart">
                    🛒 Cart ({cartCount})
                </NavLink>
            </nav>
        </header>
    );
}
