"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4349],{2193:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var s=o(4848),r=o(8453);const t={},c="Promise Wrappers",i={id:"documentation/promise-wrapper",title:"Promise Wrappers",description:"In addition to errback interface there is thin wrapper to expose Promise-based api",source:"@site/docs/documentation/promise-wrapper.mdx",sourceDirName:"documentation",slug:"/documentation/promise-wrapper",permalink:"/node-mysql2/docs/documentation/promise-wrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/documentation/promise-wrapper.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Prepared Statements",permalink:"/node-mysql2/docs/documentation/prepared-statements"},next:{title:"Using MySQL2 with TypeScript",permalink:"/node-mysql2/docs/documentation/typescript-examples"}},a={},l=[{value:"Basic Promise",id:"basic-promise",level:2},{value:"ES7 Async Await",id:"es7-async-await",level:2},{value:"With CO",id:"with-co",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"promise-wrappers",children:"Promise Wrappers"})}),"\n",(0,s.jsx)(n.p,{children:"In addition to errback interface there is thin wrapper to expose Promise-based api"}),"\n",(0,s.jsx)(n.h2,{id:"basic-promise",children:"Basic Promise"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* eslint-env es6 */\nconst mysql = require('mysql2/promise'); // or require('mysql2').createConnectionPromise\nmysql\n  .createConnection({\n    /* same parameters as for non-promise createConnection */\n  })\n  .then((conn) => conn.query('select foo from bar'))\n  .then(([rows, fields]) => console.log(rows[0].foo));\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const pool = require('mysql2/promise').createPool({}); // or require('mysql2').createPoolPromise({}) or require('mysql2').createPool({}).promise()\npool\n  .getConnection()\n  .then((conn) => {\n    const res = conn.query('select foo from bar');\n    conn.release();\n    return res;\n  })\n  .then((result) => {\n    console.log(result[0][0].foo);\n  })\n  .catch((err) => {\n    console.log(err); // any of connection time or query time errors from above\n  });\n"})}),"\n",(0,s.jsx)(n.h2,{id:"es7-async-await",children:"ES7 Async Await"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"async function example1() {\n  const mysql = require('mysql2/promise');\n  const conn = await mysql.createConnection({ database: test });\n  const [rows, fields] = await conn.execute('select ?+? as sum', [2, 2]);\n  await conn.end();\n}\n\nasync function example2() {\n  const mysql = require('mysql2/promise');\n  const pool = mysql.createPool({ database: test });\n  // execute in parallel, next console.log in 3 seconds\n  await Promise.all([\n    pool.query('select sleep(2)'),\n    pool.query('select sleep(3)'),\n  ]);\n  console.log('3 seconds after');\n  await pool.end();\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"with-co",children:["With ",(0,s.jsx)(n.a,{href:"https://github.com/tj/co",children:"CO"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst co = require('co');\nco(function* () {\n  const c = yield mysql.createConnectionPromise({\n    user: 'root',\n    namedPlaceholders: true,\n  });\n  const rows = yield c.query('show databases');\n  console.log(rows);\n  console.log(yield c.execute('select 1+:toAdd as qqq', { toAdd: 10 }));\n  yield c.end();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Examples in ",(0,s.jsx)(n.a,{href:"/docs/examples/promise-wrapper/co-await",children:"/examples/promise-co-await"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var s=o(6540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);