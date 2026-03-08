import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);

      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error.message);
      }
    } catch (error) {
      setError('ocurrio un error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='font-days-one h-screen text-center flex gap-20 items-center justify-center bg-linear-to-bl from-blue-600 to-indigo-300'>
      <div className=' flex items-center justify-center '>
        <img
          src='src/assets/signup-img.webp'
          alt='imagen'
          className='object-cover mx-auto rounded-lg'
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-white'>
          <h1 className='font-bold text-6xl'>Bienvenido a FinTrack</h1>
          <p className='text-xl mt-4'>
            Tu herramienta de seguimiento financiero personal
          </p>
        </div>

        <form
          onSubmit={handleSignUp}
          className='mt-8 flex flex-col items-center justify-center gap-6 w-full max-w-sm text-white'
        >
          <p className='text-2xl font-medium'>Crea una cuenta para comenzar</p>
          <div className='flex flex-col gap-6 w-full'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id='email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition duration-200 focus:outline-none'
              placeholder='ejemplo@correo.com'
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              id='password'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white  focus:border-transparent transition duration-200 focus:outline-none'
              placeholder='********'
              required
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-blue-800 hover:bg-blue-900 cursor-pointer text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105'
          >
            Crear cuenta
          </button>

          {error && (
            <p className='text-red-700 text-center p-2 rounded-lg text-md '>
              Error: {error}
            </p>
          )}

          <p className='text-md text-gray-300 mt-4'>
            Ya tienes una cuenta{' '}
            <a href='/' className='text-white hover:underline'>
              Inicia sesión aquí
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
