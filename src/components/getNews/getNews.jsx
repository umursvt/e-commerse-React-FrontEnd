import React, { useState } from 'react';
import '../../components/getNews/getnews.css';
import SendIcon from '@mui/icons-material/Send';

function GetNews() {
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const handleMail = () => {
    console.log(mail);
    setMessage('Başarıyla gönderildi!');
  };

  const handleInputChange = (event) => {
    setMail(event.target.value);
  };

  return (
    <>
      <div className="mail-contaner bg-orange-100 rounded sm ">
        <div className="child-mail">
          <h1 className="text-center text-green-800">Newsletter!</h1>
          <p className="lg:ms-6 text-center text-orange-600 font-bold">
            Get updates from your favorite products
          </p>
          <div className="input d-flex justify-center">
            <input
              type="text"
              className="placeholder:ps16 text-center font-bold shadow-2xl"
              placeholder="Enter your mail adress"
              value={mail}
              onChange={handleInputChange}
            />
            <button onClick={handleMail}>
              <SendIcon className="ps-1" sx={{ fontSize: 50 }} />
            </button>
          </div>
          {message && (
            <p className="text-center mt-3 font-bold text-green-600">
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default GetNews;
