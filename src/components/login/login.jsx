import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ sendProps }) {
  const [user, setUser] = useState('');
  const [psw, setPsw] = useState('');
  const [error, setError] = useState('');

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePsw = (e) => {
    setPsw(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setUser('');
    setPsw('');
    setError(alert('Invalid username or password'));
    sendProps(user, psw);
  };

  return (
    <>
      <div className=" absolute z-10 text-white flex items-center justify-end  h-40 text-lg font-bold w-full  ">
        <div>
          <Link className=" text-white " to="/">
            <button className=" md:mb-10 sm:mb-10 me-10  ">Go Home Page</button>
          </Link>
        </div>
      </div>
      <div className=" forum flex justify-center items-center h-screen ">
        <form className="w-full max-w-md  lg:mb-5 rounded ">
          <div className="p-4">
            <p className="text-center text-white font-bold block mt-5 ">
              Please fill the form valid informations
            </p>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-bold mb-2 text-white"
              >
                Username
              </label>
              <input
                onChange={handleUser}
                value={user}
                type="text"
                placeholder="Enter Email"
                name="username"
                id="username"
                required
                className="appearance-none border border-gray-500 rounded py-2 px-3 w-full placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="psw" className="block font-bold mb-2 text-white">
                Password
              </label>
              <input
                value={psw}
                onChange={handlePsw}
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
                className="appearance-none border border-gray-500 rounded py-2 px-3 w-full placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mt-4">
              <br />
              <p className="text-red-500 font-bold ">{error}</p>
              <Link className="   no-underline " to="#">
                <button
                  onClick={handleLogin}
                  className=" text-orange-400 font-bold text-xl w-full  hover:bg-green-800  bg-green-900 rounded-md  p-2  "
                >
                  Login
                </button>
              </Link>
              .
            </div>
            <button className=" text-green-800 font-bold bg-orange-400 p-2 rounded text-center hover:bg-green-900 hover:text-orange-400   ">
              Dont you have an account yet?
              <button className=" bg-green-900 text-orange-400 p-1 rounded px-2 hover:text-green-900 hover:bg-orange-400 mx-1  ">
                {' '}
                Click to Regester{' '}
              </button>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
