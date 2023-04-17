import '../../src/components/register/register.css';
import Login from '../components/login/login';
import usersData from '../../src/data/register.json';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function LoginPage() {
  const navigate = useNavigate();
  const dataUserPsw = usersData.register[0].psw;
  const dataUserUser = usersData.register[0].user;

  const handleProps = (user, psw) => {
    if (dataUserPsw === psw && dataUserUser === user) {
      navigate('/');
    } else {
      console.log('Bilgiler eşleşmedi');
    }
  };

  return (
    <>
      <Navbar />
      <Login sendProps={handleProps} />
    </>
  );
}
export default LoginPage;
