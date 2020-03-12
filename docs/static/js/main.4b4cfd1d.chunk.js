(this.webpackJsonpPASO=this.webpackJsonpPASO||[]).push([[0],{45:function(e,t,n){e.exports=n(80)},50:function(e,t,n){},52:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),o=n.n(c),i=(n(50),n(51),n(5)),l=n(7),s=n(6),m=n(8),d=(n(52),n(24)),u=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control font-weight-light form-control-sm",id:"sc_code",rows:"10"})),r.a.createElement("button",{type:"button",className:"btn btn-info btn-block",onClick:function(){return e.props.onFormSubmit(document.getElementById("sc_code").value)}},"Compute the Solidity Metrics")))}}]),t}(a.Component);function b(e){var t="https://api.etherscan.io/api?module=contract&action=getsourcecode&address=".concat(e,"&apikey=E5KM3HIGE2PV4RR763IQSXGZIV6UV638P2");return fetch(t).then((function(e){return e.json()})).then((function(e){return e.result[0].SourceCode}))}var f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleLoadSCFormSubmit=function(e){b(e).then((function(e){try{document.getElementById("sc_code").value=e}catch(t){console.log("error:",t)}}))},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("sc_code").value="/***** [You can write, edit or copy and paste a smart contract code here] *******/\n\npragma solidity ^0.4.10;\n\ncontract SimpleAuction {\n    event HighestBidIncreased(address bidder, uint amount); // Event\n    address public minter;\n    mapping (address => uint) public balances;\n    modifier onlySeller() { }\n      function bid() public payable {\n        emit HighestBidIncreased(msg.sender, msg.value); // Triggering event\n    }\n}\n\ninterface Token {\n  function transfer(address recipient, uint amount) public;\n}\n\nlibrary Set {\n}"}},{key:"checkAddress",value:function(e){document.getElementById("invalid").classList.remove("d-block"),e.match(/^0x[a-zA-Z0-9]{40}$/)||document.getElementById("invalid").classList.add("d-block")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control form-control-sm font-weight-light",id:"sc_address",placeholder:"Write a contract's address (0x7de6783f26e024ef2db774a0fd02742b11891d3f)"}),r.a.createElement("div",{className:"invalid-feedback ml-2",id:"invalid"},"Please choose a valid address.")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-secondary btn-block",onClick:function(){var t=document.getElementById("sc_address").value;e.checkAddress(t),e.handleLoadSCFormSubmit(t)}},"Upload a Smart Contract from an address")))))}}]),t}(a.Component);function h(e){var t=[];return Object.keys(e).map((function(n,a){return t.push(r.a.createElement("tr",{key:a},r.a.createElement("th",null,n),r.a.createElement("td",null,e[n])))})),t}var p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).render=function(){try{return r.a.createElement("table",{className:"table table-hover table-sm table-bordered"},r.a.createElement("tbody",null,h(n.props.metric)))}catch(e){return r.a.createElement(r.a.Fragment,null)}},n}return Object(m.a)(t,e),t}(a.Component),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).render=function(){try{return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("tbody",null,h(n.props.errors[0])))}catch(e){return r.a.createElement(r.a.Fragment,null)}},n}return Object(m.a)(t,e),t}(a.Component),y=n(28),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(y.b,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"PASO")),r.a.createElement("h4",{className:"text-center font-weight-lighter font-italic"},"PASO (PArse SOlidity smart contract code)"))},n}return Object(m.a)(t,e),t}(a.Component),g=n(44);function O(e){var t=g.parse(e,{loc:!0}),n=JSON.stringify(t);try{window.ast_j=t}catch(i){}var a={mapping:'"type":"Mapping"',functions:'"type":"FunctionDefinition"',payable:'"stateMutability":"payable"',events:'"type":"EventDefinition"',modifiers:'"type":"ModifierDefinition"',contracts_definition:'"type":"ContractDefinition"',addresses:'"type":"ElementaryTypeName","name":"address"',contracts:'"kind":"contract"',libraries:'"kind":"library"',interfaces:'"kind":"interface"'},r={version:k(n),total_lines:t.loc.end.line,comments:j(e),blanks:e.match(/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm).length};for(var c in a){var o=a[c];r[c]=(n.match(new RegExp(o,"g"))||[]).length}return r}var j=function(e){var t=e.match(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/g);return t?t.length:0},k=function(e){var t=e.match(/"name":"solidity","value":"\^(\d{1,}.\d{1,}.\d{1,})/);return t?t[1]:"Not defined"},S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleFormSubmit=function(e){try{n.setState({metric:O(e)})}catch(t){n.setState({metric:null,errors:t.errors})}},n.render=function(){return r.a.createElement("main",{className:"container"},r.a.createElement(E,null),r.a.createElement(f,null),r.a.createElement(u,{onFormSubmit:n.handleFormSubmit}),r.a.createElement(p,{metric:n.state.metric}),r.a.createElement(v,{errors:n.state.errors}))},n.state={},n}return Object(m.a)(t,e),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.4b4cfd1d.chunk.js.map