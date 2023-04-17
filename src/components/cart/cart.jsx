import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Cart({ cartItems, totalPrice }) {
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
    <div className="max-w-3xl  w-3/4 relative ">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex mb-2 rounded-xl  border-black border-2 px-10 "
        >
          <Card className="flex-1 p-2">
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>
              <Card.Title>
                <p className={item.desc.length > 50 ? 'overflow-hidden' : ''}>
                  {item.desc.slice(0, 50)}
                </p>
              </Card.Title>
              <div>
                <img className="w-20" src={item.img} alt="" />
              </div>
            </Card.Body>
          </Card>
          <div className="flex items-center">
            <p className="font-bold">{item.price} $</p>
          </div>
        </div>
      ))}
      <div className=" mt-28 me-10  fixed  top-0 right-0 bg-white p-2 shadow-lg">
        <p className="font-bold">
          Toplam Bakiye:
          <span className=" ms-2 rounded-2xl bg-green-900 text-orange-400 text-xl p-2  ">
            {totalPrice} <span className="px-1"> $</span>
          </span>
        </p>
        <p className=" mt-10 shadow-2xl font-bold mx-10 ">
          Sepeti
          <span>
            <button
              onClick={handleBasket}
              className="   border-y-black border-2 "
            >
              ONAYLA!
            </button>
          </span>{' '}
        </p>
      </div>
    </div>
  );
}

export default Cart;
