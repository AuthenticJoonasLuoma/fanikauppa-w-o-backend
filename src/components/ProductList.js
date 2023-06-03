import './styles/ProductList.css';
import ProductShow from "./ProductShow";

function ProductList({ products, increaseAmount }) {
    const renderedProducts = products.map((product) => {
        return <ProductShow key={product.id} product={product} increaseAmount={increaseAmount} />
    })

    return (
        <div className='products-container'>
            <h2 className='product-header'>Tuotteet</h2>
            <div className='list-container'>{renderedProducts}</div>
        </div>
    )
};

export default ProductList;