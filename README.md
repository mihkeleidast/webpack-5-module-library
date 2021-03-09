# webpack-5 and webpack-4 compatibility issue

This is an example library built with webpack 5 to demo an issue when consumed in an app that uses webpack 4.

1. In [module](./module) directory is a js module that is bundled with webpack 5.
2. In [library](./library) directory is a js library that is bundled with webpack 5 and re-exports the webpack-5 bundled module, leaving it as external.
3. In [app](./app) directory is a js app that is bundled with webpack 4 that tries to use module through library.

Repro steps:
1. `cd app`;
2. `npm ci`;
3. `npm start`;
4. Open `http://localhost:8080/`, see error in console: `test is not a function`


The issue seems to resolve arount the fact that library is bundled with TerserPlugin with `keep_fnames: true`. Probably webpack 5 tries to replace `__webpack_require__` calls but shouldn't in this case?