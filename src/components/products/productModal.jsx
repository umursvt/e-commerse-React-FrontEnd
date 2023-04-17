import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import '../../components/categoryItem/card.css';
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
  const [quantity, setQuantity] = React.useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const fetchItems = async () => {
    const response = await axios.get('http://localhost:3003/addCart');
    const data = response;

    return data.data;
  };

  const addItem = async () => {
    const oldItems = await fetchItems();
    console.log(oldItems);

    const updated = [item];

    const response = await axios.post('http://localhost:3003/addCart', updated);
    console.log(response);
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
          <img src={item.img} alt="asdasd" className="mt-2 w-80 " />
        </div>
        <div className=" flex justify-between align-items-center mt-5 ">
          {/* <div>
            <p className=" font-bold ">
              <span>{item.price}$ </span>
            </p>
          </div> */}
          {/* <div className=" d-flex gap-2 ">
            <button onClick={addQuantity}>
              <AddCircleOutlineIcon />
            </button>
            <span className=" font-bold ">{quantity}</span>
            <button onClick={subtractQuantity}>
              <RemoveCircleOutlineIcon />
            </button>
          </div> */}
        </div>
        <div className=" flex justify-center ">
          <button
            onClick={addItem}
            className=" border-2 rounded-md bg-green-900 border-black p-2 mt-2 "
          >
            <span className=" text-orange-400 font-bold border-none ">
              Add to Card
            </span>
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default ProductModal;
