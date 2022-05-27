(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/addons/volto-eea-design-system/src/ui/Form/Input.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"StandardInput",(function(){return StandardInput})),__webpack_require__.d(__webpack_exports__,"DisabledInput",(function(){return DisabledInput})),__webpack_require__.d(__webpack_exports__,"LoadingInput",(function(){return LoadingInput})),__webpack_require__.d(__webpack_exports__,"ErrorInput",(function(){return ErrorInput}));var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Input/Input.js")),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),_FormFieldWrapper_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","error"];__webpack_exports__.default={title:"Components/Forms/Input",component:semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{type:{control:{type:"select",options:["text","date","email","number","password","file"]},description:"input type",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},onChange:{action:"input changed",table:{disable:!0}},onFocus:{action:"input focus",table:{disable:!0}},placeholder:{description:"placeholder text",table:{type:{summary:"string"},defaultValue:{summary:' "" '}}},fluid:{description:"take on the size of its container",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},required:{description:"form field is required",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}};var Template=function(_ref){var label=_ref.label,error=_ref.error,rest=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FormFieldWrapper_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_5__.a,{error:error,label:label,required:rest.required,columns:label?1:0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},rest,{id:"temp-id"}))})})})};Template.displayName="Template";var Default=Template.bind({});Default.args={placeholder:"Placeholder",type:"text",fluid:!1,required:!1};var StandardInput=Template.bind({});StandardInput.args={label:"Input label",placeholder:"Placeholder",type:"text",fluid:!1,required:!1},StandardInput.argTypes={label:{description:"input label",table:{type:{summary:"string"},defaultValue:{summary:""}}},required:{description:"a field can show that is mandatory",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}};var DisabledInput=Template.bind({});DisabledInput.args={label:"Input label",placeholder:"Placeholder",type:"text",disabled:!0,fluid:!1,required:!1},DisabledInput.argTypes={fluid:{description:"take on the size of its container",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},label:{description:"input label",table:{type:{summary:"string"},defaultValue:{summary:""}}},required:{description:"a field can show that is mandatory",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},DisabledInput.argTypes={disabled:{description:"disabled",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},label:{description:"input label",table:{type:{summary:"string"},defaultValue:{summary:""}}}};var LoadingInput=Template.bind({});LoadingInput.args={label:"Input label",placeholder:"Placeholder",type:"text",loading:!0,fluid:!1,required:!1},LoadingInput.argTypes={loading:{label:"Input label",description:"show that it is currently loading data",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},label:{description:"input label",table:{type:{summary:"string"},defaultValue:{summary:""}}},required:{description:"a field can show that is mandatory",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}};var ErrorInput=Template.bind({});ErrorInput.args={label:"Input label",placeholder:"Placeholder",type:"text",error:!0,fluid:!1,required:!1},ErrorInput.argTypes={error:{description:"show the data contains errors",table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},label:{description:"input label",table:{type:{summary:"string"},defaultValue:{summary:""}}},required:{description:"a field can show that is mandatory",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},Default.parameters=Object.assign({storySource:{source:'({ label, error, ...rest }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        error={error}\n        label={label}\n        required={rest.required}\n        columns={label ? 1 : 0}\n      >\n        <Input {...rest} id="temp-id" />\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)'}},Default.parameters),StandardInput.parameters=Object.assign({storySource:{source:'({ label, error, ...rest }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        error={error}\n        label={label}\n        required={rest.required}\n        columns={label ? 1 : 0}\n      >\n        <Input {...rest} id="temp-id" />\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)'}},StandardInput.parameters),DisabledInput.parameters=Object.assign({storySource:{source:'({ label, error, ...rest }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        error={error}\n        label={label}\n        required={rest.required}\n        columns={label ? 1 : 0}\n      >\n        <Input {...rest} id="temp-id" />\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)'}},DisabledInput.parameters),LoadingInput.parameters=Object.assign({storySource:{source:'({ label, error, ...rest }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        error={error}\n        label={label}\n        required={rest.required}\n        columns={label ? 1 : 0}\n      >\n        <Input {...rest} id="temp-id" />\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)'}},LoadingInput.parameters),ErrorInput.parameters=Object.assign({storySource:{source:'({ label, error, ...rest }) => (\n  <Container>\n    <Form>\n      <FormFieldWrapper\n        error={error}\n        label={label}\n        required={rest.required}\n        columns={label ? 1 : 0}\n      >\n        <Input {...rest} id="temp-id" />\n      </FormFieldWrapper>\n    </Form>\n  </Container>\n)'}},ErrorInput.parameters)},"./src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function FormFieldWrapper(_ref){var children=_ref.children,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$columns=_ref.columns,columns=void 0===_ref$columns?0:_ref$columns;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.a.Field,{inline:!0,error:error,required:required,className:"eea field-wrapper",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Row,{verticalAlign:"top",children:[1===columns&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Column,{computer:"2",tablet:"2",mobile:"12",children:label.length>0&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{children:[label,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"requred-input",children:"*"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Column,{computer:1===columns?"10":"12",tablet:"10",mobile:"12",children:[children,error&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{negative:!0,content:"This is a mandatory field",size:"mini",icon:"exclamation circle"})]})]})})})}FormFieldWrapper.displayName="FormFieldWrapper",FormFieldWrapper.__docgenInfo={description:"",methods:[],displayName:"FormFieldWrapper",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},label:{defaultValue:{value:"''",computed:!1},required:!1},columns:{defaultValue:{value:"0",computed:!1},required:!1}}},__webpack_exports__.a=FormFieldWrapper,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx"]={name:"FormFieldWrapper",docgenInfo:FormFieldWrapper.__docgenInfo,path:"src/addons/volto-eea-design-system/src/ui/FormFieldWrapper/FormFieldWrapper.jsx"})}}]);