import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setproducts] = useState(first10);
    const [cart, setCart]= useState([]);
    
const handleAddProduct = (product) =>{
    console.log('product added',product);
    const newCart= [...cart, product];
    setCart(newCart);

}

    return (
        <div className= "shop-container">
            <div className="product-container">
                <ul>
                {
                    products.map(product=> <Product 
                        product={product}
                        handleAddProduct={handleAddProduct}
                        ></Product>)
                }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart} > </Cart>
            </div>
        </div>
    );
};
// function Products(){
//     const [products, setProducts] = useState([]);
//     useEffect(()=>{
//         fetch("./products.json")
//         .then(res=> res.json())
//         .then(data=> setProducts(data));
//     }, [])

//     return(
//         <div>
//             <h3> users{products.length}</h3>
//             <h2>names</h2>
//         </div>
//     )
// }

export default Shop;