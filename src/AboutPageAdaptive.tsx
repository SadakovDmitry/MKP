import { useState } from 'react';
import { NAV_ORDER, PAGE_LABELS, type SitePage } from './navigation';
import SharedFooter from './SharedFooter';

const imgChatGptImage2020251203481 = '/assets/9a05eb3c69e44eb9374f6a2b6b8432d5210e8bdc.png';
const imgMkrIcons0003Layer4 = '/assets/392e3857209dc66690ca73b8a690e23d914c2f6f.png';
const imgMkrIcons0002Layer3 = '/assets/bec0c030b20d45265db78ce720b9e7821571d36a.png';
const imgMkrIcons0004Layer0Copy = '/assets/967e1e665c88e5a01a218fecde6762cf105f578c.png';
const imgMkrIcons0001Layer2 = '/assets/1a01377457f84ffc40bea44a61f20a55bf14abd5.png';
const imgMkrIcons0000Layer1 = '/assets/a47f2e952395700cbc7d73f619fb126302fe4876.png';
const imgPhoto1581847797580A3Ac8010D37C6 = '/assets/6826aba9ca6c5754507d0ace4c141b413a723ce2.png';
const imgPhoto1581847797580A3Ac8010D37C4 = '/assets/4c40daade4fe15d923424347599abcd4494255dc.png';
const imgPhoto1581847797580A3Ac8010D37C2 = '/assets/a3c6acf47334f080ede8b9f1d08b1c29979c7cb7.png';
const imgPhoto1581847797580A3Ac8010D37C3 = '/assets/a2690544f5482e64438463611a054497557f0095.png';
const imgPhoto1581847797580A3Ac8010D37C1 = '/assets/6e6dc8eaf9c066423b563fe491388fde30f273d3.png';
const imgPhoto1581847797580A3Ac8010D37C5 = '/assets/fbe5431bf3142ec8a7e5c55acb501ebdc6476716.png';
const imgVector = '/assets/45721801618c04b8d5b31a5597572b9d3e6da2b8.svg';
const imgVector1 = '/assets/20ba96200c69778d7033bbee28fe80ff92d15d09.svg';
const imgVector2 = '/assets/b644b22fa8721f42839eae50f1394fb5f7246d6c.svg';
const imgVector3 = '/assets/afc4dff6a386e5a9bbef91e7deb6f74d4aef0f9f.svg';
const imgGroup = '/assets/9797281a12c87b7ae0593e80ffe07a1a0d4c4124.svg';
const imgGroup1 = '/assets/ab0b1a956333b2ca75e0ef7344df86b861e5a89b.svg';
const imgGroup2 = '/assets/828b4e1b6f7560be0f6a9d2052198211695fdb93.svg';
const imgVector4 = '/assets/92bd6b17994701895673ae98ac3d83d15acee971.svg';
const imgFrame13 = '/assets/6470d4adf4a48499ba84260d97166147d9ba6e00.svg';
type AboutPageAdaptiveProps = {
  onNavigate: (page: SitePage) => void;
};

type SectorCard = {
  title: string;
  description: string;
  image: string;
};

const advantages = [
  { icon: imgMkrIcons0003Layer4, text: 'Только проверенные решения с гарантированным результатом.' },
  { icon: imgMkrIcons0002Layer3, text: 'Консультации для малого, среднего и крупного бизнеса любой формы собственности.' },
  { icon: imgMkrIcons0004Layer0Copy, text: 'Сопровождаем проекты от стартапа до выхода на новый уровень.' },
  { icon: imgMkrIcons0001Layer2, text: 'Команда специалистов высокой квалификации с опытом в разных отраслях.' },
  { icon: imgMkrIcons0000Layer1, text: 'Решаем широкий спектр задач: учет, процессы, финмодели, правовые решения.' },
];

const sectors: SectorCard[] = [
  {
    title: 'Сельское хозяйство',
    description: 'Растениеводство, животноводство, грибоводство, тепличные хозяйства.',
    image: imgPhoto1581847797580A3Ac8010D37C4,
  },
  {
    title: 'Строительство',
    description: 'Проектирование, промышленное, жилищное и коттеджное строительство.',
    image: imgPhoto1581847797580A3Ac8010D37C6,
  },
  {
    title: 'Многопрофильные холдинги',
    description: 'Производство, переработка, комплексы замкнутого цикла, торговый дом.',
    image: imgPhoto1581847797580A3Ac8010D37C3,
  },
  {
    title: 'Услуги',
    description: 'Аренда, реклама, складская логистика и грузоперевозки.',
    image: imgPhoto1581847797580A3Ac8010D37C2,
  },
  {
    title: 'Торговля',
    description: 'Розничная, оптовая торговля, ВЭД.',
    image: imgPhoto1581847797580A3Ac8010D37C5,
  },
  {
    title: 'Некоммерческие организации',
    description: 'ТСЖ, ДПК, фонды и сопровождающие структуры.',
    image: imgPhoto1581847797580A3Ac8010D37C1,
  },
];

