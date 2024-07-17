import PropTypes from "prop-types";

const DocsCard = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2309px] left-[348px] rounded-[32.24px] box-border w-[738px] h-[327px] overflow-hidden z-[6] text-left text-base text-text-ui-gray-75 font-body-body-2-body-2-bold border-[1px] border-solid border-text-ui-white-100 ${className}`}
    >
      <b className="absolute top-[121px] left-[29px] leading-[18.89px] flex items-center w-[329px] min-h-[44px] z-[1]">
        Unleash Your Potential - Explore the Knowledge Hub Today!
      </b>
      <h2 className="m-0 absolute top-[31.2px] left-[29.2px] text-5xl leading-[27.78px] font-bold font-inherit text-text-ui-white-100 flex items-center w-[271px] min-h-[64px] z-[1] mq450:text-lgi">
        Elevate Your Gameplay with Essential Insights!
      </h2>
      <div className="absolute top-[83px] left-[-75px] w-[558.6px] h-[651.7px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-contain mix-blend-normal"
          alt=""
          src="/bg-gradient@2x.png"
        />
        <button className="cursor-pointer [border:none] py-[8.1px] px-3.5 bg-text-ui-white-100 absolute top-[118.2px] left-[104.2px] rounded-[20.15px] w-[103.8px] overflow-hidden flex flex-row items-center justify-center box-border gap-[4px] z-[1]">
          <div className="h-[20.1px] flex-1 relative">
            <b className="absolute top-[0%] left-[2.89%] text-mini-1 tracking-[0.25px] leading-[21px] inline-block font-body-body-2-body-2-bold text-gray-100 text-center min-w-[72px]">
              View Docs
            </b>
          </div>
          <img
            className="h-[24.2px] w-[24.2px] relative hidden"
            alt=""
            src="/arrow-alt-lright-alt.svg"
          />
        </button>
      </div>
      <img
        className="absolute top-[2.2px] left-[433px] w-[311.7px] h-[311.7px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/httpslottiefilescomanimationsgamerzejqvj6nm1@2x.png"
      />
    </div>
  );
};

DocsCard.propTypes = {
  className: PropTypes.string,
};

export default DocsCard;
