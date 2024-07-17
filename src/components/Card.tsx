import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({ className = "", propTop, propLeft }) => {
  const cardStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`absolute top-[5053px] left-[249px] [backdrop-filter:blur(300px)] rounded-29xl box-border w-[304px] flex flex-col items-start justify-start min-w-[304px] z-[4] text-left text-base text-text-ui-white-100 font-body-body-2-body-2-bold border-[1px] border-solid border-gradient-stroke ${className}`}
      style={cardStyle}
    >
      <img
        className="self-stretch h-[171px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/image-94@2x.png"
      />
      <div className="self-stretch [backdrop-filter:blur(300px)] rounded-t-none rounded-b-xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] flex flex-col items-start justify-start py-4 px-5 gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <b className="self-stretch relative leading-[18.89px] inline-block min-h-[66px]">
            LYNC teamed up with Astar Network to effortlessly bring the next
            billion gamers into Web3 🎮
          </b>
          <b className="self-stretch h-[76px] relative text-sm leading-[16.67px] inline-block text-text-ui-gray-75 min-h-[76px]">
            LYNC joins forces with Astar Network to allow game developers and
            studios to launch games in just a few minutes using LYNC’s SDK and
            infrastructure.
          </b>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-3.5 bg-text-ui-white-100 rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
          <b className="relative text-3xs inline-block font-body-body-2-body-2-bold text-text-ui-gray text-left min-w-[51px]">
            Read more
          </b>
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Card;
