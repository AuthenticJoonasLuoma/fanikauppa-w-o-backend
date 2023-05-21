import './ProductShow.css';
import { useState } from "react";

function ProductShow({ product, increaseAmount }) {
    const [showInfo, setShowInfo] = useState(false);

    const [amount, setAmount] = useState(1);

    const handleInfoClick = () => {
        setShowInfo(!showInfo);
    }

    const handleIncreaseAmountClick = () => {
        setAmount(amount => amount + 1);
    }

    const handleDecreaseAmountClick = () => {
        setAmount(amount => amount - 1);
    }

    const handleAddToShoppingCart = () => {
        increaseAmount(product.id, amount);
        setAmount(1);
    }

    return (
        <div className='product-card'>
            <h3>{product.name}</h3>
            <img onClick={handleInfoClick} alt="soitin" src={product.image} />
            {showInfo && <div>{product.description}</div>}
            <button onClick={handleAddToShoppingCart}>Lisää Ostoskoriin</button>
            <div>
                <button onClick={handleIncreaseAmountClick}>+</button>
                {amount > 1 && <button onClick={handleDecreaseAmountClick}>-</button>}
                {amount > 1 && <div>{amount}</div>}
            </div>
            <h2>{product.price} €</h2>
        </div>
    );
};

export default ProductShow;