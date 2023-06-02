import { useEffect, useState } from "react";
import ProductInCart from './ProductInCart';
import './ShoppingCartItem.css';
import OrderModal from "./OrderModal";


function ShoppingCart({ products, resetAmounts }) {
    const [total, setTotal] = useState(0);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const newTotal = products.reduce((acc, product) => {
            if (product.amount >= 1) {
                return acc + product.price * product.amount;
            }
            return acc;
        }, 0);

        setTotal(newTotal);

    }, [products]);

    const productsInCart = products.map((product) => {
        if (product.amount >= 1) {
            return <ProductInCart product={product} key={product.id} />
        }
    });

    const handleResetAmountClick = () => {
        resetAmounts();
    }

    const isCartEmpty = total === 0;

    return (
        <div className="cart-container">
            <h2>Ostoskori</h2>
            <div className="shoppingCartItem">
                {productsInCart}
            </div>
            <div>{total} €</div>
            <div>
                <button onClick={handleResetAmountClick}>Tyhjennä Ostoskori</button>
                <button className="order-modal-btn" onClick={() => setOpenModal(true)} disabled={isCartEmpty}>Vahvista tilaus</button>
                <OrderModal open={openModal} onClose={() => setOpenModal(false)} productsInCart={productsInCart} />
            </div>
        </div>
    );
};

export default ShoppingCart;