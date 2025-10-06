// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*", ".expo/*", "node_modules/*", "ios/*", "android/*"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // 사용되지 않는 변수에 대해 경고를 발생시킵니다.
      "@typescript-eslint/no-unused-vars": "warn",

      // import 문을 다음과 같은 순서로 자동 정렬합니다:
      // 1. react, expo 등 외부 라이브러리
      // 2. '~/''로 시작하는 절대 경로 (alias)
      // 3. 상대 경로 './' 또는 '../'
      // 4. CSS 파일
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^expo", "^@?\\w"],
            ["^~/"],
            ["^\\./", "^\\.\\./"],
            ["^\\.css$"],
          ],
        },
      ],
    },
  },
]);
