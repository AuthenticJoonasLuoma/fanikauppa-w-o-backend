import { useState } from "react";

function ProductInCart({ product }) {
    return (
        <div>
            <img src={product.image} alt="soitin" />
            <h3>{product.name}</h3>
        </div>
    );
}

export default ProductInCart;