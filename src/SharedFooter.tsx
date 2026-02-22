import type { SitePage } from './navigation';

const imgVector5 = '/assets/720c778192c904fd60a1289ac484a6c657cac233.svg';
const imgExclude1 = '/assets/99014d703a291afdf234eb6f59fec6227c1f1c68.svg';
const imgVector6 = '/assets/5f3e8aeb6fb2d09565f9912b7518955388199956.svg';
const imgExclude2 = '/assets/0b7d9152cdcc38abcd33a65b61632eab52d87fe3.svg';

type SharedFooterProps = {
  onNavigate: (page: SitePage) => void;
};

const footerLinks: Array<{ page: SitePage; label: string }> = [
  { page: 'about', label: 'О компании' },
  { page: 'services', label: 'Услуги' },
  { page: 'news', label: 'Статьи' },
  { page: 'cases', label: 'Кейсы' },
  { page: 'useful', label: 'Полезное' },
  { page: 'contacts', label: 'Контакты' },
];

export default function SharedFooter({ onNavigate }: SharedFooterProps) {
  return (
    <footer className="bg-[#313131] mt-8">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[16px] sm:text-[19.22px] font-['Roboto:Medium',sans-serif]">
          {footerLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => onNavigate(link.page)}
              className="text-left hover:opacity-80 border-0 bg-transparent p-0 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="h-px bg-white/35 mt-8" />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <img alt="" src={imgVector5} className="w-6 h-6" />
          <img alt="" src={imgExclude1} className="w-7 h-7" />
          <img alt="" src={imgVector6} className="w-6 h-6" />
          <img alt="" src={imgExclude2} className="w-6 h-6" />
        </div>

        <p className="font-['Roboto:Light',sans-serif] text-[16px] leading-[0.9] mt-6">Консалтинговая компания МКР</p>
        <p className="font-['Roboto:Light',sans-serif] text-[16px] leading-[0.9] mt-3">© МКР, 2025, All Rights Reserved | Политика Конфиденциальности</p>
        <p className="font-['Roboto:Light',sans-serif] text-[16px] leading-[0.9] mt-3">г. Москва, Благовещенский пер., дом 3, стр. 1, пом. 1/6</p>
      </div>
    </footer>
  );
}
