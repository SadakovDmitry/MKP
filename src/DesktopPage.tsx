import { useEffect, useState } from 'react';
import { type SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import type { CasesFilterLabel } from './casesFilters';

const img21 = "/assets/fd01438e00c60be1901fac9f11f8ef9bc2b9afd8.png";
const imgChatGptImage1320251804221 = "/assets/c1943de73e30c25267fce6bfb7ea226035562464.png";
const imgChatGptImage720251248321 = "/assets/94a22839c9325e1749240f5d169676c408f85555.png";
const imgChatGptImage720251251291 = "/assets/6e5a106fdd7d0784c4e2d1d2f358a766874cb177.png";
const imgShutterstock2474508323Converted012 = "/assets/a721360e788c5c8db3a22e6abc8d2bd83fdd4248.png";
const imgChatGptImage70002Layer3 = "/assets/b168250fe902bb2dbc34cfdf6686d1c1d2e2e6de.png";
const imgChatGptImage70003Layer4 = "/assets/bfecad0c6eac05654a6d611c67a7eb8842671718.png";
const imgChatGptImage70001Layer2 = "/assets/b375f28bf7f11fb12e7b9b5c52811e656d947049.png";
const imgChatGptImage70000Layer1 = "/assets/e8463afe767ac9cfe505ca2c0a7aec9317a62958.png";
const imgChatGptImage70004Layer5 = "/assets/6970dcca3d53861e581296f70514cacb37f69779.png";
const imgChatGptImage1320251735561 = "/assets/9a2ea7309518ee76a6b97175e1aa7477a7cfc0fc.png";
const imgChatGptImage1320251802081 = "/assets/90ec21a8e07043728f8fdadfb5773adc70c3b66e.png";
const imgChatGptImage1320251737291 = "/assets/4a99f27e97f28314170723b56e93bfdc867d868a.png";
const imgChatGptImage132025175029 = "/assets/a31d752484cb75bd4215525705c86961266bebee.png";
const imgChatGptImage1320251738531 = "/assets/cb9636fa326937888360f117de63def7956a4533.png";
const imgChatGptImage132025175238 = "/assets/061e136ba2bf5647e14f796954062344e97ad218.png";
const imgImage30 = "/assets/931b6633863d1f54a5fc4411e8d68e92170b9644.png";
const imgImage32 = "/assets/fd2feb640c8e531cfacca0277edea7ff68ecea7f.png";
const imgImage31 = "/assets/38c93582bc755349ad4bcef1516f2c8f81b8cf05.png";
const imgImage33 = "/assets/60a83ebdd7f5d44a2f9856f2b9435915d6c51445.png";
const img3DRenderedSilverEnvelopeIconSymbolShinyMetallicEmailIllustrationIsolatedOnTransparentBackgroundForMessagingAndCommunicationDesignPng1 = "/assets/99529a733eeb5b552be035c8cca8fe0182a35c67.png";
const imgVector = "/assets/45721801618c04b8d5b31a5597572b9d3e6da2b8.svg";
const imgVector1 = "/assets/20ba96200c69778d7033bbee28fe80ff92d15d09.svg";
const imgVector2 = "/assets/b644b22fa8721f42839eae50f1394fb5f7246d6c.svg";
const imgVector3 = "/assets/afc4dff6a386e5a9bbef91e7deb6f74d4aef0f9f.svg";
const imgGroup = "/assets/9797281a12c87b7ae0593e80ffe07a1a0d4c4124.svg";
const imgGroup1 = "/assets/ab0b1a956333b2ca75e0ef7344df86b861e5a89b.svg";
const imgGroup2 = "/assets/828b4e1b6f7560be0f6a9d2052198211695fdb93.svg";
const imgVector4 = "/assets/92bd6b17994701895673ae98ac3d83d15acee971.svg";
const imgFrame13 = "/assets/552b828f557817905235015c2dad5dabdcd75d06.svg";
const imgExclude = "/assets/399db38bf930f2ec3cf1b6160b9aea716c8ce1b0.svg";
const imgExclude1 = "/assets/1f9eed437b28824178664c5debfadc4c7e54bf47.svg";
const imgExclude2 = "/assets/ceb6f9cfb25e77f68abf27bde0c8212fd9a7afc8.svg";
const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 4367;

type DesktopPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenCasesByFilter: (filter: CasesFilterLabel) => void;
  onOpenFirstService: () => void;
  onOpenSecondService: () => void;
  onOpenThirdService: () => void;
  onOpenFourthService: () => void;
  onOpenFifthService: () => void;
  onOpenFirstArticle: () => void;
  onOpenSecondArticle: () => void;
  onOpenThirdArticle: () => void;
};

