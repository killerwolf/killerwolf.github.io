# h4md1.fr

Hamdi Laadhari's personal site: a one-page static site in a cut-paper-on-a-cutting-mat design, built with [Astro](https://astro.build).

## Develop

```sh
nvm use          # Node 22
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Layout

- `src/pages/index.astro`: the one page; sections live in `src/components/` in page order.
- `src/pages/404.astro`: the not-found page (emitted as `404.html`).
- `src/data/site.ts`: links, meta and the JSON-LD Person.
- `src/styles/tokens.css`, `cut-paper.css`: the design kit; `site.css`: page layout.
- `public/`: fonts, character art, video, CV, icons, `CNAME`.

## Analytics

GA4 is loaded only when `PUBLIC_GA_MEASUREMENT_ID` is set at build time. In CI it comes from the repo variable `GA_MEASUREMENT_ID`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to the `gh-pages` branch with the `h4md1.fr` custom domain. The project pages `/watchme/`, `/QuickToss/` and `/chrome-extension-infinite-scroll/` are served from their own repositories.
