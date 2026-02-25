import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import type { CaseId } from './caseDetailsData';
import getViewportWidth from './getViewportWidth';
import type { CasesFilterLabel } from './casesFilters';
import { preloadImages } from './preloadImages';

const imgShutterstock20833920672 = '/assets/f0cb7c8701cc0b94143cc332b0dcf7ab3d527412.png';
const imgShutterstock23294881251 = '/assets/b2b736d622a11a57c36aed328ad4b3329851a19d.png';
const imgShutterstock24789007811 = '/assets/9833dc10daa3f3fe1ef9edb61ec632af462d5596.png';
const imgShutterstock7041852821 = '/assets/b2a669d0351f584ebef2df816f31f342aa1ce334.png';
const imgShutterstock24973083451 = '/assets/9caeca757f49fce2da4992aa999e6d77c10b0482.png';
const imgRectangle3284 = '/assets/0290e79d08816c64eb25f7f5862f1b56298d7111.svg';

export const CASES_PAGE_PRELOAD_IMAGES = [
  imgShutterstock20833920672,
  imgShutterstock23294881251,
  imgShutterstock24789007811,
  imgShutterstock7041852821,
  imgShutterstock24973083451,
  imgRectangle3284,
] as const;

const FRAME_WIDTH = 1400;
const CASES_SECTION_HEIGHT = 1080;
const MOBILE_BREAKPOINT = 1200;

type CasesPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
  initialFilter?: CasesFilterLabel | null;
};

const FILTERS = [
  { label: 'Финансы', left: 594, width: 100 },
  { label: 'Строительство', left: 704, width: 148 },
  { label: 'Сельское хозяйство', left: 862, width: 174 },
  { label: 'HoReCa', left: 1046, width: 86 },
  { label: 'Разработка ПО', left: 1142, width: 133 },
] as const satisfies ReadonlyArray<{ label: CasesFilterLabel; left: number; width: number }>;

const MOBILE_FILTER_WIDTHS: Record<FilterLabel, string> = {
  Финансы: 'w-[84px]',
  Строительство: 'w-[132px]',
  'Сельское хозяйство': 'w-[156px]',
  HoReCa: 'w-[76px]',
  'Разработка ПО': 'w-[118px]',
};

type FilterLabel = CasesFilterLabel;

const DEFAULT_ACTIVE_FILTERS: FilterLabel[] = ['Финансы', 'Строительство', 'Сельское хозяйство', 'Разработка ПО'];

type CaseCardData = {
  id: CaseId;
  title: string;
  description: string;
  image: string;
  titleWidth: string;
  descriptionWidth: string;
  descriptionTop: string;
  descriptionLeft?: string;
  imageClass?: string;
  rotatedImage?: {
    wrapperClass: string;
    innerClass: string;
  };
  mobileImagePosition?: string;
  tags: FilterLabel[];
};

const CARD_SLOTS = [
  { left: 415, top: 195 },
  { left: 712, top: 195 },
  { left: 1005, top: 195 },
  { left: 120, top: 617 },
  { left: 415, top: 617 },
] as const;

