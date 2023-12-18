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
            {'신규입사자의 빠른 조직 랜딩을 위한\n'}
            <span className="text-primary-500">개인 맞춤형 온보딩</span>
          </>
        }
        description="신규 입사자 분들의 빠른 적응과 활약을 위한 가이드와 템플릿을 제공합니다"
        button={<Button xl>가이드 & 템플릿 자료 요청하기</Button>}
      />
    </Section>
  </Background>
);

export { Hero };
