
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    selectCartItems,
    selectCartTotal,
} from "../cartSlice.jsx";
import Navbar from "./Navbar.jsx";

export default function CartItem() {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

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
                                    <img src={plant.image} alt={plant.name} />

                                    <div className="cartinfo">
                                        <h2>{plant.name}</h2>

                                        <p>
                                            Unit price: ${plant.price.toFixed(2)}
                                        </p>

                                        <p>
                                            Item total: $
                                            {(plant.price * plant.quantity).toFixed(2)}
                                        </p>

                                        <button
                                            onClick={() =>
                                                dispatch(decreaseQuantity(plant.id))
                                            }
                                        >
                                            −
                                        </button>

                                        <span className="qty">{plant.quantity}</span>

                                        <button
                                            onClick={() =>
                                                dispatch(increaseQuantity(plant.id))
                                            }
                                        >
                                            +
                                        </button>

                                        <button
                                            className="delete"
                                            onClick={() =>
                                                dispatch(removeFromCart(plant.id))
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <aside className="summary">
                            <h2>Total: ${total.toFixed(2)}</h2>

                            <button
                                onClick={() => window.alert("Coming Soon!")}
                            >
                                Checkout
                            </button>

                            <Link className="buttonlink light" to="/plants">
                                Continue Shopping
                            </Link>
                        </aside>
                    </>
                )}
            </main>
        </>
    );
}