const CASE_CARDS: CaseCardData[] = [
  {
    id: 'case-expertise',
    title: 'Экспертиза проекта',
    description: 'Инвестор рассматривает новые направления бизнеса',
    image: imgShutterstock20833920672,
    titleWidth: 'w-[148px]',
    descriptionWidth: 'w-[203px]',
    descriptionTop: 'top-[276px]',
    imageClass: 'absolute h-[511px] left-[-236px] max-w-none object-cover pointer-events-none top-[-110px] w-[768px]',
    mobileImagePosition: '36% 38%',
    tags: ['Сельское хозяйство', 'Финансы'],
  },
  {
    id: 'case-recovery',
    title: 'Восстановление учета',
    description: 'Нет возможности получить достоверную информацию по каждому объекту строительства',
    image: imgShutterstock7041852821,
    titleWidth: 'w-[206px]',
    descriptionWidth: 'w-[227px]',
    descriptionTop: 'top-[270px]',
    imageClass: 'absolute h-[543px] left-[-270px] max-w-none object-cover pointer-events-none top-[-144px] w-[814px]',
    mobileImagePosition: '36% 37%',
    tags: ['Строительство', 'Финансы'],
  },
  {
    id: 'case-initiative',
    title: 'Инициативный экспресс-аудит',
    description: 'Вновь назначенный Генеральный директор инициировал аудиторскую проверку',
    image: imgShutterstock24973083451,
    titleWidth: 'w-[200px]',
    descriptionWidth: 'w-[233px]',
    descriptionTop: 'top-[270px]',
    descriptionLeft: 'left-[31px]',
    rotatedImage: {
      wrapperClass:
        '-translate-x-1/2 -translate-y-1/2 absolute flex h-[500.108px] items-center justify-center left-[calc(50%-40.44px)] top-[calc(50%-12.95px)] w-[731.124px]',
      innerClass: 'h-[477.606px] relative w-[716.322px]',
    },
    mobileImagePosition: '58% 50%',
    tags: ['Строительство', 'HoReCa'],
  },
  {
    id: 'case-automation-1',
    title: 'Аудит\nи автоматизация',
    description: 'Автоматизация бухгалтерского,\nпроизводственного\nи управленческого учета',
    image: imgShutterstock23294881251,
    titleWidth: 'w-[227px]',
    descriptionWidth: 'w-[227px]',
    descriptionTop: 'top-[270px]',
    imageClass: 'absolute h-[401px] left-[-172px] max-w-none object-cover pointer-events-none top-0 w-[602px]',
    mobileImagePosition: '45% 42%',
    tags: ['Разработка ПО', 'Финансы'],
  },
  {
    id: 'case-automation-2',
    title: 'Аудит\nи автоматизация',
    description: 'Неэффективная работа финансовой службы',
    image: imgShutterstock24789007811,
    titleWidth: 'w-[227px]',
    descriptionWidth: 'w-[203px]',
    descriptionTop: 'top-[276px]',
    imageClass: 'absolute h-[401px] left-[-164px] max-w-none object-cover pointer-events-none top-0 w-[602px]',
    mobileImagePosition: '50% 46%',
    tags: ['Финансы', 'HoReCa'],
  },
];

function MoreButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute h-[50px] left-[25px] top-[325px] w-[225px] border-0 bg-transparent p-0 cursor-pointer group"
    >
      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgRectangle3284} />
      <p
        className="absolute font-['Geologica:ExtraLight',sans-serif] font-extralight left-[31px] leading-[0.9] not-italic text-[20px] text-[color:var(--color-4,white)] top-[17px] tracking-[0.4px]"
        style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}
      >
        Подробнее
      </p>
      <div className="absolute h-[40px] left-[178px] top-[5px] w-[40px] rounded-full bg-white transition-colors duration-150 group-hover:bg-[#313131] group-active:bg-[#313131]">
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#313131] transition-colors duration-150 group-hover:text-white group-active:text-white"
          >
            <path d="M2.5 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </button>
  );
}

