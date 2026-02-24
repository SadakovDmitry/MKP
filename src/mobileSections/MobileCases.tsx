import type { CasesFilterLabel } from '../casesFilters';

const imgChatGptImage1320251735561 = "/assets/9a2ea7309518ee76a6b97175e1aa7477a7cfc0fc.png";
const imgChatGptImage1320251802081 = "/assets/90ec21a8e07043728f8fdadfb5773adc70c3b66e.png";
const imgChatGptImage1320251737291 = "/assets/4a99f27e97f28314170723b56e93bfdc867d868a.png";
const imgChatGptImage132025175029 = "/assets/a31d752484cb75bd4215525705c86961266bebee.png";
const imgChatGptImage1320251738531 = "/assets/cb9636fa326937888360f117de63def7956a4533.png";
const imgChatGptImage132025175238 = "/assets/061e136ba2bf5647e14f796954062344e97ad218.png";

type MobileCasesProps = {
  onOpenCasesByFilter: (filter: CasesFilterLabel) => void;
};

export default function MobileCases({ onOpenCasesByFilter }: MobileCasesProps) {
  return (
    <div className="bg-[var(--color-4,white)] relative size-full" data-name="Mobile" data-node-id="83:1425">
      <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-1px)] not-italic text-[60.78px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-1780px)] uppercase" data-node-id="83:1426" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
        Кейсы
      </p>
      <div className="absolute bg-[var(--color,#1f556b)] h-[501.513px] left-[177px] overflow-clip rounded-[75.206px] top-[319px] w-[725.056px]" data-node-id="83:1427">
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[105.578px] left-[49.53px] rounded-[70.56px] top-[344.98px] w-[624.583px]" data-node-id="83:1428" />
        <button
          type="button"
          onClick={() => onOpenCasesByFilter('Сельское хозяйство')}
          className="absolute h-[105.578px] left-[49.53px] top-[344.98px] w-[624.583px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[70.56px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.01] active:translate-y-0 active:scale-[0.985] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
          data-node-id="83:1429"
        >
          <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[47.403px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </span>
        </button>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[260.72px] not-italic text-[45.412px] text-[color:var(--color-4,white)] top-[181.8px] w-[413.757px]" data-node-id="83:1430" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <p className="leading-none whitespace-pre-wrap">Сельское хозяйство</p>
        </div>
        <div className="absolute h-[257.67px] left-[50.04px] top-[52.68px] w-[188.584px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_35_56 1" data-node-id="83:1431">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[113.04%] left-[-27.23%] max-w-none top-[-6.52%] w-[154.46%]" src={imgChatGptImage1320251735561} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color,#1f556b)] h-[499.57px] left-[177px] overflow-clip rounded-[75.206px] top-[2048.55px] w-[725.056px]" data-node-id="83:1432">
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[105.578px] left-[49.53px] rounded-[70.56px] top-[344.99px] w-[624.583px]" data-node-id="83:1433" />
        <button
          type="button"
          onClick={() => onOpenCasesByFilter('Финансы')}
          className="absolute h-[105.578px] left-[49.53px] top-[344.99px] w-[624.583px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[70.56px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.01] active:translate-y-0 active:scale-[0.985] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
          data-node-id="83:1434"
        >
          <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[47.403px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </span>
        </button>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[260.72px] not-italic text-[45.412px] text-[color:var(--color-4,white)] top-[181.8px] w-[413.757px]" data-node-id="83:1435" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <p className="leading-none whitespace-pre-wrap">Некоммерческие организации</p>
        </div>
        <div className="absolute h-[247.581px] left-[48.59px] top-[52.48px] w-[188.013px]" data-name="ChatGPT Image 13 окт. 2025 г., 18_02_08 1" data-node-id="83:1436">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-15.84%] max-w-none top-0 w-[131.68%]" src={imgChatGptImage1320251802081} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color,#1f556b)] h-[501.513px] left-[177px] overflow-clip rounded-[75.206px] top-[895.52px] w-[727px]" data-node-id="83:1437">
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[105.578px] left-[49.52px] rounded-[70.56px] top-[344.99px] w-[624.583px]" data-node-id="83:1438" />
        <button
          type="button"
          onClick={() => onOpenCasesByFilter('Строительство')}
          className="absolute h-[105.578px] left-[49.52px] top-[344.99px] w-[624.583px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[70.56px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.01] active:translate-y-0 active:scale-[0.985] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
          data-node-id="83:1439"
        >
          <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[47.403px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </span>
        </button>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[284.41px] not-italic text-[45.412px] text-[color:var(--color-4,white)] top-[183px] whitespace-nowrap" data-node-id="83:1440" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <p className="leading-none">Строительство</p>
        </div>
        <div className="absolute h-[241.989px] left-[50.02px] top-[52.68px] w-[208.294px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_37_29 1" data-node-id="83:1441">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[111.39%] left-[-14.71%] max-w-none top-[-5.7%] w-[129.41%]" src={imgChatGptImage1320251737291} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color,#1f556b)] h-[499.57px] left-[177px] overflow-clip rounded-[75.206px] top-[2623.12px] w-[727px]" data-node-id="83:1442">
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[105.578px] left-[49.52px] rounded-[70.56px] top-[344.98px] w-[624.583px]" data-node-id="83:1443" />
        <button
          type="button"
          onClick={() => onOpenCasesByFilter('Разработка ПО')}
          className="absolute h-[105.578px] left-[49.52px] top-[344.98px] w-[624.583px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[70.56px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.01] active:translate-y-0 active:scale-[0.985] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
          data-node-id="83:1444"
        >
          <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[47.403px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </span>
        </button>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[284.41px] not-italic text-[45.412px] text-[color:var(--color-4,white)] top-[183px] whitespace-nowrap" data-node-id="83:1445" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <p className="leading-none">Холдинги</p>
        </div>
        <div className="absolute h-[227.721px] left-[40.82px] top-[60.26px] w-[234.906px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_50_29" data-node-id="83:1446">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage132025175029} />
        </div>
      </div>
      <div className="absolute bg-[var(--color,#1f556b)] h-[501.513px] left-[177px] overflow-clip rounded-[75.206px] top-[1472.03px] w-[725.056px]" data-node-id="83:1447">
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[105.578px] left-[49.55px] rounded-[70.56px] top-[344.99px] w-[624.583px]" data-node-id="83:1448" />
        <button
          type="button"
          onClick={() => onOpenCasesByFilter('HoReCa')}
          className="absolute h-[105.578px] left-[49.55px] top-[344.99px] w-[624.583px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[70.56px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.01] active:translate-y-0 active:scale-[0.985] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
          data-node-id="83:1449"
        >
          <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[47.403px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </span>
        </button>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[284.42px] not-italic text-[45.412px] text-[color:var(--color-4,white)] top-[183px] whitespace-nowrap" data-node-id="83:1450" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <p className="leading-none">Торговля</p>
        </div>
        <div className="absolute h-[245.914px] left-[60.58px] top-[50.02px] w-[196.179px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_38_53 1" data-node-id="83:1451">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[105.62%] left-[-16.2%] max-w-none top-[-2.81%] w-[132.39%]" src={imgChatGptImage1320251738531} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--color,#1f556b)] h-[499.57px] left-[177px] overflow-clip rounded-[75.206px] top-[3197.69px] w-[725.056px]" data-node-id="83:1452">
        <div className="absolute bg-[var(--color-2,#44b1d2)] h-[105.578px] left-[49.55px] rounded-[70.56px] top-[344.98px] w-[624.583px]" data-node-id="83:1453" />
        <button
          type="button"
          onClick={() => onOpenCasesByFilter('Финансы')}
          className="absolute h-[105.578px] left-[49.55px] top-[344.98px] w-[624.583px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[70.56px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.01] active:translate-y-0 active:scale-[0.985] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
          data-node-id="83:1454"
        >
          <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[47.403px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Подробнее
          </span>
        </button>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[301.3px] not-italic text-[45.412px] text-[color:var(--color-4,white)] top-[183.01px] whitespace-nowrap" data-node-id="83:1455" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          <p className="leading-none">Услуги</p>
        </div>
        <div className="absolute h-[227.969px] left-[48.59px] top-[58.32px] w-[228.834px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_52_38" data-node-id="83:1456">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage132025175238} />
        </div>
      </div>
    </div>
  );
}
