// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Assicurati che il percorso sia corretto

// const LoginForm = () => {
//   const [loginDetails, setLoginDetails] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { login } = useAuth();  // Utilizza login per aggiornare lo stato di autenticazione

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setLoginDetails(prevDetails => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null); // Resetta l'errore prima del tentativo di login
//     try {
//       const response = await axios.post('http://yourapi.com/login', loginDetails);
//       if (response.data.token) {
//         login();  // Aggiorna lo stato di autenticazione nel contesto
//         localStorage.setItem('token', response.data.token);  // Salva il token
//         navigate('/video');  // Naviga alla pagina video
//       } else {
//         setError('No token received');  // Gestisci il caso in cui il token non sia presente
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       {error && <div className="error-message">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={loginDetails.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={loginDetails.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assicurati che il percorso sia corretto

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();  // Utilizza login per aggiornare lo stato di autenticazione

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Resetta l'errore prima del tentativo di login
    
    // Simula il processo di login
    setTimeout(() => {
      // Simulazione di ricezione di un token
      const simulatedToken = "simulated_token_" + Date.now();
      if (simulatedToken) {
        login();  // Aggiorna lo stato di autenticazione nel contesto
        localStorage.setItem('token', simulatedToken);  // Salva il token simulato
        console.log("Login successful, token:", simulatedToken);
        navigate('/video');  // Naviga alla pagina video
      } else {
        setError('No token received');  // Gestisci il caso in cui il token non sia presente
      }
    }, 1000);  // Simula un ritardo di rete
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
