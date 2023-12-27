import Image from 'next/image';

import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import AIProfileImgSrc from '../assets/eve.png';
import founderProfileSrc from '../assets/ikoo.png';
import coFounderProfileSrc from '../assets/mandalorian.png';
import { Logo } from '../templates/Logo';

const Mission = () => (
  <div className="my-10">
    <h2 className="mb-4 text-3xl">회사의 설립 이유 & 가장 중요한 가치</h2>
    <p className="text-5xl leading-relaxed">우리는 고객이 필요로 하는 제품을</p>
    <p className="text-5xl leading-relaxed">만들고 판매합니다</p>
  </div>
);

// const CoreValues = () => (
//   <div className="my-10">
//     <h2 className="my-4 text-2xl font-bold">가장 중요한 가치</h2>
//     <p className="text-lg leading-relaxed">
//       고객이 원하는 제품을 만들고 판매합니다.
//     </p>
//   </div>
// );

const AIProfile = () => (
  <Image
    className="my-8 mr-4 inline-block h-24 w-24 rounded-full border-2 border-gray-300"
    src={AIProfileImgSrc}
    alt="Founder profile image"
    width={96}
    height={96}
  />
);
const FounderIntro = () => (
  <div className="my-20">
    <div>
      <h2 className="mb-2 text-2xl font-bold">창업팀</h2>
      <Image
        className="my-8 mr-4 h-24 w-24 rounded-full border-2 border-gray-300"
        src={founderProfileSrc}
        alt="Founder profile image"
      />
      <p className="text-lg font-bold leading-relaxed">구일모</p>
      <p className="text-lg leading-relaxed">
        B2B SW 제품 세일즈, SW개발, 조직 운영
      </p>
      <p className="text-lg leading-relaxed">전) 코드스테이츠 CPO</p>
      <p className="text-lg leading-relaxed">
        전) 벡터코리아 기술영업, 전) 대한항공 시스템 개발, 전) 영텍 하드웨어
        개발
      </p>
      <div className="flex">
        <AIProfile />
        <AIProfile />
        <AIProfile />
      </div>
      <p className="text-lg leading-relaxed">
        쿠스랩은 언제나 AI 동료들과 함께 일합니다.
      </p>
      <p className="text-lg leading-relaxed"></p>
      <Image
        className="my-8 mr-4 h-24 w-24 rounded-full border-2 border-gray-300"
        src={coFounderProfileSrc}
        alt="Founder profile image"
        width={96}
        height={96}
      />
      <p className="text-lg leading-relaxed">창업팀 동료 Coming Soon!</p>
      <p className="text-lg leading-relaxed"></p>
    </div>
  </div>
);

const About = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />} />
    <div className="mx-auto max-w-7xl px-4 py-6 text-gray-800 sm:px-6 lg:px-8">
      <Mission />
      <FounderIntro />
    </div>
  </Section>
);

export default About;
