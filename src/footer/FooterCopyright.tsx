import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    {/* © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '} */}
    © Copyright 2023 {AppConfig.title}. 주식회사 쿠스랩, 대표이사: 구일모,
    사업자 번호: 199-36-01098
    {/*
     * PLEASE READ THIS SECTION
     * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
