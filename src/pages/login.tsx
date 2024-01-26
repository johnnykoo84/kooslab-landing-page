import { useRouter } from 'next/router';
import { useState } from 'react';

import NavbarTwoColumns from '@/navigation/NavbarTwoColumns';
import { Logo } from '@/templates/Logo';

import { useAuth } from '../context/authContext';

const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log(email, password);
    e.preventDefault();

    if (email === 'admin@modeny.com' && password === 'modeny1234') {
      console.log('login success');
      setIsLoggedIn(true);
      router.push('/lms');
    } else {
      alert('email 혹은 password가 틀렸습니다.');
    }
  };

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <NavbarTwoColumns logo={<Logo xl />} />

      <div className="mx-auto mt-10 w-96 rounded bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-xl font-bold">Log In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            required
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
