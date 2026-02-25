import { useState } from 'react';
import { createPortal } from 'react-dom';
import { PAGE_LABELS, type SitePage } from '../navigation';

const img21 = '/assets/fd01438e00c60be1901fac9f11f8ef9bc2b9afd8.png';
const imgVector = '/assets/abf229e8dc301d2b0d5c414508c551d659e997c1.svg';
const imgVector1 = '/assets/4305a8c880c19e1f347ca88e2e48d92536cfc532.svg';
const imgVector2 = '/assets/c1c654e7baca0059e60a181a264f0b17e06a7cb0.svg';
const imgGroup = '/assets/3708100262517055cb967c2c7070d13fd25c600c.svg';
const imgGroup1 = '/assets/de0afd488f2abf5f902c9e00d18d746042bce3de.svg';
const imgGroup2 = '/assets/4f02ca83f54f5878ab3cd2c0e77e150e1818eead.svg';
const imgVector3 = '/assets/6a8d3c14ffe203976631a80c8f4b2fc718f0eba8.svg';
const imgFrame13 = '/assets/d772172a110d44bbe912d9a42fe90a45867d191a.svg';
const imgFrame1077243566 = '/assets/bbb160abed2f90fe13e575abf60e430a7897636f.svg';

type MobileHeroProps = {
  currentPage: SitePage;
  onNavigate: (page: SitePage) => void;
};

