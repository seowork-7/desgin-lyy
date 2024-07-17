import PropTypes from "prop-types";

const BGPattern1 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[175px] left-[199px] w-[1042.3px] h-[445px] z-[2] text-center text-sm text-text-ui-white-100 font-body-body-2-body-2-bold ${className}`}
    >
      <div className="absolute top-[-0.01px] left-[701.3px] rounded-[18.63px] bg-bg-ui-dark-blue box-border w-[314.4px] h-[316.2px] [transform:_rotate(48.4deg)] [transform-origin:0_0] border-[1.4px] border-solid border-darkblue" />
      <div className="absolute top-[337.6px] left-[825px] rounded-[7.64px] bg-bg-ui-dark-blue box-border w-[128.8px] h-[129.6px] [transform:_rotate(-42.4deg)] [transform-origin:0_0] z-[1] border-[0.6px] border-solid border-darkblue" />
      <div className="absolute top-[135.2px] left-[859.9px] rounded-[7.64px] bg-bg-ui-dark-blue box-border w-[128.8px] h-[129.6px] [transform:_rotate(-42.4deg)] [transform-origin:0_0] z-[1] border-[0.6px] border-solid border-darkblue" />
      <div className="absolute top-[205.42px] left-[551px] rounded-[18.63px] bg-bg-ui-dark-blue box-border w-[303.6px] h-[305.4px] [transform:_rotate(131.6deg)] [transform-origin:0_0] z-[1] border-[1.4px] border-solid border-darkblue" />
      <div className="absolute top-[421.15px] left-[118.8px] rounded-[7.64px] bg-bg-ui-dark-blue box-border w-[124.4px] h-[125.1px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] z-[2] border-[0.6px] border-solid border-darkblue" />
      <div className="absolute top-[226.95px] left-[91.9px] rounded-[7.64px] bg-bg-ui-dark-blue box-border w-[124.4px] h-[125.1px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] z-[2] border-[0.6px] border-solid border-darkblue" />
      <div className="absolute top-[329px] left-[535px] [backdrop-filter:blur(300px)] w-[148px] flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[8px] z-[3] text-left">
        <div className="h-5 w-[71px] relative">
          <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px] inline-block min-w-[71px] w-full h-full">
            View Docs
          </b>
        </div>
        <img
          className="h-6 w-6 relative"
          alt=""
          src="/arrow-alt-lright-alt2.svg"
        />
      </div>
      <button className="cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] absolute top-[333px] left-[375px] rounded-xl [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] w-[148px] overflow-hidden flex flex-row items-center justify-between box-border gap-[0px] [row-gap:20px] z-[3]">
        <div className="h-5 w-24 relative">
          <b className="absolute top-[0%] left-[0%] text-sm tracking-[0.25px] leading-[20px] inline-block font-body-body-2-body-2-bold text-text-ui-white-100 text-left min-w-[76px] whitespace-nowrap">
            Get started
          </b>
        </div>
        <img
          className="h-6 w-6 relative"
          alt=""
          src="/arrow-alt-lright-alt-3.svg"
        />
      </button>
      <h1 className="m-0 absolute top-[49px] left-[149px] text-49xl leading-[135.42%] font-black font-inherit inline-block w-[744px] z-[3] mq450:text-22xl mq450:leading-[55px] mq900:text-35xl mq900:leading-[74px]">
        <p className="m-0">Launch Your Game</p>
        <p className="m-0">
          <span>{`on `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Web 3.0
          </span>
          <span className="text-text-ui-white-100"> in Minutes</span>
        </p>
      </h1>
      <b className="absolute top-[249px] left-[149px] text-lg inline-block text-text-ui-white-60 w-[744px] h-16 z-[3]">
        We help game developers to launch their game on Web 3.0, by keeping
        blockchain complexities aside with WebWorld SDKs!
      </b>
    </section>
  );
};

BGPattern1.propTypes = {
  className: PropTypes.string,
};

export default BGPattern1;
