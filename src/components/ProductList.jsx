
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    selectCartItems,
} from "../cartSlice.jsx";
import { plantCategories } from "../data/plants.js";
import Navbar from "./Navbar.jsx";

export default function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addedIds = cartItems.map((item) => item.id);

    return (
        <>
            <Navbar />

            <main className="container">
                <h1>Shop Houseplants</h1>
                <p className="intro">
                    Find the perfect green companion for your home.
                </p>

                {plantCategories.map((category) => (
                    <section key={category.name}>
                        <h2>{category.name}</h2>

                        <div className="grid">
                            {category.plants.map((plant) => {
                                const isAdded = addedIds.includes(plant.id);

                                return (
                                    <article className="card" key={plant.id}>
                                        <img
                                            src={plant.image}
                                            alt={plant.name}
                                        />

                                        <div className="cardbody">
                                            <h3>{plant.name}</h3>
                                            <p>{plant.description || "A beautiful houseplant for your home."}</p>

                                            <strong>
                                                ${plant.price.toFixed(2)}
                                            </strong>

                                            <button
                                                disabled={isAdded}
                                                onClick={() => dispatch(addToCart(plant))}
                                            >
                                                {isAdded ? "Added to Cart" : "Add to Cart"}
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </main>
        </>
    );
}
