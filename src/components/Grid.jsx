import { memo } from "react";
import PropTypes from "prop-types";

const Grid = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute top-[6944px] left-[-69px] w-[1579px] h-[4585px] mix-blend-overlay z-[2] text-center text-29xl text-text-ui-white-100 font-body-body-2-body-2-bold ${className}`}
    >
      <img
        className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[1495.9px]"
        alt=""
        src="/vertical-1.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-contain"
        alt=""
        src="/horizontal-1@2x.png"
      />
      <div className="absolute top-[452px] left-[157px] w-[1262px] h-[362px] z-[3] flex items-center justify-center">
        <img
          className="w-full h-full z-[3] object-contain absolute left-[0px] top-[0px] [transform:scale(2.381)]"
          alt=""
          src="/overlay-5.svg"
        />
      </div>
      <h1 className="m-0 absolute top-[378px] left-[439px] text-inherit font-black font-inherit flex items-center w-[699px] z-[3] mq450:text-10xl mq1050:text-19xl">
        <span className="w-full">
          <span>{`Our `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Believers and Partners
          </span>
        </span>
      </h1>
      <button className="cursor-pointer [border:none] py-2 px-3.5 bg-[transparent] absolute top-[1293px] left-[715px] rounded-xl [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] w-[148px] overflow-hidden flex flex-row items-center justify-between box-border gap-[0px] [row-gap:20px] z-[3]">
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
      <h1 className="m-0 absolute top-[1139px] left-[472px] text-inherit font-black font-inherit inline-block min-h-[130px] z-[3] mq450:text-10xl mq1050:text-19xl">
        <p className="m-0">Got a game idea ?</p>
        <p className="m-0">Let's make it big together !!!</p>
      </h1>
      <img
        className="absolute top-[1043px] left-[492px] w-[594.2px] h-[142px] z-[4]"
        loading="lazy"
        alt=""
        src="/lync-logo.svg"
      />
    </div>
  );
});

Grid.propTypes = {
  className: PropTypes.string,
};

export default Grid;
