import { useEffect, useRef, useState } from 'react';

const imgPolygon4 = "/assets/8efeac8f73a978a929719ba606af91056365c6a3.svg";
const imgPolygon5 = "/assets/bc757ad864f67c3668467c63e101f282a8dbfed1.svg";

type Review = {
  name: string;
  industry: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Наталья Сергеевна',
    industry: 'Строительство',
    text:
      'Остановили свой выбор на "МКР", так как при первой же встрече стало понятно, что команда обладает большим практическим опытом. Задачу выполнили четко и грамотно, управленческий учет поставили с учетом специфики нашего бизнеса.',
  },
  {
    name: 'Алексей Викторович',
    industry: 'Торговля',
    text:
      'Передали бухгалтерию и налоговый блок на сопровождение. С первого месяца получили прозрачную отчетность, понятные сроки и быстрое решение рабочих вопросов. Отдельно отмечу внимательность к деталям и ответственность.',
  },
  {
    name: 'Мария Андреевна',
    industry: 'Сфера услуг',
    text:
      'Нужна была системная настройка учета и контроль расходов. Специалисты "МКР" выстроили процессы и помогли убрать ошибки в документах. Сейчас руководство получает корректные цифры для принятия решений.',
  },
  {
    name: 'Игорь Николаевич',
    industry: 'Производство',
    text:
      'Обратились за аудитом и восстановлением учета. Команда оперативно включилась, объяснила риски простым языком и предложила конкретный план работ. В результате закрыли проблемные зоны и спокойно прошли проверку.',
  },
];

export default function Mobile() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'prev' | 'next'>('next');
  const transitionTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const switchReview = (nextIndex: number, direction: 'prev' | 'next') => {
    if (isTransitioning) {
      return;
    }

    setSlideDirection(direction);
    setIsTransitioning(true);

    transitionTimerRef.current = window.setTimeout(() => {
      setActiveReviewIndex(nextIndex);
      setIsTransitioning(false);
    }, 180);
  };

  const handlePrevReview = () => {
    const nextIndex = activeReviewIndex === 0 ? REVIEWS.length - 1 : activeReviewIndex - 1;
    switchReview(nextIndex, 'prev');
  };

  const handleNextReview = () => {
    const nextIndex = activeReviewIndex === REVIEWS.length - 1 ? 0 : activeReviewIndex + 1;
    switchReview(nextIndex, 'next');
  };

  const activeReview = REVIEWS[activeReviewIndex];
  const textTransitionClass = isTransitioning
    ? `${slideDirection === 'next' ? '-translate-x-3' : 'translate-x-3'} opacity-0`
    : 'translate-x-0 opacity-100';
  const centeredTransitionClass = isTransitioning ? 'opacity-0' : 'opacity-100';

  return (
    <div className="bg-[var(--color-6,#e2f4fa)] relative size-full" data-name="Mobile" data-node-id="83:1053">
      <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-0.5px)] not-italic text-[60.78px] text-[color:var(--color,#1f556b)] text-center top-[calc(50%-291px)] uppercase w-[539px] whitespace-pre-wrap" data-node-id="83:1054" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
        отзывы
      </p>
      <div className="absolute bg-[var(--color,#1f556b)] h-[341.08px] left-[112px] overflow-clip rounded-[55.013px] top-[409px] w-[856px]" data-node-id="83:1055">
        <button
          type="button"
          onClick={handleNextReview}
          className="absolute flex h-[101.224px] items-center justify-center left-[760.28px] top-[119.93px] w-[58.314px] border-0 bg-transparent p-0 cursor-pointer transition-transform duration-150 active:scale-90 hover:opacity-85"
          style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}
          aria-label="Следующий отзыв"
        >
          <div className="flex-none rotate-90">
            <div className="h-[58.314px] relative w-[101.224px]" data-node-id="83:1056">
              <div className="absolute inset-[4.96%_21.4%_26.58%_19.76%]">
                <img alt="" className="block max-w-none size-full" src={imgPolygon4} />
              </div>
            </div>
          </div>
        </button>
        <button
          type="button"
          onClick={handlePrevReview}
          className="absolute flex h-[101.224px] items-center justify-center left-[37.41px] top-[119.93px] w-[58.314px] border-0 bg-transparent p-0 cursor-pointer transition-transform duration-150 active:scale-90 hover:opacity-85"
          style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}
          aria-label="Предыдущий отзыв"
        >
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[58.314px] relative w-[101.224px]" data-node-id="83:1057">
              <div className="absolute inset-[4.96%_21.4%_26.58%_19.76%]">
                <img alt="" className="block max-w-none size-full" src={imgPolygon5} />
              </div>
            </div>
          </div>
        </button>
        <p className={`absolute bottom-[14.03%] font-['Roboto:Light',sans-serif] font-light leading-none left-[calc(50%-319.08px)] text-[26px] text-[color:var(--color-4,white)] top-[49.03%] w-[637.049px] whitespace-pre-wrap transition-all duration-200 ${textTransitionClass}`} data-node-id="83:1058" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          {activeReview.text}
        </p>
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[36.308px] left-[314.67px] rounded-[27.506px] top-[101.23px] w-[227.753px]" data-node-id="83:1059" />
        <p className={`-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-none left-[calc(50%-0.15px)] text-[47.208px] text-[color:var(--color-4,white)] text-center top-[38px] w-[700px] min-h-[56px] h-auto transition-opacity duration-200 ${centeredTransitionClass}`} data-node-id="83:1060" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          {activeReview.name}
        </p>
        <p className={`-translate-x-1/2 absolute bottom-[60.99%] font-['Roboto:Bold',sans-serif] font-bold leading-none left-[calc(50%-0.22px)] text-[26.57px] text-[color:var(--color-4,white)] text-center top-[31.1%] transition-opacity duration-200 ${centeredTransitionClass}`} data-node-id="83:1061" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          {activeReview.industry}
        </p>
      </div>
    </div>
  );
}
