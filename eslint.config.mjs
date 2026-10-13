import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The downloaded Squarespace reference site is preserved for visual analysis,
    // but its minified vendor scripts are not application source.
    "conejovalleycounseling.com-home-1791880309683/**",
  ]),
]);

export default eslintConfig;
