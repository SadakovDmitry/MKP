import { useState } from 'react';
import { PAGE_LABELS, type SitePage } from './navigation';

const imgVector = '/assets/45721801618c04b8d5b31a5597572b9d3e6da2b8.svg';
const imgVector1 = '/assets/20ba96200c69778d7033bbee28fe80ff92d15d09.svg';
const imgVector2 = '/assets/b644b22fa8721f42839eae50f1394fb5f7246d6c.svg';
const imgVector3 = '/assets/afc4dff6a386e5a9bbef91e7deb6f74d4aef0f9f.svg';
const imgGroup = '/assets/9797281a12c87b7ae0593e80ffe07a1a0d4c4124.svg';
const imgGroup1 = '/assets/ab0b1a956333b2ca75e0ef7344df86b861e5a89b.svg';
const imgGroup2 = '/assets/828b4e1b6f7560be0f6a9d2052198211695fdb93.svg';
const imgVector4 = '/assets/92bd6b17994701895673ae98ac3d83d15acee971.svg';
const imgFrame13Desktop = '/assets/552b828f557817905235015c2dad5dabdcd75d06.svg';

const imgVectorM = '/assets/abf229e8dc301d2b0d5c414508c551d659e997c1.svg';
const imgVector1M = '/assets/4305a8c880c19e1f347ca88e2e48d92536cfc532.svg';
const imgVector2M = '/assets/c1c654e7baca0059e60a181a264f0b17e06a7cb0.svg';
const imgGroupM = '/assets/3708100262517055cb967c2c7070d13fd25c600c.svg';
const imgGroup1M = '/assets/de0afd488f2abf5f902c9e00d18d746042bce3de.svg';
const imgGroup2M = '/assets/4f02ca83f54f5878ab3cd2c0e77e150e1818eead.svg';
const imgVector3M = '/assets/6a8d3c14ffe203976631a80c8f4b2fc718f0eba8.svg';
const imgFrame13Mobile = '/assets/d772172a110d44bbe912d9a42fe90a45867d191a.svg';
const imgFrameMenu = '/assets/bbb160abed2f90fe13e575abf60e430a7897636f.svg';

type FloatingHeaderProps = {
  currentPage: SitePage;
  onNavigate: (page: SitePage) => void;
};

function DesktopBrand({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="bg-[var(--color-4,white)] h-[36px] overflow-clip relative rounded-[38.823px] shrink-0 w-[100px] border-0 p-0 cursor-pointer" aria-label="Главная">
      <div className="absolute contents inset-[13.87%_14%_13.43%_5%]">
        <div className="absolute inset-[29.45%_14%_29%_40.48%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector} /></div>
        <div className="absolute inset-[15.97%_69.36%_15.49%_5.57%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector1} /></div>
        <div className="absolute inset-[47.4%_68.82%_13.43%_14.27%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector2} /></div>
        <div className="absolute inset-[13.87%_78.1%_46.96%_5%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector3} /></div>
        <div className="absolute inset-[15.95%_74.77%_55.61%_15.63%]"><img alt="" className="absolute block max-w-none size-full" src={imgGroup} /></div>
        <div className="absolute inset-[47.4%_68.82%_14.85%_14.27%] opacity-70"><img alt="" className="absolute block max-w-none size-full" src={imgGroup1} /></div>
        <div className="absolute inset-[15.32%_78.1%_46.93%_5%] opacity-70"><img alt="" className="absolute block max-w-none size-full" src={imgGroup2} /></div>
        <div className="absolute inset-[56.45%_79.45%_15.52%_11.06%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector4} /></div>
      </div>
    </button>
  );
}

