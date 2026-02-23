import { useEffect, useMemo, useState } from 'react';
import { CASE_DETAILS, CASE_ROUTE_ORDER, type CaseId } from './caseDetailsData';
import type { SitePage } from './navigation';
import './MobileCaseExtraSection.css';

type MobileCaseExtraSectionProps = {
  currentCaseId: CaseId;
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
};

const MOBILE_BREAKPOINT = 1200;
const FRAME_WIDTH = 1080;
const FRAME_HEIGHT = 1400;

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mobile-case-extra__card-arrow-svg">
      <path d="M2.5 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MobileCaseExtraSection({ currentCaseId, onNavigate, onOpenCase }: MobileCaseExtraSectionProps) {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const isMobile = viewportWidth > 0 && viewportWidth < MOBILE_BREAKPOINT;

  const scale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / FRAME_WIDTH;
  }, [viewportWidth]);

  const related = useMemo(
    () =>
      CASE_ROUTE_ORDER.filter((id) => id !== currentCaseId)
        .slice(0, 2)
        .map((id) => CASE_DETAILS[id]),
    [currentCaseId],
  );

  if (!isMobile || related.length < 2) {
    return null;
  }

  return (
    <section className="mobile-case-extra">
      <div className="mobile-case-extra__shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
        <div
          className="mobile-case-extra__frame"
          style={{
            width: `${FRAME_WIDTH}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <h2 className="mobile-case-extra__title">похожие проекты</h2>

          {related.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-case-extra__card ${index === 0 ? 'mobile-case-extra__card--left' : 'mobile-case-extra__card--right'}`}
              onClick={() => onOpenCase(item.id)}
            >
              <img className="mobile-case-extra__card-image" src={item.heroImage} alt={item.title} />
              <span className="mobile-case-extra__card-overlay" />
              <p className="mobile-case-extra__card-title">{item.title}</p>
              <p className="mobile-case-extra__card-subtitle">{item.subtitle}</p>
              <span className="mobile-case-extra__card-more">Подробнее</span>
              <span className="mobile-case-extra__card-arrow-wrap">
                <ArrowIcon />
              </span>
            </button>
          ))}

          <div className="mobile-case-extra__contact-card">
            <p className="mobile-case-extra__contact-label">Напишите нам</p>
          </div>

          <button type="button" className="mobile-case-extra__cta" onClick={() => onNavigate('contacts')}>
            <span className="mobile-case-extra__cta-bg" />
            <span className="mobile-case-extra__cta-text">Обсудить</span>
            <span className="mobile-case-extra__cta-arrow">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

