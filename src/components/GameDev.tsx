import { useMemo } from "react";
import PropTypes from "prop-types";

const GameDev = ({ className = "", propPadding }) => {
  const gameDevStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex flex-col items-start justify-start pt-[54px] px-0 pb-0 text-left text-lg text-text-ui-white-100 font-body-body-2-body-2-bold ${className}`}
      style={gameDevStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
          <b className="relative z-[3]">A GameFi Infrastructure</b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="h-12 w-12 [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border flex flex-col items-center justify-center py-3 px-[11px] z-[3] border-[1px] border-solid border-gradient-stroke">
            <img
              className="w-6 h-[23px] relative"
              alt=""
              src="/social-icon.svg"
            />
          </div>
          <div className="h-12 w-12 [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border flex flex-col items-center justify-center py-3 px-[11px] z-[3] border-[1px] border-solid border-gradient-stroke">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/akariconsdiscordfill.svg"
            />
          </div>
          <div className="h-12 w-12 [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border flex flex-col items-center justify-center py-3 px-[11px] z-[3] border-[1px] border-solid border-gradient-stroke">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/akariconstwitterfill.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GameDev.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default GameDev;
