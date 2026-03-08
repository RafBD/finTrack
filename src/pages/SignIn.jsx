import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('error inesperado: ' + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='font-days-one  h-screen text-center flex items-center justify-center gap-10 bg-linear-to-bl from-blue-600 to-indigo-300'>
      <div className='w-1/2 flex items-center justify-center '>
        <img
          src='src/assets/signin-img.webp'
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
          onSubmit={handleSignIn}
          className='mt-8 flex flex-col items-center gap-6 w-full max-w-sm text-white'
        >
          <p className='text-2xl font-medium'>Iniciar sesión</p>
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
            Iniciar sesión
          </button>

          {error && <p className='text-red-600 text-center pt-4'>{error}</p>}

          <div>
            <p className='text-md text-gray-300 mt-4'>
              ¿No tienes una cuenta?{' '}
              <a href='/signup' className='text-white hover:underline'>
                Crear cuenta nueva
              </a>
            </p>
            <p className='text-md text-gray-300 mt-4'>
              ¿Olvidaste tu contraseña?{' '}
              <a href='/' className='text-white hover:underline'>
                Recupérala aquí
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
