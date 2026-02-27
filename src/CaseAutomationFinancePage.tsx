import { useEffect, useMemo, useState } from 'react';
import './CaseAutomationFinancePage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import MobileCaseExtraSection from './MobileCaseExtraSection';
import type { CaseId } from './caseDetailsData';
import getViewportWidth from './getViewportWidth';

const heroImage = '/assets/9833dc10daa3f3fe1ef9edb61ec632af462d5596.jpg';
const situationImage = '/assets/case-situation-warning-clean.png';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 4120;

type CaseAutomationFinancePageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
};

const MOBILE_LAYOUT_BREAKPOINT = 1200;
const MOBILE_HERO_HEIGHT = 760;
const MOBILE_SITUATION_FRAME_WIDTH = 1080;
const MOBILE_SITUATION_FRAME_HEIGHT = 1200;
const MOBILE_WORK_FRAME_WIDTH = 1080;
const MOBILE_WORK_FRAME_HEIGHT = 1490;
const MOBILE_PROBLEM_FRAME_WIDTH = 1080;
const MOBILE_PROBLEM_FRAME_HEIGHT = 1240;
const MOBILE_SOLUTION_FRAME_WIDTH = 1080;
const MOBILE_SOLUTION_FRAME_HEIGHT = 760;

export default function CaseAutomationFinancePage({ onNavigate, onOpenCase }: CaseAutomationFinancePageProps) {
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

  const mobileWorkScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_WORK_FRAME_WIDTH;
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

  if (isMobileLayout) {
    return (
      <div className="case5-page">
        <main className="case5-main">
          <section className="case5-mobile-fixed-hero" style={{ height: `${MOBILE_HERO_HEIGHT}px` }}>
            <img src={heroImage} alt="" className="case5-mobile-fixed-hero-image" />
            <div className="case5-mobile-fixed-hero-overlay" />
            <div className="case5-mobile-fixed-hero-content">
              <h1 className="case5-mobile-fixed-hero-title">Инициативный экспресс-аудит</h1>
              <p className="case5-mobile-fixed-hero-subtitle">
                Обратился Собственник динамично развивающейся компания с проблемой неэффективной работой финансовой службы.
              </p>
            </div>
          </section>

          <section className="case5-mobile-meta-flow">
            <div className="case5-mobile-meta-row">
              <span className="case5-mobile-meta-pill case5-mobile-meta-pill--dark">Клиент</span>
              <ul>
                <li>Группа компаний (индустрия рекламы)</li>
                <li>На рынке более 10 лет</li>
                <li>Штат более 100 сотрудников</li>
              </ul>
            </div>
            <span className="case5-mobile-meta-down">↓</span>
            <div className="case5-mobile-meta-row">
              <span className="case5-mobile-meta-pill case5-mobile-meta-pill--blue">Проект</span>
              <ul>
                <li>Инициативный экспресс-аудит</li>
                <li>Продолжительность - 5 дней</li>
              </ul>
            </div>
            <span className="case5-mobile-meta-down">↓</span>
            <div className="case5-mobile-meta-row">
              <span className="case5-mobile-meta-pill case5-mobile-meta-pill--light">Результат</span>
              <ul>
                <li>По итогам аудита рекомендовано</li>
                <li>Автоматизировать бизнес-процессы</li>
                <li>Перейти на единый программный продукт</li>
              </ul>
            </div>
          </section>

          <section className="case5-mobile-situation">
            <div
              className="case5-mobile-situation-shell"
              style={{
                width: `${MOBILE_SITUATION_FRAME_WIDTH * mobileSituationScale}px`,
                height: `${MOBILE_SITUATION_FRAME_HEIGHT * mobileSituationScale}px`,
              }}
            >
              <div
                className="case5-mobile-situation-frame"
                style={{
                  width: `${MOBILE_SITUATION_FRAME_WIDTH}px`,
                  transform: `scale(${mobileSituationScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case5-mobile-section-title">ситуация</h2>
                <div className="case5-mobile-situation-card">
                  <p className="case5-mobile-situation-text-1">
                    Обратился Собственник динамично развивающейся компания с проблемой неэффективной работой финансовой
                    службы, а именно, большое количество переработок и несвоевременность подготовки первичных документов
                    для клиентов.
                  </p>
                  <p className="case5-mobile-situation-text-2">
                    Специалистами МКР было предложено, для выявления причин, провести инициативный экспресс-аудит
                    деятельности бухгалтерской службы и ее взаимодействие с другими подразделениями компании.
                  </p>
                  <p className="case5-mobile-situation-steps-title">Основные этапы:</p>
                  <div className="case5-mobile-situation-steps">
                    <ul>
                      <li>проведение анализа документооборота бухгалтерской службы Заказчика;</li>
                      <li>анализ процессов ведения бухгалтерского учета;</li>
                      <li>собеседование с сотрудниками службы по профильной деятельности.</li>
                    </ul>
                  </div>
                </div>
                <img src={situationImage} alt="" className="case5-mobile-situation-image" />
              </div>
            </div>
          </section>

          <section className="case5-mobile-work">
            <div
              className="case5-mobile-work-shell"
              style={{
                width: `${MOBILE_WORK_FRAME_WIDTH * mobileWorkScale}px`,
                height: `${MOBILE_WORK_FRAME_HEIGHT * mobileWorkScale}px`,
              }}
            >
              <div
                className="case5-mobile-work-frame"
                style={{
                  width: `${MOBILE_WORK_FRAME_WIDTH}px`,
                  transform: `scale(${mobileWorkScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case5-mobile-section-title">ход работы</h2>
                <p className="case5-mobile-work-lead">В процессе проведения экспресс-аудита:</p>
                <p className="case5-mobile-work-intro">
                  Был проанализирован фактический поток первичной документации бухгалтерской службы и определена
                  потребность в ресурсах на обработку данных.
                </p>
                <article className="case5-mobile-work-card case5-mobile-work-card--1">
                  <p>Excel, Project – учет наличия, движения документов и их ключевых параметров.</p>
                </article>
                <article className="case5-mobile-work-card case5-mobile-work-card--2">
                  <p>Excel «отгрузки и счета фактуры» - для учета и формирования первичных форм.</p>
                </article>
                <article className="case5-mobile-work-card case5-mobile-work-card--3">
                  <p>Excel файлы учета реестров документов.</p>
                </article>
                <article className="case5-mobile-work-card case5-mobile-work-card--4">
                  <p>«1С» бухгалтерия - для сдачи отчетности в фискальные органы.</p>
                </article>
                <article className="case5-mobile-work-card case5-mobile-work-card--5">
                  <p>«ИРИСЗ» - индивидуально разработанная информационная система Заказчика.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="case5-mobile-problem">
            <div
              className="case5-mobile-problem-shell"
              style={{
                width: `${MOBILE_PROBLEM_FRAME_WIDTH * mobileProblemScale}px`,
                height: `${MOBILE_PROBLEM_FRAME_HEIGHT * mobileProblemScale}px`,
              }}
            >
              <div
                className="case5-mobile-problem-frame"
                style={{
                  width: `${MOBILE_PROBLEM_FRAME_WIDTH}px`,
                  transform: `scale(${mobileProblemScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case5-mobile-problem-title">проблема</h2>
                <p className="case5-mobile-problem-lead">Основной причиной неэффективной работы и существенных потерь являлось:</p>
                <p className="case5-mobile-problem-sublead">По итогу мониторинга службы:</p>

                <div className="case5-mobile-problem-list">
                  <ul>
                    <li>Дублирование функций по вводу данных несколькими специалистами Компании</li>
                    <li>Двойной учет и регистрация документов в различных информационных системах;</li>
                    <li>Замена приходных комплектов документов от Поставщика;</li>
                    <li>Перевыставление отгрузочных комплектов документов после фактической отгрузки;</li>
                    <li>Все отгрузочные документы оформляются в системе Excel;</li>
                    <li>Индивидуальные требования Клиента к заполнению первичных документов.</li>
                  </ul>
                </div>

                <div className="case5-mobile-problem-reco">
                  <ul>
                    <li>Даны рекомендации по оптимизации организации работы бухгалтерской службы Заказчика;</li>
                    <li>Оказано консультирование по улучшению автоматизации ведения бухгалтерского учета;</li>
                    <li>Разработаны предложения по вопросам оптимизации документооборота в компании;</li>
                    <li>Подготовлены предложения по переходу на единый программный продукт ERP.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="case5-mobile-solution">
            <div
              className="case5-mobile-solution-shell"
              style={{
                width: `${MOBILE_SOLUTION_FRAME_WIDTH * mobileSolutionScale}px`,
                height: `${MOBILE_SOLUTION_FRAME_HEIGHT * mobileSolutionScale}px`,
              }}
            >
              <div
                className="case5-mobile-solution-frame"
                style={{
                  width: `${MOBILE_SOLUTION_FRAME_WIDTH}px`,
                  transform: `scale(${mobileSolutionScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case5-mobile-solution-title">решение</h2>
                <p className="case5-mobile-solution-p1">
                  Заказчиком было принято решение об автоматизации бухгалтерского, производственного и управленческого учета
                  на едином информационном продукте с доработкой программного продукта под индивидуальные задачи.
                </p>
                <p className="case5-mobile-solution-p2">
                  Заказ на исполнение работ передан в ООО «МКР» (реализация см. Кейс №1.2).
                </p>
              </div>
            </div>
          </section>

          <MobileCaseExtraSection currentCaseId="case-automation-2" onNavigate={onNavigate} onOpenCase={onOpenCase} />
        </main>

        <SharedFooter onNavigate={onNavigate} forceMobile />
      </div>
    );
  }

  return (
    <div className="case5-page">
      <main className="case5-main">
        <div className="case5-shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <div
            className="case5-frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <section className="case5-hero">
              <img src={heroImage} alt="" className="case5-hero-image" />
              <div className="case5-hero-overlay" />
              <h1 className="case5-hero-title">Инициативный экспресс-аудит</h1>
              <p className="case5-hero-subtitle">
                Обратился Собственник динамично развивающейся компания с проблемой неэффективной работой финансовой службы.
              </p>
              <p className="case5-hero-kicker">Кейс 1.1</p>
            </section>

            <section className="case5-meta">
              <div className="case5-chip case5-chip--dark">Клиент</div>
              <div className="case5-chip case5-chip--blue">Проект</div>
              <div className="case5-chip case5-chip--light">Результат</div>

              <div className="case5-list case5-list--client">
                <ul>
                  <li>Группа компаний (индустрия рекламы)</li>
                  <li>На рынке более 10 лет</li>
                  <li>Штат более 100 сотрудников</li>
                </ul>
              </div>

              <div className="case5-list case5-list--project">
                <ul>
                  <li>Инициативный экспресс-аудит</li>
                  <li>Продолжительность - 5 дней</li>
                </ul>
              </div>

              <div className="case5-list case5-list--result">
                <ul>
                  <li>По итогам аудита рекомендовано</li>
                  <li>Автоматизировать бизнес-процессы</li>
                  <li>Перейти на единый программный продукт</li>
                </ul>
              </div>

              <span className="case5-meta-arrow case5-meta-arrow--1">→</span>
              <span className="case5-meta-arrow case5-meta-arrow--2">→</span>
            </section>

            <section className="case5-situation">
              <h2 className="case5-section-title">ситуация</h2>
              <div className="case5-situation-card">
                <p className="case5-situation-text-1">
                  Обратился Собственник динамично развивающейся компания с проблемой неэффективной работой финансовой
                  службы, а именно, большое количество переработок и несвоевременность подготовки первичных документов для
                  клиентов.
                </p>
                <p className="case5-situation-text-2">
                  Специалистами МКР было предложено, для выявления причин, провести инициативный экспресс-аудит деятельности
                  бухгалтерской службы и ее взаимодействие с другими подразделениями компании.
                </p>
                <b className="case5-situation-steps-title">Основные этапы:</b>
                <div className="case5-situation-steps">
                  <ul>
                    <li>
                      проведение анализа документооборота бухгалтерской службы Заказчика (количество, качество оформления,
                      время обработки документов);
                    </li>
                    <li>анализ процессов ведения бухгалтерского учета;</li>
                    <li>собеседование с сотрудниками службы по профильной деятельности</li>
                  </ul>
                </div>
              </div>
              <img src={situationImage} alt="" className="case5-situation-image" />
            </section>

            <section className="case5-work">
              <h2 className="case5-section-title">ход работы</h2>
              <p className="case5-work-lead">В процессе проведения экспресс-аудита:</p>
              <p className="case5-work-intro">
                В период проведения мониторинга был проанализирован фактический поток первичной документации бухгалтерской
                службы. Определена потребность в фактических ресурсах на обработку этих данных. Так же было выявлено, что
                данный документооборот фиксируется и отображается в следующих не связанных между собой информационных
                системах компании:
              </p>

              <article className="case5-work-card case5-work-card--1">
                <p>Excel, Project – учет наличия, движения документов и их ключевых параметров по Клиентам и Поставщикам;</p>
              </article>

              <article className="case5-work-card case5-work-card--2">
                <p>Excel «отгрузки и счета фактуры» - для учета и формирования всех первичных форм отгрузочных документов;</p>
              </article>

              <article className="case5-work-card case5-work-card--3">
                <p>Excel файлы учета реестров документов.</p>
              </article>

              <article className="case5-work-card case5-work-card--4">
                <p>«1С» бухгалтерия - для сдачи отчетности в фискальные органы;</p>
              </article>

              <article className="case5-work-card case5-work-card--5">
                <p>«ИРИСЗ» - индивидуально разработанная информационная система Заказчика;</p>
              </article>
            </section>

            <section className="case5-problem">
              <h2 className="case5-problem-title">проблема</h2>
              <p className="case5-problem-lead">Основной причиной неэффективной работы и существенных потерь являлось:</p>
              <p className="case5-problem-sublead">По итогу мониторинга службы:</p>

              <div className="case5-problem-list">
                <ul>
                  <li>Дублирование функций по вводу данных несколькими специалистами Компании</li>
                  <li>
                    Двойной учет и регистрация документов в различных информационных системах «ИИС», Excel Project, Excel
                    «отгрузки и счета фактуры» и по итогам периода информация вносится в «1С» бухгалтерия;
                  </li>
                  <li>
                    Замена приходных комплектов документов от Поставщика, в соответствии с требованиями по изменению
                    номенклатуры в документах Заказчика;
                  </li>
                  <li>
                    Перевыставление отгрузочных комплектов документов после проведения фактической отгрузки. Документы
                    подлежащие замене регистрируются и учитываются в реестрах системы Excel;
                  </li>
                  <li>Все отгрузочные документы оформляются в системе Excel;</li>
                  <li>Индивидуальные требования Клиента к порядку заполнения первичных документов.</li>
                </ul>
              </div>

              <div className="case5-problem-reco">
                <ul>
                  <li>Даны рекомендации по оптимизации организации работы бухгалтерской службы Заказчика;</li>
                  <li>
                    В ходе аудита оказывалось консультирование Заказчика по улучшению и оптимизации автоматизации ведения
                    бухгалтерского учета;
                  </li>
                  <li>Разработаны предложения по вопросам оптимизации документооборота в компании;</li>
                  <li>
                    Подготовлены предложения с учетом роста компании по переходу на единый программный продукт,
                    соответствующий требованиям производства и бизнес-процессам компании (ERP).
                  </li>
                </ul>
              </div>
            </section>

            <section className="case5-solution">
              <h2 className="case5-solution-title">решение</h2>
              <p className="case5-solution-p1">
                Заказчиком было принято решение об автоматизации бухгалтерского, производственного и управленческого учета на
                едином информационном продукте с доработкой программного продукта под индивидуальные задачи.
              </p>
              <p className="case5-solution-p2">Заказ на исполнение работ передан в ООО «МКР» (реализация см. Кейс №1.2).</p>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
