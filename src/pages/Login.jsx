import { useContext, useState } from 'react';
import AuthForm from '../components/AuthForm';
import { loginUser } from '../api/incidentApi';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { login: authLogin } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log(response)
      authLogin(response);
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  

  return (
    <div>
      <h1>Login</h1>
      <AuthForm
        onSubmit={handleLogin}
        buttonText="Login"
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      
    </div>
  );
};

export default Login;

