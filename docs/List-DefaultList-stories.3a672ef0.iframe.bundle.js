(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/addons/volto-eea-design-system/src/ui/List/DefaultList.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/List.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/List",component:semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{}};var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{floated:args.floated,animated:args.animated,divided:args.divided,as:"dl",children:args.items.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Item,{className:"item",as:"dt",children:item},index)}))})})};Template.displayName="Template";var Default=Template.bind({});Default.args={floated:"left",animated:!1,divided:!1,items:["List Item 1","List Item 2","List Item 3","List Item 4"]},Default.parameters=Object.assign({storySource:{source:'(args) => (\n  <Container>\n    <List\n      floated={args.floated}\n      animated={args.animated}\n      divided={args.divided}\n      as="dl"\n    >\n      {args.items.map((item, index) => (\n        <List.Item className="item" key={index} as="dt">\n          {item}\n        </List.Item>\n      ))}\n    </List>\n  </Container>\n)'}},Default.parameters)}}]);