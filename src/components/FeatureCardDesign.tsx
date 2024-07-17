import PropTypes from "prop-types";

const FeatureCardDesign = ({ className = "" }) => {
  return (
    <div
      className={`h-[404px] rounded-xl [background:linear-gradient(180deg,_rgba(2,_6,_23,_0)_51.36%,_rgba(2,_6,_23,_0.8)_80.37%)] overflow-hidden flex flex-col items-start justify-start py-[45px] px-[22px] box-border gap-[25px] min-w-[304px] z-[7] text-left text-5xl text-text-ui-white-100 font-body-body-2-body-2-bold mq450:pt-[29px] mq450:pb-[29px] mq450:box-border ${className}`}
    >
      <img
        className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-24@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
        <h2 className="m-0 w-[214.2px] h-8 relative text-inherit font-black font-inherit flex items-center mq450:text-lgi">
          LYNC Wallet SDK
        </h2>
        <div className="self-stretch h-[76px] relative text-sm leading-[16.67px] text-text-ui-gray-75 flex items-center min-h-[76px]">
          <span>
            <p className="m-0">Empowering developers to integrate</p>
            <p className="m-0">account abstraction in their game,</p>
            <p className="m-0">dapp, metaverse and more in</p>
            <p className="m-0">minutes.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

FeatureCardDesign.propTypes = {
  className: PropTypes.string,
};

export default FeatureCardDesign;
