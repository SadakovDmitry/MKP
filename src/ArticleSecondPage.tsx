import './ArticleSecondPage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';

const imgHero = '/assets/news-figma-article-liability.png';
const imgArticleOutsource = '/assets/news-figma-article-outsource.png';
const imgArticleTax = '/assets/news-figma-article-tax.png';

type ArticleSecondPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenArticle: (page: 'article-1' | 'article-2' | 'article-3') => void;
};

type Myth = {
  label: string;
  title: string;
  paragraphs: string[];
};

const INTRO_PARAGRAPHS = [
  'Ещё каких-то пару лет назад банкротство было для юридических лиц эффективным способом не платить по счетам. Подавая иск в арбитражный суд, кредитор понимал, что, скорее всего, о непогашенной задолженности придётся забыть - либо собственник предприятия заранее вывел активы, либо бизнес прогорел, и расплачиваться теперь нечем (впрочем, одно другому не мешает).',
  'Судебная практика показала, что у неплатёжеспособного юрлица может быть вполне платёжеспособный владелец. Летом 2017 года в силу вступили поправки в закон о банкротстве, ужесточающие субсидиарную ответственность. За полтора года взыскание денежных средств с физических лиц за долги организации перестало быть чем-то исключительным - теперь это обычная арбитражная практика. Однако заблуждения по-прежнему живы, и мы регулярно убеждаемся в этом, общаясь с клиентами. Вот самые распространённые мифы.',
];

const MYTHS: Myth[] = [
  {
    label: 'Миф 1.',
    title: 'Физическое лицо не несёт ответственности за долги компании',
    paragraphs: [
      'Действительно, перед кредитором отвечает юридическое лицо - до тех пор, пока долги не вынудят первого подать иск о банкротстве должника. Когда начнётся конкурсное производство, к ответственности могут привлечь и физическое лицо. При этом в отношении субсидиарной ответственности действует презумпция виновности - это значит, что ответчику придётся доказывать свою добросовестность. В числе пострадавших кредиторов чаще всего оказываются ФНС, банки и поставщики товаров/услуг.',
    ],
  },
  {
    label: 'Миф 2.',
    title: 'Субсидиарная ответственность возлагается только на директора',
    paragraphs: [
      'Бенефициаром (т.е. получателем выгоды) может быть не номинальный директор, а тот, кто реально распоряжается средствами. Кроме того, имеет значение круг аффилированных лиц, влияющих на деятельность организации. Среди таких лиц могут быть как физические, так и юридические: учредители, акционеры, материнские компании (если должник является частью холдинговой структуры) и даже сторонние предприятия (учреждённые одним из владельцев компании-должника) и т.п.',
    ],
  },
  {
    label: 'Миф 3.',
    title: 'Я наёмный топ-менеджер - какие ко мне могут быть вопросы?',
    paragraphs: [
      'Если действия руководителя высшего звена (финансового директора, главного бухгалтера, руководителя юридической службы, коммерческого директора) повлекли за собой банкротство, по новому закону его можно привлечь к субсидиарной ответственности. Даже если вы давно уволились, это не гарантия вашей неприкосновенности. Арбитражный управляющий изучает документы за три года до появления первых признаков неплатежеспособности, и если в этот период вы контролировали деятельность компании-должника, вам грозит субсидиарная ответственность.',
    ],
  },
  {
    label: 'Миф 4.',
    title: 'Я продал свой бизнес, за долги пусть отвечает новый собственник',
    paragraphs: [
      'Вы продали свой бизнес, столкнувшись с убытками, не так ли? Если у нового собственника цель получить выгоду, доведя предприятие до банкротства, субсидиарная ответственность может коснуться и вас - достаточно, чтобы арбитражный управляющий пришёл к выводу, что неплатежеспособность возникла ещё тогда, когда бизнесом управляли вы. А он, как сказано выше, изучает документы за три года до появления первых признаков банкротства.',
    ],
  },
  {
    label: 'Миф 5.',
    title: 'Я не выводил активы и не принимал решений по займам и сделкам с кредиторами',
    paragraphs: [
      'Бездействие тоже предполагает субсидиарную ответственность. Вы не подали заявление в арбитражный суд в месячный срок с момента возникновения неплатёжеспособности? Не предоставили отчётность в ФНС? Партнёр заключил крупную сделку с вашего молчаливого согласия, по которой компания теперь не может погасить задолженность? Впрочем, практика показывает, что бездействие вменить в вину сложнее - если оно не связано с неуплатой налогов.',
      'Стоит отметить ещё один, сугубо человеческий, фактор. Лица, которых привлекают к субсидиарной ответственности, склонны перекладывать её на чужие плечи. Чем шире круг ответственных лиц, тем меньше в конечном итоге придётся платить. И если вашу персону можно будет определить как контролирующую, а действия трактовать как недобросовестные, вам придётся доказывать свою непричастность к разорению компании. Поэтому не стоит надеяться на авось - будьте осторожны и в любых непонятных ситуациях консультируйтесь с юристами.',
    ],
  },
];

type RelatedArticle = {
  title: string;
  date: string;
  image: string;
  target: 'article-1' | 'article-2' | 'article-3' | 'news';
};

const RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: 'Бухгалтерский\nи наловой консалтинг',
    date: '08.04.2019',
    image: imgArticleOutsource,
    target: 'article-1',
  },
  {
    title: 'Оптимизация налоговой нагрузки компании',
    date: '01.04.2019',
    image: imgArticleTax,
    target: 'article-3',
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="article-second-related__arrow-svg">
      <path d="M2.5 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RelatedMoreButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="article-second-related__more" aria-label="Подробнее" onClick={onClick}>
      <span className="article-second-related__more-text">Подробнее</span>
      <span className="article-second-related__more-icon">
        <ArrowIcon />
      </span>
    </button>
  );
}

export default function ArticleSecondPage({ onNavigate, onOpenArticle }: ArticleSecondPageProps) {
  return (
    <div className="article-second-page">
      <main className="article-second-page__main">
        <section className="article-second-hero">
          <img src={imgHero} alt="" className="article-second-hero__image" />
          <div className="article-second-hero__overlay" />
          <h1 className="article-second-hero__title">Субсидиарная ответственность- мифы и реальность</h1>
          <p className="article-second-hero__date">01.03.2019</p>
        </section>

        <section className="article-second-content">
          <div className="article-second-content__inner">
            <div className="article-second-content__intro">
              {INTRO_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="article-second-content__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="article-second-content__myths">
              {MYTHS.map((myth) => (
                <article key={myth.label} className="article-second-content__myth">
                  <h2 className="article-second-content__myth-title">
                    <span className="article-second-content__myth-label">{myth.label}</span>
                    <span>{myth.title}</span>
                  </h2>
                  {myth.paragraphs.map((paragraph, index) => (
                    <p key={index} className="article-second-content__paragraph">
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="article-second-related">
          <h2 className="article-second-related__title">другие статьи</h2>
          <div className="article-second-related__cards">
            {RELATED_ARTICLES.map((article, index) => (
              <article key={article.title} className="article-second-related__card">
                <img src={article.image} alt="" className={`article-second-related__image ${index === 0 ? 'article-second-related__image--first' : ''}`} />
                <div className="article-second-related__overlay" />
                <p className="article-second-related__date">{article.date}</p>
                <h3 className="article-second-related__card-title">{article.title}</h3>
                <RelatedMoreButton onClick={() => (article.target === 'news' ? onNavigate('news') : onOpenArticle(article.target))} />
              </article>
            ))}
          </div>
        </section>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
