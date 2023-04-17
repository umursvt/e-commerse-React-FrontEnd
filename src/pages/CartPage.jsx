import axios from 'axios';
import { useEffect, useState } from 'react';
import Cart from '../components/cart/cart';
import Navbar from '../components/navbar/Navbar';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
    const totalPrice = price.reduce((x, y) => x + y, 0);
    setTotalPrice(totalPrice);
    console.log('PARALAR', totalPrice);
  }, [cartItems]);

  return (
    <div>
      <Navbar />
      <div className=" lg:mx-24  mt-[100px] ">
        <Cart cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default CartPage;
