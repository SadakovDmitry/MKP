import './CaseDetailsPage.css';
import type { SitePage } from './navigation';
import { CASE_DETAILS, CASE_ROUTE_ORDER, type CaseId } from './caseDetailsData';

type CaseDetailsPageProps = {
  caseId: CaseId;
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
};

export default function CaseDetailsPage({ caseId, onNavigate, onOpenCase }: CaseDetailsPageProps) {
  const caseData = CASE_DETAILS[caseId];
  const relatedCases = CASE_ROUTE_ORDER.filter((id) => id !== caseId).slice(0, 3).map((id) => CASE_DETAILS[id]);

  return (
    <div className="case-details-page">
      <main className="case-details-page__main">
        <section className="case-details-hero">
          <div className="case-details-hero__content">
            <button type="button" className="case-details-back" onClick={() => onNavigate('cases')}>
              К кейсам
            </button>
            <p className="case-details-kicker">Кейс МКР</p>
            <h1 className="case-details-title">{caseData.title}</h1>
            <p className="case-details-subtitle">{caseData.subtitle}</p>
            <p className="case-details-intro">{caseData.intro}</p>
            <button type="button" className="case-details-cta" onClick={() => onNavigate('contacts')}>
              Получить консультацию
            </button>
          </div>

          <div className="case-details-hero__media">
            <img className="case-details-hero__image" src={caseData.heroImage} alt={caseData.title} />
            <div className="case-details-hero__overlay" />
          </div>
        </section>

        <section className="case-details-meta">
          <article className="case-meta-card">
            <p className="case-meta-card__label">Клиент</p>
            <p className="case-meta-card__value">{caseData.client}</p>
          </article>
          <article className="case-meta-card">
            <p className="case-meta-card__label">Отрасль</p>
            <p className="case-meta-card__value">{caseData.industry}</p>
          </article>
          <article className="case-meta-card">
            <p className="case-meta-card__label">Срок проекта</p>
            <p className="case-meta-card__value">{caseData.period}</p>
          </article>
          <article className="case-meta-card">
            <p className="case-meta-card__label">Услуги</p>
            <p className="case-meta-card__value">{caseData.services}</p>
          </article>
        </section>

        <section className="case-details-grid">
          <article className="case-details-block">
            <h2 className="case-details-block__title">Задача</h2>
            <ul className="case-details-list">
              {caseData.challenge.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="case-details-block">
            <h2 className="case-details-block__title">Что сделали</h2>
            <ul className="case-details-list">
              {caseData.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="case-details-result">
          <h2 className="case-details-block__title">Результат</h2>
          <ul className="case-details-list">
            {caseData.result.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="case-details-related">
          <div className="case-details-related__header">
            <h2 className="case-details-block__title">Другие кейсы</h2>
            <button type="button" className="case-details-all-cases" onClick={() => onNavigate('cases')}>
              Все кейсы
            </button>
          </div>
          <div className="case-details-related__grid">
            {relatedCases.map((item) => (
              <button key={item.id} type="button" className="case-details-related-card" onClick={() => onOpenCase(item.id)}>
                <img className="case-details-related-card__image" src={item.heroImage} alt={item.title} />
                <span className="case-details-related-card__overlay" />
                <span className="case-details-related-card__title">{item.title}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
