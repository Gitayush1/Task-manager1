import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API from '../api/api.js';

const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);  // Reset error state before trying to login
    try {
      const res = await API.post('/auth/login', { email, password });

      // Check if the response has token and user data
      if (res.data.token && res.data.user) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setUser(res.data.user);
        navigate('/dashboard');
      }
    } catch (err) {
      // Log detailed error for debugging
      console.error(err);

      // Check the error response and show a specific error message
      if (err.response && err.response.status === 400) {
        setError('Invalid credentials. Please try again.');
      } else if (err.response && err.response.status === 500) {
        setError('Server error. Please try again later.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await API.post('/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return { user, login, register, logout, loading, error };
};

export default useAuth;
