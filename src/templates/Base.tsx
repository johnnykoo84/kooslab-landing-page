import NavbarTwoColumns from '@/navigation/NavbarTwoColumns';

import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Logo } from './Logo';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  return (
    <div className="bg-gray-100 text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />} />
      </Section>
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };
