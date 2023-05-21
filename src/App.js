import { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import PageFooter from './components/PageFooter';


function App() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
    }

    const increaseAmount = async (id, newAmount) => {
        const response = await axios.put(`http://localhost:3001/products/${id}`, {
            ...products.find(product => product.id === id),
            amount: newAmount,
        });

        const updatedProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, ...response.data };
            }

            return product;
        });

        setProducts(updatedProducts);
    }

    const resetAmounts = async () => {
        const updatedAmounts = products.map(async (product) => {
            if (product.amount > 0) {
                await axios.put(`http://localhost:3001/products/${product.id}`, {
                    ...product,
                    amount: 0,
                });
            }
        });
        await Promise.all(updatedAmounts);
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div>
            <NavBar />
            <ProductList products={products} increaseAmount={increaseAmount} />
            <ShoppingCart products={products} resetAmounts={resetAmounts} />
            <PageFooter />
        </div>
    )
}

export default App;