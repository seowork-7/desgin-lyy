/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-ui-dark-blue": "#020617",
        "gradient-stroke": "rgba(255, 255, 255, 0.21)",
        "text-ui-white-100": "#fff",
        "text-ui-gray-75": "#8d96b2",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
        "text-ui-white-60": "#daddd8",
        gray: {
          "100": "#0e0d0d",
          "200": "rgba(255, 255, 255, 0)",
        },
        darkblue: "#3f37c9",
        "text-ui-gray": "#343b4c",
      },
      spacing: {},
      fontFamily: {
        "body-body-2-body-2-bold": "Roboto",
        "label-label-bold": "Inter",
      },
      borderRadius: {
        "6xl-4": "25.4px",
        "13xl": "32px",
        xl: "20px",
        "5xl-1": "24.1px",
        "29xl": "48px",
        "109xl": "128px",
        "xs-1": "11.1px",
        "8xl": "27px",
        "13xl-2": "32.2px",
        "xl-2": "20.2px",
        "5xs-6": "7.6px",
        "lg-6": "18.6px",
      },
    },
    fontSize: {
      sm: "14px",
      "xs-1": "11.1px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "7xs": "6px",
      "61xl": "80px",
      "21xl": "40px",
      "3xs": "10px",
      "13xl": "32px",
      "7xl": "26px",
      "4xl": "23px",
      "11xl": "30px",
      "mini-1": "14.1px",
      "49xl": "68px",
      "22xl": "41px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
