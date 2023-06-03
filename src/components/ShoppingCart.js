import { useEffect, useState } from "react";
import ProductInCart from './ProductInCart';
import './styles/ShoppingCartItem.css';


function ShoppingCart({ products, resetAmounts }) {
    const [total, setTotal] = useState(0);

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



    return (
        <div className="cart-container">
            <h2>Ostoskori</h2>
            <div className="shoppingCartItem">
                {productsInCart}
            </div>
            <div>{total} €</div>
            <div>
                <button onClick={handleResetAmountClick}>Tyhjennä Ostoskori</button>
                <button>Vahvista tilaus</button>
            </div>
        </div>
    );
};

export default ShoppingCart;