import React, { useState, useEffect } from "react";
import ProductInCart from "./ProductInCart";
import "./styles/ShoppingCartItem.css";

function ShoppingCart({ products, resetAmounts }) {
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  useEffect(() => {
    const newTotal = products.reduce((acc, product) => {
      if (product.amount >= 1) {
        return acc + product.price * product.amount;
      }
      return acc;
    }, 0);
    setTotal(newTotal);
  }, [products]);

  const handlePlaceOrderClick = () => {
    setShowModal(true);
  };

  const handleConfirmOrderClick = () => {
    if (Object.values(orderDetails).every((value) => value.trim() !== "")) {
      alert("Kiitos tilauksestasi!\n" + JSON.stringify(orderDetails, null, 2));
      setShowModal(false);
      resetAmounts();
    } else {
      alert("Ole hyvä ja täytä kaikki kentät!");
    }
  };

  const handleInputChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetAmountClick = () => {
    resetAmounts();
  };

  const productsInCart = products
    .map((product) => {
      if (product.amount >= 1) {
        return <ProductInCart key={product.id} product={product} />;
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="cart-container">
      <h2>Ostoskori</h2>
      <div className="shoppingCartItem">{productsInCart}</div>
      <div>{total} €</div>
      <div>
        <button onClick={handleResetAmountClick}>Tyhjennä Ostoskori</button>
        <button onClick={handlePlaceOrderClick}>Vahvista tilaus</button>
      </div>
      {showModal && (
        <div className="modal">
          <label>
            Nimi:{" "}
            <input
              type="text"
              name="name"
              value={orderDetails.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Sähköposti:{" "}
            <input
              type="email"
              name="email"
              value={orderDetails.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Puhelin:{" "}
            <input
              type="tel"
              name="phone"
              value={orderDetails.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Osoite:{" "}
            <input
              type="text"
              name="address"
              value={orderDetails.address}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Postinumero:{" "}
            <input
              type="text"
              name="zip"
              value={orderDetails.zip}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Kaupunki:{" "}
            <input
              type="text"
              name="city"
              value={orderDetails.city}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleConfirmOrderClick}>Vahvista</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
