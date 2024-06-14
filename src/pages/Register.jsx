import { useContext, useState } from 'react';
import { registerUser } from '../api/incidentApi';
import RegisterForm from '../components/RegisterForm';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
  const { register: authLogin } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);


  const handleRegister = async (e) => {

    
    e.preventDefault();
    try {
      const response = await registerUser({ name, role, email, password });
        authLogin(response);
        setRedirectToLogin(true);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  if (redirectToLogin) {
    return <redirect to="/login" />;
  }

  return (
    <div>
      <RegisterForm
      redirectToLogin={redirectToLogin}
        onSubmit={handleRegister}
        buttonText="Register"
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        name={name}
        setName={setName}
        role={role}
        setRole={setRole}
      />
    </div>
  );
};

export default Register;