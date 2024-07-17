import { memo } from "react";
import GameDev from "./GameDev";
import PropTypes from "prop-types";

const Footer = memo(({ className = "" }) => {
  return (
    <div
      className={`w-[1101px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-lg text-text-ui-white-100 font-body-body-2-body-2-bold mq1050:flex-wrap ${className}`}
    >
      <GameDev />
      <div className="w-[356px] flex flex-col items-end justify-start py-0 pr-[7px] pl-0 box-border gap-[54.1px] max-w-full mq450:gap-[27px]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="w-[293px] flex flex-row items-end justify-start gap-[32px] mq450:gap-[16px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[21px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4.9px]">
                  <b className="relative inline-block min-w-[67px] z-[5]">
                    Product
                  </b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8.7px] text-sm text-text-ui-gray-75">
                    <div className="h-6 relative font-medium flex items-center shrink-0 min-w-[38px] z-[5]">
                      SDK’s
                    </div>
                    <div className="h-[23px] relative font-medium flex items-center shrink-0 min-w-[86px] z-[5]">
                      Transfer API’s
                    </div>
                    <div className="h-6 relative font-medium flex items-center shrink-0 min-w-[73px] z-[5]">
                      Token API’s
                    </div>
                    <div className="h-6 relative font-medium flex items-center shrink-0 min-w-[61px] z-[5]">
                      NFT API’s
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4.9px] text-sm text-text-ui-gray-75">
                <b className="relative text-lg inline-block text-text-ui-white-100 min-w-[82px] z-[5]">
                  Company
                </b>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[4.2px]">
                  <div className="h-6 relative font-medium flex items-center min-w-[56px] z-[5]">
                    About us
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
                  <div className="h-[23px] relative font-medium flex items-center min-w-[56px] z-[5]">
                    Press Kit
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3.1px]">
                  <div className="h-6 relative font-medium flex items-center min-w-[51px] z-[5]">
                    Security
                  </div>
                </div>
                <div className="h-6 relative font-medium flex items-center shrink-0 min-w-[87px] z-[5]">
                  Privacy Policy
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4.9px]">
              <b className="relative inline-block min-w-[67px] z-[5]">
                Contact
              </b>
              <div className="flex flex-col items-start justify-start gap-[8.7px] text-sm text-text-ui-gray-75">
                <div className="h-6 relative font-medium flex items-center shrink-0 min-w-[35px] z-[5]">
                  Email
                </div>
                <div className="h-[23px] relative font-medium flex items-center shrink-0 min-w-[49px] z-[5]">
                  Discord
                </div>
                <div className="h-6 relative font-medium flex items-center shrink-0 min-w-[59px] z-[5]">
                  Telegram
                </div>
                <div className="h-6 relative font-medium flex items-center shrink-0 min-w-[34px] z-[5]">
                  Press
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className="w-[242px] relative text-sm inline-block text-text-ui-gray-75 text-center z-[3]">
          2024 LYNC World  · 
          <span className="[text-decoration:underline]">Terms of service</span>
        </b>
      </div>
      <div className="w-[303px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-5xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
          <div className="w-[267px] flex flex-col items-start justify-start gap-[7px]">
            <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[5] mq450:text-lgi">
              Supercharge your inbox
            </h2>
            <b className="w-[193px] relative text-base inline-block text-text-ui-gray-75 z-[5]">
              Sign up for our newsletter
            </b>
          </div>
          <div className="self-stretch [backdrop-filter:blur(237.63px)] rounded-[25.35px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] overflow-hidden flex flex-row items-start justify-start py-2 pr-[7px] pl-[11px] gap-[6.2px] z-[5] text-xs-1 text-text-ui-gray-75 border-[0.8px] border-solid border-gradient-stroke">
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <b className="self-stretch relative">enter you email address</b>
            </div>
            <button className="cursor-pointer [border:none] py-[9.5px] px-3 bg-[transparent] w-[121px] rounded-[25.35px] [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] flex flex-row items-start justify-start box-border min-w-[95.05px]">
              <b className="flex-1 relative text-sm font-body-body-2-body-2-bold text-text-ui-white-100 text-center">
                Submit
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
