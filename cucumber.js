module.exports = {
  default: [
    "--require cucumber.setup.js",
    "--require 'features/**/*.ts'",
    "--require 'features/**/*.tsx",
    "--require features/support/world.ts",
    "--require-module ts-node/register",
    "--require-module tsconfig-paths/register",
    "--require-module jsdom-global/register",
  ].join(" "),
};