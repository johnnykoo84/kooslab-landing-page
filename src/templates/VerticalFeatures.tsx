import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="신규 직원분이 빠르게 업무에 적응하고 있나요?"
    description="직원분이 출근한지 벌써 1주나 지났는데 아직도 알려줘야할 것들이 많아요"
  >
    <VerticalFeatureRow
      title="무엇부터 해야할지 감이 오지 않아요"
      description="신규 입사자는 회사의 업무 방식과 절차를 안내받지 못해 큰 혼란을 겪습니다. 결국 스스로 눈치껏 찾아내어 적응을 해 내지만, 회사와 개인 모두가 큰 시간 비용을 치루게 됩니다."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="일의 핵심이 무엇인지 한참 지나서야 알게 되었어요"
      description="신규 직원은 현재 목표와 우선순위를 안내받지 못해, 자신의 역할과 책임을 명확히 알기 어렵습니다. 방치된 채로는 결국 시간이 지나도 1인분 만큼의 역할을 해 내기 어렵습니다."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="대표님, 사장님이 원하는 기대치를 모르겠어요"
      description="회사와 신규 직원 모두 구체적인 기대치에 대해 합의된 바가 없기 때문에, 수습 기간 평가는 대충 넘어가게 됩니다."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
