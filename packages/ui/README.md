# NF new

## Build

    yarn build

This runs `tsup`, which is a wrapper around `esbuild`.

It uses vanilla-extract to extract static css.

This does NOT use Babel. The .babelrc is only there for Storybook.

## Use

    import '@vanilla-extract-rollup-example/ui/dist/index.css';
    import { Box } from '@vanilla-extract-rollup-example/ui'

## Storybook

    yarn storybook

Launch storybook. This uses the .babelrc because Storybook is built through Webpack and Babel.
