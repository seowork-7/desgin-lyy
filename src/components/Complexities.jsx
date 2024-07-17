import { memo } from "react";
import FeatureCardDesign from "./FeatureCardDesign";
import ExpandRightReviewCard from "./ExpandRightReviewCard";
import CommunityContainer from "./CommunityContainer";
import PropTypes from "prop-types";

const Complexities = memo(({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[255px] max-w-full text-center text-5xl text-text-ui-white-100 font-body-body-2-body-2-bold lg:gap-[127px] mq450:gap-[32px] mq750:gap-[64px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-[268px] box-border max-w-full text-left lg:pl-[35px] lg:pr-[35px] lg:box-border mq750:pb-[113px] mq750:box-border mq1050:pb-[174px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[196px] max-w-full mq750:gap-[49px] mq1050:gap-[98px]">
          <div className="self-stretch grid flex-row items-start justify-start gap-[16px] grid-cols-[repeat(3,_minmax(228px,_1fr))] mq750:grid-cols-[minmax(228px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(228px,_395px))]">
            <FeatureCardDesign />
            <FeatureCardDesign />
            <FeatureCardDesign />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-29xl">
            <h1 className="m-0 w-[699px] relative text-inherit font-black font-inherit flex items-center shrink-0 min-h-[130px] max-w-full z-[2] mq450:text-10xl mq1050:text-19xl">
              <span className="w-full">
                <span>{`With LYNC, build on your `}</span>
                <span className="text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  favorite chain.
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[1064px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-text-ui-white-60">
        <h2 className="m-0 h-16 w-[638px] relative text-inherit leading-[27.78px] font-bold font-inherit inline-block shrink-0 min-h-[64px] max-w-full z-[2] mq450:text-lgi">
          Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights,
          Tips, and Innovations in Gaming SDKs!
        </h2>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[305.6px] box-border gap-[344px] max-w-full text-29xl lg:gap-[172px] lg:pb-[199px] lg:box-border mq450:gap-[43px] mq750:gap-[86px] mq750:pb-[129px] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
          <img
            className="h-12 w-12 rounded-13xl object-contain min-h-[48px] z-[4]"
            loading="lazy"
            alt=""
            src="/expand-right@2x.png"
          />
          <div className="h-12 w-12 [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border flex flex-row items-center justify-center z-[4] border-[1px] border-solid border-gradient-stroke">
            <img
              className="h-3 w-1.5 relative object-contain"
              loading="lazy"
              alt=""
              src="/vector-9.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
          <div className="w-[1065px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <h1 className="m-0 h-[65px] w-[699px] relative text-inherit font-black font-inherit flex items-center shrink-0 max-w-full z-[3] mq450:text-10xl mq1050:text-19xl">
              <span className="w-full">
                <span>{`Valuable `}</span>
                <span className="text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Reviews
                </span>
              </span>
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0.5 pl-0 gap-[16px] text-left text-base mq1050:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[131px] pb-0 pr-1.5 pl-0">
              <img
                className="w-12 h-12 rounded-13xl object-contain z-[3]"
                loading="lazy"
                alt=""
                src="/expand-right-1@2x.png"
              />
            </div>
            <ExpandRightReviewCard />
            <ExpandRightReviewCard
              propFlex="1"
              propMinWidth="198px"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propAlignSelf="unset"
            />
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border min-w-[200px]">
              <ExpandRightReviewCard
                propFlex="unset"
                propMinWidth="unset"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
                propWidth="unset"
                propAlignSelf="stretch"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[131px] px-0 pb-0">
              <div className="w-12 h-12 [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border flex flex-row items-center justify-center z-[3] border-[1px] border-solid border-gradient-stroke">
                <img
                  className="h-3 w-1.5 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/vector-9.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommunityContainer />
    </div>
  );
});

Complexities.propTypes = {
  className: PropTypes.string,
};

export default Complexities;
