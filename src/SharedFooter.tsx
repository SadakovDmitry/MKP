import { useEffect, useMemo, useState } from 'react';
import type { SitePage } from './navigation';
import MobileFooter from './mobileSections/MobileFooter';
import getViewportWidth from './getViewportWidth';

const imgLine1 = '/assets/7918af23ed3296b8e767190c8279c0139f0ec990.svg';
const imgVector5 = '/assets/720c778192c904fd60a1289ac484a6c657cac233.svg';
const imgExclude1 = '/assets/99014d703a291afdf234eb6f59fec6227c1f1c68.svg';
const imgExclude2 = '/assets/0b7d9152cdcc38abcd33a65b61632eab52d87fe3.svg';
const imgVector6 = '/assets/5f3e8aeb6fb2d09565f9912b7518955388199956.svg';

const MOBILE_BREAKPOINT = 1200;
const MOBILE_FRAME_WIDTH = 1080;
const MOBILE_FOOTER_HEIGHT = 1600;
const DESKTOP_FRAME_WIDTH = 1400;
const DESKTOP_FOOTER_HEIGHT = 250;

type SharedFooterProps = {
  onNavigate: (page: SitePage) => void;
  forceMobile?: boolean;
  mobileEmbedded?: boolean;
  desktopScale?: number;
};

export default function SharedFooter({ onNavigate, forceMobile = false, mobileEmbedded = false, desktopScale = 1 }: SharedFooterProps) {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(getViewportWidth());
    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.visualViewport?.addEventListener('resize', updateViewport);
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.visualViewport?.removeEventListener('resize', updateViewport);
    };
  }, []);

  const measuredViewportWidth = viewportWidth > 0 ? viewportWidth : getViewportWidth() || MOBILE_FRAME_WIDTH;

  const isMobile = forceMobile || (measuredViewportWidth > 0 && measuredViewportWidth < MOBILE_BREAKPOINT);

  const mobileScale = useMemo(() => {
    if (measuredViewportWidth <= 0) {
      return 1;
    }
    return Math.min(1, measuredViewportWidth / MOBILE_FRAME_WIDTH);
  }, [measuredViewportWidth]);

  const resolvedDesktopScale = desktopScale > 0 ? desktopScale : 1;
  const desktopScaledWidth = DESKTOP_FRAME_WIDTH * resolvedDesktopScale;
  const desktopScaledHeight = DESKTOP_FOOTER_HEIGHT * resolvedDesktopScale;

  if (isMobile) {
    if (mobileEmbedded) {
      return (
        <footer className="relative w-[1080px] h-[1600px] overflow-hidden bg-[var(--color-3,#313131)]">
          <MobileFooter onNavigate={onNavigate} />
        </footer>
      );
    }

    return (
      <footer
        className="relative overflow-hidden w-full bg-[var(--color-3,#313131)]"
        style={{ height: `${MOBILE_FOOTER_HEIGHT * mobileScale}px` }}
      >
        <div
          className="relative mx-auto"
          style={{
            width: `${MOBILE_FRAME_WIDTH * mobileScale}px`,
            height: `${MOBILE_FOOTER_HEIGHT * mobileScale}px`,
          }}
        >
          <div
            className="absolute left-0 top-0"
            style={{
              width: `${MOBILE_FRAME_WIDTH}px`,
              height: `${MOBILE_FOOTER_HEIGHT}px`,
              transform: `scale(${mobileScale})`,
              transformOrigin: 'top left',
            }}
          >
            <MobileFooter onNavigate={onNavigate} />
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-[var(--color-3,#313131)] overflow-hidden" style={{ height: `${desktopScaledHeight}px` }}>
      <div className="relative mx-auto" style={{ width: `${desktopScaledWidth}px`, height: `${desktopScaledHeight}px` }}>
        <div
          className="absolute left-0 top-0"
          style={{
            width: `${DESKTOP_FRAME_WIDTH}px`,
            height: `${DESKTOP_FOOTER_HEIGHT}px`,
            transform: `scale(${resolvedDesktopScale})`,
            transformOrigin: 'top left',
          }}
        >
          <div className="relative h-[250px] overflow-clip w-[1400px]">
        <div className="absolute h-0 left-[120px] top-[157px] w-[1160px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('about')}
          className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_83.71%_75.2%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)] border-0 bg-transparent p-0 cursor-pointer text-left whitespace-nowrap"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          О компании
        </button>
        <button
          type="button"
          onClick={() => onNavigate('services')}
          className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_72.93%_75.2%_22.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)] border-0 bg-transparent p-0 cursor-pointer text-left"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          Услуги
        </button>
        <button
          type="button"
          onClick={() => onNavigate('news')}
          className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[18%_58.79%_75.2%_36.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)] border-0 bg-transparent p-0 cursor-pointer text-left"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          Статьи
        </button>
        <button
          type="button"
          onClick={() => onNavigate('cases')}
          className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_87.21%_62%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)] border-0 bg-transparent p-0 cursor-pointer text-left"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          Кейсы
        </button>
        <button
          type="button"
          onClick={() => onNavigate('useful')}
          className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_71.07%_62%_22.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)] border-0 bg-transparent p-0 cursor-pointer text-left"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          Полезное
        </button>
        <button
          type="button"
          onClick={() => onNavigate('contacts')}
          className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[31.2%_56.93%_62%_36.64%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)] border-0 bg-transparent p-0 cursor-pointer text-left"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          Контакты
        </button>
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[44.4%_83.64%_48.8%_8.57%] leading-[0.9] text-[19.22px] text-[color:var(--color-4,white)] whitespace-nowrap border-0 bg-transparent p-0 cursor-pointer text-left"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          Карта сайта
        </button>
        <p
          className="absolute font-['Roboto:Light',sans-serif] font-light inset-[69.2%_74.57%_25.2%_8.57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)]"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          Консалтинговая компания МКР
        </p>
        <p
          className="absolute font-['Roboto:Light',sans-serif] font-light inset-[69.2%_8.57%_25.2%_57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)] text-right"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          © МКР, 2025, All Rights Reserved | Политика Конфиденциальности
        </p>
        <p
          className="absolute font-['Roboto:Light',sans-serif] font-light inset-[76.8%_62.57%_17.6%_8.57%] leading-[0.9] text-[16px] text-[color:var(--color-4,white)]"
          style={{ fontVariationSettings: '\'wdth\' 100' }}
        >
          г. Москва, Благовещенский пер., дом 3, стр. 1, пом. 1/6
        </p>
        <div className="absolute inset-[18%_8.57%_62.8%_85.86%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector5} />
        </div>
        <div className="absolute h-[48px] left-[calc(83.33%-51.67px)] top-[45px] w-[53px]">
          <img alt="" className="absolute block max-w-none size-full" src={imgExclude1} />
        </div>
        <div className="absolute inset-[18%_22.36%_62.8%_74.21%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgExclude2} />
        </div>
        <div className="absolute inset-[18%_27.79%_62.8%_68.64%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector6} />
        </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
