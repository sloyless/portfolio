# Sean Loyless Portfolio

Personal portfolio site built with React, TypeScript, Vite, Ant Design, and Tailwind CSS.

## Development

```bash
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Lint & typecheck

```bash
yarn lint
yarn lint:fix
yarn typecheck
```

Pull requests run ESLint and TypeScript checks in GitHub Actions (`.github/workflows/ci.yml`).

## Build

```bash
yarn build
```

Production output is written to `dist/`. Static assets live in `public/`.

## Preview production build

```bash
yarn preview
```

## Deployment

Production deploys run automatically via GitHub Actions when changes are pushed to **`master`**.

### One-time GitHub setup

1. Open the repo **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Under **Custom domain**, enter `seanloyless.com` if it is not already set (DNS should point at GitHub Pages).

The workflow (`.github/workflows/deploy.yml`) runs `yarn build` and publishes the `dist/` folder. `public/CNAME` is copied into the build output for the custom domain.

### Manual deploy

Run **Actions → Deploy to GitHub Pages → Run workflow**, or merge to `master`.

### Local build only

```bash
yarn build
```

Deploy the contents of `dist/` manually if needed.
