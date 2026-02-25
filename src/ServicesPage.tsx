import { useEffect, useState } from 'react';
import SharedFooter from './SharedFooter';
import getViewportWidth from './getViewportWidth';
import type { SitePage } from './navigation';
import './ServicesPage.css';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 1200;
const MOBILE_BREAKPOINT = 1200;
const MOBILE_FRAME_WIDTH = 1080;
const MOBILE_FRAME_HEIGHT = 2720;

const imgChatGptImage70002Layer3 = '/assets/b168250fe902bb2dbc34cfdf6686d1c1d2e2e6de.png';
const imgChatGptImage70000Layer1 = '/assets/e8463afe767ac9cfe505ca2c0a7aec9317a62958.png';
const imgChatGptImage70004Layer5 = '/assets/6970dcca3d53861e581296f70514cacb37f69779.png';
const imgChatGptImage70001Layer2 = '/assets/b375f28bf7f11fb12e7b9b5c52811e656d947049.png';
const imgChatGptImage70003Layer4 = '/assets/bfecad0c6eac05654a6d611c67a7eb8842671718.png';

type ServicesPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenFirstService: () => void;
  onOpenSecondService: () => void;
  onOpenThirdService: () => void;
};

type ServiceCardProps = {
  title: string;
  icon: string;
  cardClassName: string;
  titleClassName?: string;
  actionClassName?: string;
  actionTextClassName?: string;
  iconClassName: string;
  onMoreClick?: () => void;
};

