const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      // "luxury"
      {
        mytheme: {
          primary: "#01755c",
          secondary: "#04c498",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#94dde0",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

module.exports = config
