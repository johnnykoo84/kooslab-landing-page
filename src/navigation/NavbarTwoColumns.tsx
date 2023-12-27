import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children?: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-start">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav className="ml-6 flex items-center">
      <ul className="navbar font-large flex items-center text-3xl font-bold text-gray-800">
        <li>
          <Link href="/about">회사 소개</Link>
        </li>
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
