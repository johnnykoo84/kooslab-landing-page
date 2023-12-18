import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="신규 입사자 온보딩을 도입/개선해 보세요."
      subtitle="무료 온보딩 가이드와 템플릿 안내를 받아보세요."
      button={<Button>온보딩 가이드 & 템플릿 요청하기</Button>}
    />
  </Section>
);

export { Banner };
