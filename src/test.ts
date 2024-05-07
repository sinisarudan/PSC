// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// import 'zone.js/dist/long-stack-trace-zone';
// import 'zone.js/dist/proxy.js';
// import 'zone.js/dist/sync-test';
// import 'zone.js/dist/jasmine-patch';
// import 'zone.js/dist/async-test';
// import 'zone.js/dist/fake-async-test';

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

/* not used anymore?!
// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare const __karma__: any;
// Prevent Karma from running prematurely.
__karma__.loaded = function () {};
*/

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);


// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
console.log("[test.ts] context.keys(): ", context.keys());
context.keys().map(context);

// variables for all test contexts
let testContextKey:string;
let testContextPath:string;
let testContextRecursive:boolean;
let testContextRegExpr:RegExp;
let testContextWebpack;

// loading all tests for the `@colabo-knalledge/f-store_core` test context
testContextKey = '@colabo-knalledge/f-store_core';
testContextPath = '../node_modules/@colabo-knalledge/f-store_core/';
testContextRecursive = true;
testContextRegExpr = /\.spec\.ts$/;
console.log("[test.ts] requiring context for the key '" +testContextKey+ "' at path: " +testContextPath);
testContextWebpack = require.context('../node_modules/@colabo-knalledge/f-store_core/', true, /\.spec\.ts$/);
console.log("\tkeys for the context: ", testContextWebpack.keys());
testContextWebpack.keys().map(testContextWebpack);


/* not used,it seems webpack is parsing this source code, not evaluating it?! :(
let testContexts:any = [
  {
    key: 'app',
    path: './',
    recursive: true,
    regExpr: /\.spec\.ts$/
  },
  {
    key: '@colabo-knalledge/f-store_core',
    path: '../node_modules/@colabo-knalledge/f-store_core/',
    recursive: true,
    regExpr: /\.spec\.ts$/
  }
];

function requireContext(testContext:any){
  // get all `@colabo-knalledge/f-store_core` tests
  // for some reason it has to be `let` rather than `const`
  // as then it reports the error: `TypeError: __webpack_require__(...).context is not a function`
  let testContextKey:string = testContext.key;
  let testContextPath:string = testContext.path;
  console.log("[test.ts:requireContext] requiring context for the key '" +testContextKey+ "' at path: " +testContextPath);
  console.log("\ttestContext: " + JSON.stringify(testContext))
  // let testContextWebpack = require.context('./', true, /\.spec\.ts$/);
  let webpackContextMethod = require.context;
  // console.log("\t typeof require: " + typeof require);
  // console.log("\t typeof require.context: " + typeof require().context);
  // let testContextWebpack = require.context.call(require, './', true, /\.spec\.ts$/);
  // let testContextWebpack = eval("require.context('./', true, /\.spec\.ts$/)");
  let testContextWebpack = require.context(testContextPath, testContext.recursive, testContext.regExpr);
  console.log("\tkeys for the context: ", testContextWebpack.keys());
  testContextWebpack.keys().map(testContextWebpack);
}

testContexts.forEach(requireContext);
*/

/* not used anymore?!
// Finally, start Karma to run the tests.
__karma__.start();
*/