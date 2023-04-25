import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/components/register/register.css';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';

function Register() {
  const [mail, setMail] = useState('');
  const [user, setUser] = useState('');
  const [psw, setPsw] = useState('');
  const [rePsw, setRePsw] = useState('');

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePsw = (e) => {
    setPsw(e.target.value);
  };
  const reHandlePsw = (e) => {
    setRePsw(e.target.value);
  };

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/register');
    const data = response.data;

    console.log('Existing data:', data);
    return data;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const oldData = await fetchData();
    const newData = {
      user: user,
      mail: mail,
      psw: psw,
    };
    const updated = [...oldData, newData];
    try {
      const response = await axios.post(
        'http://localhost:3001/register',
        updated
      );
      console.log('Register json file:', response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" forum flex justify-center items-center h-screen ">
        <form className="w-full max-w-md mt-5 rounded ">
          <div className="p-4 mt-3">
            <p className="text-center text-white font-bold block mt-5 ">
              Please fill in this form to create an account.
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
                placeholder="Enter Username"
                name="username"
                id="username"
                required
                className="appearance-none border border-gray-500 rounded py-2 px-3 w-full placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-bold mb-2 text-white"
              >
                Email
              </label>
              <input
                onChange={handleMail}
                value={mail}
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                required
                className="appearance-none border border-gray-500 rounded py-2 px-3 w-full placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="psw" className="block font-bold mb-2 text-white">
                Password
              </label>
              <input
                onChange={handlePsw}
                value={psw}
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
                className="appearance-none border border-gray-500 rounded py-2 px-3 w-full placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="psw-repeat"
                className="block font-bold mb-2 text-white"
              >
                Repeat Password
              </label>
              <input
                onChange={reHandlePsw}
                value={rePsw}
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
                className="appearance-none border border-gray-500 rounded py-2 px-3 w-full placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <p className=" text-white  ">
              By creating an account you agree to our
              <Link to="#">
                <span className=" ms-2 font-bold text-blue-500 ">
                  Terms & Privacy
                </span>
              </Link>
              .
            </p>
            <button
              onClick={handleRegister}
              type="submit"
              className="bg-orange-400 text-green-900 hover:bg-orange-500  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <div className="mt-4">
              <p className="text-center text-white font-bold ">
                Already have an account?
                <br />
                <Link className="   no-underline " to="#">
                  <button className=" text-orange-400 font-bold text-xl bg-green-900 rounded-md mt-2  ">
                    Sign in
                  </button>
                </Link>
                .
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
