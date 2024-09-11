"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1393],{4558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(4848),s=t(8453);const c={tags:["Prepared Statements","execute"]},a="Prepared Statements",o={id:"documentation/prepared-statements",title:"Prepared Statements",description:"Automatic creation, cached and re-used by connection",source:"@site/docs/documentation/prepared-statements.mdx",sourceDirName:"documentation",slug:"/documentation/prepared-statements",permalink:"/node-mysql2/docs/documentation/prepared-statements",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/documentation/prepared-statements.mdx",tags:[{inline:!0,label:"Prepared Statements",permalink:"/node-mysql2/docs/tags/prepared-statements"},{inline:!0,label:"execute",permalink:"/node-mysql2/docs/tags/execute"}],version:"current",frontMatter:{tags:["Prepared Statements","execute"]},sidebar:"docs",previous:{title:"MySQL Server API",permalink:"/node-mysql2/docs/documentation/mysql-server"},next:{title:"Promise Wrappers",permalink:"/node-mysql2/docs/documentation/promise-wrapper"}},i={},l=[{value:"Automatic creation, cached and re-used by connection",id:"automatic-creation-cached-and-re-used-by-connection",level:2},{value:"Manual prepare / execute",id:"manual-prepare--execute",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Serialization of bind parameters",id:"serialization-of-bind-parameters",level:2},{value:"Prepared Statements Helper",id:"prepared-statements-helper",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"prepared-statements",children:"Prepared Statements"})}),"\n",(0,r.jsx)(n.h2,{id:"automatic-creation-cached-and-re-used-by-connection",children:"Automatic creation, cached and re-used by connection"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.code,{children:"connection.query()"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"connection.execute('select 1 + ? + ? as result', [5, 6], (err, rows) => {\n  // rows: [ { result: 12 } ]\n  // internally 'select 1 + ? + ? as result' is prepared first. On subsequent calls cached statement is re-used\n});\n\n// close cached statement for 'select 1 + ? + ? as result'. noop if not in cache\nconnection.unprepare('select 1 + ? + ? as result');\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"connection.execute()"})," will cache the prepared statement for better performance, remove the cache with ",(0,r.jsx)(n.code,{children:"connection.unprepare()"})," when you're done."]}),"\n",(0,r.jsx)(n.h2,{id:"manual-prepare--execute",children:"Manual prepare / execute"}),"\n",(0,r.jsxs)(n.p,{children:["Manually prepared statements doesn't comes with LRU cache and SHOULD be closed using ",(0,r.jsx)(n.code,{children:"statement.close()"})," instead of ",(0,r.jsx)(n.code,{children:"connection.unprepare()"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"connection.prepare('select ? + ? as tests', (err, statement) => {\n  // statement.parameters - array of column definitions, length === number of params, here 2\n  // statement.columns - array of result column definitions. Can be empty if result schema is dynamic / not known\n  // statement.id\n  // statement.query\n\n  statement.execute([1, 2], (err, rows, columns) => {\n    // -> [ { tests: 3 } ]\n  });\n\n  // don't use connection.unprepare(), it won't work!\n  // note that there is no callback here. There is no statement close ack at protocol level.\n  statement.close();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that you should not use statement after connection reset (",(0,r.jsx)(n.code,{children:"changeUser()"})," or disconnect). Statement scope is connection, you need to prepare statement for each new connection in order to use it."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"maxPreparedStatements"})," : We keep the cached statements in a ",(0,r.jsx)(n.a,{href:"https://github.com/isaacs/node-lru-cache",children:"lru-cache"}),". Default size is ",(0,r.jsx)(n.code,{children:"16000"})," but you can use this option to override it. Any statements that are dropped from cache will be ",(0,r.jsx)(n.code,{children:"closed"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"serialization-of-bind-parameters",children:"Serialization of bind parameters"}),"\n",(0,r.jsxs)(n.p,{children:["The bind parameter values passed to ",(0,r.jsx)(n.code,{children:"execute"})," are serialized JS -> MySQL as:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"null"})," -> ",(0,r.jsx)(n.code,{children:"NULL"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"number"})," -> ",(0,r.jsx)(n.code,{children:"DOUBLE"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"boolean"})," -> ",(0,r.jsx)(n.code,{children:"TINY"})," (0 for false, 1 for true)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"object"})," -> depending on prototype:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Date"})," -> ",(0,r.jsx)(n.code,{children:"DATETIME"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"JSON"})," like object - ",(0,r.jsx)(n.code,{children:"JSON"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Buffer"})," -> ",(0,r.jsx)(n.code,{children:"VAR_STRING"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Other -> ",(0,r.jsx)(n.code,{children:"VAR_STRING"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Passing in ",(0,r.jsx)(n.code,{children:"undefined"})," or a ",(0,r.jsx)(n.code,{children:"function"})," will result in an error."]}),"\n",(0,r.jsx)(n.h2,{id:"prepared-statements-helper",children:"Prepared Statements Helper"}),"\n",(0,r.jsxs)(n.p,{children:["MySQL2 provides ",(0,r.jsx)(n.code,{children:"execute"})," helper which will prepare and query the statement. You can also manually prepare / unprepare statement with ",(0,r.jsx)(n.code,{children:"prepare"})," / ",(0,r.jsx)(n.code,{children:"unprepare"})," methods."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"connection.execute(\n  'select ?+1 as qqq, ? as rrr, ? as yyy',\n  [1, null, 3],\n  (err, rows, fields) => {\n    console.log(err, rows, fields);\n    connection.execute(\n      'select ?+1 as qqq, ? as rrr, ? as yyy',\n      [3, null, 3],\n      (err, rows, fields) => {\n        console.log(err, rows, fields);\n        connection.unprepare('select ?+1 as qqq, ? as rrr, ? as yyy');\n        connection.execute(\n          'select ?+1 as qqq, ? as rrr, ? as yyy',\n          [3, null, 3],\n          (err, rows, fields) => {\n            console.log(err, rows, fields);\n          }\n        );\n      }\n    );\n  }\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["For Prepared Statements examples, please see ",(0,r.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:"here"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},c=r.createContext(s);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);