function MoreButtonMobile({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative h-[clamp(30px,5vw,44px)] w-full rounded-full border border-white bg-transparent px-[clamp(10px,1.8vw,16px)] text-left cursor-pointer group shrink-0"
    >
      <span className="font-['Geologica:ExtraLight',sans-serif] text-[clamp(12px,2.2vw,18px)] leading-none text-white tracking-[0.2px]">
        Подробнее
      </span>
      <span className="absolute right-[2px] top-[2px] size-[clamp(24px,4.2vw,38px)] rounded-full bg-white transition-colors duration-150 group-hover:bg-[#4a4a4a] group-active:bg-[#4a4a4a] flex items-center justify-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#6c6c6c] transition-colors duration-150 group-hover:text-white group-active:text-white"
        >
          <path d="M2.5 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

function CaseCard({
  card,
  slot,
  onOpenCase,
  staggerDelayMs,
}: {
  card: CaseCardData;
  slot: { left: number; top: number };
  onOpenCase: (caseId: CaseId) => void;
  staggerDelayMs: number;
}) {
  return (
    <div
      className="absolute bg-black h-[400px] overflow-clip rounded-[40px] w-[275px] premium-tilt-card premium-stagger-item premium-zoom-card group/case-card"
      data-tilt-card
      style={{ left: `${slot.left}px`, top: `${slot.top}px`, ['--stagger-delay' as string]: `${staggerDelayMs}ms` }}
    >
      {card.rotatedImage ? (
        <div className={card.rotatedImage.wrapperClass} style={{ '--transform-inner-width': '0', '--transform-inner-height': '0' } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-[178.18deg]">
            <div className={card.rotatedImage.innerClass}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full premium-zoom-media" src={card.image} />
            </div>
          </div>
        </div>
      ) : (
        <img alt="" className={`${card.imageClass} premium-zoom-media`} src={card.image} />
      )}

      <div className="absolute bg-gradient-to-t from-[rgba(49,49,49,0.75)] h-[222px] left-0 mix-blend-multiply to-[rgba(49,49,49,0)] top-[178px] via-1/2 via-[rgba(49,49,49,0.75)] w-[275px]" />

      <p className={`absolute font-['Geologica:Regular',sans-serif] font-normal leading-[0.9] left-[30px] not-italic text-[25px] text-[color:var(--color-4,white)] top-[216px] whitespace-pre-wrap ${card.titleWidth}`}>
        {card.title}
      </p>

      <p
        className={`absolute font-['Roboto:Medium',sans-serif] font-medium leading-[0.9] ${card.descriptionLeft ?? 'left-[30px]'} text-[14px] text-[color:var(--color-4,white)] ${card.descriptionTop} ${card.descriptionWidth} whitespace-pre-wrap`}
      >
        {card.description}
      </p>

      <MoreButton onClick={() => onOpenCase(card.id)} />
    </div>
  );
}

function MobileCaseCard({ card, onOpenCase }: { card: CaseCardData; onOpenCase: (caseId: CaseId) => void }) {
  return (
    <article className="relative overflow-hidden rounded-[26px] bg-black aspect-[472.807/687.719] premium-stagger-item premium-zoom-card">
      <img
        alt=""
        src={card.image}
        className="absolute inset-0 size-full max-w-none object-cover pointer-events-none premium-zoom-media"
        style={{ objectPosition: card.mobileImagePosition ?? '50% 50%' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[66%] bg-gradient-to-t from-[rgba(49,49,49,0.88)] via-[rgba(49,49,49,0.76)] to-[rgba(49,49,49,0)] mix-blend-multiply" />
      <div className="absolute inset-x-0 bottom-0 px-[clamp(10px,2vw,18px)] pb-[clamp(10px,2vw,18px)] flex flex-col">
        <div className="mb-[clamp(8px,1.5vw,14px)] space-y-[clamp(7px,1.2vw,12px)]">
          <p
            className="font-['Geologica:Regular',sans-serif] text-[clamp(17px,4.4vw,31px)] leading-[0.92] text-white whitespace-pre-wrap"
            style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {card.title}
          </p>
          <p
            className="font-['Roboto:Medium',sans-serif] text-[clamp(10px,2.25vw,16px)] leading-[1.05] text-white whitespace-pre-wrap"
            style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {card.description}
          </p>
        </div>
        <MoreButtonMobile onClick={() => onOpenCase(card.id)} />
      </div>
    </article>
  );
}

function MobileCasesTitleCard() {
  return (
    <div className="rounded-[26px] bg-[var(--color-2,#44b1d2)] aspect-[472.807/687.719] flex items-center justify-center">
      <p className="font-['Geologica:Medium',sans-serif] text-[clamp(26px,4.2vw,42px)] leading-[1.1] text-white text-center">Кейсы</p>
    </div>
  );
}

export default function CasesPage({ onNavigate, onOpenCase, initialFilter = null }: CasesPageProps) {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [activeFilters, setActiveFilters] = useState<FilterLabel[]>(() => [...DEFAULT_ACTIVE_FILTERS]);

  useEffect(() => {
    preloadImages(CASES_PAGE_PRELOAD_IMAGES);
  }, []);

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

  useEffect(() => {
    if (initialFilter) {
      setActiveFilters([initialFilter]);
      return;
    }

    setActiveFilters([...DEFAULT_ACTIVE_FILTERS]);
  }, [initialFilter]);

  const scale = viewportWidth > 0 ? viewportWidth / FRAME_WIDTH : 1;
  const isMobileLayout = viewportWidth > 0 && viewportWidth < MOBILE_BREAKPOINT;

  const visibleCards = useMemo(() => {
    if (activeFilters.length === 0) {
      return CASE_CARDS;
    }

    return CASE_CARDS.filter((card) => card.tags.some((tag) => activeFilters.includes(tag)));
  }, [activeFilters]);

  const mobileGridItems = useMemo(() => {
    const items: ReactNode[] = [];

    if (visibleCards.length === 0) {
      items.push(<MobileCasesTitleCard key="mobile-cases-title-only" />);
      return items;
    }

    items.push(<MobileCaseCard key={visibleCards[0].id} card={visibleCards[0]} onOpenCase={onOpenCase} />);
    items.push(<MobileCasesTitleCard key="mobile-cases-title" />);

    visibleCards.slice(1).forEach((card) => {
      items.push(<MobileCaseCard key={card.id} card={card} onOpenCase={onOpenCase} />);
    });

    return items;
  }, [onOpenCase, visibleCards]);

  if (isMobileLayout) {
    return (
      <div className="min-h-screen bg-white text-[#313131]">
        <main className="w-full pt-[96px] pb-6">
          <section className="w-full px-[14px] premium-stagger-parent">
            <div className="flex flex-wrap gap-x-[8px] gap-y-[8px]">
              {FILTERS.map((filter) => {
                const isActive = activeFilters.includes(filter.label);
                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() =>
                      setActiveFilters((prev) =>
                        prev.includes(filter.label) ? prev.filter((item) => item !== filter.label) : [...prev, filter.label],
                      )
                    }
                    className={`${MOBILE_FILTER_WIDTHS[filter.label]} h-[20px] rounded-[86px] border text-[9.8px] leading-none font-['Roboto:Medium',sans-serif] transition-colors duration-150 ${
                      isActive ? 'bg-[#313131] border-[#313131] text-white' : 'bg-white border-[#313131] text-[#313131]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-[8px] h-[28px] rounded-full bg-[var(--color-2,#44b1d2)] p-[2px] flex items-center justify-center">
              <button
                type="button"
                onClick={() => setActiveFilters([])}
                className="h-[24px] w-[162px] rounded-[86px] bg-white text-[#313131] text-[13px] leading-none font-['Roboto:Medium',sans-serif] border-0 cursor-pointer"
              >
                Применить фильтр
              </button>
            </div>

            <div className="mt-[18px] grid grid-cols-2 gap-x-[8px] gap-y-[16px]">{mobileGridItems}</div>
          </section>
        </main>

        <SharedFooter onNavigate={onNavigate} forceMobile />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#313131]">
      <main className="w-full overflow-x-hidden">
        <div className="mx-auto relative" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${CASES_SECTION_HEIGHT * scale}px` }}>
          <div
            className="absolute left-0 top-0"
            style={{ width: `${FRAME_WIDTH}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
          >
            <div className="bg-white h-[1080px] overflow-clip relative w-[1400px]">
              <div className="absolute bg-[var(--color-2,#44b1d2)] h-[35px] left-[120px] rounded-[50px] top-[143px] w-[1160px]" />

              <button
                type="button"
                onClick={() => setActiveFilters([])}
                className="absolute bg-[var(--color-4,white)] content-stretch flex items-center justify-center left-[125px] overflow-clip px-[6px] py-[4px] rounded-[38.823px] top-[147px] w-[162px] border-0 cursor-pointer"
              >
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] text-[14.175px] text-[color:var(--color-3,#313131)] text-center">Применить фильтр</p>
              </button>

              {FILTERS.map((filter) => {
                const isActive = activeFilters.includes(filter.label);
                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() =>
                      setActiveFilters((prev) =>
                        prev.includes(filter.label) ? prev.filter((item) => item !== filter.label) : [...prev, filter.label],
                      )
                    }
                    className={`absolute content-stretch flex items-center justify-center overflow-clip px-[6px] py-[4px] rounded-[38.823px] top-[147px] border cursor-pointer transition-colors duration-150 ${
                      isActive ? 'bg-[#313131] border-[#313131] text-white' : 'bg-white border-[#313131] text-[#313131]'
                    }`}
                    style={{ left: `${filter.left}px`, width: `${filter.width}px` }}
                  >
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] text-[14.175px] text-center">{filter.label}</p>
                  </button>
                );
              })}

              <div className="absolute bg-[var(--color-2,#44b1d2)] h-[400px] left-[120px] overflow-clip rounded-[40px] top-[195px] w-[275px]">
                <p
                  className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-53px)] not-italic text-[32.661px] text-[color:var(--color-4,white)] text-center top-[calc(50%-18px)]"
                  style={{ fontVariationSettings: "'CRSV' 0, 'SHRP' 0" }}
                >
                  Кейсы
                </p>
              </div>

              {visibleCards.slice(0, CARD_SLOTS.length).map((card, index) => (
                <CaseCard key={card.id} card={card} slot={CARD_SLOTS[index]} onOpenCase={onOpenCase} staggerDelayMs={60 + index * 55} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} desktopScale={scale} />
    </div>
  );
}
