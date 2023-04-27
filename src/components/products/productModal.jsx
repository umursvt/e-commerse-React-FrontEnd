import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import '../../components/products/modal.css';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 600,

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProductModal({ open, handleClose, item }) {
  const [quantity, setQuantity] = React.useState(1);
  const [text, setText] = React.useState('');

  const addItem = async () => {
    const quantityNumber = quantity;
    const updated = [{ ...item, quantityNumber }];
    const response = await axios.post('http://localhost:3003/addCart', updated);
    console.log('Json görüntüsü', response);
    setText('Product Add In Your Cart Successfully');
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleDelete = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className=" flex justify-end ">
          <button onClick={handleClose}>
            <CancelPresentationIcon />
          </button>
        </div>
        <Typography id="modal-modal-title" variant="h4" component="h1">
          <div className=" flex justify-center ">{item.title}</div>
        </Typography>
        <div className=" flex justify-center ">
          <img src={item.img} alt="asdasd" className="mt-2 w-80 modalImg " />
        </div>

        <div className=" flex justify-center align-items-center mt-5 ">
          <div>
            <p className=" text-center py-2 font-bold text-lg ">
              Price:{item.price}$
            </p>
            <div className="quantity flex gap-2 items-center ">
              <button
                onClick={handleAdd}
                className="addButton bg-green-600 p-2 rounded-md"
              >
                Increase
              </button>
              <p className=" bg-orange-400 p-2 rounded-lg  ">
                Quantity:{quantity}
              </p>
              <button
                onClick={handleDelete}
                className="deleteButton bg-red-400 p-2 rounded-md"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
        <div className="  flex justify-center mt-5  ">
          <button
            onClick={addItem}
            className="   border-2 rounded-md bg-green-900 border-black p-2 mt-2 "
          >
            <span className=" text-orange-400 font-bold border-none ">
              Add to Card
            </span>
          </button>
        </div>
        <p className=" text-center py-5 font-bold text-green-600  ">{text}</p>
      </Box>
    </Modal>
  );
}

export default ProductModal;