export default function Frame({
  onNavigate,
  onOpenCasesByFilter,
  onOpenFirstService,
  onOpenSecondService,
  onOpenThirdService,
  onOpenFourthService,
  onOpenFifthService,
  onOpenFirstArticle,
  onOpenSecondArticle,
  onOpenThirdArticle,
}: DesktopPageProps) {
  const [scale, setScale] = useState(1);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const nextScale = window.innerWidth / FRAME_WIDTH;
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <div className="mx-auto relative" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
        <div
          className="absolute left-0 top-0"
          style={{ width: `${FRAME_WIDTH}px`, transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="78:640">
      <div className="bg-white h-[700px] overflow-clip relative shrink-0 w-full" data-name="17" data-node-id="78:2">
        <div className="-translate-y-1/2 absolute left-[calc(58.33%-18.67px)] size-[448px] top-1/2" data-name="2имидж 1" data-node-id="78:3">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img21} />
        </div>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(25%-230px)] not-italic text-[50.081px] text-[color:var(--color-3,#313131)] top-[calc(50%-111px)] w-[567px] whitespace-pre-wrap" data-node-id="78:4" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Мы помогаем сделать бизнес эффективным
        </p>
        <button
          type="button"
          onClick={() => setIsConsultationModalOpen(true)}
          className="-translate-x-1/2 absolute border-[1.802px] border-[var(--color,#1f556b)] border-solid h-[58.563px] left-[calc(16.67%+73.17px)] overflow-clip rounded-[45.048px] top-[399px] w-[373px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
          data-node-id="78:5"
          aria-label="Получить консультацию"
        >
          <p className="-translate-x-1/2 absolute font-['Geologica:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[19.911px] text-[color:var(--color,#1f556b)] text-center top-[15.2px] uppercase whitespace-nowrap transition-colors duration-200 group-hover:text-white" data-node-id="78:6" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Получить консультацию
          </p>
        </button>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--color-2,#44b1d2)] h-[47px] left-1/2 overflow-clip rounded-[50px] top-[calc(50%-281.5px)] w-[1160px]" data-node-id="78:40">
          <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[5px] right-[4.69px] top-1/2" data-node-id="78:41">
            <div className="bg-[var(--color-4,white)] h-[36px] overflow-clip relative rounded-[38.823px] shrink-0 w-[100px]" data-node-id="78:42">
              <div className="absolute contents inset-[13.87%_14%_13.43%_5%]" data-name="Group" data-node-id="78:43">
                <div className="absolute inset-[29.45%_14%_29%_40.48%]" data-name="Vector" data-node-id="78:44">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
                </div>
                <div className="absolute inset-[15.97%_69.36%_15.49%_5.57%]" data-name="Vector" data-node-id="78:45">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[47.4%_68.82%_13.43%_14.27%]" data-name="Vector" data-node-id="78:46">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[13.87%_78.1%_46.96%_5%]" data-name="Vector" data-node-id="78:47">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector3} />
                </div>
                <div className="absolute inset-[15.95%_74.77%_55.61%_15.63%]" data-name="Group" data-node-id="78:48">
                  <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
                </div>
                <div className="absolute contents inset-[47.4%_68.82%_14.85%_14.27%]" data-name="Group" data-node-id="78:50">
                  <div className="absolute contents inset-[47.4%_68.82%_14.85%_14.27%]" data-name="Group" data-node-id="78:51">
                    <div className="absolute inset-[47.4%_68.82%_14.85%_14.27%] opacity-70" data-name="Group" data-node-id="78:52">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[15.32%_78.1%_46.93%_5%]" data-name="Group" data-node-id="78:54">
                  <div className="absolute contents inset-[15.32%_78.1%_46.93%_5%]" data-name="Group" data-node-id="78:55">
                    <div className="absolute inset-[15.32%_78.1%_46.93%_5%] opacity-70" data-name="Group" data-node-id="78:56">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup2} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[56.45%_79.45%_15.52%_11.06%]" data-name="Vector" data-node-id="78:58">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector4} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[719.278px]" data-node-id="78:59">
              <button type="button" onClick={() => onNavigate('home')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[84.122px]" data-node-id="78:60">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.84%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:61" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Главная
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('about')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[119.856px]" data-node-id="78:62">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:63" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  О компании
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('services')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[70.722px]" data-node-id="78:64">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:65" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Услуги
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('cases')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[70.722px]" data-node-id="78:66">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:67" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Кейсы
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('news')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[27px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[145px]" data-node-id="78:68">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.46%_-47.64%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:69" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Статьи и новости
                </p>
              </button>
              <button type="button" onClick={() => onNavigate('contacts')} className="bg-[var(--color-4,white)] border-0 cursor-pointer h-[26.056px] overflow-clip p-0 relative rounded-[38.823px] shrink-0 w-[91.567px]" data-node-id="78:70">
                <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[17.15%_7.45%_17.6%_6.83%] leading-[normal] text-[14.175px] text-[color:var(--color,#1f556b)] text-center whitespace-pre-wrap" data-node-id="78:71" style={{ fontVariationSettings: "\'wdth\' 100" }}>
                  Контакты
                </p>
              </button>
            </div>
            <div className="h-[37px] relative shrink-0 w-[37.032px]" data-node-id="78:72">
              <img alt="" className="absolute block max-w-none size-full" src={imgFrame13} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-6,#e2f4fa)] h-[700px] overflow-clip relative shrink-0 w-full" data-name="18" data-node-id="78:432">
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(12.5%-55px)] not-italic text-[36.648px] text-[color:var(--color,#1f556b)] top-[calc(50%-275px)] uppercase w-[325px] whitespace-pre-wrap" data-node-id="78:433" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Преимущества компании
        </p>
        <div className="absolute contents left-[calc(75%-45px)] top-[130px]" data-node-id="78:434">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[230px] left-[calc(75%-45px)] overflow-clip rounded-[40px] top-[197px] w-[275px]" data-node-id="78:435">
            <div className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[67.83%_7.64%_12.17%_7.64%] leading-[0.9] text-[25.31px] text-[color:var(--color-4,white)] text-center whitespace-pre-wrap" data-node-id="78:436" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              <p className="mb-0">Индивидуальный</p>
              <p>подход</p>
            </div>
          </div>
          <div className="absolute aspect-[714/810] left-[75.14%] right-[12%] top-[130px]" data-name="ChatGPT Image 13 окт. 2025 г., 18_04_22 1" data-node-id="78:437">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[126.42%] left-[-21.71%] max-w-none top-[-13.21%] w-[143.42%]" src={imgChatGptImage1320251804221} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[calc(25%+65px)] top-[224px]" data-node-id="78:438">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[230px] left-[calc(25%+65px)] overflow-clip rounded-[40px] top-[297px] w-[275px]" data-node-id="78:439">
            <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[64.78%_11.64%_15.22%_11.64%] leading-[0.9] text-[25.311px] text-[color:var(--color-4,white)] text-center whitespace-pre-wrap" data-node-id="78:440" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Команда профессионалов
            </p>
          </div>
          <div className="absolute aspect-[1024/1024] left-[31.79%] right-[52.86%] top-[224px]" data-name="ChatGPT Image 7 окт. 2025 г., 12_48_32 1" data-node-id="78:441">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage720251248321} />
          </div>
        </div>
        <div className="absolute contents left-[calc(50%+10px)] top-[174px]" data-node-id="78:442">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[230px] left-[calc(50%+10px)] overflow-clip rounded-[40px] top-[247px] w-[275px]" data-node-id="78:443">
            <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[64.78%_11.64%_15.22%_11.64%] leading-[0.9] text-[25.311px] text-[color:var(--color-4,white)] text-center whitespace-pre-wrap" data-node-id="78:444" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              80% проектов — аутсорсинг
            </p>
          </div>
          <div className="absolute aspect-[1024/1024] flex items-center justify-center left-[53.21%] right-[32.29%] top-[174px]">
            <div className="-scale-y-100 flex-none rotate-180 size-[203px]">
              <div className="relative size-full" data-name="ChatGPT Image 7 окт. 2025 г., 12_51_29 1" data-node-id="78:445">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage720251251291} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[120px] top-[274px]" data-node-id="78:446">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[230px] left-[120px] overflow-clip rounded-[40px] top-[347px] w-[275px]" data-node-id="78:447">
            <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[67.83%_9.09%_18.26%_9.09%] leading-[0.9] text-[36.107px] text-[color:var(--color-4,white)] text-center" data-node-id="78:448" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              10 лет опыта
            </p>
          </div>
          <div className="-translate-x-1/2 absolute h-[199px] left-[calc(12.5%+81.5px)] top-[274px] w-[189px]" data-name="shutterstock_2474508323 [Converted]-01 2" data-node-id="78:449">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[96.48%] left-[-0.22%] max-w-none top-[3.52%] w-[100.45%]" src={imgShutterstock2474508323Converted012} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color,#1f556b)] h-[700px] overflow-clip relative shrink-0 w-full" data-name="21" data-node-id="78:521">
        <div className="absolute bg-[var(--color-4,white)] h-[230px] left-[120px] overflow-clip rounded-[40px] top-[156px] w-[373px]" data-node-id="78:522">
          <button
            type="button"
            onClick={onOpenFirstService}
            className="absolute border border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[50px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
            aria-label="Подробнее о бухгалтерском и налоговом консалтинге"
          >
            <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color,#1f556b)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Подробнее
            </p>
            <span className="absolute right-[5.4px] top-1/2 -translate-y-1/2 h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude1} />
            </span>
          </button>
          <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_46.38%_62.61%_6.97%] leading-[0.9] not-italic text-[22.706px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="78:524" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Бухгалтерский
            <br aria-hidden="true" />и налоговый консалтинг
          </p>
          <div className="absolute h-[79px] right-[27px] top-[22px] w-[73px]" data-name="ChatGPT-Image-7-окт_0002_Layer-3" data-node-id="78:529">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[133.33%] left-[-19.68%] max-w-none top-[-19.35%] w-[126.45%]" src={imgChatGptImage70002Layer3} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color-4,white)] h-[230px] left-[calc(16.67%+93.67px)] overflow-clip rounded-[40px] top-[407px] w-[373px]" data-node-id="78:530">
          <button
            type="button"
            onClick={onOpenThirdService}
            className="absolute border border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[50px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
            aria-label="Подробнее о юридических услугах"
          >
            <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color,#1f556b)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Подробнее
            </p>
            <span className="absolute right-[5.4px] top-1/2 -translate-y-1/2 h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude1} />
            </span>
          </button>
          <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_46.92%_71.3%_6.97%] leading-[0.9] not-italic text-[22.706px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="78:532" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Юридические услуги
          </p>
          <div className="absolute h-[70px] right-[26px] top-[22px] w-[76px]" data-name="ChatGPT-Image-7-окт_0003_Layer-4" data-node-id="78:537">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[141.08%] left-[-12%] max-w-none top-[-16.5%] w-[130.15%]" src={imgChatGptImage70003Layer4} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color-4,white)] h-[230px] left-[calc(33.33%+47.33px)] overflow-clip rounded-[40px] top-[156px] w-[373px]" data-node-id="78:538">
          <button
            type="button"
            onClick={onOpenSecondService}
            className="absolute border border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[50px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
            aria-label="Подробнее об аудите"
          >
            <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color,#1f556b)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Подробнее
            </p>
            <span className="absolute right-[5.4px] top-1/2 -translate-y-1/2 h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude1} />
            </span>
          </button>
          <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_47.45%_80%_6.97%] leading-[0.9] not-italic text-[22.706px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="78:540" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Аудит
          </p>
          <div className="absolute h-[92px] right-[26px] top-[22px] w-[85px]" data-name="ChatGPT-Image-7-окт_0001_Layer-2" data-node-id="78:545">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[105.12%] left-[-3.6%] max-w-none top-0 w-[125.48%]" src={imgChatGptImage70001Layer2} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color-4,white)] h-[230px] left-[calc(66.67%-25.33px)] overflow-clip rounded-[40px] top-[156px] w-[373px]" data-node-id="78:554">
          <button
            type="button"
            onClick={onOpenFourthService}
            className="absolute border border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[50px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
            aria-label="Подробнее об управленческом и финансовом консалтинге"
          >
            <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color,#1f556b)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Подробнее
            </p>
            <span className="absolute right-[5.4px] top-1/2 -translate-y-1/2 h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude1} />
            </span>
          </button>
          <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_41.29%_62.61%_6.97%] leading-[0.9] not-italic text-[22.706px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="78:556" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Управленческий
            <br aria-hidden="true" />и финансовый консалтинг
          </p>
          <div className="absolute h-[74px] right-[26px] top-[22px] w-[68px]" data-name="ChatGPT-Image-7-окт_0000_Layer-1" data-node-id="78:561">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[123.42%] left-[-3.42%] max-w-none top-[-13.61%] w-[110.96%]" src={imgChatGptImage70000Layer1} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color-4,white)] h-[230px] left-[calc(50%+21px)] overflow-clip rounded-[40px] top-[407px] w-[373px]" data-node-id="78:562">
          <button
            type="button"
            onClick={onOpenFifthService}
            className="absolute border border-[var(--color,#1f556b)] border-solid inset-[66.96%_6.97%_11.3%_6.97%] rounded-[50px] bg-transparent p-0 cursor-pointer group transition-colors duration-200 hover:bg-[var(--color,#1f556b)]"
            aria-label="Подробнее об управлении проектами"
          >
            <p className="absolute left-[7.5%] top-1/2 -translate-y-1/2 font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color,#1f556b)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-white" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Подробнее
            </p>
            <span className="absolute right-[5.4px] top-1/2 -translate-y-1/2 h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude1} />
            </span>
          </button>
          <p className="absolute font-['Geologica:Medium',sans-serif] font-medium inset-[11.3%_47.45%_71.3%_6.97%] leading-[0.9] not-italic text-[22.706px] text-[color:var(--color,#1f556b)] whitespace-pre-wrap" data-node-id="78:564" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Управление проектами
          </p>
          <div className="absolute h-[71px] right-[26px] top-[22px] w-[79px]" data-name="ChatGPT-Image-7-окт_0004_Layer-5" data-node-id="78:569">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[138.54%] left-[-28.74%] max-w-none top-[-15.28%] w-[130.24%]" src={imgChatGptImage70004Layer5} />
            </div>
          </div>
        </div>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(4.17%+61.67px)] not-italic text-[36.648px] text-[color:var(--color-4,white)] top-[calc(50%-287px)] uppercase" data-node-id="78:570" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Услуги
        </p>
      </div>
      <div className="bg-[var(--color-4,white)] h-[747px] overflow-clip relative shrink-0 w-full" data-name="22" data-node-id="78:571">
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(4.17%+66.67px)] not-italic text-[36.648px] text-[color:var(--color-3,#313131)] top-[calc(50%-310.5px)] uppercase" data-node-id="78:572" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Кейсы
        </p>
        <div className="absolute bg-[var(--color,#1f556b)] h-[258px] left-[120px] overflow-clip rounded-[38.689px] top-[154px] w-[373px]" data-node-id="78:573">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[54.314px] left-[25.48px] rounded-[36.299px] top-[177.48px] w-[321.312px]" data-node-id="78:574" />
          <button
            type="button"
            onClick={() => onOpenCasesByFilter('Сельское хозяйство')}
            className="absolute h-[54.314px] left-[25.48px] top-[177.48px] w-[321.312px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[36.299px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
            data-node-id="78:575"
          >
            <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[24.386px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Подробнее
            </span>
          </button>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[134.13px] not-italic text-[23.362px] text-[color:var(--color-4,white)] top-[93.38px] w-[212.854px]" data-node-id="78:576" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">Сельское хозяйство</p>
          </div>
          <div className="absolute h-[132.556px] left-[25.74px] top-[27.1px] w-[97.016px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_35_56 1" data-node-id="78:577">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[113.04%] left-[-27.23%] max-w-none top-[-6.52%] w-[154.46%]" src={imgChatGptImage1320251735561} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[257px] left-[120px] overflow-clip rounded-[38.689px] top-[431px] w-[373px]" data-node-id="78:578">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[54.314px] left-[25.48px] rounded-[36.299px] top-[177.48px] w-[321.312px]" data-node-id="78:579" />
          <button
            type="button"
            onClick={() => onOpenCasesByFilter('Финансы')}
            className="absolute h-[54.314px] left-[25.48px] top-[177.48px] w-[321.312px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[36.299px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
            data-node-id="78:580"
          >
            <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[24.386px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Подробнее
            </span>
          </button>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[134.13px] not-italic text-[23.362px] text-[color:var(--color-4,white)] top-[93.38px] w-[212.854px]" data-node-id="78:581" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none whitespace-pre-wrap">Некоммерческие организации</p>
          </div>
          <div className="absolute h-[127px] left-[25px] top-[27px] w-[97px]" data-name="ChatGPT Image 13 окт. 2025 г., 18_02_08 1" data-node-id="78:582">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-15.84%] max-w-none top-0 w-[131.68%]" src={imgChatGptImage1320251802081} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[258px] left-[calc(33.33%+46.33px)] overflow-clip rounded-[38.689px] top-[154px] w-[374px]" data-node-id="78:583">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[54.314px] left-[25.48px] rounded-[36.299px] top-[177.48px] w-[321.312px]" data-node-id="78:584" />
          <button
            type="button"
            onClick={() => onOpenCasesByFilter('Строительство')}
            className="absolute h-[54.314px] left-[25.48px] top-[177.48px] w-[321.312px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[36.299px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
            data-node-id="78:585"
          >
            <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[24.386px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Подробнее
            </span>
          </button>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[146.31px] not-italic text-[23.362px] text-[color:var(--color-4,white)] top-[94.07px] whitespace-nowrap" data-node-id="78:586" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none">Строительство</p>
          </div>
          <div className="absolute h-[124.49px] left-[25.73px] top-[27.1px] w-[107.156px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_37_29 1" data-node-id="78:587">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[111.39%] left-[-14.71%] max-w-none top-[-5.7%] w-[129.41%]" src={imgChatGptImage1320251737291} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[257px] left-[calc(33.33%+46.33px)] overflow-clip rounded-[38.689px] top-[431px] w-[374px]" data-node-id="78:588">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[54.314px] left-[25.48px] rounded-[36.299px] top-[177.48px] w-[321.312px]" data-node-id="78:589" />
          <button
            type="button"
            onClick={() => onOpenCasesByFilter('Разработка ПО')}
            className="absolute h-[54.314px] left-[25.48px] top-[177.48px] w-[321.312px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[36.299px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
            data-node-id="78:590"
          >
            <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[24.386px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Подробнее
            </span>
          </button>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[146.31px] not-italic text-[23.362px] text-[color:var(--color-4,white)] top-[94.07px] whitespace-nowrap" data-node-id="78:591" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none">Холдинги</p>
          </div>
          <div className="absolute h-[117px] left-[21px] top-[31px] w-[121px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_50_29" data-node-id="78:592">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage132025175029} />
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[258px] left-[calc(66.67%-26.33px)] overflow-clip rounded-[38.689px] top-[154px] w-[373px]" data-node-id="78:593">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[54.314px] left-[25.49px] rounded-[36.299px] top-[177.48px] w-[321.312px]" data-node-id="78:594" />
          <button
            type="button"
            onClick={() => onOpenCasesByFilter('HoReCa')}
            className="absolute h-[54.314px] left-[25.49px] top-[177.48px] w-[321.312px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[36.299px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
            data-node-id="78:595"
          >
            <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[24.386px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Подробнее
            </span>
          </button>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[146.32px] not-italic text-[23.362px] text-[color:var(--color-4,white)] top-[94.07px] whitespace-nowrap" data-node-id="78:596" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none">Торговля</p>
          </div>
          <div className="absolute h-[126.509px] left-[31.16px] top-[25.73px] w-[100.923px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_38_53 1" data-node-id="78:597">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[105.62%] left-[-16.2%] max-w-none top-[-2.81%] w-[132.39%]" src={imgChatGptImage1320251738531} />
            </div>
          </div>
        </div>
        <div className="absolute bg-[var(--color,#1f556b)] h-[257px] left-[calc(66.67%-26.33px)] overflow-clip rounded-[38.689px] top-[431px] w-[373px]" data-node-id="78:598">
          <div className="absolute bg-[var(--color-2,#44b1d2)] h-[54.314px] left-[25.49px] rounded-[36.299px] top-[177.48px] w-[321.312px]" data-node-id="78:599" />
          <button
            type="button"
            onClick={() => onOpenCasesByFilter('Финансы')}
            className="absolute h-[54.314px] left-[25.49px] top-[177.48px] w-[321.312px] border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-[36.299px] group transition-transform duration-200 ease-out hover:-translate-y-[1px] hover:scale-[1.02] active:translate-y-0 active:scale-[0.98] hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.22)] active:shadow-[inset_0_0_0_3px_rgba(255,255,255,0.3)]"
            data-node-id="78:600"
          >
            <span className="relative z-10 font-['Roboto:Medium',sans-serif] font-medium leading-none text-[24.386px] text-[color:var(--color-4,white)] text-center transition-colors duration-200 group-hover:text-[#eefaff] group-active:text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Подробнее
            </span>
          </button>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Geologica:Bold',sans-serif] font-bold justify-center leading-[0] left-[155px] not-italic text-[23.362px] text-[color:var(--color-4,white)] top-[94.07px] whitespace-nowrap" data-node-id="78:601" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            <p className="leading-none">Услуги</p>
          </div>
          <div className="absolute h-[117px] left-[25px] top-[30px] w-[118px]" data-name="ChatGPT Image 13 окт. 2025 г., 17_52_38" data-node-id="78:602">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage132025175238} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-2,#44b1d2)] h-[700px] overflow-clip relative shrink-0 w-full" data-name="23" data-node-id="78:603">
        <div className="absolute bg-[var(--color-4,white)] h-[471px] left-[120px] overflow-clip rounded-[40px] top-[151px] w-[373px]" data-node-id="78:604">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[471px] left-[calc(50%+135.5px)] opacity-15 top-1/2 w-[838px]" data-name="image 30" data-node-id="78:605">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
          </div>
          <button
            type="button"
            onClick={() => window.open('https://www.consultant.ru/document/cons_doc_LAW_27572/', '_blank', 'noopener,noreferrer')}
            className="absolute bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[83.86%_6.97%_5.52%_6.97%] rounded-[50px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
            data-node-id="78:606"
            aria-label="Перейти к закону"
          >
            <p className="absolute left-[25px] top-[14.8px] whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color-4,white)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Перейти к закону
            </p>
            <span className="absolute right-[5.4px] top-[5px] h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude1} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude} />
            </span>
          </button>
          <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[6.17%_38.34%_86.61%_6.97%] leading-[0.9] text-[19.22px] text-[color:var(--color-3,#313131)] whitespace-pre-wrap" data-node-id="78:607" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Федеральный закон от 19.06.2000 N 82-ФЗ
          </p>
          <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[0.9] left-[6.97%] not-italic right-[21.18%] text-[32.069px] text-[color:var(--color-3,#313131)] top-[calc(50%-49.5px)] whitespace-pre-wrap" data-node-id="78:612" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            О минимальном размере оплаты труда
          </p>
        </div>
        <div className="absolute bg-[var(--color-4,white)] h-[471px] left-[calc(66.67%-25.33px)] overflow-clip rounded-[40px] top-[151px] w-[373px]" data-node-id="78:613">
          <div className="absolute h-[471px] left-[-168px] opacity-15 top-0 w-[710px]" data-name="image 32" data-node-id="78:614">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage32} />
          </div>
          <button
            type="button"
            onClick={onOpenThirdArticle}
            className="absolute bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[83.86%_6.97%_5.52%_6.97%] rounded-[50px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
            data-node-id="78:615"
            aria-label="Читать статью"
          >
            <p className="absolute left-[25px] top-[14.8px] whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color-4,white)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Читать статью
            </p>
            <span className="absolute right-[5.4px] top-[5px] h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude1} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude} />
            </span>
          </button>
          <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[6.17%_66.49%_90.22%_6.97%] leading-[0.9] text-[19.22px] text-[color:var(--color-3,#313131)]" data-node-id="78:616" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            27.11.2025
          </p>
          <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[0.9] left-[6.97%] not-italic right-[6.97%] text-[32.069px] text-[color:var(--color-3,#313131)] top-[calc(50%-49.5px)] whitespace-pre-wrap" data-node-id="78:621" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Оптимизация налоговой нагрузки компании
          </p>
        </div>
        <div className="absolute bg-[var(--color-4,white)] h-[225px] left-[calc(33.33%+47.33px)] overflow-clip rounded-[40px] top-[151px] w-[373px]" data-node-id="78:622">
          <div className="-translate-x-1/2 absolute h-[236px] left-[calc(50%-0.5px)] opacity-15 top-[-5px] w-[374px]" data-name="image 31" data-node-id="78:623">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
          </div>
          <button
            type="button"
            onClick={onOpenFirstArticle}
            className="absolute bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[66.22%_6.97%_11.56%_6.97%] rounded-[50px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
            data-node-id="78:624"
            aria-label="Подробнее"
          >
            <p className="absolute left-[25px] top-[14.8px] whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color-4,white)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Подробнее
            </p>
            <span className="absolute right-[5.4px] top-[5px] h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude1} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude} />
            </span>
          </button>
          <p className="-translate-x-1/2 absolute font-['Geologica:Regular',sans-serif] font-normal leading-[0.9] left-1/2 not-italic text-[27.654px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-61.5px)] w-[209px] whitespace-pre-wrap" data-node-id="78:629" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Бухгалтерия на аутсорсинге
          </p>
        </div>
        <div className="absolute bg-[var(--color-4,white)] h-[225px] left-[calc(33.33%+47.33px)] overflow-clip rounded-[40px] top-[397px] w-[373px]" data-node-id="78:630">
          <div className="-translate-x-1/2 absolute h-[236px] left-[calc(50%-0.5px)] opacity-15 top-[-5px] w-[374px]" data-name="image 31" data-node-id="78:631">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage33} />
          </div>
          <button
            type="button"
            onClick={onOpenSecondArticle}
            className="absolute bg-[var(--color-3,#313131)] border border-[var(--color-3,#313131)] inset-[66.22%_6.97%_11.56%_6.97%] rounded-[50px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
            data-node-id="78:632"
            aria-label="Подробнее"
          >
            <p className="absolute left-[25px] top-[14.8px] whitespace-nowrap font-['Geologica:ExtraLight',sans-serif] font-extralight leading-[0.9] not-italic text-[22.421px] text-[color:var(--color-4,white)] tracking-[0.4484px] transition-colors duration-200 group-hover:text-[var(--color-3,#313131)]" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
              Подробнее
            </p>
            <span className="absolute right-[5.4px] top-[5px] h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full opacity-100 transition-opacity duration-200 group-hover:opacity-0" src={imgExclude1} />
              <img alt="" className="absolute block max-w-none size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" src={imgExclude} />
            </span>
          </button>
          <p className="-translate-x-1/2 absolute font-['Geologica:Regular',sans-serif] font-normal leading-[0.9] left-1/2 not-italic text-[27.654px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-77.51px)] w-[285.437px] whitespace-pre-wrap" data-node-id="78:637" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
            Субсидиарная ответственность: мифы и реальность
          </p>
        </div>
        <p className="absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(16.67%-113.33px)] not-italic text-[36.648px] text-[color:var(--color-4,white)] top-[calc(50%-290px)] uppercase" data-node-id="78:638" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Новости и статьи
        </p>
      </div>
      <div id="home-contact-section" className="bg-white h-[570px] overflow-clip relative shrink-0 w-full" data-name="19" data-node-id="78:450">
        <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%+0.5px)] not-italic text-[36.648px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-176px)] uppercase" data-node-id="78:451" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
          Напишите нам
        </p>
        <form
          className="absolute inset-0"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Имя"
            className="absolute border border-[var(--color-3,#313131)] border-solid inset-[34.74%_52.14%_56.49%_12.86%] rounded-[50px] bg-transparent px-[36px] font-['Roboto:ExtraLight',sans-serif] text-[22.421px] leading-[0.9] tracking-[0.4484px] text-[color:var(--color-3,#313131)] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Телефон"
            className="absolute border border-[var(--color-3,#313131)] border-solid inset-[47.19%_52.14%_44.04%_12.86%] rounded-[50px] bg-transparent px-[36px] font-['Roboto:ExtraLight',sans-serif] text-[22.421px] leading-[0.9] tracking-[0.4484px] text-[color:var(--color-3,#313131)] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            className="absolute border border-[var(--color-3,#313131)] border-solid inset-[59.65%_52.14%_31.58%_12.86%] rounded-[50px] bg-transparent px-[36px] font-['Roboto:ExtraLight',sans-serif] text-[22.421px] leading-[0.9] tracking-[0.4484px] text-[color:var(--color-3,#313131)] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          />
          <textarea
            name="message"
            placeholder="Комментарий"
            className="absolute border border-[var(--color-3,#313131)] border-solid inset-[34.74%_12.86%_19.12%_49.29%] rounded-[25px] bg-transparent px-[24px] py-[18px] resize-none font-['Roboto:ExtraLight',sans-serif] text-[22.421px] leading-[0.9] tracking-[0.4484px] text-[color:var(--color-3,#313131)] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          />
          <button
            type="submit"
            className="absolute bg-[var(--color-5,#a9c35c)] border border-[var(--color-5,#a9c35c)] inset-[72.11%_52.14%_19.12%_12.86%] rounded-[50px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
          >
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-['Roboto:Medium',sans-serif] font-medium leading-[0.9] text-[22.421px] tracking-[0.4484px] text-[color:var(--color-3,#313131)] transition-colors duration-200 group-hover:text-[var(--color-5,#a9c35c)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
              Отправить
            </p>
            <span className="absolute right-[5.4px] top-[5px] h-[39.581px] w-[39.581px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgExclude2} />
            </span>
          </button>
        </form>
        <p className="absolute bottom-[63.68%] font-['Roboto:Black',sans-serif] font-black leading-[0.9] left-[calc(4.17%+121.67px)] text-[22.421px] text-[color:var(--color-2,#44b1d2)] top-[32.81%] tracking-[0.4484px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          *
        </p>
        <p className="absolute bottom-[51.23%] font-['Roboto:Black',sans-serif] font-black leading-[0.9] left-[calc(4.17%+121.67px)] text-[22.421px] text-[color:var(--color-2,#44b1d2)] top-[45.26%] tracking-[0.4484px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          *
        </p>
        <p className="absolute bottom-[38.77%] font-['Roboto:Black',sans-serif] font-black leading-[0.9] left-[calc(4.17%+121.67px)] text-[22.421px] text-[color:var(--color-2,#44b1d2)] top-[57.72%] tracking-[0.4484px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          *
        </p>
        <p className="absolute bottom-[13.86%] font-['Roboto:Regular',sans-serif] font-normal leading-[0.9] left-[calc(4.17%+121.67px)] text-[22.421px] text-[color:var(--color-2,#44b1d2)] top-[82.63%] tracking-[0.4484px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          *
        </p>
        <p className="absolute bottom-[14.91%] font-['Roboto:Regular',sans-serif] font-normal leading-[0.9] left-[calc(20.83%-95.67px)] text-[14px] text-[color:var(--color-3,#313131)] top-[82.81%] tracking-[0.28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          — Поля обязательные для заполнения
        </p>
        <div className="absolute h-[101px] left-[calc(83.33%-15.67px)] top-[149px] w-[139px]" data-name="3d-rendered-silver-envelope-icon-symbol-shiny-metallic-email-illustration-isolated-on-transparent-background-for-messaging-and-communication-design-png 1" data-node-id="78:469">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[152.09%] left-[-28.33%] max-w-none top-[-27.38%] w-[166.67%]" src={img3DRenderedSilverEnvelopeIconSymbolShinyMetallicEmailIllustrationIsolatedOnTransparentBackgroundForMessagingAndCommunicationDesignPng1} />
          </div>
        </div>
      </div>
      <SharedFooter onNavigate={onNavigate} />
          </div>
        </div>
      </div>
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1f556b]/35 px-4">
          <div className="relative w-full max-w-[620px] rounded-[32px] border-2 border-[var(--color,#1f556b)] bg-white p-8 shadow-[0_20px_55px_rgba(31,85,107,0.22)]">
            <button
              type="button"
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute right-5 top-5 h-9 w-9 rounded-full border border-[var(--color,#1f556b)] bg-transparent text-[var(--color,#1f556b)] text-xl leading-none cursor-pointer transition-colors duration-200 hover:bg-[var(--color,#1f556b)] hover:text-white"
              aria-label="Закрыть форму"
            >
              ×
            </button>
            <p className="m-0 pr-12 font-['Geologica:Medium',sans-serif] text-[30px] leading-[1.05] uppercase text-[var(--color,#1f556b)]">
              Запись на консультацию
            </p>
            <p className="mb-0 mt-3 font-['Roboto:Regular',sans-serif] text-[18px] text-[#4f4f4f]">
              Оставьте контакты и мы свяжемся с вами в ближайшее время.
            </p>
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                setIsConsultationModalOpen(false);
              }}
            >
              <input
                type="text"
                required
                placeholder="Имя"
                className="h-[54px] rounded-[30px] border border-[#97b6c2] px-5 font-['Roboto:Regular',sans-serif] text-[18px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <input
                type="tel"
                required
                placeholder="Телефон"
                className="h-[54px] rounded-[30px] border border-[#97b6c2] px-5 font-['Roboto:Regular',sans-serif] text-[18px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="h-[54px] rounded-[30px] border border-[#97b6c2] px-5 font-['Roboto:Regular',sans-serif] text-[18px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <textarea
                rows={4}
                placeholder="Комментарий"
                className="resize-none rounded-[24px] border border-[#97b6c2] px-5 py-3 font-['Roboto:Regular',sans-serif] text-[18px] text-[var(--color,#1f556b)] outline-none transition-colors focus:border-[var(--color,#1f556b)]"
              />
              <button
                type="submit"
                className="mt-1 h-[56px] rounded-[30px] border border-[var(--color,#1f556b)] bg-[var(--color,#1f556b)] font-['Geologica:Medium',sans-serif] text-[20px] uppercase tracking-[0.02em] text-white cursor-pointer transition-colors duration-200 hover:bg-white hover:text-[var(--color,#1f556b)]"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
