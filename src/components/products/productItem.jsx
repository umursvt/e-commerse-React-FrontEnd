import Card from 'react-bootstrap/Card';
import * as React from 'react';

import '../../components/categoryItem/card.css';
import ProductModal from './productModal';

function BasicExample({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      className=" w-full transform hover:scale-110  transition-transform shadow-md "
      style={{ width: '18rem' }}
    >
      <Card.Img className="product-image" variant="top" src={item.img} />
      <Card.Body>
        <Card.Title className=" text-white shadow-md rounded text-center p-1 bg-green-700 ">
          {item.title}
        </Card.Title>
        <Card.Text>{item.desc}</Card.Text>
        <div>
          <button className="button" onClick={handleOpen}>
            ÜRÜNÜ GÖR
          </button>
          <ProductModal open={open} handleClose={handleClose} item={item} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
