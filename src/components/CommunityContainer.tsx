import { useMemo } from "react";
import PropTypes from "prop-types";

const CommunityContainer = ({ className = "", propAlignSelf, propWidth }) => {
  const communityContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-text-ui-white-100 font-body-body-2-body-2-bold ${className}`}
      style={communityContainerStyle}
    >
      <div className="w-[380px] flex flex-col items-start justify-start gap-[21px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit font-black font-inherit inline-block min-h-[130px] z-[5] mq450:text-10xl mq1050:text-19xl">
          <p className="m-0">Strongest Web3</p>
          <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Community
          </p>
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] rounded-xl [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] overflow-hidden flex flex-row items-start justify-start gap-[10px] z-[5]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/telegramsvgrepocom-1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="flex flex-row items-start justify-start py-0 px-0">
                <b className="relative text-sm tracking-[0.25px] leading-[20px] inline-block font-body-body-2-body-2-bold text-text-ui-white-100 text-left min-w-[95px] shrink-0">
                  Join Telegram
                </b>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

CommunityContainer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default CommunityContainer;
