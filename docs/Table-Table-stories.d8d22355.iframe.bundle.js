(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"./src/addons/volto-eea-design-system/src/ui/Table/Table.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Sortable",(function(){return Sortable})),__webpack_require__.d(__webpack_exports__,"Responsive",(function(){return Responsive}));var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/sortBy.js"),lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TableContent(_ref){var headers=_ref.headers,tableData=_ref.tableData,singleLine=_ref.singleLine,celled=_ref.celled,fixed=_ref.fixed,striped=_ref.striped,collapsing=_ref.collapsing,compact=_ref.compact,textAlign=_ref.textAlign,verticalAlign=_ref.verticalAlign;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{celled:celled,singleLine:singleLine,fixed:fixed,striped:striped,collapsing:collapsing,compact:compact,unstackable:!0,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Header,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Row,{textAlign:"center",children:headers.map((function(item){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.HeaderCell,{textAlign:"center",children:item.name},item.key)}))})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Body,{children:tableData.map((function(_ref2,rowIndex){var col1=_ref2.col1,col2=_ref2.col2,col3=_ref2.col3;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Row,{textAlign:textAlign,verticalAlign:verticalAlign,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{textAlign:textAlign,verticalAlign:verticalAlign,children:col1}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{textAlign:textAlign,verticalAlign:verticalAlign,children:col2}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{textAlign:textAlign,verticalAlign:verticalAlign,children:col3})]},rowIndex)}))})]})}__webpack_exports__.default={title:"Components/Table",component:semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{headers:{description:"table headers",table:{type:{summary:"object"},defaultValue:{summary:' "" '}}},tableData:{description:"table data",table:{type:{summary:"object"},defaultValue:{summary:' "" '}}},singleLine:{description:"Contents should remain on a single line, and not wrap",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},celled:{description:"table divided into individual cells",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},fixed:{description:"A special faster form of table rendering that does not resize table cells based on content",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},striped:{description:"Alternate rows of content with a darker color to increase contrast",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},collapsing:{description:"Taking up only as much space as its rows",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},compact:{description:"Compact to make more rows visible at a time",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textAlign:{control:{type:"inline-radio"},options:["left","center","right"],description:"adjust text alignment",table:{type:{summary:"string"},defaultValue:{summary:"center"}}},verticalAlign:{control:{type:"inline-radio"},options:["bottom","middle","top"],description:"adjust vertical alignment",table:{type:{summary:"string"},defaultValue:{summary:"middle"}}}}},TableContent.displayName="TableContent";var Default=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TableContent,Object.assign({},args))})};function reducer(state,action){if("CHANGE_SORT"===action.type)return state.column===action.column?Object.assign({},state,{data:state.data.slice().reverse(),direction:"ascending"===state.direction?"descending":"ascending"}):{column:action.column,data:lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(state.data,[action.column]),direction:"ascending"};throw new Error}function SortableTableContent(_ref3){var headers=_ref3.headers,tableData=_ref3.tableData,singleLine=_ref3.singleLine,celled=_ref3.celled,fixed=_ref3.fixed,striped=_ref3.striped,collapsing=_ref3.collapsing,compact=_ref3.compact,textAlign=_ref3.textAlign,verticalAlign=_ref3.verticalAlign,_React$useReducer=react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(reducer,{column:null,data:tableData,direction:null}),_React$useReducer2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useReducer,2),state=_React$useReducer2[0],dispatch=_React$useReducer2[1],column=state.column,data=state.data,direction=state.direction;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{celled:celled,singleLine:singleLine,fixed:fixed,striped:striped,collapsing:collapsing,compact:compact,stackable:!0,sortable:!0,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Header,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Row,{textAlign:"center",children:headers.map((function(item){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.HeaderCell,{textAlign:"center",sorted:column===item.key?direction:null,onClick:function(){return dispatch({type:"CHANGE_SORT",column:item.key})},children:item.name},item.key)}))})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Body,{children:data.map((function(_ref4,rowIndex){var col1=_ref4.col1,col2=_ref4.col2,col3=_ref4.col3;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Row,{textAlign:textAlign,verticalAlign:verticalAlign,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{textAlign:textAlign,verticalAlign:verticalAlign,children:col1}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{textAlign:textAlign,verticalAlign:verticalAlign,children:col2}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{textAlign:textAlign,verticalAlign:verticalAlign,children:col3})]},rowIndex)}))})]})}Default.displayName="Default",Default.args={singleLine:!1,celled:!0,fixed:!1,striped:!1,collapsing:!1,compact:!1,textAlign:"center",verticalAlign:"middle",headers:[{name:"Header 1",key:"col1"},{name:"Header 2",key:"col2"},{name:"Header 3",key:"col3"}],tableData:[{col1:"Cell 1",col2:"Cell 2",col3:"Cell 3"},{col1:"Cell 4",col2:"Cell 5",col3:"Cell 6"},{col1:"Cell 7",col2:"Cell 8",col3:"Cell 9"},{col1:"Cell 10",col2:"Cell 11",col3:"Cell 12"}]},SortableTableContent.displayName="SortableTableContent";var Sortable=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SortableTableContent,Object.assign({},args))})};function ResponsiveTable(_ref5){var headers=_ref5.headers,tableData=_ref5.tableData;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{celled:!0,className:"responsive",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Header,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Row,{textAlign:"center",children:headers.map((function(header){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.HeaderCell,{textAlign:"center",children:header.name},header.key)}))})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Body,{children:tableData.map((function(_ref6,rowIndex){var col1=_ref6.col1,col2=_ref6.col2,col3=_ref6.col3;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Row,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{"data-label":headers[0].name,children:col1}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{"data-label":headers[1].name,children:col2}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a.Cell,{"data-label":headers[2].name,children:col3})]},rowIndex)}))})]})}Sortable.displayName="Sortable",Sortable.args={singleLine:!1,celled:!0,fixed:!1,striped:!1,collapsing:!1,compact:!1,textAlign:"center",verticalAlign:"middle",headers:[{name:"Header 1",key:"col1"},{name:"Header 2",key:"col2"},{name:"Header 3",key:"col3"}],tableData:[{col1:"Cell A",col2:"Cell B",col3:"Cell C"},{col1:"Cell D",col2:"Cell F",col3:"Cell G"},{col1:"Cell H",col2:"Cell I",col3:"Cell J"},{col1:"Cell K",col2:"Cell L",col3:"Cell M"}]},ResponsiveTable.displayName="ResponsiveTable";var Responsive=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ResponsiveTable,Object.assign({},args))})};Responsive.displayName="Responsive",Responsive.args={headers:[{name:"Header 1",key:"col1"},{name:"Header 2",key:"col2"},{name:"Header 3",key:"col3"}],tableData:[{col1:"Cell 1",col2:"Cell 2",col3:"Cell 3"},{col1:"Cell 4",col2:"Cell 5",col3:"Cell 6"},{col1:"Cell 7",col2:"Cell 8",col3:"Cell 9"},{col1:"Cell 10",col2:"Cell 11",col3:"Cell 12"}]},Responsive.parameters={controls:{exclude:["singleLine","celled","fixed","striped","collapsing","compact","textAlign","verticalAlign"]},hideNoControlsWarning:!0},Default.parameters=Object.assign({storySource:{source:"(args) => (\n  <Container>\n    <TableContent {...args}></TableContent>\n  </Container>\n)"}},Default.parameters),Sortable.parameters=Object.assign({storySource:{source:"(args) => (\n  <Container>\n    <SortableTableContent {...args}></SortableTableContent>\n  </Container>\n)"}},Sortable.parameters),Responsive.parameters=Object.assign({storySource:{source:"(args) => (\n  <Container>\n    <ResponsiveTable {...args}></ResponsiveTable>\n  </Container>\n)"}},Responsive.parameters),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/Table/Table.stories.js"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/Table/Table.stories.js"}),Sortable.__docgenInfo={description:"",methods:[],displayName:"Sortable"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/Table/Table.stories.js"]={name:"Sortable",docgenInfo:Sortable.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/Table/Table.stories.js"}),Responsive.__docgenInfo={description:"",methods:[],displayName:"Responsive"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/Table/Table.stories.js"]={name:"Responsive",docgenInfo:Responsive.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/Table/Table.stories.js"})}}]);