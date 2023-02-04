/* @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // content: ["./**/*.{html,js}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        emad: ["Cairo"],
      },
      backgroundImage: {
        pattern: "url('./assets/images/bg-sidebar-mobile.svg')",
        pattern_desktop: "url('./assets/images/bg-sidebar-desktop.svg')",
        check_mark: "url('./assets/images/icon-checkmark.svg')",
      },
    },
  },
  plugins: [],
};