export default function MobileHero({ currentPage, onNavigate }: MobileHeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const isHome = currentPage === 'home';
  const isNewsPage = currentPage === 'news';
  const pageLabel = PAGE_LABELS[currentPage];

  const handleNavigate = (page: SitePage) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  if (isNewsPage) {
    return (
      <div className="bg-[var(--color-4,white)] relative size-full">
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[84.9px] left-[184px] rounded-[42.46px] top-[542.7px] w-[283px]" />
        <div className="absolute bg-[var(--color,#1f556b)] h-[84.9px] left-[549.26px] rounded-[42.46px] top-[542.7px] w-[347.7px]" />
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.2] left-[calc(50%-330.39px)] m-0 text-[67.5px] text-[color:var(--color-4,white)] top-[540px]">
          <span>Статьи</span>
          <span className="text-[var(--color-3,#313131)] whitespace-pre-wrap">{'   и   '}</span>
          <span>Новости</span>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-4,white)] relative size-full" data-name="Mobile" data-node-id="83:262">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[1080px] top-[calc(50%-86px)]" data-name="2имидж 1" data-node-id="83:263">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full parallax-media"
          style={{ ['--parallax-depth' as string]: '0.23' }}
          src={img21}
        />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--color-2,#44b1d2)] h-[130.49px] left-[calc(50%-1px)] overflow-clip rounded-[138.774px] top-[calc(50%-834.76px)] w-[978px]" data-node-id="83:264">
        <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[13.88px] right-[13.02px] top-[calc(50%+1.32px)]" data-node-id="83:265">
          <div className="bg-[var(--color-4,white)] overflow-clip relative rounded-[107.753px] shrink-0 size-[100.894px]" data-node-id="83:266">
            <div className="absolute contents inset-[14.2%_13.8%_13.81%_14.16%]" data-name="Group" data-node-id="83:267">
              <div className="absolute inset-[16.28%_15.31%_15.84%_15.73%]" data-name="Vector" data-node-id="83:268">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
              </div>
              <div className="absolute inset-[47.4%_13.81%_13.81%_39.66%]" data-name="Vector" data-node-id="83:269">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
              </div>
              <div className="absolute inset-[14.2%_39.33%_47.01%_14.17%]" data-name="Vector" data-node-id="83:270">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
              </div>
              <div className="absolute inset-[16.26%_30.18%_55.57%_43.41%]" data-name="Group" data-node-id="83:271">
                <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
              </div>
              <div className="absolute contents inset-[47.4%_13.8%_15.21%_39.67%]" data-name="Group" data-node-id="83:273">
                <div className="absolute contents inset-[47.4%_13.8%_15.21%_39.67%]" data-name="Group" data-node-id="83:274">
                  <div className="absolute inset-[47.4%_13.8%_15.21%_39.67%] opacity-70" data-name="Group" data-node-id="83:275">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[15.62%_39.35%_46.99%_14.16%]" data-name="Group" data-node-id="83:277">
                <div className="absolute contents inset-[15.62%_39.34%_46.99%_14.16%]" data-name="Group" data-node-id="83:278">
                  <div className="absolute inset-[15.63%_39.34%_46.99%_14.16%] opacity-70" data-name="Group" data-node-id="83:279">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-[56.37%_43.06%_15.87%_30.85%]" data-name="Vector" data-node-id="83:281">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
          </div>
          <div className="h-[102.692px] relative shrink-0 w-[102.781px]" data-node-id="83:282">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame13} />
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[14px] right-[12.9px] top-[calc(50%+1.76px)]" data-node-id="83:286">
          <div className="bg-[var(--color-4,white)] overflow-clip relative rounded-[107.753px] shrink-0 size-[100.894px]" data-node-id="83:287">
            <div className="absolute contents inset-[14.2%_13.8%_13.81%_14.16%]" data-name="Group" data-node-id="83:288">
              <div className="absolute inset-[16.28%_15.31%_15.84%_15.73%]" data-name="Vector" data-node-id="83:289">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
              </div>
              <div className="absolute inset-[47.4%_13.81%_13.81%_39.66%]" data-name="Vector" data-node-id="83:290">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
              </div>
              <div className="absolute inset-[14.2%_39.33%_47.01%_14.17%]" data-name="Vector" data-node-id="83:291">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
              </div>
              <div className="absolute inset-[16.26%_30.18%_55.57%_43.41%]" data-name="Group" data-node-id="83:292">
                <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
              </div>
              <div className="absolute contents inset-[47.4%_13.8%_15.21%_39.67%]" data-name="Group" data-node-id="83:294">
                <div className="absolute contents inset-[47.4%_13.8%_15.21%_39.67%]" data-name="Group" data-node-id="83:295">
                  <div className="absolute inset-[47.4%_13.8%_15.21%_39.67%] opacity-70" data-name="Group" data-node-id="83:296">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                  </div>
                </div>
              </div>
              <div className="absolute contents inset-[15.62%_39.35%_46.99%_14.16%]" data-name="Group" data-node-id="83:298">
                <div className="absolute contents inset-[15.62%_39.34%_46.99%_14.16%]" data-name="Group" data-node-id="83:299">
                  <div className="absolute inset-[15.63%_39.34%_46.99%_14.16%] opacity-70" data-name="Group" data-node-id="83:300">
                    <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-[56.37%_43.06%_15.87%_30.85%]" data-name="Vector" data-node-id="83:302">
                <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[51.374px] text-[color:var(--color-4,white)] text-center uppercase w-[320px]" data-node-id="83:303" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] whitespace-nowrap">{pageLabel}</p>
          </div>
          <div className="h-[102.692px] relative shrink-0 w-[102.781px]" data-node-id="83:304">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame13} />
          </div>
        </div>
        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="-translate-y-1/2 absolute bg-transparent border-0 cursor-pointer h-[50px] left-[152.01px] m-0 p-0 top-[calc(50%-0.24px)] w-[73.989px]"
          data-node-id="83:308"
        >
          <div className="absolute inset-[-8%_-5.41%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame1077243566} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute content-stretch flex flex-col gap-[22px] items-start justify-center left-[193px] top-[212px] w-[332px]" data-node-id="83:312">
          <button type="button" onClick={() => handleNavigate('home')} className="bg-[var(--color-2,#44b1d2)] border-0 cursor-pointer h-[59.531px] m-0 overflow-clip p-0 relative rounded-[88.892px] shrink-0 w-full" data-node-id="83:313">
            <p className="-translate-x-1/2 absolute bottom-[18.97%] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-1.02px)] text-[32.457px] text-[color:var(--color-4,white)] text-center top-[17.19%] w-[165.095px] whitespace-pre-wrap" data-node-id="83:314" style={{ fontVariationSettings: "'wdth' 100" }}>
              Главная
            </p>
          </button>
          <button type="button" onClick={() => handleNavigate('about')} className="bg-[var(--color-2,#44b1d2)] border-0 cursor-pointer h-[59.531px] m-0 overflow-clip p-0 relative rounded-[88.892px] shrink-0 w-full" data-node-id="83:315">
            <p className="-translate-x-1/2 absolute bottom-[17.6%] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-0.81px)] text-[32.457px] text-[color:var(--color-4,white)] text-center top-[17.15%] w-[284.571px] whitespace-pre-wrap" data-node-id="83:316" style={{ fontVariationSettings: "'wdth' 100" }}>
              О компании
            </p>
          </button>
          <button type="button" onClick={() => handleNavigate('services')} className="bg-[var(--color-2,#44b1d2)] border-0 cursor-pointer h-[59.531px] m-0 overflow-clip p-0 relative rounded-[88.892px] shrink-0 w-full" data-node-id="83:317">
            <p className="-translate-x-1/2 absolute bottom-[18.56%] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-0.59px)] text-[32.457px] text-[color:var(--color-4,white)] text-center top-[17.61%] w-[179.692px] whitespace-pre-wrap" data-node-id="83:318" style={{ fontVariationSettings: "'wdth' 100" }}>
              Услуги
            </p>
          </button>
          <button type="button" onClick={() => handleNavigate('cases')} className="bg-[var(--color-2,#44b1d2)] border-0 cursor-pointer h-[59.531px] m-0 overflow-clip p-0 relative rounded-[88.892px] shrink-0 w-full" data-node-id="83:319">
            <p className="-translate-x-1/2 absolute bottom-[18.35%] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-0.59px)] text-[32.457px] text-[color:var(--color-4,white)] text-center top-[17.81%] w-[179.692px] whitespace-pre-wrap" data-node-id="83:320" style={{ fontVariationSettings: "'wdth' 100" }}>
              Кейсы
            </p>
          </button>
          <button type="button" onClick={() => handleNavigate('news')} className="bg-[var(--color-2,#44b1d2)] border-0 cursor-pointer h-[61.821px] m-0 overflow-clip p-0 relative rounded-[88.892px] shrink-0 w-[332px]" data-node-id="83:321">
            <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.16%_7.46%_-47.65%_6.83%] leading-[normal] text-[32.457px] text-[color:var(--color-4,white)] text-center whitespace-pre-wrap" data-node-id="83:322" style={{ fontVariationSettings: "'wdth' 100" }}>
              Статьи и новости
            </p>
          </button>
          <button type="button" onClick={() => handleNavigate('contacts')} className="bg-[var(--color-2,#44b1d2)] border-0 cursor-pointer h-[59.531px] m-0 overflow-clip p-0 relative rounded-[88.892px] shrink-0 w-full" data-node-id="83:323">
            <p className="-translate-x-1/2 absolute bottom-[18.13%] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-0.58px)] text-[32.457px] text-[color:var(--color-4,white)] text-center top-[18.03%] w-[179.705px] whitespace-pre-wrap" data-node-id="83:324" style={{ fontVariationSettings: "'wdth' 100" }}>
              Контакты
            </p>
          </button>
        </div>
      )}

      {isHome ? (
        <>
          <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-0.5px)] not-italic text-[70.926px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%+496px)] w-[803px] whitespace-pre-wrap" data-node-id="83:325" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            Мы помогаем сделать бизнес эффективным
          </p>
          <button
            type="button"
            onClick={() => setIsConsultationModalOpen(true)}
            className="-translate-x-1/2 absolute border-[2.585px] border-[var(--color,#1f556b)] border-solid h-[83.998px] left-[calc(50%-0.5px)] overflow-clip rounded-[64.614px] top-[1677.28px] w-[535px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)] active:scale-[0.99] premium-cta-shimmer"
            data-node-id="83:326"
            aria-label="Получить консультацию"
          >
            <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-0.19px)] not-italic text-[28.558px] text-[color:var(--color,#1f556b)] text-center top-[21.8px] uppercase transition-colors duration-200 group-hover:text-white" data-node-id="83:327" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
              Получить консультацию
            </p>
          </button>
        </>
      ) : (
        <div className="absolute inset-x-0 top-[760px] flex flex-col items-center gap-8">
          <p className="font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] not-italic text-[66px] text-[color:var(--color-3,#313131)] text-center uppercase" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            {pageLabel}
          </p>
          <p className="font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] not-italic text-[54px] text-[color:var(--color,#1f556b)] text-center" style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}>
            Страница в разработке
          </p>
        </div>
      )}

      {isConsultationModalOpen &&
        createPortal(
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#1f556b]/40 px-3 py-4 premium-modal-overlay">
          <div className="relative w-full max-w-[360px] max-h-[calc(100dvh-32px)] overflow-y-auto rounded-[28px] border border-[var(--color,#1f556b)] bg-white px-4 pb-4 pt-5 shadow-[0_20px_55px_rgba(31,85,107,0.22)] premium-modal-panel">
            <button
              type="button"
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute right-3 top-3 h-10 w-10 rounded-full border border-[var(--color,#1f556b)] bg-transparent text-[30px] leading-none text-[var(--color,#1f556b)] cursor-pointer transition-colors duration-200 hover:bg-[var(--color,#1f556b)] hover:text-white"
              aria-label="Закрыть форму"
            >
              ×
            </button>
            <p className="m-0 pr-10 font-['Geologica:Medium',sans-serif] text-[30px] leading-[1] uppercase text-[var(--color,#1f556b)]">
              Запись на консультацию
            </p>
            <p className="mb-0 mt-2 font-['Roboto:Regular',sans-serif] text-[17px] leading-[1.2] text-[#4f4f4f]">
              Оставьте контакты и мы свяжемся с вами в ближайшее время.
            </p>
            <form
              className="mt-4 flex flex-col gap-2.5"
              onSubmit={(event) => {
                event.preventDefault();
                setIsConsultationModalOpen(false);
              }}
            >
              <input
                type="text"
                required
                placeholder="Имя"
                className="h-[46px] rounded-[24px] border border-[#97b6c2] px-4 font-['Roboto:Regular',sans-serif] text-[15px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <input
                type="tel"
                required
                placeholder="Телефон"
                className="h-[46px] rounded-[24px] border border-[#97b6c2] px-4 font-['Roboto:Regular',sans-serif] text-[15px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="h-[46px] rounded-[24px] border border-[#97b6c2] px-4 font-['Roboto:Regular',sans-serif] text-[15px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <textarea
                rows={3}
                placeholder="Комментарий"
                className="resize-none rounded-[16px] border border-[#97b6c2] px-4 py-3 font-['Roboto:Regular',sans-serif] text-[15px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <button
                type="submit"
                className="mt-1 h-[46px] rounded-[24px] border border-[var(--color,#1f556b)] bg-[var(--color,#1f556b)] font-['Geologica:Medium',sans-serif] text-[20px] uppercase tracking-[0.02em] text-white cursor-pointer transition-colors duration-200 hover:bg-white hover:text-[var(--color,#1f556b)] active:scale-[0.99]"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
