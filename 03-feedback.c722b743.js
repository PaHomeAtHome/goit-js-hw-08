function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,i,r,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function h(){var e=m();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?v(n,r-(e-c)):n}(e))}function w(e){return a=void 0,p&&o?y(e):(o=i=void 0,f)}function S(){var e=m(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},S.flush=function(){return void 0===a?f:w(m())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value;const t=JSON.stringify(j);localStorage.setItem("feedback-form-state",t)}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(j),y.reset(),localStorage.removeItem("feedback-form-state"),j={}}));let j={};!function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e),n=y.querySelectorAll("[name]");for(const e of n)Object.keys(t).includes(e.name)&&(e.value=t[e.name])}}();
//# sourceMappingURL=03-feedback.c722b743.js.map