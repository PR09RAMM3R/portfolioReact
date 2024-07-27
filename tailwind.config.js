/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.{html,js}",
  ],
  theme: {
    colors: {
      gray: "#ABB2BF",
      blue: "#C778DD",
      white: "#FFFFFF",
      background: "#282C33",
      hoverBackground: "rgba(199, 120, 221, 0.20)",
      hoverBackgroundS: "rgba(171, 178, 191, 0.20);",
    },
    height: {
      20: "20%",
      65: "65%",
      15: "15px",
      50: "50px",
      60: "60px",
      100: "100%",
      screen: "100vh",
      sidebarH: "40vh",
      fit: "fit-content",
    },
    width: {
      30: "30%",
      40: "40%",
      45: "45%",
      50: "50%",
      55: "55%",
      60: "60%",
      70: "70%",
      80: "80%",
      15: "15px",
      100: "100%",
      180: "180px",
      340: "340px",
      350: "350px",
      260: "260px",
      halfs: "50vh",
      hundredp: "100px",
      fit: "fit-content",
    },
    padding: {
      5: "5px",
      8: "8px",
      16: "16px",
      20: "20px",
      32: "32px",
      150: "150px",
    },
    margin: {
      8: "8px",
      16: "16px",
      20: "20px",
      30: "30px",
      40: "40px",
      32: "32px",
      50: "50px",
      60: "60px",
      70: "70px",
      80: "80px",
      100: "100px",
      120: "120px",
      150: "150px",
    },
    gap: {
      5: "5px",
      8: "8px",
      16: "16px",
      24: "24px",
      30: "30px",
    },
    transitionDuration: {
      1: '.5s'
    }
  }
}

