import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/'); 
  }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>You're logged in!</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
