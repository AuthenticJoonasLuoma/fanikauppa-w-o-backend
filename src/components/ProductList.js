import './ProductList.css';
import ProductShow from "./ProductShow";

function ProductList({ products, increaseAmount }) {
    const renderedProducts = products.map((product) => {
        return <ProductShow key={product.id} product={product} increaseAmount={increaseAmount} />
    })

    return <div className='list-container'>{renderedProducts}</div>
};

export default ProductList;