function BrandLogo() {
  return (
    <div className="bg-white h-[36px] overflow-clip relative rounded-[38.823px] shrink-0 w-[100px]">
      <div className="absolute contents inset-[13.87%_14%_13.43%_5%]">
        <div className="absolute inset-[29.45%_14%_29%_40.48%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
        </div>
        <div className="absolute inset-[15.97%_69.36%_15.49%_5.57%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
        </div>
        <div className="absolute inset-[47.4%_68.82%_13.43%_14.27%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
        </div>
        <div className="absolute inset-[13.87%_78.1%_46.96%_5%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
        </div>
        <div className="absolute inset-[15.95%_74.77%_55.61%_15.63%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
        </div>
        <div className="absolute inset-[47.4%_68.82%_14.85%_14.27%] opacity-70">
          <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
        </div>
        <div className="absolute inset-[15.32%_78.1%_46.93%_5%] opacity-70">
          <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
        </div>
        <div className="absolute inset-[56.45%_79.45%_15.52%_11.06%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgVector4} />
        </div>
      </div>
    </div>
  );
}

export default function AboutPageAdaptive({ onNavigate }: AboutPageAdaptiveProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page: SitePage) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <div className="bg-white min-h-screen text-[#313131]">
      <header className="about-adaptive-local-header sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] relative">
          <div className="bg-[#44b1d2] rounded-[50px] h-[47px] px-[5px] pr-[4.69px] flex items-center justify-between">
            <BrandLogo />

            <nav className="hidden lg:flex items-center gap-[20px]" aria-label="Навигация по сайту">
              {NAV_ORDER.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handleNavigate(page)}
                  className={`h-[26.056px] rounded-[38.823px] px-4 text-[14.175px] font-['Roboto:Medium',sans-serif] transition-colors duration-150 active:scale-[0.98] ${
                    page === 'about' ? 'bg-[#1f556b] text-white' : 'bg-white text-[#1f556b]'
                  }`}
                >
                  {PAGE_LABELS[page]}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block h-[37px] w-[37.032px]">
              <img alt="" className="block size-full" src={imgFrame13} />
            </div>

            <button
              type="button"
              aria-label="Открыть меню"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden bg-white h-[36px] w-[36px] rounded-full flex items-center justify-center text-[#1f556b] text-xl font-bold"
            >
              ≡
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden absolute left-0 right-0 top-[58px] bg-[#44b1d2] rounded-[24px] p-3 flex flex-col gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              {NAV_ORDER.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handleNavigate(page)}
                  className={`h-10 rounded-[999px] text-sm font-['Roboto:Medium',sans-serif] active:scale-[0.98] ${
                    page === 'about' ? 'bg-[#1f556b] text-white' : 'bg-white text-[#1f556b]'
                  }`}
                >
                  {PAGE_LABELS[page]}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-[1200px] px-4 pb-14 pt-10 sm:px-6 lg:px-8">
          <h1 className="font-['Geologica:Medium',sans-serif] text-[30px] sm:text-[40px] lg:text-[50.081px] leading-[1.1] text-center lg:text-left max-w-[820px]">
            Мы знаем, как сделать ваш бизнес{' '}
            <span className="inline-flex h-[42px] sm:h-[48px] lg:h-[63px] items-center justify-center bg-[#44b1d2] text-white rounded-[31.5px] px-4 sm:px-6 align-middle">эффективным</span>{' '}
            и{' '}
            <span className="inline-flex h-[42px] sm:h-[48px] lg:h-[63px] items-center justify-center bg-[#1f556b] text-white rounded-[31.5px] px-4 sm:px-6 align-middle">прибыльным</span>
          </h1>
        </section>

        <section className="bg-[#e2f4fa] py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-5">
              <h2 className="font-['Geologica:Medium',sans-serif] text-[#1f556b] text-[28px] lg:text-[36.648px] uppercase leading-[1.1]">
                Миссия и ценности
              </h2>
              <p className="font-['Roboto:Bold',sans-serif] text-[#1f556b] text-[26px] lg:text-[34.149px] leading-none whitespace-nowrap">Более 10 лет</p>
              <p className="font-['Roboto:Regular',sans-serif] text-[17px] lg:text-[19.22px] leading-none">
                мы помогаем руководителям эффективно управлять бизнесом, оказываем экспертную поддержку и решаем задачи финансового, кадрового и налогового учета на предприятиях.
              </p>
              <p className="font-['Roboto:Bold',sans-serif] text-[#1f556b] text-[26px] lg:text-[34.149px] leading-none">
                Консалтинговое агентство «МКР»
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[17px] lg:text-[19.22px] leading-none">
                — это команда опытных бухгалтеров, экономистов и юристов, любящих свое дело и заинтересованных в результате. Мы делимся проверенными технологиями и внедряем их в бизнес-процессы вашей компании.
              </p>
            </div>

            <div className="bg-[#1f556b] rounded-[40px] p-6 lg:p-8 text-white relative overflow-hidden">
              <img
                alt=""
                src={imgChatGptImage2020251203481}
                className="hidden lg:block absolute right-4 top-4 w-[160px] h-[180px] object-cover rounded-[20px]"
              />
              <p className="font-['Roboto:Regular',sans-serif] text-[17px] lg:text-[19.22px] leading-none max-w-[360px]">
                Наша компания предлагает как комплексные решения для бизнеса, так и отдельные услуги:
              </p>
              <ul className="mt-5 list-disc pl-6 font-['Roboto:SemiBold',sans-serif] text-[17px] lg:text-[19.22px] leading-none space-y-3 max-w-[420px]">
                <li>бухгалтерское сопровождение</li>
                <li>управленческий консалтинг</li>
                <li>экономический консалтинг</li>
                <li>правовой консалтинг</li>
                <li>кадровый учет</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
          <p className="font-['Roboto:Bold',sans-serif] text-[12px] sm:text-[16px] md:text-[24px] lg:text-[34.15px] leading-none whitespace-nowrap mb-5">
            Самое востребованное направление — аутсорсинг.
          </p>
          <p className="font-['Roboto:Regular',sans-serif] text-[17px] lg:text-[19.22px] leading-none mb-5">
            Его доля составляет 80% от всей нашей деятельности. Мы берем на себя бухгалтерский учет, оптимизируем налоги, проводим аудит, исправляем ошибки и восстанавливаем учет.
          </p>
          <p className="font-['Roboto:Bold',sans-serif] text-[17px] lg:text-[19.22px] leading-none">
            К решению каждой задачи подходим индивидуально, учитывая специфику бизнеса, цели и стратегию развития.
          </p>
        </section>

        <section className="bg-[#1f556b] py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-['Geologica:Medium',sans-serif] text-white text-[28px] lg:text-[36.648px] uppercase leading-[1.1]">
              Преимущества
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {advantages.map((item, index) => (
                <div key={index} className="bg-[#44b1d2] rounded-[20.324px] p-4 flex gap-4 items-start">
                  <div className="bg-white rounded-[14px] p-2 shrink-0 w-[72px] h-[72px] flex items-center justify-center">
                    <img alt="" src={item.icon} className="max-w-full max-h-full object-contain" />
                  </div>
                  <p className="font-['Roboto:Regular',sans-serif] text-white text-[17px] lg:text-[21.923px] leading-none">{item.text}</p>
                </div>
              ))}
            </div>

            <h3 className="font-['Geologica:Medium',sans-serif] text-white text-[28px] lg:text-[50.081px] text-center leading-none mt-10">
              Мы любим то, что делаем!
            </h3>
            <p className="font-['Roboto:Regular',sans-serif] text-white text-[22px] lg:text-[34.15px] text-center leading-none mt-5 max-w-[964px] mx-auto">
              Обратитесь к нам — и получите экспертную консультацию по любому вопросу или проблеме вашего бизнеса.
            </p>
            <p className="font-['Roboto:Bold',sans-serif] text-white text-[11px] sm:text-[16px] md:text-[22px] lg:text-[34.15px] text-center leading-none mt-5 uppercase whitespace-nowrap">
              Для нас нет проблем — у нас есть оптимальные решения.
            </p>

            <button
              type="button"
              className="mx-auto mt-8 h-[64.642px] px-8 bg-white rounded-[64.642px] text-[#1f556b] font-['Geologica:Light',sans-serif] text-[22px] lg:text-[28.987px] tracking-[0.5797px] active:scale-[0.98] transition-transform duration-150"
            >
              Написать нам
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-['Geologica:Medium',sans-serif] text-[#313131] text-[28px] lg:text-[36.648px] uppercase leading-[1.1] mb-8">
            Сферы деятельности
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector) => (
              <article key={sector.title} className="bg-[#1f556b] rounded-[38.689px] p-[15px] flex gap-4">
                <div className="bg-white rounded-[25px] w-[220px] h-[143px] shrink-0 overflow-hidden hidden sm:block">
                  <img alt="" src={sector.image} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-['Geologica:Bold',sans-serif] text-white text-[23px] lg:text-[25.431px] leading-none mb-3">
                    {sector.title}
                  </h3>
                  <p className="font-['Geologica:Regular',sans-serif] text-white text-[16px] lg:text-[17.526px] leading-none">
                    {sector.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SharedFooter onNavigate={handleNavigate} />
    </div>
  );
}
