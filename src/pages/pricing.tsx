import { useState } from 'react';

import PriceCard from '@/components/PriceCard';
import {
  basicBenefits,
  enterpriseBenefits,
  premiumBenefits,
  PRICE_BASIC,
  PRICE_ENTERPRISE,
  PRICE_PREMIUM,
} from '@/constants/constants';
import SignupForm from '@/cta/SignUpForm';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';
import { Footer } from '@/templates/Footer';

const Pricing = () => {
  const [openSignup, setOpenSignup] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSignup(true);
    // window.scroll({
    //   top: window.scrollY + 2000,
    //   behavior: 'smooth',
    // });
    const element = document.getElementById('signup');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns />
        <div className="mx-auto max-w-screen-xl px-4 py-8 font-sans lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-800">
              현장에 필요한 맞춤형 가이드와
            </h2>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-800">
              매뉴얼을 직접 제작해 드립니다
            </h2>
            <p className="mb-5 font-light text-gray-800 sm:text-xl">
              늘 바쁜 조직과 매장, 업무 매뉴얼을 직접 제작하는 것은 쉽지
              않습니다.
            </p>
            <p className="mb-5 font-light text-gray-800 sm:text-xl">
              핸디북은 현장에 직접 찾아가서 고객 맞춤형 매뉴얼을 제작해
              드립니다.
            </p>
          </div>
          <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
            <PriceCard
              plan="기본"
              price={PRICE_BASIC}
              desc="빠르게 기본 매뉴얼이 필요하신 경우"
              benefits={basicBenefits}
              handleGetStarted={handleClick}
            />
            <PriceCard
              plan="프리미엄"
              price={PRICE_PREMIUM}
              desc="제대로 된 매뉴얼이 필요하신 경우"
              benefits={premiumBenefits}
              handleGetStarted={handleClick}
            />
            <PriceCard
              plan="엔터프라이즈"
              price={PRICE_ENTERPRISE}
              desc="운영이 복잡하고 직원분들 역할이 다양한 경우"
              benefits={enterpriseBenefits}
              handleGetStarted={handleClick}
            />
          </div>
        </div>
        {openSignup && (
          <div id="signup">
            <SignupForm />
          </div>
        )}
      </Section>
      <Footer />
    </div>
  );
};

export default Pricing;
