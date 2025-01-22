const nextJest = require("next/jest");

// setup file for jest
const dotenv = require("dotenv");
dotenv.config({ path: ".env.development" });

const createJestConfig = nextJest();
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