function MobileBrand({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="bg-[var(--color-4,white)] overflow-clip relative rounded-[107.753px] shrink-0 size-[44px] border-0 p-0 cursor-pointer" aria-label="Главная">
      <div className="absolute contents inset-[14.2%_13.8%_13.81%_14.16%]">
        <div className="absolute inset-[16.28%_15.31%_15.84%_15.73%]"><img alt="" className="absolute block max-w-none size-full" src={imgVectorM} /></div>
        <div className="absolute inset-[47.4%_13.81%_13.81%_39.66%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector1M} /></div>
        <div className="absolute inset-[14.2%_39.33%_47.01%_14.17%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector2M} /></div>
        <div className="absolute inset-[16.26%_30.18%_55.57%_43.41%]"><img alt="" className="absolute block max-w-none size-full" src={imgGroupM} /></div>
        <div className="absolute inset-[47.4%_13.8%_15.21%_39.67%] opacity-70"><img alt="" className="absolute block max-w-none size-full" src={imgGroup1M} /></div>
        <div className="absolute inset-[15.63%_39.34%_46.99%_14.16%] opacity-70"><img alt="" className="absolute block max-w-none size-full" src={imgGroup2M} /></div>
        <div className="absolute inset-[56.37%_43.06%_15.87%_30.85%]"><img alt="" className="absolute block max-w-none size-full" src={imgVector3M} /></div>
      </div>
    </button>
  );
}

const MENU_ITEMS: Array<{ key: SitePage; label: string; width: string }> = [
  { key: 'home', label: 'Главная', width: 'w-[84.122px]' },
  { key: 'about', label: 'О компании', width: 'w-[119.856px]' },
  { key: 'services', label: 'Услуги', width: 'w-[70.722px]' },
  { key: 'cases', label: 'Кейсы', width: 'w-[70.722px]' },
  { key: 'news', label: 'Статьи и новости', width: 'w-[145px]' },
  { key: 'useful', label: 'Полезное', width: 'w-[95px]' },
  { key: 'contacts', label: 'Контакты', width: 'w-[91.567px]' },
];

export default function FloatingHeader({ currentPage, onNavigate }: FloatingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page: SitePage) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] pointer-events-none">
      <div className="pointer-events-auto">
        <div className="hidden lg:block px-4">
          <div className="mx-auto w-[1160px] max-w-[calc(100vw-32px)] bg-[var(--color-2,#44b1d2)] h-[47px] overflow-clip rounded-[50px] relative">
            <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-1/2 -translate-x-1/2 top-[23.5px] w-[1150px] max-w-[calc(100vw-42px)]">
              <DesktopBrand onClick={() => handleNavigate('home')} />
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-[770px] max-w-[calc(100vw-230px)]">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleNavigate(item.key)}
                    className={`${item.width} ${item.key === currentPage ? 'bg-[var(--color,#1f556b)] text-white' : 'bg-white text-[color:var(--color,#1f556b)]'} border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 text-[14.175px] font-['Roboto:Medium',sans-serif]`}
                  >
                    <span className="absolute inset-[17.15%_7.45%_17.6%_6.84%] leading-[normal] text-center whitespace-nowrap">{item.label}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="h-[37px] w-[37px] shrink-0 border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center"
                aria-label="Telegram"
              >
                <img alt="" className="block h-full w-full object-contain" src={imgFrame13Desktop} />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden px-3">
          <div className="w-full bg-[var(--color-2,#44b1d2)] h-[56px] rounded-[60px] px-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MobileBrand onClick={() => handleNavigate('home')} />
              <button
                type="button"
                aria-label="Открыть меню"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="h-[22px] w-[32px] relative border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center"
              >
                <img alt="" className="block h-[20px] w-[28px] object-contain" src={imgFrameMenu} />
              </button>
            </div>

            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1] text-[20px] text-white text-center uppercase whitespace-nowrap">
              {PAGE_LABELS[currentPage]}
            </p>

            <button type="button" className="h-[36px] w-[36px] border-0 bg-transparent p-0 cursor-pointer" aria-label="Telegram">
              <img alt="" className="block size-full" src={imgFrame13Mobile} />
            </button>
          </div>

          {menuOpen && (
            <div className="mt-2 ml-12 flex w-[152px] flex-col gap-[9px]">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleNavigate(item.key)}
                  className="h-[28px] w-full rounded-[999px] border-0 cursor-pointer bg-[#44b1d2] text-white text-[12px] leading-none font-['Roboto:Medium',sans-serif] text-center shadow-[0_6px_14px_rgba(0,0,0,0.2)]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
