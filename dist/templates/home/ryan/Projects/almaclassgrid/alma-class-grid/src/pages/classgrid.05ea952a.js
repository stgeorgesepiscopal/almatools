(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{131:function(e,t){},137:function(e,t){},138:function(e,t){},52:function(e,t,n){"use strict";n.r(t);var r=n(50),a=n.n(r),o=n(0),l=n.n(o),c=(n(24),n(132)),i=n.n(c);function u(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t=new Uint8Array(e.target.result),n=i.a.read(t,{type:"array"}),r=n.SheetNames[0],o=n.Sheets[r],l=(t=i.a.utils.sheet_to_json(o),["Monday","Tuesday","Wednesday","Thursday","Friday"]),c=a()(new Set(t.map((function(e){return e["Cycle Day"]+" "+e["Period Abbreviation"]})))),u=a()(new Set(t.map((function(e){return e["Class Room Number"]})))),s=c.sort((function(e,t){var n=e,r=t;return l.forEach((function(e,t){n=n.replace(e,t.toString()),r=r.replace(e,t.toString())})),console.log(n,r),console.log(n>r),n<r?-1:n>r?1:0}));console.log(s),console.log(t[0]);var d=[],m=document.createElement("tr"),f=document.createElement("th");f.innerHTML="Classroom",m.appendChild(f),c.forEach((function(e){var t=document.createElement("th");t.innerHTML=e,m.appendChild(t)})),d.push(m),u.forEach((function(e){var n=document.createElement("tr"),r=document.createElement("td");r.innerHTML=e,n.appendChild(r),c.forEach((function(r){var a=document.createElement("td"),o=t.filter((function(t){return t["Cycle Day"]+" "+t["Period Abbreviation"]===r&&t["Class Room Number"]===e}))[0];o&&(a.innerHTML=o["Last Name"]+"<br />"+o["Class Name"]),n.appendChild(a)})),d.push(n)}));var p=document.getElementById("results_table");d.forEach((function(e){return p.appendChild(e)}));var h=i.a.utils.table_to_book(document.getElementById("results_table"));i.a.writeFile(h,"classgrid.xlsx")},n.readAsArrayBuffer(t)}t.default=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Class Grid Maker"),l.a.createElement("p",null,"Another simple tool for Alma by Ryan Meyers"),l.a.createElement("pre",null,'(Uses the "TEACHER SCHEDULES BY PERIOD/DAY" report)'),l.a.createElement("label",{htmlFor:"csvfile",draggable:"true",onDrop:u},"Choose XLSX file"),l.a.createElement("input",{name:"csvfile",type:"file",onChange:u}),l.a.createElement("table",{id:"results_table"}))}}}]);