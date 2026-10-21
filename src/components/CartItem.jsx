
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    selectCartItems,
    selectCartTotal,
} from "../CartSlice.jsx";
import Navbar from "./Navbar.jsx";

export default function CartItem() {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <Navbar />

            <main className="container">
                <h1>Shopping Cart</h1>

                {items.length === 0 ? (
                    <section className="empty">
                        <h2>Your cart is empty</h2>
                        <p>Discover plants for your home.</p>
                        <Link className="buttonlink" to="/plants">
                            Continue Shopping
                        </Link>
                    </section>
                ) : (
                    <>
                        <div className="cartlist">
                            {items.map((plant) => (
                                <article className="cartrow" key={plant.id}>
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                    />

                                    <div className="cartinfo">
                                        <h2>{plant.name}</h2>

                                        <p>
                                            Unit price: $
                                            {Number(plant.price).toFixed(2)}
                                        </p>

                                        <p>
                                            Item total: $
                                            {(
                                                Number(plant.price) *
                                                plant.quantity
                                            ).toFixed(2)}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => handleDecrease(plant.id)}
                                            aria-label={`Decrease ${plant.name} quantity`}
                                        >
                                            −
                                        </button>

                                        <span className="qty">
                                            {plant.quantity}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => handleIncrease(plant.id)}
                                            aria-label={`Increase ${plant.name} quantity`}
                                        >
                                            +
                                        </button>

                                        <button
                                            type="button"
                                            className="delete"
                                            onClick={() => handleRemove(plant.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <aside className="summary">
                            <h2>Total: ${Number(total).toFixed(2)}</h2>

                            <button
                                type="button"
                                onClick={() => window.alert("Coming Soon!")}
                            >
                                Checkout
                            </button>

                            <Link
                                className="buttonlink light"
                                to="/plants"
                            >
                                Continue Shopping
                            </Link>
                        </aside>
                    </>
                )}
            </main>
        </>
    );
}
