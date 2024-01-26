import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '../context/authContext';

interface INavbarProps {
  logo: React.ReactNode;
  children?: React.ReactNode;
}

const NavbarTwoColumns = (props: INavbarProps) => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  console.log('isLoggedIn', isLoggedIn);

  const handleLogInOut = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      router.push('/');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between border-b-2 border-gray-200 bg-gray-100">
      <div className="flex items-center">
        <div>
          <Link href="/">{props.logo}</Link>
        </div>

        <nav className="ml-6">
          <ul className="navbar font-large flex items-center text-3xl text-gray-800">
            <li>
              <Link href="/about">회사 소개</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        {router.pathname !== '/login' && (
          <button
            className="m-4 rounded bg-blue-500 px-4 py-2 text-2xl text-white"
            onClick={handleLogInOut}
          >
            {isLoggedIn ? '로그아웃' : '로그인'}
          </button>
        )}
      </div>
    </div>
  );
};

export default NavbarTwoColumns;
