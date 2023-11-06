var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// mock/index.js
var import_mockjs = __toESM(require("mockjs"));
var userList = import_mockjs.default.mock({
  "data|100": [
    {
      name: "@cname",
      //生成不同中午名
      "id|+1": 1
    }
  ]
});
console.log(userList);
module.exports = [
  {
    method: "post",
    url: "/api/users",
    response: ({ body }) => {
      return {
        code: 200,
        msg: "success",
        data: userList
      };
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFxIYXdraVxcXFxEZXNrdG9wXFxcXHZpdGVMZWFyblxcXFx0dXRvcmlhbFxcXFxtb2NrXFxcXGluZGV4LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXFVzZXJzXFxcXEhhd2tpXFxcXERlc2t0b3BcXFxcdml0ZUxlYXJuXFxcXHR1dG9yaWFsXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hhd2tpL0Rlc2t0b3Avdml0ZUxlYXJuL3R1dG9yaWFsL21vY2svaW5kZXguanNcIjtpbXBvcnQgbW9ja0pTIGZyb20gJ21vY2tqcydcclxuY29uc3QgdXNlckxpc3QgPSBtb2NrSlMubW9jayh7XHJcbiAgJ2RhdGF8MTAwJzogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQGNuYW1lJywgLy9cdTc1MUZcdTYyMTBcdTRFMERcdTU0MENcdTRFMkRcdTUzNDhcdTU0MERcclxuICAgICAgJ2lkfCsxJzogMSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuY29uc29sZS5sb2codXNlckxpc3QpXHJcbm1vZHVsZS5leHBvcnRzID0gW1xyXG4gIHtcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgdXJsOiAnL2FwaS91c2VycycsXHJcbiAgICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgIG1zZzogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGRhdGE6IHVzZXJMaXN0LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbl1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBSLG9CQUFtQjtBQUM3UyxJQUFNLFdBQVcsY0FBQUEsUUFBTyxLQUFLO0FBQUEsRUFDM0IsWUFBWTtBQUFBLElBQ1Y7QUFBQSxNQUNFLE1BQU07QUFBQTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQUNELFFBQVEsSUFBSSxRQUFRO0FBQ3BCLE9BQU8sVUFBVTtBQUFBLEVBQ2Y7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxJQUNMLFVBQVUsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN0QixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbIm1vY2tKUyJdCn0K
