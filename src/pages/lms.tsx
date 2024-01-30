import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';

import NavbarTwoColumns from '@/navigation/NavbarTwoColumns';
import { Logo } from '@/templates/Logo';
import { lorem } from '@/utils/dummyTexts';

const LMS = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-light flex flex-col justify-center">
      <NavbarTwoColumns logo={<Logo xl />} />
      <div className="flex justify-center" style={{ height: '100vh' }}>
        <CSSTransition
          in={isSidebarOpen}
          timeout={200}
          classNames="sidebar"
          unmountOnExit
          appear
        >
          <div className="card left-0 top-0 h-full w-64 overflow-auto p-4">
            <button
              className="relative right-2 top-2 text-2xl md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiMenu />
            </button>
            <h2 className="mb-4 font-bold text-blue-600">For New Hires</h2>
            <h3 className="font-bold text-blue-500">Section 1</h3>
            <ul className="ml-5 list-disc text-gray-700">
              <li>Content 1</li>
              <li>Content 2</li>
            </ul>
          </div>
        </CSSTransition>
        <div className="bg-light mt-20 flex w-full flex-col items-center pl-64 md:pl-4 md:pt-1">
          <FiMenu
            className="absolute right-2 top-2 text-2xl md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <div className="">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-3 md:p-10">
            <p>{lorem.generateSentences(10).toString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMS;
