/* eslint-disable @typescript-eslint/no-var-requires */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@vanilla-extract-rollup-example/ui']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([withVanillaExtract, withTM], nextConfig);
