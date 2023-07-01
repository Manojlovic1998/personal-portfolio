/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "rgb(var(--color-text-inverted) / <alpha-value>)",
          "base-dark": "rgb(var(--color-text-base-dark) / <alpha-value>)",
          "muted-dark": "rgb(var(--color-text-muted-dark) / <alpha-value>)",
        },
        burger: {
          light:
            "rgb(var(--color-fill-navigation-burger-light) / <alpha-value>)",
          dark: "rgb(var(--color-fill-navigation-burgerk-dark) / <alpha-value>)",
        },
      },
      backgroundColor: {
        chip: {
          primary: "rgb(var(--color-fill-chip-primary)/ <alpha-value>)",
        },
        navigation: {
          primary: "rgb(var(--color-fill-navigation-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-fill-navigation-primary-dark) / <alpha-value>)",
        },
        "nav-link": {
          active: "rgb(var(--color-fill-nav-link-active) / <alpha-value>)",
        },
        "toggle-btn": {
          active: "rgb(var(--color-fill-toggle-btn-active) / <alpha-value>)",
        },
        button: {
          primary: "rgb(var(--color-fill-btn-primary) / <alpha-value>)",
        },
        input: {
          primary: "rgb(var(--color-fill-input) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-border-fill-input-dark) / <alpha-value>)",
        },
        page: {
          lignt: "rgb(var(--color-fill-page-light) / <alpha-value>)",
          dark: "rgb(var(--color-fill-page-dark) / <alpha-value>)",
        },
      },
      borderColor: {
        navigation: {
          primary:
            "rgb(var(--color-border-fill-navigation-primary) / <alpha-value>)",
          muted:
            "rgb(var(--color-border-fill-navigation-muted) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-border-fill-navigation-primary-dark) / <alpha-value>)",
        },
        footer: {
          primary: "rgb(var(--color-border-fill-footer) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-border-fill-footer-dark) / <alpha-value>)",
        },
        input: {
          primary: "rgb(var(--color-border-fill-input) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-border-fill-input-dark) / <alpha-value>)",
        },
      },
      boxShadow: {
        navigation: "var(--shadow-navigation-primary)",
        input: "var(--shadow-input-field)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
