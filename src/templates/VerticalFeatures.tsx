import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="조직에서 신규 입사자분이 빠르게 적응하여 활약하고 있나요?"
    description="어렵게 모신 신규 입사자 동료, 입사한지 벌써 3주나 지났는데 왜 아직도 기대한 만큼 활약하고 있지 못하는 걸까요?"
  >
    <VerticalFeatureRow
      title="며칠 째 무슨 정보가 어디에 있는지 찾아다니고 있어요"
      description="신규 입사자는 회사의 업무 방식과 절차를 안내받지 못해 큰 혼란을 겪습니다. 결국 스스로 모든 내용을 찾아내어 적응을 해 내지만, 개인과 조직 전체가 큰 비용을 치루게 됩니다."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="조직의 현재 목표를 수습기간이 다 끝나서야 알게 되었어요"
      description="신규 입사자는 조직의 현재 목표와 우선순위를 알지 못해, 자신의 역할과 책임을 명확히 알지 못합니다. 결국 신규 입사자는 조직의 목표를 달성하는 데에 기여할 수 없게 됩니다."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="어떤 기준으로 신규 입사자 동료를 피드백하거나 평가해야 할지 모르겠어요"
      description="조직이 신규 입사자에게 바라는 구체적인 기대치에 대해 합의된 바가 없기 때문에, 신규 입사자와 조직, 채용한 리더 조차도 입사자의 역할과 책임에 대해 명확히 모른 채, 수습기간이 지나가버리게 됩니다."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
