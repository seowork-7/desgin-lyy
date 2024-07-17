import PropTypes from "prop-types";

const BGPattern = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[171px] left-[-30px] w-[1510.4px] h-[644.8px] z-[2] text-center text-5xl text-text-ui-white-100 font-body-body-2-body-2-bold ${className}`}
    >
      <div className="absolute top-[-0.02px] left-[1016.32px] rounded-8xl bg-bg-ui-dark-blue box-border w-[455.5px] h-[458.2px] [transform:_rotate(48.4deg)] [transform-origin:0_0] border-[2px] border-solid border-darkblue" />
      <div className="absolute top-[489.22px] left-[1195.6px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[186.7px] h-[187.8px] [transform:_rotate(-42.4deg)] [transform-origin:0_0] z-[1] border-[0.8px] border-solid border-darkblue" />
      <div className="absolute top-[196.02px] left-[1246px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[186.7px] h-[187.8px] [transform:_rotate(-42.4deg)] [transform-origin:0_0] z-[1] border-[0.8px] border-solid border-darkblue" />
      <div className="absolute top-[297.73px] left-[798.5px] rounded-8xl bg-bg-ui-dark-blue box-border w-[439.9px] h-[442.5px] [transform:_rotate(131.6deg)] [transform-origin:0_0] z-[1] border-[2px] border-solid border-darkblue" />
      <div className="absolute top-[610.26px] left-[172.21px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[180.3px] h-[181.3px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] z-[2] border-[0.8px] border-solid border-darkblue" />
      <div className="absolute top-[328.96px] left-[133.21px] rounded-[11.06px] bg-bg-ui-dark-blue box-border w-[180.3px] h-[181.3px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] z-[2] border-[0.8px] border-solid border-darkblue" />
      <div className="absolute top-[439px] left-[765.9px] [backdrop-filter:blur(300px)] w-[162.6px] flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[8px] z-[3] text-left text-sm">
        <div className="h-5 w-[71px] relative">
          <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px] inline-block min-w-[71px] w-full h-full">
            View Docs
          </b>
        </div>
        <img
          className="h-6 w-6 relative"
          alt=""
          src="/arrow-alt-lright-alt1.svg"
        />
      </div>
      <button className="cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] absolute top-[443px] left-[590.1px] rounded-xl [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] w-[162.6px] overflow-hidden flex flex-row items-center justify-between box-border gap-[0px] [row-gap:20px] z-[3]">
        <div className="h-5 w-[110.6px] relative">
          <b className="absolute top-[0%] left-[0%] text-sm tracking-[0.25px] leading-[20px] inline-block font-body-body-2-body-2-bold text-text-ui-white-100 text-left min-w-[76px] whitespace-nowrap">
            Get started
          </b>
        </div>
        <img
          className="h-6 w-6 relative z-[1]"
          alt=""
          src="/arrow-alt-lright-alt-1.svg"
        />
      </button>
      <h1 className="m-0 absolute top-[127px] left-[278px] text-61xl font-black font-inherit inline-block w-[944px] min-h-[216px] z-[3] mq450:text-5xl mq1050:text-21xl">
        <p className="m-0">Launch Your Game</p>
        <p className="m-0">
          <span>{`on `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Web 3.0
          </span>
          <span className="text-text-ui-white-100"> in Minutes</span>
        </p>
      </h1>
      <h2 className="m-0 absolute top-[357px] left-[327.5px] text-inherit leading-[27.78px] font-bold font-inherit text-text-ui-white-60 inline-block w-[860.5px] h-16 min-h-[64px] z-[3] mq450:text-lgi">
        We help game developers to launch their game on Web 3.0, by keeping
        blockchain complexities aside with WebWorld SDKs!
      </h2>
      <h2 className="m-0 absolute top-[573px] left-[681px] text-inherit font-bold font-inherit text-text-ui-white-60 inline-block w-[142.3px] z-[3] mq450:text-lgi">
        Backed by
      </h2>
    </div>
  );
};

BGPattern.propTypes = {
  className: PropTypes.string,
};

export default BGPattern;
