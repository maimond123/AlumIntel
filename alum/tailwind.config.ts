import type { Config } from "'tailwindcss'"

const config: Config = {
  content: [
    "'./pages/**/*.{js,ts,jsx,tsx,mdx}'",
    "'./components/**/*.{js,ts,jsx,tsx,mdx}'",
    "'./app/**/*.{js,ts,jsx,tsx,mdx}'",
  ],
  theme: {
    extend: {
      colors: {
        "'forest-green'": "'#228B22'",
        "'emerald-green'": "'#50C878'",
        "'golden-yellow'": "'#FFD700'",
        "'soft-white'": "'#F5F5F5'",
      },
    },
  },
  plugins: [],
}

export default config

