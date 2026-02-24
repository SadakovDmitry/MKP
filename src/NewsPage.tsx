import './NewsPage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';

const imgArticleOutsource = '/assets/news-figma-article-outsource.png';
const imgArticleTax = '/assets/news-figma-article-tax.png';
const imgArticleLiability = '/assets/news-figma-article-liability.png';
const imgNewsCardArrow = '/assets/news-figma-group-125.svg';

type NewsPageProps = {
  onNavigate: (page: SitePage) => void;
};

type ArticleCard = {
  className: string;
  imageClassName: string;
  image: string;
  title: string;
  date: string;
};

const ARTICLE_CARDS: ArticleCard[] = [
  {
    className: 'news-content__article-card news-content__article-card--left-top',
    imageClassName: 'news-content__article-image news-content__article-image--outsource',
    image: imgArticleOutsource,
    title: 'Бухгалтерия\nна аутсорсинге',
    date: '08.04.2019',
  },
  {
    className: 'news-content__article-card news-content__article-card--left-bottom',
    imageClassName: 'news-content__article-image news-content__article-image--tax',
    image: imgArticleTax,
    title: 'Оптимизация налоговой нагрузки компании',
    date: '01.04.2019',
  },
  {
    className: 'news-content__article-card news-content__article-card--right-top',
    imageClassName: 'news-content__article-image news-content__article-image--liability',
    image: imgArticleLiability,
    title: 'Субсидиарная ответственность\n— мифы и реальность',
    date: '01.03.2019',
  },
];

type NewsCard = {
  className: string;
  title: string;
  color: 'blue' | 'teal' | 'dark';
};

const NEWS_CARDS: NewsCard[] = [
  {
    className: 'news-content__news-card news-content__news-card--1',
    title: 'Регламентирован порядок рассмотрения ПФР заявлений',
    color: 'blue',
  },
  {
    className: 'news-content__news-card news-content__news-card--2',
    title: 'Закон о страховании вкладов физических лиц в банках',
    color: 'teal',
  },
  {
    className: 'news-content__news-card news-content__news-card--3',
    title: 'Федеральный закон от 19.06.2000 N 82-ФЗ «О минимальном размере оплаты труда»',
    color: 'dark',
  },
  {
    className: 'news-content__news-card news-content__news-card--4',
    title: 'С января 2019 года вступают в силу новые правила регистрации ТС',
    color: 'teal',
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2.5 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoreButton() {
  return (
    <button type="button" className="news-content__article-more">
      <span className="news-content__article-more-text">Подробнее</span>
      <span className="news-content__article-more-icon">
        <ArrowIcon className="news-content__arrow-svg" />
      </span>
    </button>
  );
}

export default function NewsPage({ onNavigate }: NewsPageProps) {
  return (
    <div className="news-page">
      <main className="news-page__main">
        <section className="news-hero">
          <div className="news-hero__pill news-hero__pill--left" />
          <div className="news-hero__pill news-hero__pill--right" />
          <div className="news-hero__title">
            <span className="news-hero__title-left">Статьи</span>
            <span className="news-hero__title-middle">и</span>
            <span className="news-hero__title-right">Новости</span>
          </div>
        </section>

        <section className="news-content">
          <div className="news-content__frame">
            <h2 className="news-content__section-title news-content__section-title--articles">Статьи</h2>
            <h2 className="news-content__section-title news-content__section-title--news">Новости</h2>

            {ARTICLE_CARDS.map((card) => (
              <article key={card.title} className={card.className}>
                <img src={card.image} alt="" className={card.imageClassName} />
                <div className="news-content__article-overlay" />
                <h3 className="news-content__article-title">{card.title}</h3>
                <p className="news-content__article-date">{card.date}</p>
                <MoreButton />
              </article>
            ))}

            {NEWS_CARDS.map((card) => (
              <article key={card.title} className={`${card.className} news-content__news-card--${card.color}`}>
                <h3 className="news-content__news-title">{card.title}</h3>
                <button type="button" className="news-content__news-more" aria-label="Подробнее">
                  <img src={imgNewsCardArrow} alt="" className="news-content__news-more-icon-image" />
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
