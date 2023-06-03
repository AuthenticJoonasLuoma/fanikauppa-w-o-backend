import './styles/ProductShow.css';
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
            <h3 className='product-name'>{product.name}</h3>
            <img onClick={handleInfoClick} alt="soitin" src={product.image} />
            <button className='add-to-basket-button' onClick={handleAddToShoppingCart}>Lisää Ostoskoriin</button>
            <div>
                <button className='add-button' onClick={handleIncreaseAmountClick}>+</button>
                <button disabled={amount < 2} className='dec-button' onClick={handleDecreaseAmountClick}>-</button>
                {amount > 1 && <div className='amount'>{amount}</div>}
            </div>
            <span className='product-price'>{product.price} €</span>
            {showInfo && <div className='product-description'>{product.description}</div>}
        </div>
    );
};

export default ProductShow;