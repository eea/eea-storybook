(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"./src/addons/volto-eea-design-system/src/ui/TagList/TagList.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/react/index.js");var _TagList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/addons/volto-eea-design-system/src/ui/TagList/TagList.jsx"),_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/addons/volto-eea-design-system/src/ui/Tag/Tag.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/TagList",component:_TagList__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{title:{name:"title",description:"Tag main text",type:{name:"string",required:!0}},direction:{control:{type:"select"},options:["right","left"],description:"tag container direction",table:{type:{summary:"string"},defaultValue:{summary:"right"}}},tags:{description:"category tag",table:{type:{summary:"Object"},defaultValue:{summary:' "" '}}}}};var Default=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_TagList__WEBPACK_IMPORTED_MODULE_1__.a,{className:args.direction,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TagList__WEBPACK_IMPORTED_MODULE_1__.a.Title,{children:args.title}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TagList__WEBPACK_IMPORTED_MODULE_1__.a.Content,{children:args.tags.map((function(tag,index){return[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__.a,{className:tag.class,href:tag.href,children:tag.category},index)]}))})]})};Default.displayName="Default",Default.args={title:"Tags:",direction:"right",tags:[{category:"land use 1",href:"#"},{category:"land use 2",href:"#"},{category:"land use 3",href:"#"},{category:"land use 4",href:"#"}]},Default.parameters=Object.assign({storySource:{source:"(args) => (\n  <TagList className={args.direction}>\n    <TagList.Title>{args.title}</TagList.Title>\n    <TagList.Content>\n      {args.tags.map((tag, index) => [\n        <Tag className={tag.class} href={tag.href} key={index}>\n          {tag.category}\n        </Tag>,\n      ])}\n    </TagList.Content>\n  </TagList>\n)"}},Default.parameters),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/TagList/TagList.stories.jsx"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/TagList/TagList.stories.jsx"})}}]);