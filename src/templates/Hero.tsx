import { HeroOneButton } from '@/hero/HeroOneButton';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'새로운 리더들의 빠른 조직 기여를 위한\n'}
            <span className="text-primary-500">맞춤형 온보딩 솔루션</span>
          </>
        }
        description="어렵게 모신 신규 경력 입사자 분들의 빠른 조직 적응과 활약을 위한 온보딩 솔루션을 제공합니다."
        button={
          // <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button xl>지금 바로 경험해보세요</Button>
          // </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
