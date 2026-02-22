import { useEffect, useMemo, useState } from 'react';
import './CaseExpertisePage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';

const imgHero = '/assets/f0cb7c8701cc0b94143cc332b0dcf7ab3d527412.png';
const imgSituation = '/assets/3cb062f04f739d8bdb43861c24a230efcc0960c3.png';

type CaseExpertisePageProps = {
  onNavigate: (page: SitePage) => void;
};

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 3038;

export default function CaseExpertisePage({ onNavigate }: CaseExpertisePageProps) {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  const scale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / FRAME_WIDTH;
  }, [viewportWidth]);

  const isDesktop = viewportWidth >= 1200;

  if (isDesktop) {
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
                  По мнению специалистов ООО «МКР» предложенный проект по его масштабу не являлся
                  конкурентоспособным. В предложенном регионе на этот период уже вводились в эксплуатацию (к имеющимся
                  действующим площадям) теплицы с мощностями превышающими на порядок объемы рассматриваемого проекта.
                  Также у действующего конкурента уже были согласованы дотации и преференции по инвестиционному
                  проекту в рамах программы импортозамещения.
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
            </div>
          </div>
        </main>

        <SharedFooter onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="case1-page">
      <main className="case1-mobile">
        <section className="case1-mobile-hero">
          <img src={imgHero} alt="" />
          <div className="case1-mobile-overlay" />
          <h1>Экспертиза для участия в инвестиционном проекте</h1>
          <p>Инвестор рассматривает новые направления бизнеса</p>
        </section>

        <section className="case1-mobile-meta">
          <article>
            <h3>Клиент</h3>
            <p>Собстенник группы компаний рассматривает новые направления для расширения бизнеса</p>
          </article>
          <article>
            <h3>Проект</h3>
            <p>Экспертиза для участия в новом инвестиционном проекте</p>
          </article>
          <article>
            <h3>Результат</h3>
            <p>Отказ собственника от участия в инвестиционном проекте</p>
          </article>
        </section>

        <section className="case1-mobile-block case1-mobile-block--light">
          <h2>Ситуация</h2>
          <p>
            Владелец группы компаний рассматривал свое участие в новых направлениях бизнеса. Имея положительный опыт
            сотрудничества с ООО «МКР», в части сопровождения бухгалтерского и управленческого учета, обратился за
            экспертной оценкой рисков участия в новом проекте.
          </p>
        </section>

        <section className="case1-mobile-block case1-mobile-block--dark">
          <h2>Проблема</h2>
          <p>
            Предложенный проект по масштабу не являлся конкурентоспособным: объемы ниже рынка, себестоимость выше, а
            часть затрат в бизнес-плане не была отражена.
          </p>
        </section>

        <section className="case1-mobile-block case1-mobile-block--white">
          <h2>Решение</h2>
          <p>
            Заказчик принял решение отказаться от участия в проекте. Через два года фактические данные подтвердили
            правильность решения.
          </p>
          <button type="button" onClick={() => onNavigate('cases')}>
            К кейсам
          </button>
        </section>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