function ActionArrowBadge() {
  return (
    <span className="services-page__card-action-badge" aria-hidden="true">
      <svg
        className="services-page__card-action-arrow"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 9.5H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 5L14.5 9.5L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ServiceCard({
  title,
  icon,
  cardClassName,
  titleClassName = 'services-page__card-title',
  actionClassName = 'services-page__card-action',
  actionTextClassName = 'services-page__card-action-text',
  iconClassName,
  onMoreClick,
}: ServiceCardProps) {
  return (
    <article className={cardClassName}>
      <h2 className={titleClassName}>{title}</h2>
      <button type="button" className={actionClassName} aria-label="Подробнее" onClick={onMoreClick}>
        <span className={actionTextClassName}>Подробнее</span>
        <ActionArrowBadge />
      </button>
      <img className={iconClassName} src={icon} alt="" />
    </article>
  );
}

export default function ServicesPage({ onNavigate, onOpenFirstService, onOpenSecondService, onOpenThirdService }: ServicesPageProps) {
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

  const measuredViewportWidth = viewportWidth > 0 ? viewportWidth : getViewportWidth();
  const scale = measuredViewportWidth > 0 ? measuredViewportWidth / FRAME_WIDTH : 1;
  const mobileScale = measuredViewportWidth > 0 ? Math.min(1, measuredViewportWidth / MOBILE_FRAME_WIDTH) : 1;
  const isMobileLayout = measuredViewportWidth > 0 && measuredViewportWidth < MOBILE_BREAKPOINT;

  if (isMobileLayout) {
    return (
      <div className="services-page services-page--mobile">
        <main className="services-page__main">
          <div
            className="services-page__mobile-shell"
            style={{ width: `${MOBILE_FRAME_WIDTH * mobileScale}px`, height: `${MOBILE_FRAME_HEIGHT * mobileScale}px` }}
          >
            <section
              className="services-page__mobile-frame"
              style={{
                width: `${MOBILE_FRAME_WIDTH}px`,
                height: `${MOBILE_FRAME_HEIGHT}px`,
                transform: `scale(${mobileScale})`,
                transformOrigin: 'top left',
              }}
            >
              <button type="button" className="services-page__mobile-consultation" onClick={() => onNavigate('contacts')}>
                Получить консультацию
              </button>

              <div className="services-page__mobile-title-card">
                <h1>Услуги</h1>
              </div>

              <ServiceCard
                title="Бухгалтерский и наловой консалтинг"
                icon={imgChatGptImage70002Layer3}
                cardClassName="services-page__mobile-card services-page__mobile-card--accounting"
                titleClassName="services-page__mobile-card-title services-page__mobile-card-title--accounting"
                actionClassName="services-page__card-action services-page__card-action--mobile"
                actionTextClassName="services-page__card-action-text services-page__card-action-text--mobile"
                iconClassName="services-page__mobile-card-icon services-page__card-icon--accounting"
                onMoreClick={onOpenFirstService}
              />

              <ServiceCard
                title="Аудит и анализ деятельности компаний"
                icon={imgChatGptImage70001Layer2}
                cardClassName="services-page__mobile-card services-page__mobile-card--audit"
                titleClassName="services-page__mobile-card-title services-page__mobile-card-title--audit"
                actionClassName="services-page__card-action services-page__card-action--mobile"
                actionTextClassName="services-page__card-action-text services-page__card-action-text--mobile"
                iconClassName="services-page__mobile-card-icon services-page__card-icon--audit"
                onMoreClick={onOpenSecondService}
              />

              <ServiceCard
                title="Юридические услуги"
                icon={imgChatGptImage70003Layer4}
                cardClassName="services-page__mobile-card services-page__mobile-card--legal"
                titleClassName="services-page__mobile-card-title services-page__mobile-card-title--legal"
                actionClassName="services-page__card-action services-page__card-action--mobile"
                actionTextClassName="services-page__card-action-text services-page__card-action-text--mobile"
                iconClassName="services-page__mobile-card-icon services-page__card-icon--legal"
                onMoreClick={onOpenThirdService}
              />

              <ServiceCard
                title="Управленческий и финансовый консалтинг"
                icon={imgChatGptImage70000Layer1}
                cardClassName="services-page__mobile-card services-page__mobile-card--management"
                titleClassName="services-page__mobile-card-title services-page__mobile-card-title--management"
                actionClassName="services-page__card-action services-page__card-action--mobile"
                actionTextClassName="services-page__card-action-text services-page__card-action-text--mobile"
                iconClassName="services-page__mobile-card-icon services-page__card-icon--management"
              />

              <ServiceCard
                title="Управление и сопровождение проектов"
                icon={imgChatGptImage70004Layer5}
                cardClassName="services-page__mobile-card services-page__mobile-card--project"
                titleClassName="services-page__mobile-card-title services-page__mobile-card-title--project"
                actionClassName="services-page__card-action services-page__card-action--mobile"
                actionTextClassName="services-page__card-action-text services-page__card-action-text--mobile"
                iconClassName="services-page__mobile-card-icon services-page__card-icon--project"
              />
            </section>
          </div>
        </main>

        <SharedFooter onNavigate={onNavigate} forceMobile />
      </div>
    );
  }

  return (
    <div className="services-page">
      <main className="services-page__main">
        <div className="services-page__scaled-wrap" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <section
            className="services-page__frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              height: `${FRAME_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <button type="button" className="services-page__consultation" onClick={() => onNavigate('contacts')}>
              Получить консультацию
            </button>

            <div className="services-page__title-card">
              <h1>Услуги</h1>
            </div>

            <ServiceCard
              title="Бухгалтерский и наловой консалтинг"
              icon={imgChatGptImage70002Layer3}
              cardClassName="services-page__card services-page__card--accounting"
              iconClassName="services-page__card-icon services-page__card-icon--accounting"
              onMoreClick={onOpenFirstService}
            />

            <ServiceCard
              title="Управленческий и финансовый консалтинг"
              icon={imgChatGptImage70000Layer1}
              cardClassName="services-page__card services-page__card--management"
              iconClassName="services-page__card-icon services-page__card-icon--management"
            />

            <ServiceCard
              title="Кадровый и организационный консалтинг"
              icon={imgChatGptImage70004Layer5}
              cardClassName="services-page__card services-page__card--hr services-page__card--hidden"
              iconClassName="services-page__card-icon services-page__card-icon--hr"
            />

            <ServiceCard
              title="Управление и сопровождение проектов"
              icon={imgChatGptImage70004Layer5}
              cardClassName="services-page__card services-page__card--project"
              iconClassName="services-page__card-icon services-page__card-icon--project"
            />

            <ServiceCard
              title="Аудит и анализ деятельности компаний"
              icon={imgChatGptImage70001Layer2}
              cardClassName="services-page__card services-page__card--audit"
              iconClassName="services-page__card-icon services-page__card-icon--audit"
              onMoreClick={onOpenSecondService}
            />

            <ServiceCard
              title="Юридические услуги"
              icon={imgChatGptImage70003Layer4}
              cardClassName="services-page__card services-page__card--legal"
              iconClassName="services-page__card-icon services-page__card-icon--legal"
              onMoreClick={onOpenThirdService}
            />
          </section>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} desktopScale={scale} />
    </div>
  );
}
