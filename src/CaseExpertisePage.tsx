import { useEffect, useMemo, useState } from 'react';
import './CaseExpertisePage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import MobileCaseExtraSection from './MobileCaseExtraSection';
import type { CaseId } from './caseDetailsData';
import getViewportWidth from './getViewportWidth';

const imgHero = '/assets/f0cb7c8701cc0b94143cc332b0dcf7ab3d527412.png';
const imgSituation = '/assets/3cb062f04f739d8bdb43861c24a230efcc0960c3.png';
const imgSituationWarningMobile = '/assets/case-situation-warning-clean.png';

type CaseExpertisePageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
};

const MOBILE_LAYOUT_BREAKPOINT = 1200;
const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 3038;
const MOBILE_HERO_HEIGHT = 760;
const MOBILE_SITUATION_FRAME_WIDTH = 1080;
const MOBILE_SITUATION_FRAME_HEIGHT = 1400;
const MOBILE_PROBLEM_FRAME_WIDTH = 1080;
const MOBILE_PROBLEM_FRAME_HEIGHT = 2120;
const MOBILE_SOLUTION_FRAME_WIDTH = 1080;
const MOBILE_SOLUTION_FRAME_HEIGHT = 820;

export default function CaseExpertisePage({ onNavigate, onOpenCase }: CaseExpertisePageProps) {
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

  const scale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileSituationScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_SITUATION_FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileProblemScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_PROBLEM_FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileSolutionScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_SOLUTION_FRAME_WIDTH;
  }, [viewportWidth]);

  const isMobileLayout = viewportWidth > 0 && viewportWidth < MOBILE_LAYOUT_BREAKPOINT;

  const frameContent = (
    <>
      <section className="case1-hero">
        <img src={imgHero} alt="" className="case1-hero-image" />
        <div className="case1-hero-overlay" />
        <h1 className="case1-hero-title">Экспертиза для участия в инвестиционном проекте</h1>
        <p className="case1-hero-subtitle">Инвестор рассматривает новые направления бизнеса</p>
      </section>

      <section className="case1-meta">
        <div className="case1-meta-label case1-meta-label--dark">Клиент</div>
        <div className="case1-meta-label case1-meta-label--blue">Проект</div>
        <div className="case1-meta-label case1-meta-label--light">Результат</div>

        <p className="case1-meta-text case1-meta-text--1">
          Собстенник группы компаний рассматривает новые направления для расширения бизнеса
        </p>
        <p className="case1-meta-text case1-meta-text--2">Экспертиза для участия в новом инвестиционном проекте</p>
        <p className="case1-meta-text case1-meta-text--3">Отказ собственника от участия в инвестиционном проекте</p>
        <span className="case1-meta-arrow case1-meta-arrow--1">→</span>
        <span className="case1-meta-arrow case1-meta-arrow--2">→</span>
      </section>

      <section className="case1-situation">
        <h2 className="case1-section-title">ситуация</h2>
        <div className="case1-situation-card">
          <p>
            Владелец группы компаний рассматривал свое участие в новых направлениях бизнеса.
            <br />
            <br />
            Имея положительный опыт сотрудничества с ООО «МКР», в части сопровождения бухгалтерского и
            управленческого учета, обратился за экспертной оценкой рисков участия в новом проекте. Проект
            строительство теплиц и выращивание овощных культур.
            <br />
            <br />
            Специалисты компании МКР уже имеют большой опыт участия в проектах сельскохозяйственного
            направления (животноводство молочное и мясное, птицеводство, растениеводство открытый и закрытый
            грунт, грибоводство, переработка).
          </p>
        </div>
        <div className="case1-situation-illustration">
          <img src={imgSituation} alt="" />
        </div>
      </section>

      <section className="case1-problem">
        <h2 className="case1-section-title">проблема</h2>
        <p className="case1-problem-lead">
          По мнению специалистов ООО «МКР» предложенный проект по его масштабу не являлся конкурентоспособным. В
          предложенном регионе на этот период уже вводились в эксплуатацию (к имеющимся действующим площадям)
          теплицы с мощностями превышающими на порядок объемы рассматриваемого проекта. Также у действующего
          конкурента уже были согласованы дотации и преференции по инвестиционному проекту в рамах программы
          импортозамещения.
        </p>
        <p className="case1-problem-subhead">Минусы предлагаемого проекта были очевидны:</p>

        <div className="case1-problem-grid">
          <article className="case1-problem-item">
            <span className="case1-problem-num">1</span>
            <p>масштаб проекта не позволяет войти в торговые сети;</p>
          </article>
          <article className="case1-problem-item">
            <span className="case1-problem-num">2</span>
            <p>себестоимость производства продукции по инвестпроекту выше, чем у конкурентов;</p>
          </article>
          <article className="case1-problem-item">
            <span className="case1-problem-num">3</span>
            <p>затраты в предложенном бизнес-плане отображены не в полном объеме.</p>
          </article>
        </div>
      </section>

      <section className="case1-solution">
        <h2 className="case1-section-title case1-section-title--dark">решение</h2>
        <p className="case1-solution-p1">
          Заказчик был удовлетворен экспертизой и принял решение отказаться от участия в данном проекте.
        </p>
        <p className="case1-solution-p2">
          Через два года, потенциальный инвестор обладая уже фактическими данными, подтвердил, что решение
          отказаться от участия в проекте было <strong>правильным</strong>.
        </p>
      </section>
    </>
  );

  if (isMobileLayout) {
    return (
      <div className="case1-page">
        <main className="case1-main">
          <section className="case1-mobile-fixed-hero" style={{ height: `${MOBILE_HERO_HEIGHT}px` }}>
            <img src={imgHero} alt="" className="case1-mobile-fixed-hero-image" />
            <div className="case1-mobile-fixed-hero-overlay" />
            <div className="case1-mobile-fixed-hero-content">
              <h1 className="case1-mobile-fixed-hero-title">Экспертиза для участия в инвестиционном проекте</h1>
              <p className="case1-mobile-fixed-hero-subtitle">Инвестор рассматривает новые направления бизнеса</p>
            </div>
          </section>

          <section className="case1-mobile-meta-flow">
            <div className="case1-mobile-meta-row">
              <span className="case1-mobile-meta-pill case1-mobile-meta-pill--dark">Клиент</span>
              <p>Собственник группы компаний рассматривает новые направления для расширения бизнеса</p>
            </div>
            <span className="case1-mobile-meta-down">↓</span>
            <div className="case1-mobile-meta-row">
              <span className="case1-mobile-meta-pill case1-mobile-meta-pill--blue">Проект</span>
              <p>Экспертиза для участия в новом инвестиционном проекте</p>
            </div>
            <span className="case1-mobile-meta-down">↓</span>
            <div className="case1-mobile-meta-row">
              <span className="case1-mobile-meta-pill case1-mobile-meta-pill--light">Результат</span>
              <p>Отказ собственника от участия в инвестиционном проекте</p>
            </div>
          </section>

          <section className="case1-mobile-situation">
            <div
              className="case1-mobile-situation-shell"
              style={{
                width: `${MOBILE_SITUATION_FRAME_WIDTH * mobileSituationScale}px`,
                height: `${MOBILE_SITUATION_FRAME_HEIGHT * mobileSituationScale}px`,
              }}
            >
              <div
                className="case1-mobile-situation-frame"
                style={{
                  width: `${MOBILE_SITUATION_FRAME_WIDTH}px`,
                  transform: `scale(${mobileSituationScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case1-mobile-situation-title">ситуация</h2>

                <div className="case1-mobile-situation-panel">
                  <p className="case1-mobile-situation-panel-lead">
                    Владелец группы компаний рассматривал свое участие в новых направлениях бизнеса.
                  </p>

                  <p className="case1-mobile-situation-panel-text">
                    Имея положительный опыт сотрудничества с ООО «МКР», в части сопровождения бухгалтерского и
                    управленческого учета, обратился за экспертной оценкой рисков участия в новом проекте. Проект
                    строительство теплиц и выращивание овощных культур.
                    <br />
                    <br />
                    Специалисты компании МКР уже имеют большой опыт участия в проектах сельскохозяйственного
                    направления (животноводство молочное и мясное, птицеводство, растениеводство открытый и закрытый
                    грунт, грибоводство, переработка).
                  </p>
                </div>

                <img src={imgSituationWarningMobile} alt="" className="case1-mobile-situation-warning" />
              </div>
            </div>
          </section>

          <section className="case1-mobile-problem">
            <div
              className="case1-mobile-problem-shell"
              style={{
                width: `${MOBILE_PROBLEM_FRAME_WIDTH * mobileProblemScale}px`,
                height: `${MOBILE_PROBLEM_FRAME_HEIGHT * mobileProblemScale}px`,
              }}
            >
              <div
                className="case1-mobile-problem-frame"
                style={{
                  width: `${MOBILE_PROBLEM_FRAME_WIDTH}px`,
                  transform: `scale(${mobileProblemScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case1-mobile-problem-title">проблема</h2>

                <p className="case1-mobile-problem-lead">
                  По мнению специалистов ООО «МКР» предложенный проект по его масштабу не являлся конкурентоспособным.
                  В предложенном регионе на этот период уже вводились в эксплуатацию (к имеющимся действующим
                  площадям) теплицы с мощностями превышающими на порядок объемы рассматриваемого проекта. Также у
                  действующего конкурента уже были согласованы дотации и преференции по инвестиционному проекту в
                  рамах программы импортозамещения.
                </p>

                <p className="case1-mobile-problem-subhead">Минусы предлагаемого проекта были очевидны:</p>

                <div className="case1-mobile-problem-card case1-mobile-problem-card--1">
                  <span className="case1-mobile-problem-num">1</span>
                  <p className="case1-mobile-problem-card-text case1-mobile-problem-card-text--1">
                    масштаб проекта не позволяет войти в торговые сети;
                  </p>
                </div>

                <div className="case1-mobile-problem-card case1-mobile-problem-card--2">
                  <span className="case1-mobile-problem-num">2</span>
                  <p className="case1-mobile-problem-card-text case1-mobile-problem-card-text--2">
                    себестоимость производства продукции по инвестпроекту выше, чем у конкурентов;
                  </p>
                </div>

                <div className="case1-mobile-problem-card case1-mobile-problem-card--3">
                  <span className="case1-mobile-problem-num">3</span>
                  <p className="case1-mobile-problem-card-text case1-mobile-problem-card-text--3">
                    затраты в предложенном бизнес-плане отображены не в полном объеме.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="case1-mobile-solution">
            <div
              className="case1-mobile-solution-shell"
              style={{
                width: `${MOBILE_SOLUTION_FRAME_WIDTH * mobileSolutionScale}px`,
                height: `${MOBILE_SOLUTION_FRAME_HEIGHT * mobileSolutionScale}px`,
              }}
            >
              <div
                className="case1-mobile-solution-frame"
                style={{
                  width: `${MOBILE_SOLUTION_FRAME_WIDTH}px`,
                  transform: `scale(${mobileSolutionScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <p className="case1-mobile-solution-text-1">
                  Заказчик был удовлетворен экспертизой и принял решение отказаться от участия в данном проекте.
                </p>

                <p className="case1-mobile-solution-text-2">
                  <span>
                    Через два года, потенциальный инвестор обладая уже фактическими данными, подтвердил, что решение
                    отказаться от участия в проекте было{' '}
                  </span>
                  <strong>правильным</strong>
                  <span>.</span>
                </p>

                <h2 className="case1-mobile-solution-title">решение</h2>
              </div>
            </div>
          </section>

          <MobileCaseExtraSection currentCaseId="case-expertise" onNavigate={onNavigate} onOpenCase={onOpenCase} />
        </main>

        <SharedFooter onNavigate={onNavigate} forceMobile />
      </div>
    );
  }

  return (
    <div className="case1-page">
      <main className="case1-main">
        <div className="case1-shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <div
            className="case1-frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            {frameContent}
          </div>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
