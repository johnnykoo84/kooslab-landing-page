import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import logo from '@/assets/checklist.png';

type INavbarProps = {
  children?: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="sticky top-0 z-50 flex flex-wrap items-center justify-start border-b-2 border-gray-200 bg-gray-100">
    <div className="relative h-12 w-12">
      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>
    </div>

    <nav className="ml-6 flex items-center">
      <ul className="navbar font-large flex items-center text-3xl text-gray-800">
        <li>
          <Link href="/about">회사소개</Link>
        </li>
        <li>
          <Link href="/pricing">비용</Link>
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
