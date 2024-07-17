import { memo, useMemo } from "react";
import PropTypes from "prop-types";

const FeatureCardDesign1 = memo(({ className = "", propLeft, propTop }) => {
  const featureCardDesign2Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={`absolute top-[3285px] left-[248px] rounded-xl [background:linear-gradient(180deg,_rgba(2,_6,_23,_0)_51.36%,_rgba(2,_6,_23,_0.8)_80.37%)] w-[304px] h-[404px] overflow-hidden flex flex-col items-start justify-center py-[45px] px-[22px] box-border gap-[25px] min-w-[304px] z-[6] text-left text-5xl text-text-ui-white-100 font-body-body-2-body-2-bold ${className}`}
      style={featureCardDesign2Style}
    >
      <img
        className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-24@2x.png"
      />
      <div className="self-stretch h-[110px] relative">
        <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit font-black font-inherit flex items-center w-[214.2px] mq450:text-lgi">
          LYNC Wallet SDK
        </h2>
        <div className="absolute top-[34px] left-[0px] text-sm leading-[16.67px] text-text-ui-gray-75 flex items-center w-[260px] min-h-[76px]">
          <span className="w-full">
            <p className="m-0">Empowering developers to integrate</p>
            <p className="m-0">account abstraction in their game,</p>
            <p className="m-0">dapp, metaverse and more in</p>
            <p className="m-0">minutes.</p>
          </span>
        </div>
      </div>
    </div>
  );
});

FeatureCardDesign1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default FeatureCardDesign1;
