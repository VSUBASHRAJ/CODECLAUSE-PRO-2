import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import img1 from './images/img1.jpg';
import img2 from './images/img2.avif';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import kio from './images/kio.jpg';
import mo from './images/mo.webp';
import mow from './images/mow.webp';
import ima from './images/ima.webp';
import moi from './images/mow.webp';
const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, image: img1 },
    { id: 2, name: 'Product 2', price: 20, image: img2 },
    { id: 3, name: 'Product 3', price: 30, image: img3 },
    { id: 1, name: 'Product 1', price: 10, image: img4 },
    { id: 2, name: 'Product 2', price: 20, image: img5 },
    { id: 3, name: 'Product 3', price: 30, image: kio },
    { id: 1, name: 'Product 1', price: 10, image: mo },
    { id: 2, name: 'Product 2', price: 20, image: moi },
    { id: 3, name: 'Product 3', price: 30, image: mow },
    { id: 3, name: 'Product 3', price: 30, image: ima },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleSearch = (searchTerm) => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const updateProductImage = (productId, imageData) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, image: imageData } : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts); // Update filtered products if search is applied
  };

  return (
    <div className="container">
      <Navbar 
        cart={cart} 
        cartVisible={cartVisible}
        setCartVisible={setCartVisible}
        clearCart={clearCart}
        calculateTotal={calculateTotal}
        removeFromCart={removeFromCart}
        onSearch={handleSearch} 
      />
      <ProductList 
        products={filteredProducts} 
        addToCart={addToCart}
        updateProductImage={updateProductImage} // Pass the image update function
      />
      {cartVisible && (
        <CartSummary 
          total={calculateTotal()} 
          clearCart={clearCart} 
          removeFromCart={removeFromCart}
          cart={cart} 
        />
      )}
    </div>
  );
};

export default App;
