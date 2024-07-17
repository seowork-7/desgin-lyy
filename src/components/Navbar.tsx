import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[62px] left-[348px] [backdrop-filter:blur(250px)] rounded-29xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[744px] h-20 flex flex-row items-center justify-between py-2.5 px-5 gap-[20px] max-w-full z-[2] border-[1px] border-solid border-gradient-stroke ${className}`}
    >
      <img className="h-8 w-8 relative" loading="lazy" alt="" src="/menu.svg" />
      <div className="w-[127px] flex flex-row items-center justify-end py-2.5 px-3.5 box-border">
        <div className="h-[23px] w-[37.1px] relative">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [filter:blur(1.3px)] hidden">
            <img
              className="relative w-[23px] h-[23px]"
              alt=""
              src="/subtract.svg"
            />
            <img
              className="relative w-[23px] h-[23px] object-contain"
              alt=""
              src="/subtract-11@2x.png"
            />
          </div>
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="relative w-[22.9px] h-[23px]"
              alt=""
              src="/subtract-2.svg"
            />
            <img
              className="relative w-[23px] h-[23px] object-contain z-[1]"
              alt=""
              src="/subtract-31@2x.png"
            />
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2 px-3.5 bg-text-ui-white-100 w-[131px] rounded-xl overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-[4px]">
        <div className="h-5 flex-1 relative">
          <a className="[text-decoration:none] absolute top-[0%] left-[0%] text-sm tracking-[0.25px] leading-[20px] font-bold font-body-body-2-body-2-bold text-gray-100 text-left inline-block min-w-[76px] whitespace-nowrap w-full h-full">
            Get started
          </a>
        </div>
        <img
          className="h-6 w-6 relative"
          alt=""
          src="/arrow-alt-lright-alt-2.svg"
        />
      </button>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
