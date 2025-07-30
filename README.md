# landingPageDISPENSER

## Description
A simple landing page promoting a water dispenser solution. The project uses HTML and Tailwind CSS for styling.

## Requirements
- [Node.js](https://nodejs.org/) and `npm` for building the CSS assets.

## Installation
After cloning the repository, install the dependencies defined in
`package.json` by running:

```bash
npm install
```

## Building Tailwind CSS
Compile the styles once or watch for changes during development:

```bash
npm run build:css   # build `public/assets/styles.css`
npm run watch:css   # watch source files and rebuild automatically
```

## Usage
After building the CSS, serve the `public/` directory with any static server. For example:

```bash
npx serve public
```

Then open `http://localhost:3000` (default port) in your browser.
