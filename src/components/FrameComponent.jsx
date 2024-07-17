import { memo } from "react";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const FrameComponent = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2756px] left-[352px] w-[734px] h-[329px] overflow-hidden z-[2] text-left text-base text-text-ui-gray-75 font-body-body-2-body-2-bold ${className}`}
    >
      <img
        className="absolute top-[33.5px] left-[421.6px] w-[345.6px] h-[354.8px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/httpslottiefilescomanimationscryptowalletyqvwzv1l981@2x.png"
      />
      <FrameComponent1
        projectsHaveDownloadedInt={`Projects have downloaded & integrated LYNC SDKs`}
        firstEmpty="200+"
      />
      <FrameComponent1
        projectsHaveDownloadedInt="Contracts have been deployed via LYNC"
        firstEmpty="8000+"
        propTop="175px"
      />
      <div className="absolute h-full top-[0px] bottom-[0px] left-[281px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[453px] border-[1px] border-solid border-gradient-stroke">
        <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-full h-full hidden border-[1px] border-solid border-gradient-stroke" />
        <b className="absolute top-[64px] left-[18px] leading-[18.89px] flex items-center w-[168px] min-h-[44px] z-[3]">
          User ops created in 10 hours
        </b>
        <div className="absolute top-[13px] left-[18px] text-19xl font-black text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[158px] z-[4] mq450:text-4xl mq900:text-11xl">
          50000+
        </div>
      </div>
    </div>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
