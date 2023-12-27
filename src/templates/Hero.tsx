import { HeroOneButton } from '@/hero/HeroOneButton';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'신규 직원의 즉시 전력화를 위한\n'}
            <span className="text-primary-500">업무 안내 솔루션</span>
          </>
        }
        description="사장님의 업무를 대신할 수 있는 업무 안내 솔루션을 제공합니다."
        button={<Button xl>가이드 및 상담 요청하기</Button>}
      />
    </Section>
  </Background>
);

export { Hero };
