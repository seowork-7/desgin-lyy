import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  projectsHaveDownloadedInt,
  firstEmpty,
  propTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[2px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[265px] h-[153px] text-left text-base text-text-ui-gray-75 font-body-body-2-body-2-bold border-[1px] border-solid border-gradient-stroke ${className}`}
      style={frameDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-full h-full hidden border-[1px] border-solid border-gradient-stroke" />
      <b className="absolute top-[63px] left-[20px] leading-[18.89px] flex items-center w-[216px] min-h-[44px] z-[3]">
        {projectsHaveDownloadedInt}
      </b>
      <div className="absolute top-[11px] left-[20px] text-19xl font-black text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[111px] z-[3] mq450:text-4xl mq900:text-11xl">
        {firstEmpty}
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  projectsHaveDownloadedInt: PropTypes.string,
  firstEmpty: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default FrameComponent1;
