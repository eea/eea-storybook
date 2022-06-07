(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/addons/volto-eea-design-system/src/ui/Form/Textarea.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"LabeledTextArea",(function(){return LabeledTextArea})),__webpack_require__.d(__webpack_exports__,"ErrorTextArea",(function(){return ErrorTextArea}));var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/semantic-ui-react/dist/es/addons/TextArea/TextArea.js")),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),_FormFieldWrapper_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","error","fluid"];__webpack_exports__.default={title:"Components/Forms/Text Area",Component:semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{onChange:{action:"Text Area changed",table:{disable:!0}},onInput:{action:"Input entered",table:{disable:!0}},placeholder:{description:"placeholder text",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},rows:{description:"indicates row count for a TextArea",table:{type:{summary:"integer"},defaultValue:{summary:3}}},fluid:{description:"add/remove class fluid to make the text area take the size of the container",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}};var Template=function(_ref){var label=_ref.label,error=_ref.error,fluid=_ref.fluid,args=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FormFieldWrapper_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__.a,{label:label,error:error,required:args.required,columns:label?1:0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},args,{className:fluid?"fluid":null}))})})})};Template.displayName="Template";var Default=Template.bind({});Default.args={placeholder:"Type here...",rows:3,fluid:!1};var LabeledTextArea=Template.bind({});LabeledTextArea.args={placeholder:"Type here...",rows:3,label:"Textarea",required:!0,fluid:!1},LabeledTextArea.argTypes={label:{description:"textarea label",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},required:{description:"a field can show that is mandatory",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}};var ErrorTextArea=Template.bind({});ErrorTextArea.args={placeholder:"Type here...",rows:3,label:"Textarea",error:!0,required:!0,fluid:!1},ErrorTextArea.argTypes={label:{description:"textarea label",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},required:{description:"a field can show that is mandatory",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},error:{description:"display error message along with message",table:{type:{summary:"boolean"},defaultValue:{summary:""}}}},Default.parameters=Object.assign({storySource:{source:"({ label, error, fluid, ...args }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        label={label}\n        error={error}\n        required={args.required}\n        columns={label ? 1 : 0}\n      >\n        <TextArea {...args} className={fluid ? 'fluid' : null}></TextArea>\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)"}},Default.parameters),LabeledTextArea.parameters=Object.assign({storySource:{source:"({ label, error, fluid, ...args }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        label={label}\n        error={error}\n        required={args.required}\n        columns={label ? 1 : 0}\n      >\n        <TextArea {...args} className={fluid ? 'fluid' : null}></TextArea>\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)"}},LabeledTextArea.parameters),ErrorTextArea.parameters=Object.assign({storySource:{source:"({ label, error, fluid, ...args }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        label={label}\n        error={error}\n        required={args.required}\n        columns={label ? 1 : 0}\n      >\n        <TextArea {...args} className={fluid ? 'fluid' : null}></TextArea>\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)"}},ErrorTextArea.parameters)},"./src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormFieldWrapper(_ref){var children=_ref.children,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$columns=_ref.columns,columns=void 0===_ref$columns?0:_ref$columns;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Field,{inline:!0,error:error,required:required,className:"eea field-wrapper",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Row,{verticalAlign:"top",children:[1===columns&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Column,{computer:"2",tablet:"2",mobile:"12",children:label.length>0&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{children:[label,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"requred-input",children:"*"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Column,{computer:1===columns?"10":"12",tablet:"10",mobile:"12",children:[children,error&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{negative:!0,content:"This is a mandatory field",size:"mini",icon:"exclamation circle"})]})]})})})}FormFieldWrapper.displayName="FormFieldWrapper",FormFieldWrapper.__docgenInfo={description:"",methods:[],displayName:"FormFieldWrapper",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},columns:{defaultValue:{value:"0",computed:!1},required:!1}}},__webpack_exports__.a=FormFieldWrapper,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx"]={name:"FormFieldWrapper",docgenInfo:FormFieldWrapper.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx"})}}]);