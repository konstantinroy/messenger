/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-uuid";
exports.ids = ["vendor-chunks/react-uuid"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-uuid/uuid.js":
/*!*****************************************!*\
  !*** ./node_modules/react-uuid/uuid.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\nA function that returns a universally unique identifier (uuid).  \nexample: 1b83fd69-abe7-468c-bea1-306a8aa1c81d\n@returns `string` : 32 character uuid (see example)\n*/\nfunction uuid() {\n\tconst hashTable = [\n\t\t\"a\",\n\t\t\"b\",\n\t\t\"c\",\n\t\t\"d\",\n\t\t\"e\",\n\t\t\"f\",\n\t\t\"0\",\n\t\t\"1\",\n\t\t\"2\",\n\t\t\"3\",\n\t\t\"4\",\n\t\t\"5\",\n\t\t\"6\",\n\t\t\"7\",\n\t\t\"8\",\n\t\t\"9\",\n\t];\n\tlet uuid = [];\n\tfor (let i = 0; i < 36; i++) {\n\t\tif (i === 8 || i === 13 || i === 18 || i === 23) {\n\t\t\tuuid[i] = \"-\";\n\t\t} else {\n\t\t\tuuid[i] = hashTable[Math.ceil(Math.random() * hashTable.length - 1)];\n\t\t}\n\t}\n\treturn uuid.join(\"\");\n}\n\nmodule.exports = uuid;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXVpZC91dWlkLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIvVXNlcnMvbWFjYm9vay9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvbWVzc2VuZ2VyIDIvbm9kZV9tb2R1bGVzL3JlYWN0LXV1aWQvdXVpZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdW5pdmVyc2FsbHkgdW5pcXVlIGlkZW50aWZpZXIgKHV1aWQpLiAgXG5leGFtcGxlOiAxYjgzZmQ2OS1hYmU3LTQ2OGMtYmVhMS0zMDZhOGFhMWM4MWRcbkByZXR1cm5zIGBzdHJpbmdgIDogMzIgY2hhcmFjdGVyIHV1aWQgKHNlZSBleGFtcGxlKVxuKi9cbmZ1bmN0aW9uIHV1aWQoKSB7XG5cdGNvbnN0IGhhc2hUYWJsZSA9IFtcblx0XHRcImFcIixcblx0XHRcImJcIixcblx0XHRcImNcIixcblx0XHRcImRcIixcblx0XHRcImVcIixcblx0XHRcImZcIixcblx0XHRcIjBcIixcblx0XHRcIjFcIixcblx0XHRcIjJcIixcblx0XHRcIjNcIixcblx0XHRcIjRcIixcblx0XHRcIjVcIixcblx0XHRcIjZcIixcblx0XHRcIjdcIixcblx0XHRcIjhcIixcblx0XHRcIjlcIixcblx0XTtcblx0bGV0IHV1aWQgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzNjsgaSsrKSB7XG5cdFx0aWYgKGkgPT09IDggfHwgaSA9PT0gMTMgfHwgaSA9PT0gMTggfHwgaSA9PT0gMjMpIHtcblx0XHRcdHV1aWRbaV0gPSBcIi1cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dXVpZFtpXSA9IGhhc2hUYWJsZVtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIGhhc2hUYWJsZS5sZW5ndGggLSAxKV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1dWlkLmpvaW4oXCJcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-uuid/uuid.js\n");

/***/ })

};
;