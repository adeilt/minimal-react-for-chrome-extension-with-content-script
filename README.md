# Very Small Chrome Extension with Content Script using React

A very small Chrome Extension skeleton that uses content scripts and React.js.
I made this as small and simple as I could while preserving the ability to use  
JSX.

## Usage

1. Fork this repo and clone to your dev environment.

1. Install: `npm install`

1. Build: `npm run build`. This will transpile the JSX and copy the rest into
   the `dist` directory.

1. After building, use the `dist` directory to add the unpacked extension to
   Chrome.

1. Visit [this repository](https://github.com/adeilt/very-small-chromeextension-contentscript-react)
   and look for the light blue "sidecar" rectangle on the right side of
   the window. If you see it, then things are working.

1. Start renaming things, writing code, etc. I'd suggest going over
   `package.json` and `manifest.json` first.

1. Note that you will need to use `npm run build` and then refresh the extension
   in `chrome://extensions` before your changes will be visible. It's not a
   great loop, but it works.

## About

I was trying to rewrite a chrome extension using React and every tutorial I
found was broken, way too heavy for my taste, or both.

I took several different repos and cobbled this together from them. I updated
all of the npm package versions, modernized some React stuff to version 18, got
a minimum viable extension up and running, and then made a few passes to cut out
as much complexity as possible.

I'm very new to React, so it's likely that I missed some things that could
have been removed. My goal was more simplicity and cleanliness than actual
brevity of code.

## Enumerated details

### What are all these files?

- `src/icons/*`
  - Extension icons.
- `src/content.*`
  - The extension's content script (and associated CSS). This is the only
    script that can actually modify web page content. Hence the name.
- `src/manifest.json`
  - All Chrome extensions require this file and it is the primary configuration
    of the extension. The `content.js` script is specified along with its
    parameters in this file.
- `package.json`
  - Much like Chrome extensions have `manifest.json` as their primary
    configuration, javascript packages have `package.json`. What happens when
    you run `npm run build` is specified in this file.
- `package-lock.json`
  - Specifies all installed packages and their exact versions for reproducible
    development environments.
- `webpack.config.js`
  - Webpack is what converts JSX into actual JavaScript for deployment as a
    Chrome extension. It handles calling the transpilers and copying the
    non-transpiled bits into the `dist` directory for loading as an unpacked
    extension or zipping up to publish to Chrome Web Store.
- `.babelrc`
  - Transpiler config.
- `.gitignore`
  - Source control exclusions.
- `LICENSE`
  - The venerable MIT license.
- `README.md`
  - This document.
- `.vscode/`, `.eslintrc.js`, `.gitattributes`, `.prettierrc` **ALL OPTIONAL**
  - These all enforce my _opinions_ about how things should be edited and
    formatted. They can all be edited to suit your taste or removed entirely if
    you don't want code style auditing and enforcement. After removing them
    from the original fork of rafaelcamargo's `minimal-react` repo, I have
    begrudgingly added them back when I realized that they are, in fact, minimal
    in the sense that I would never want to work on a repo without them enabled.

### What are all these dev dependencies?

- Required for transpilation of JSX:
  - `@babel/core`
  - `@babel/preset-react`
  - `babel-loader`
- Required for triggering transpilation and composing the results with static
  files in the dist directory:
  - `webpack`
  - `webpack-cli`
  - `css-loader`
  - `style-loader`
  - `copy-webpack-plugin`
  - `html-webpack-plugin`
- Purely optional stuff that is only minimal in the sense that - like an
  industrial strength hair dryer - I can't live without[^1]:
  - `eslint`
  - `eslint-config-prettier`
  - `eslint-plugin-prettier`
  - `eslint-plugin-react`
  - `prettier`

## Based on

- https://github.com/lxieyang/chrome-extension-boilerplate-react
- https://github.com/rafaelcamargo/minimal-react
- https://github.com/sszczep/chrome-extension-webpack

[^1]: Spaceballs!
