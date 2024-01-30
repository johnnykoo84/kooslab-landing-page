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
    <div className="flex h-screen flex-col bg-gray-100">
      <NavbarTwoColumns logo={<Logo xl />} />

      <div className="flex grow items-center justify-center">
        <div className="mx-auto w-full rounded bg-white p-8 shadow-md sm:w-96">
          <h2 className="mb-4 text-center text-xl font-bold">Log In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="input input-bordered w-full"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
