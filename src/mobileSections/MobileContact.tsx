const img3DRenderedSilverEnvelopeIconSymbolShinyMetallicEmailIllustrationIsolatedOnTransparentBackgroundForMessagingAndCommunicationDesignPng1 = "/assets/99529a733eeb5b552be035c8cca8fe0182a35c67.png";
const imgExclude = "/assets/e38681f5ecbd1f392819aea92eb2583c57615e89.svg";

export default function MobileContact() {
  return (
    <div className="bg-[var(--color-4,white)] relative size-full" data-name="Mobile" data-node-id="83:1457">
      <p className="-translate-x-1/2 absolute font-['Geologica:Medium',sans-serif] font-medium leading-[1.1] left-[calc(50%-1px)] not-italic text-[60.78px] text-[color:var(--color-3,#313131)] text-center top-[calc(50%-362px)] uppercase" data-node-id="83:1458" style={{ fontVariationSettings: "\'CRSV\' 0, \'SHRP\' 0" }}>
        напишите нам
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
          className="absolute border-[1.528px] border-[var(--color-3,#313131)] border-solid inset-[36.56%_16.48%_58.66%_16.3%] rounded-[76.421px] bg-transparent px-[40px] font-['Roboto:ExtraLight',sans-serif] font-extralight leading-[0.9] text-[34.269px] text-[color:var(--color-3,#313131)] tracking-[0.6854px] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          style={{ fontVariationSettings: "\'wdth\' 100" }}
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Телефон"
          className="absolute border-[1.528px] border-[var(--color-3,#313131)] border-solid inset-[43.53%_16.48%_51.7%_16.3%] rounded-[76.421px] bg-transparent px-[40px] font-['Roboto:ExtraLight',sans-serif] font-extralight leading-[0.9] text-[34.269px] text-[color:var(--color-3,#313131)] tracking-[0.6854px] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          style={{ fontVariationSettings: "\'wdth\' 100" }}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail"
          className="absolute border-[1.528px] border-[var(--color-3,#313131)] border-solid inset-[50.49%_16.48%_44.73%_16.3%] rounded-[76.421px] bg-transparent px-[40px] font-['Roboto:ExtraLight',sans-serif] font-extralight leading-[0.9] text-[34.269px] text-[color:var(--color-3,#313131)] tracking-[0.6854px] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          style={{ fontVariationSettings: "\'wdth\' 100" }}
        />
        <textarea
          name="comment"
          placeholder="Комментарий"
          className="absolute border-[1.528px] border-[var(--color-3,#313131)] border-solid inset-[57.45%_16.48%_17.42%_16.3%] rounded-[38.211px] bg-transparent px-[40px] py-[24px] resize-none font-['Roboto:ExtraLight',sans-serif] font-extralight leading-[0.9] text-[34.269px] text-[color:var(--color-3,#313131)] tracking-[0.6854px] placeholder:opacity-25 placeholder:text-[color:var(--color-3,#313131)] outline-none"
          style={{ fontVariationSettings: "\'wdth\' 100" }}
        />
        <button
          type="submit"
          className="absolute bg-[var(--color-5,#a9c35c)] border-[1.528px] border-[var(--color-5,#a9c35c)] border-solid inset-[84.77%_16.48%_10.46%_16.3%] rounded-[76.421px] p-0 cursor-pointer group transition-colors duration-200 hover:bg-white"
        >
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Roboto:SemiBold',sans-serif] font-semibold leading-[0.9] text-[34.269px] text-[color:var(--color-3,#313131)] tracking-[0.6854px] m-0 transition-colors duration-200 group-hover:text-[var(--color-5,#a9c35c)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Отправить
          </p>
          <span className="absolute inset-[7.09%_1.05%_7.27%_89.52%]">
            <img alt="" className="absolute block max-w-none size-full" src={imgExclude} />
          </span>
        </button>
      </form>
      <div className="absolute h-[190px] left-[calc(25%+140px)] top-[168px] w-[261px]" data-name="3d-rendered-silver-envelope-icon-symbol-shiny-metallic-email-illustration-isolated-on-transparent-background-for-messaging-and-communication-design-png 1" data-node-id="83:1477">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[152.09%] left-[-28.33%] max-w-none top-[-27.38%] w-[166.67%]" src={img3DRenderedSilverEnvelopeIconSymbolShinyMetallicEmailIllustrationIsolatedOnTransparentBackgroundForMessagingAndCommunicationDesignPng1} />
        </div>
      </div>
    </div>
  );
}
