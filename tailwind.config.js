/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "txt": "var(--text)",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "calendar": {
          "title": "var(--calendar-title)",
          "bg": "var(--calendar-bg)",
          "box": {
            "default": "var(--calendar-box)",
            "saturday": "var(--calendar-box-saturday)",
            "sunday": "var(--calendar-box-sunday)",
            "selected": "var( --calendar-box-selected)"
          },
          "day": {
            "default": "var(--calendar-day)",
            "saturday": "var(--calendar-saturday)",
            "sunday": "var(--calendar-sunday)"
          },
          "number": {
            "default": "var(--calendar-number)",
            "selected": "var(--calendar-number-selected)",
            "saturday": "var(--calendar-saturday-number)",
            "sunday": "var(--calendar-sunday-number)"
          },

        }
      },
      minHeight: {
        '8vmin': '8vmin',
      },
      dropShadow: {
        'p3': [
          '1px 0 0 var(--shadow)',
          '1px 0 0 var(--shadow)',
          '1px 0 0 var(--shadow)',
          '0 1px 0 var(--shadow)',
          '0 1px 0 var(--shadow)',
          '0 1px 0 var(--shadow)',
          '0 -1px 0 var(--shadow)',
          '0 -1px 0 var(--shadow)',
          '0 -1px 0 var(--shadow)',
          '-1px 0 0 var(--shadow)',
          '-1px 0 0 var(--shadow)',
          '-1px 0 0 var(--shadow)',

        ]
      },
      fontFamily: {
        'persona3': 'Noto Sans JP'
      }
    },
  },
  plugins: [],
};