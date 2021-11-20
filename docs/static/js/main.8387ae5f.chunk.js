(this.webpackJsonpPASO=this.webpackJsonpPASO||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(18),n(19),n(2)),l=n(5),s=n(4),d=n(3),u=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control font-weight-light form-control-sm",id:"sc_code",rows:"10"})),r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn-block",onClick:function(){return e.props.onFormSubmit(document.getElementById("sc_code").value)}},"Compute the Solidity Metrics")))}}]),n}(a.Component),m=n(6),f=function e(t){var n=this;return Object(i.a)(this,e),this.fetchContract=function(){var e="https://api.etherscan.io/api?module=contract&action=getsourcecode&address=".concat(n.address,"&apikey=E5KM3HIGE2PV4RR763IQSXGZIV6UV638P2");return fetch(e).then((function(e){return e.json()})).then((function(e){n.sourceCode=e.result[0].SourceCode,n.sourceCode?n.showContract():n.showErrorMessage()}))},this.hideErrorMessage=function(){return n.invalidAddrEl.classList.remove("d-block")},this.showErrorMessage=function(){return n.invalidAddrEl.classList.add("d-block")},this.showContract=function(){n.contractCodeEl.value=n.sourceCode,n.hideErrorMessage()},this.address=t.addrEl.value,this.invalidAddrEl=t.invalidAddrEl,this.contractCodeEl=t.contractCodeEl,this.fetchContract()},b=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.addrEl=document.getElementById("address"),a.invalidAddrEl=document.getElementById("invalid"),a.contractCodeEl=document.getElementById("sc_code"),document.getElementById("sc_code").value="/***** [You can write, edit or copy and paste a smart contract code here] *******/\n// Solidity program to demonstrate pure functions\npragma solidity ^0.8.7;\n\n// Defining a contract\ncontract Test {\n    // Defining pure function to\n    // calculate product and sum of 2 numbers\n    function getResult() public pure returns(\n        uint product, uint sum){\n        uint num1 = 2;\n        uint num2 = 4;\n        product = num1 * num2;\n        sum = num1 + num2;\n    }\n}\n"},a.onSubmit=function(){a.setState({loading:!0}),new f(Object(m.a)(a)).finally((function(){return a.setState({loading:!1})}))},a.render=function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control form-control-sm font-weight-light",id:"address","data-list":"0x0b9f1160c8143ff771ac4a05e6cfbc4a6e4e5702,0x7de6783f26e024ef2db774a0fd02742b11891d3f, 0x26e8bcf9c18c6ae5f3cdf7331e84803aeef086eb, 0x5870a2e13341463f780a2fe16f5444d087825b87, 0x549e5133e51121affafab7cc760f830db08d56fd","data-minchars":"1",placeholder:"Write a contract's address (0x7de6783f26e024ef2db774a0fd02742b11891d3f)"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-sm btn-outline-info btn-block",onClick:function(){return a.onSubmit()},disabled:a.state.loading},r.a.createElement("span",{className:"spinner-border spinner-border-sm ".concat(a.state.loading?"mr-2":"d-none")}),"Upload a Smart Contract from an address"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col pl-10"},r.a.createElement("div",{className:"invalid-feedback",id:"invalid"},"Please choose a valid contract address such as: 0x114ef3df5820d55d32045afaa15d8cc7ba2156d7")))))},a.state={loading:!1},a}return n}(a.Component);function h(e){var t=[];return Object.keys(e).map((function(n,a){return t.push(r.a.createElement("tr",{key:a},r.a.createElement("th",null,n),r.a.createElement("td",null,e[n])))})),t}var p=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).render=function(){try{return r.a.createElement("table",{className:"table table-hover table-sm table-bordered"},r.a.createElement("tbody",null,h(e.props.metric)))}catch(t){return r.a.createElement(r.a.Fragment,null)}},e}return n}(a.Component),E=n(7),v=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).render=function(){return r.a.createElement(E.b,null,r.a.createElement(E.a,null,r.a.createElement("script",{src:"./index.iife.js",type:"text/javascript"}),r.a.createElement("title",null,"PASO: SOlidity-")),r.a.createElement("h4",{className:"text-center font-weight-lighter font-italic pt-2"},"PASO (PArse SOlidity smart contract code)"))},e}return n}(a.Component),y=function(){document.getElementById("bibtex").select(),document.execCommand("copy")},g="@INPROCEEDINGS{9050263, \n  author={Pierro, G. A. and Tonelli, R.},\n  booktitle={2020 IEEE International Workshop on Blockchain Oriented Software Engineering (IWBOSE)}, \n  title={PASO: A Web-Based Parser for Solidity Language Analysis}, \n  year={2020},\n  pages={16-21},\n  doi={10.1109/IWBOSE50093.2020.9050263}\n }",O=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).render=function(){return r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"font-weight-lighter font-italic pt-1 fs4"},"If you find this tool helpful, please consider to cite this paper. ",r.a.createElement("button",{className:"btn btn-sm btn-outline-success",onClick:y},"Copy")),r.a.createElement("textarea",{id:"bibtex",className:"mt-2 form-control font-weight-light form-control-sm",rows:"7",defaultValue:g})))},e}return n}(a.Component),j=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).render=function(){try{return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("tbody",null,h(e.props.errors[0])))}catch(t){return r.a.createElement(r.a.Fragment,null)}},e}return n}(a.Component);function w(e){var t=window.SolidityParser.parse(e,{loc:!0}),n=JSON.stringify(t),a={mapping:'"type":"Mapping"',functions:'"type":"FunctionDefinition"',payable:'"stateMutability":"payable"',events:'"type":"EventDefinition"',modifiers:'"type":"ModifierDefinition"',contracts_definition:'"type":"ContractDefinition"',addresses:'"type":"ElementaryTypeName","name":"address"',contracts:'"kind":"contract"',libraries:'"kind":"library"',interfaces:'"kind":"interface"'},r={version:N(n),total_lines:t.loc.end.line,comments:C(e),blanks:e.match(/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm).length};for(var c in a){var o=a[c];r[c]=(n.match(new RegExp(o,"g"))||[]).length}return r}var C=function(e){var t=e.match(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/g);return t?t.length:0},N=function(e){var t=e.match(/"name":"solidity","value":"\^(\d{1,}.\d{1,}.\d{1,})/);return t?t[1]:"n/a"},S=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleFormSubmit=function(e){try{a.setState({metric:w(e)})}catch(t){a.setState({metric:null,errors:t.errors})}},a.render=function(){return r.a.createElement("main",{className:"container"},r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement(u,{onFormSubmit:a.handleFormSubmit}),r.a.createElement(p,{metric:a.state.metric}),r.a.createElement(j,{errors:a.state.errors}),r.a.createElement(O,null))},a.state={},a}return n}(a.Component),k=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(S,null)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8387ae5f.chunk.js.map