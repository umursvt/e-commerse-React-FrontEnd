import axios from 'axios';
import { useEffect, useState } from 'react';
import Cart from '../components/cart/cart';
import Navbar from '../components/navbar/Navbar';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3003/addCart');
      const data = response.data.flat();

      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const price = cartItems.map((item) => item.price);
    const quantity = cartItems.map((item) => item.quantityNumber);
    const len = Math.min(price.length, quantity.length);
    const product = [];

    for (let i = 0; i < len; i++) {
      product[i] = price[i] * quantity[i];
    }

    const sum = [product.reduce((acc, curr) => acc + curr, 0)];
    setSum(sum);
  }, [cartItems]);

  return (
    <div>
      <Navbar />
      <div className=" lg:mx-24  mt-[100px] ">
        <Cart cartItems={cartItems} sum={sum} />
      </div>
    </div>
  );
}

export default CartPage;
