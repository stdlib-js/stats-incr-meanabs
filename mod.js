// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return Math.abs(n)},r=function(){var n,r;return n=0,r=0,function(t){if(0===arguments.length)return 0===r?null:n;return n+=(t-n)/(r+=1)}};var t=function(){var t=r();return function(r){if(0===arguments.length)return t();return t(n(r))}};export{t as default};
//# sourceMappingURL=mod.js.map
