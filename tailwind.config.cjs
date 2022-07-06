module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      // lg: "1440px",
      lg: "1200px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        // lg: "15px", // Might be good?
      },
    },
    fontFamily: {
      sans: ['"Space Grotesk"', 'sans-serif']
    },
    // fontFamily: {
    //   body: ["Space Grotesk", "sans-serif"],
    //   header: ["Space Grotesk", "sans-serif"],
    // },
    // fontSize: {
    //   menu: ["15px", "1.7em"],
    //   body: ["18px", "1.7em"],
    //   h1: 
    //   header: ["24px", "1.7em"],
    //   title: ["20px", "1.7em"],
    //   caption: ["12px", "1.7em"],
    // },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#ffffff",
        darker: "#F5F5FB",
        dark: "#DCDCE1"
      },
      black: "#000000",
      blue: {
        dark: '#232C3B',
        DEFAULT: '#3A465A',
        lighter: '#445064',
        light: '#A2BBCF',
      },
      green: {
        lighter: '#466064',
        DEFAULT: '#324C50',
      }
    },
    extend: {
      fontSize: {
        splash: ['2.125rem', '3.25rem']
      },
    },
  },
  safelist: [
    'text-white',
    'text-blue',
    'bg-blue',
    'bg-blue-lighter',
    'bg-white',
    'bg-white-darker',
    'bg-green',
    'bg-green-lighter',
    'outline-2',
    'delay-[100ms]',
    'delay-[200ms]',
  ]
};
