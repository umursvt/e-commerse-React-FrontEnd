import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Cart({ cartItems, sum }) {
  const [cartItem, setCartItem] = useState([]);

  const fetchPrice = async () => {
    try {
      const response = await axios.get('http://localhost:3003/addCart');
      const data = response.data.flat();
      setCartItem(data);
      return data;
    } catch (error) {
      console.log('An error happened', error);
    }
  };

  useEffect(() => {
    fetchPrice().then((data) => console.log('VERİLER', data));
  }, []);

  const handleBasket = () => {
    const response = fetchPrice();
    console.log(response);
  };
  return (
    <div>
      <div className="container mx-auto p-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">Sepetim</h1>
          <span className="text-lg font-bold">
            Toplam Bakiye:
            <span className="bg-green-900 text-orange-400 rounded-full px-4 py-2 ml-2">
              {sum} <span className="px-1">$</span>
            </span>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {cartItems.map((item, index) => (
            <div key={index} className="border rounded-md shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-sm mb-4">{item.desc}</p>
                <p className="text-sm font-bold">{item.price} $</p>
                <p className="text-sm font-bold   mt-2">
                  {item.quantityNumber} item added.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10">
          <button
            onClick={handleBasket}
            className="bg-orange-400 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          >
            ONAYLA!
            {cartItems.length > 0 && (
              <span className="bg-green-900 text-orange-400 rounded-full px-4 py-2 ml-2">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
