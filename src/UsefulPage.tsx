import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';

const imgLaw = '/assets/931b6633863d1f54a5fc4411e8d68e92170b9644.png';
const imgCase = '/assets/fd2feb640c8e531cfacca0277edea7ff68ecea7f.webp';
const imgChecklist = '/assets/38c93582bc755349ad4bcef1516f2c8f81b8cf05.png';

const materials = [
  {
    date: '04.02.2026',
    title: 'Федеральный закон от 19.06.2000 N 82-ФЗ',
    description: 'Актуальная редакция документа и краткая памятка по применению для бизнеса.',
    action: 'Перейти к закону',
    image: imgLaw,
  },
  {
    date: '22.01.2026',
    title: 'Оптимизация налоговой нагрузки компании',
    description: 'Подбор легальных инструментов снижения рисков и корректная настройка учета.',
    action: 'Читать статью',
    image: imgCase,
  },
  {
    date: '09.01.2026',
    title: 'Бухгалтерия на аутсорсинге',
    description: 'Когда стоит передавать учет на аутсорс и как рассчитать экономический эффект.',
    action: 'Подробнее',
    image: imgChecklist,
  },
  {
    date: '18.12.2025',
    title: 'Субсидиарная ответственность: мифы и реальность',
    description: 'Практические кейсы и действия, которые снижают личные риски руководителя.',
    action: 'Подробнее',
    image: imgLaw,
  },
];

const quickDocs = [
  'Чек-лист: закрытие месяца без ошибок',
  'Шаблон: учетная политика ООО',
  'Памятка: подготовка к налоговой проверке',
  'Шаблон: регламент документооборота',
  'Чек-лист: кадровый аудит за 1 день',
  'Памятка: договоры с самозанятыми',
];

type UsefulPageProps = {
  onNavigate: (page: SitePage) => void;
};

export default function UsefulPage({ onNavigate }: UsefulPageProps) {
  return (
    <div className="bg-white min-h-screen text-[#313131]">
      <main>
        <section className="bg-[#e2f4fa] pt-24 pb-10 sm:pt-28 lg:pt-36">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <p className="font-['Geologica:Medium',sans-serif] text-[#1f556b] text-[16px] sm:text-[20px] uppercase tracking-[0.04em]">
              Полезное
            </p>
            <h1 className="mt-3 font-['Geologica:Medium',sans-serif] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] text-[#313131] max-w-[900px]">
              Актуальные законы, материалы и рабочие шаблоны для вашего бизнеса
            </h1>
            <p className="mt-5 max-w-[840px] font-['Roboto:Regular',sans-serif] text-[17px] sm:text-[20px] leading-[1.2] text-[#313131]">
              Раздел собран в формате практической базы: нормативные акты, прикладные статьи и готовые документы,
              которые можно использовать в ежедневной работе компании.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="font-['Geologica:Medium',sans-serif] text-[#1f556b] text-[26px] sm:text-[34px] uppercase leading-[1.1]">
            Новые материалы
          </h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {materials.map((item) => (
              <article key={item.title} className="rounded-[30px] overflow-hidden border border-[#d4e8ef] bg-white">
                <div className="h-[210px] sm:h-[250px] bg-[#dceef5] overflow-hidden relative">
                  <img alt="" src={item.image} className="w-full h-full object-cover opacity-25" />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="font-['Roboto:Medium',sans-serif] text-[#313131] text-[14px] sm:text-[16px]">{item.date}</p>
                  <h3 className="mt-3 font-['Geologica:Medium',sans-serif] text-[26px] sm:text-[32px] leading-[0.95] text-[#313131]">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-['Roboto:Regular',sans-serif] text-[16px] sm:text-[18px] leading-[1.2] text-[#313131]">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('news')}
                    className="mt-5 h-[48px] px-6 rounded-[999px] border-0 bg-[#1f556b] text-white text-[16px] font-['Geologica:Regular',sans-serif] cursor-pointer"
                  >
                    {item.action}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#1f556b] py-10 sm:py-12">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-['Geologica:Medium',sans-serif] text-white text-[26px] sm:text-[34px] uppercase leading-[1.1]">
              Чек-листы и шаблоны
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickDocs.map((doc) => (
                <button
                  key={doc}
                  type="button"
                  onClick={() => onNavigate('contacts')}
                  className="min-h-[88px] rounded-[22px] bg-[#44b1d2] text-white text-left px-5 py-4 border-0 cursor-pointer font-['Roboto:Medium',sans-serif] text-[16px] leading-[1.15]"
                >
                  {doc}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#e2f4fa] p-6 sm:p-8 lg:p-10">
            <h2 className="font-['Geologica:Medium',sans-serif] text-[#1f556b] text-[26px] sm:text-[34px] uppercase leading-[1.1]">
              Нужен документ под вашу задачу
            </h2>
            <p className="mt-4 font-['Roboto:Regular',sans-serif] text-[17px] sm:text-[20px] leading-[1.2] text-[#313131] max-w-[760px]">
              Подготовим индивидуальный пакет: регламенты, формы отчетности, кадровые и финансовые шаблоны с учетом вашей отрасли.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contacts')}
              className="mt-6 h-[52px] px-7 rounded-[999px] border-0 bg-[#1f556b] text-white text-[17px] font-['Geologica:Regular',sans-serif] cursor-pointer"
            >
              Получить консультацию
            </button>
          </div>
        </section>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
