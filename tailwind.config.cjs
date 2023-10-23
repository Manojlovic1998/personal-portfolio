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
        link: {
          primary: "rgb(var(--color-link-text-primary) / <alpha-value>)",
        },
        chip: {
          inverted: "rgb(var(--color-text-chip-inverted) / <alpha-value>)",
          "tertiary-dark":
            "rgb(var(--color-text-chip-tertiary-dark) / <alpha-value>)",
        },
      },
      backgroundColor: {
        chip: {
          primary: "rgb(var(--color-fill-chip-primary)/ <alpha-value>)",
          "tertiary-dark":
            "rgb(var(--color-fill-chip-tertiary-dark)/ <alpha-value>)",
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
        modal: {
          primary: "rgb(var(--color-fill-modal-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-fill-modal-primary-dark) / <alpha-value>)",
        },
        card: {
          primary: "rgb(var(--color-fill-card-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-fill-card-primary-dark) / <alpha-value>)",
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
        hero: {
          primary: "rgb(var(--color-border-fill-hero) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-border-fill-hero-dark) / <alpha-value>)",
        },
        input: {
          primary: "rgb(var(--color-border-fill-input) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-border-fill-input-dark) / <alpha-value>)",
        },
        card: {
          primary: "rgb(var(--color-border-fill-card-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-border-fill-card-primary-dark) / <alpha-value>)",
        },
        chip: {
          primary: "rgb(var(--color-border-fill-chip-primary) / <alpha-value>)",
          tertiary:
            "rgb(var(--color-border-fill-chip-tertiary) / <alpha-value>)",
          "tertiary-dark":
            "rgb(var(--color-border-fill-chip-tertiary-dark) / <alpha-value>)",
        },
      },
      boxShadow: {
        navigation: "var(--shadow-navigation-primary)",
        input: "var(--shadow-input-field)",
        "card-primary": "var(--shadow-card-primary)",
      },
      stroke: {
        "nav-icon": {
          primary: "rgb(var(--color-stroke-nav-icon-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-stroke-nav-icon-primary-dark) / <alpha-value>)",
          muted: "rgb(var(--color-stroke-nav-icon-muted) / <alpha-value>)",
          "muted-dark":
            "rgb(var(--color-stroke-nav-icon-muted-dark) / <alpha-value>)",
          inverted:
            "rgb(var(--color-stroke-nav-icon-inverted) / <alpha-value>)",
        },
        icon: {
          primary: "rgb(var(--color-stroke-icon-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-stroke-icon-primary-dark) / <alpha-value>)",
          inverted: "rgb(var(--color-stroke-icon-inverted) / <alpha-value>)",
        },
      },
      fill: {
        "nav-icon": {
          primary: "rgb(var(--color-fill-nav-icon-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-fill-nav-icon-primary-dark) / <alpha-value>)",
          muted: "rgb(var(--color-fill-nav-icon-muted) / <alpha-value>)",
          "muted-dark":
            "rgb(var(-color-fill-nav-icon-muted-dark) / <alpha-value>)",
        },
        icon: {
          primary: "rgb(var(--color-fill-icon-primary) / <alpha-value>)",
          "primary-dark":
            "rgb(var(--color-fill-icon-primary-dark) / <alpha-value>)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
