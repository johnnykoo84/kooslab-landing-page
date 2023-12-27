import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="신규 직원 업무 가이드 상담"
      subtitle="온보딩 가이드 및 템플릿을 무료로 받아보세요."
      button={<Button>상담 문의</Button>}
    />
  </Section>
);

export { Banner };
