import { type ReactNode, useState } from 'react';
import Modal from 'react-modal';

import { Section } from '@/layout/Section';

import SignupForm from '../cta/SignUpForm';

Modal.setAppElement('#root');

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Section yPadding="pt-20 pb-32">
      <h1 className="justify-content-center whitespace-pre-line text-center text-5xl font-bold leading-hero text-gray-900">
        {props.title}
      </h1>
      <div className="mb-16 mt-4 text-center text-2xl">{props.description}</div>
      <header className="text-center" onClick={openModal}>
        {props.button}
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sign Up Form"
      >
        <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-2xl">
          <SignupForm />
          <button
            onClick={closeModal}
            className="w-full rounded-md border border-transparent bg-red-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            닫기
          </button>
        </div>
      </Modal>
    </Section>
  );
};

export { HeroOneButton };
