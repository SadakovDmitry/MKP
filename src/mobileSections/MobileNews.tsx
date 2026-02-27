const imgImage30 = "/assets/931b6633863d1f54a5fc4411e8d68e92170b9644.png";
const imgImage32 = "/assets/fd2feb640c8e531cfacca0277edea7ff68ecea7f.webp";
const imgImage31 = "/assets/38c93582bc755349ad4bcef1516f2c8f81b8cf05.png";
const imgImage33 = "/assets/60a83ebdd7f5d44a2f9856f2b9435915d6c51445.png";
const imgExclude = "/assets/b64dd81d1a35824c308ed72b9711d0a00eedd245.svg";
const imgExclude1 = "/assets/ee77955046f0fc75092854add3bc73ef4db13648.svg";
const imgExclude2 = "/assets/6bb0d15635f2923b7f782e24ebf7c6401041f5bf.svg";
const imgExclude3 = "/assets/6f378aae965602164109861c6e749b9386f7b4dd.svg";

type MobileNewsProps = {
  onOpenFirstArticle: () => void;
  onOpenSecondArticle: () => void;
  onOpenThirdArticle: () => void;
};

export default function MobileNews({ onOpenFirstArticle, onOpenSecondArticle, onOpenThirdArticle }: MobileNewsProps) {
  const handleOpenLaw = () => {
    window.open('https://www.consultant.ru/document/cons_doc_LAW_27572/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[var(--color-2,#44b1d2)] relative size-full" data-name="Mobile" data-node-id="83:1679">
      <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-0.5px)] not-italic text-[60.78px] text-[color:var(--color-4,white)] text-center top-[calc(50%-1580px)] uppercase" data-node-id="83:1680" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
        Новости и статьи
      </p>
      <div className="absolute bg-[var(--color-4,white)] h-[918.008px] left-[177px] overflow-clip rounded-[77.962px] top-[333px] w-[727px]" data-node-id="83:1681">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[918.064px] left-[calc(50%+264.04px)] opacity-15 top-[calc(50%+0.03px)] w-[1633.214px]" data-name="image 30" data-node-id="83:1682">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
        </div>
        <button
          type="button"
          onClick={handleOpenLaw}
          className="absolute z-10 bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[83.86%_6.97%_5.52%_6.97%] rounded-[97.453px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
          data-node-id="83:1683"
          aria-label="Перейти к закону"
        >
          <p className="absolute left-[86px] top-1/2 -translate-y-1/2 whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color-4,white)] tracking-[0.874px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Перейти к закону
          </p>
          <span className="absolute right-[10px] top-1/2 -translate-y-1/2 h-[77px] w-[77px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude2} />
          </span>
        </button>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[6.17%_38.34%_86.42%_6.97%] leading-[0.9] text-[37.462px] text-[color:var(--color-3,#313131)] whitespace-pre-wrap" data-node-id="83:1684" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Федеральный закон от 19.06.2000 N 82-ФЗ
        </p>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[0.9] left-[6.97%] not-italic right-[21.18%] text-[62.504px] text-[color:var(--color-3,#313131)] top-[calc(50%-96.48px)] whitespace-pre-wrap" data-node-id="83:1689" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          О минимальном размере оплаты труда
        </p>
      </div>
      <div className="absolute bg-[var(--color-4,white)] h-[918.008px] left-[177px] overflow-clip rounded-[77.962px] top-[2353.09px] w-[727px]" data-node-id="83:1690">
        <div className="absolute h-[918.373px] left-[-327.45px] opacity-15 top-0 w-[1383.285px]" data-name="image 32" data-node-id="83:1691">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage32} />
        </div>
        <button
          type="button"
          onClick={onOpenThirdArticle}
          className="absolute z-10 bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[83.86%_6.97%_5.52%_6.97%] rounded-[97.453px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
          data-node-id="83:1692"
          aria-label="Читать статью"
        >
          <p className="absolute left-[86px] top-1/2 -translate-y-1/2 whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color-4,white)] tracking-[0.874px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Читать статью
          </p>
          <span className="absolute right-[10px] top-1/2 -translate-y-1/2 h-[77px] w-[77px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude1} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude3} />
          </span>
        </button>
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[6.17%_66.62%_90.12%_6.97%] leading-[0.9] text-[37.462px] text-[color:var(--color-3,#313131)]" data-node-id="83:1693" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          27.11.2025
        </p>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[0.9] left-[6.97%] not-italic right-[6.97%] text-[62.504px] text-[color:var(--color-3,#313131)] top-[calc(50%-96.48px)] whitespace-pre-wrap" data-node-id="83:1698" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Оптимизация налоговой нагрузки компании
        </p>
      </div>
      <div className="absolute bg-[var(--color-4,white)] h-[438.539px] left-[177px] overflow-clip rounded-[77.962px] top-[1326.01px] w-[727px]" data-node-id="83:1699">
        <div className="-translate-x-1/2 absolute h-[459.608px] left-[calc(50%-0.68px)] opacity-15 top-[-9.74px] w-[729.537px]" data-name="image 31" data-node-id="83:1700">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
        </div>
        <button
          type="button"
          onClick={onOpenFirstArticle}
          className="absolute z-10 bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[66.22%_6.97%_11.55%_6.97%] rounded-[97.453px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
          data-node-id="83:1701"
          aria-label="Подробнее о статье Бухгалтерия на аутсорсинге"
        >
          <p className="absolute left-[86px] top-1/2 -translate-y-1/2 whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color-4,white)] tracking-[0.874px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Подробнее
          </p>
          <span className="absolute right-[10px] top-1/2 -translate-y-1/2 h-[77px] w-[77px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude2} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude} />
          </span>
        </button>
        <p className="-translate-x-1/2 absolute font-['Geologica:Regular',sans-serif] font-normal leading-[0.9] left-1/2 not-italic text-[53.9px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-119.86px)] w-[407.354px] whitespace-pre-wrap" data-node-id="83:1706" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Бухгалтерия на аутсорсинге
        </p>
      </div>
      <div className="absolute bg-[var(--color-4,white)] h-[438.539px] left-[177px] overflow-clip rounded-[77.962px] top-[1839.55px] w-[727px]" data-node-id="83:1707">
        <div className="-translate-x-1/2 absolute h-[459.608px] left-[calc(50%-0.68px)] opacity-15 top-[-9.74px] w-[729.537px]" data-name="image 31" data-node-id="83:1708">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage33} />
        </div>
        <button
          type="button"
          onClick={onOpenSecondArticle}
          className="absolute z-10 bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[66.22%_6.97%_11.55%_6.97%] rounded-[97.453px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
          data-node-id="83:1709"
          aria-label="Подробнее о статье Субсидиарная ответственность"
        >
          <p className="absolute left-[86px] top-1/2 -translate-y-1/2 whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color-4,white)] tracking-[0.874px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Подробнее
          </p>
          <span className="absolute right-[10px] top-1/2 -translate-y-1/2 h-[77px] w-[77px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude3} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude1} />
          </span>
        </button>
        <p className="-translate-x-1/2 absolute font-['Geologica:Regular',sans-serif] font-normal leading-[0.9] left-1/2 not-italic text-[53.9px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-151.08px)] w-[556.335px] whitespace-pre-wrap" data-node-id="83:1714" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Субсидиарная ответственность: мифы и реальность
        </p>
      </div>
    </div>
  );
}
