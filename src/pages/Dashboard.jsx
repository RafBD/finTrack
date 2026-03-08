import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate('/');
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded'
          type='submit'
          onClick={handleSignOut}
        >
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
