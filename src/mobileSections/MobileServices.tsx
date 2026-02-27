const imgChatGptImage70002Layer3 = "/assets/b168250fe902bb2dbc34cfdf6686d1c1d2e2e6de.webp";
const imgChatGptImage70003Layer4 = "/assets/bfecad0c6eac05654a6d611c67a7eb8842671718.webp";
const imgChatGptImage70001Layer2 = "/assets/b375f28bf7f11fb12e7b9b5c52811e656d947049.webp";
const imgChatGptImage70000Layer1 = "/assets/e8463afe767ac9cfe505ca2c0a7aec9317a62958.png";
const imgChatGptImage70004Layer5 = "/assets/6970dcca3d53861e581296f70514cacb37f69779.webp";
const imgExclude = "/assets/2e0b66efe5df2d146aff97771fbc062a73479162.svg";
const imgExcludeHover = "/assets/6f378aae965602164109861c6e749b9386f7b4dd.svg";

type MobileServicesProps = {
  onOpenFirstService: () => void;
  onOpenSecondService: () => void;
  onOpenThirdService: () => void;
  onOpenFourthService: () => void;
  onOpenFifthService: () => void;
};

export default function MobileServices({
  onOpenFirstService,
  onOpenSecondService,
  onOpenThirdService,
  onOpenFourthService,
  onOpenFifthService,
}: MobileServicesProps) {
  return (
    <div className="bg-[var(--color,#1f556b)] relative size-full" data-name="Mobile" data-node-id="83:1375">
      <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-1px)] not-italic text-[60.78px] text-[color:var(--color-4,white)] text-center top-[calc(50%-1680px)] uppercase" data-node-id="83:1376" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
        Услуги
      </p>
      <div className="absolute bg-[var(--color-4,white)] h-[448.284px] left-[177px] overflow-clip rounded-[77.962px] top-[334px] w-[727px]" data-node-id="83:1377">
        <button
          type="button"
          onClick={onOpenFirstService}
          className="absolute border-[1.949px] border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[97.453px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
          aria-label="Подробнее о бухгалтерском и налоговом консалтинге"
        >
          <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color,#1f556b)] tracking-[0.874px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Подробнее
          </p>
          <span className="absolute right-[10.5px] top-1/2 -translate-y-1/2 h-[77.146px] w-[77.146px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExcludeHover} />
          </span>
        </button>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_46.38%_61.93%_6.97%] leading-[0.9] not-italic text-[44.256px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="83:1379" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Бухгалтерский
          <br aria-hidden="true" />и налоговый консалтинг
        </p>
        <div className="absolute h-[154.095px] right-[52.73px] top-[42.88px] w-[142.171px]" data-name="ChatGPT-Image-7-окт_0002_Layer-3" data-node-id="83:1384">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[133.33%] left-[-19.68%] max-w-none top-[-19.35%] w-[126.45%]" src={imgChatGptImage70002Layer3} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color-4,white)] h-[448.284px] left-[177px] overflow-clip rounded-[77.962px] top-[1903.84px] w-[727px]" data-node-id="83:1385">
        <button
          type="button"
          onClick={onOpenThirdService}
          className="absolute border-[1.949px] border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[97.453px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
          aria-label="Подробнее о юридических услугах"
        >
          <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color,#1f556b)] tracking-[0.874px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Подробнее
          </p>
          <span className="absolute right-[10.5px] top-1/2 -translate-y-1/2 h-[77.146px] w-[77.146px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExcludeHover} />
          </span>
        </button>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.31%_46.92%_70.85%_6.97%] leading-[0.9] not-italic text-[44.256px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="83:1387" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Юридические услуги
        </p>
        <div className="absolute h-[135.901px] right-[50.09px] top-[42.88px] w-[148.713px]" data-name="ChatGPT-Image-7-окт_0003_Layer-4" data-node-id="83:1392">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[141.08%] left-[-12%] max-w-none top-[-16.5%] w-[130.15%]" src={imgChatGptImage70003Layer4} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color-4,white)] h-[448.284px] left-[177px] overflow-clip rounded-[77.962px] top-[857.28px] w-[727px]" data-node-id="83:1393">
        <button
          type="button"
          onClick={onOpenSecondService}
          className="absolute border-[1.949px] border-[var(--color,#1f556b)] border-solid inset-[66.95%_6.97%_11.31%_6.97%] rounded-[97.453px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
          aria-label="Подробнее об аудите"
        >
          <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color,#1f556b)] tracking-[0.874px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Подробнее
          </p>
          <span className="absolute right-[10.5px] top-1/2 -translate-y-1/2 h-[77.146px] w-[77.146px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExcludeHover} />
          </span>
        </button>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_47.45%_79.77%_6.97%] leading-[0.9] not-italic text-[44.256px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="83:1395" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Аудит
        </p>
        <div className="absolute h-[179.376px] right-[50.73px] top-[42.88px] w-[165.613px]" data-name="ChatGPT-Image-7-окт_0001_Layer-2" data-node-id="83:1400">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[105.12%] left-[-3.6%] max-w-none top-0 w-[125.48%]" src={imgChatGptImage70001Layer2} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color-4,white)] h-[448.284px] left-[177px] overflow-clip rounded-[77.962px] top-[1380.56px] w-[727px]" data-node-id="83:1409">
        <button
          type="button"
          onClick={onOpenFourthService}
          className="absolute border-[1.949px] border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[97.453px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
          aria-label="Подробнее об управленческом и финансовом консалтинге"
        >
          <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color,#1f556b)] tracking-[0.874px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Подробнее
          </p>
          <span className="absolute right-[10.5px] top-1/2 -translate-y-1/2 h-[77.146px] w-[77.146px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExcludeHover} />
          </span>
        </button>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.31%_41.29%_61.93%_6.97%] leading-[0.9] not-italic text-[44.256px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="83:1411" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Управленческий
          <br aria-hidden="true" />и финансовый консалтинг
        </p>
        <div className="absolute h-[143.83px] right-[50.31px] top-[42.88px] w-[132.906px]" data-name="ChatGPT-Image-7-окт_0000_Layer-1" data-node-id="83:1416">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[123.42%] left-[-3.42%] max-w-none top-[-13.61%] w-[110.96%]" src={imgChatGptImage70000Layer1} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color-4,white)] h-[448.284px] left-[177px] overflow-clip rounded-[77.962px] top-[2427px] w-[727px]" data-node-id="83:1417">
        <button
          type="button"
          onClick={onOpenFifthService}
          className="absolute border-[1.949px] border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[97.453px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
          aria-label="Подробнее об управлении проектами"
        >
          <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[43.701px] text-[color:var(--color,#1f556b)] tracking-[0.874px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Подробнее
          </p>
          <span className="absolute right-[10.5px] top-1/2 -translate-y-1/2 h-[77.146px] w-[77.146px]">
            <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
            <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExcludeHover} />
          </span>
        </button>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_47.45%_70.85%_6.97%] leading-[0.9] not-italic text-[44.256px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="83:1419" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Управление проектами
        </p>
        <div className="absolute h-[138.573px] right-[50.88px] top-[42.88px] w-[153.765px]" data-name="ChatGPT-Image-7-окт_0004_Layer-5" data-node-id="83:1424">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[138.54%] left-[-28.74%] max-w-none top-[-15.28%] w-[130.24%]" src={imgChatGptImage70004Layer5} />
          </div>
        </div>
      </div>
    </div>
  );
}
