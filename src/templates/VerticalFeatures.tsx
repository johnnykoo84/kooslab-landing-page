import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="아직도 신규 직원에게 모든 업무를 직접 알려주고 계신가요?"
    description="신규 직원 출근 때마다 준비하고, 업무를 직접 알려주고, 또 다시 준비하고, 또 다시 알려주고... 이런 반복적인 업무를 줄이고 싶지 않으신가요?"
  >
    <VerticalFeatureRow
      title="준비된 내용을 순서에 맞게 교육해주세요"
      description="신규 직원은 업무 방식과 절차를 안내받지 못해 큰 혼란을 겪습니다. 결국 스스로 눈치껏 찾아내어 적응을 해 내지만, 이는 시간과 노력이 많이 듭니다. 모멘텀을 사용하시면, 순서와 절차에 맞게 안내가 필요한 내용을 효과적으로 전달할 수 있습니다."
      image="/assets/images/confused.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="짧은 영상기반 교육으로 빠르게 업무를 알려주세요"
      description="스마트폰으로 찍고 올리면 누구나 쉽게 영상을 만들 수 있습니다. 신규 직원이 출근할 때마다 업무에 필요한 영상을 만들어 두면, 직원은 스스로 업무를 찾아보고, 업무를 수행할 수 있습니다."
      image="/assets/images/video.png"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
