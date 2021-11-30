(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[8],{312:function(t,e,n){"use strict";n.r(e);var i=n(9),o=n(10),a=n(17),r=n(12),l=n(11),c=n(0),g=n.n(c),d=n(130),u=(n(139),n(140),n(87)),m=n(89),s=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).invokeParentMethod=o.invokeParentMethod.bind(Object(a.a)(o)),o.invokeParentMethodOpenPDF=o.invokeParentMethodOpenPDF.bind(Object(a.a)(o)),o.invokeParentMethodDownloadPDF=o.invokeParentMethodDownloadPDF.bind(Object(a.a)(o)),o.invokeParentMethodPrintPDF=o.invokeParentMethodPrintPDF.bind(Object(a.a)(o)),o.invokeParentMethodDeleteInvoice=o.invokeParentMethodDeleteInvoice.bind(Object(a.a)(o)),o}return Object(o.a)(n,[{key:"invokeParentMethod",value:function(){this.props.context.componentParent.methodFromParent(this.props,"edit")}},{key:"invokeParentMethodDownloadPDF",value:function(){this.props.context.componentParent.methodFromParent(this.props,"downloadPDF")}},{key:"invokeParentMethodOpenPDF",value:function(){this.props.context.componentParent.methodFromParent(this.props,"openPDF")}},{key:"invokeParentMethodPrintPDF",value:function(){this.props.context.componentParent.methodFromParent(this.props,"printPDF")}},{key:"invokeParentMethodDeleteInvoice",value:function(){this.props.context.componentParent.methodFromParent(this.props,"deleteInvoice")}},{key:"render",value:function(){return g.a.createElement("span",null,g.a.createElement("button",{onClick:this.invokeParentMethod,className:"btn bnt-sm btn-info mr-1"},"Open"),g.a.createElement("button",{onClick:this.invokeParentMethodDownloadPDF,className:"btn bnt-sm btn-primary mr-1",title:"Download PDF"},g.a.createElement(u.a,{icon:m.a})),g.a.createElement("button",{onClick:this.invokeParentMethodOpenPDF,className:"btn bnt-sm btn-primary mr-1",title:"Open PDF"},g.a.createElement(u.a,{icon:m.c})),g.a.createElement("button",{onClick:this.invokeParentMethodPrintPDF,className:"btn bnt-sm btn-primary mr-1",title:"Print PDF"},g.a.createElement(u.a,{icon:m.d})),g.a.createElement("button",{onClick:this.invokeParentMethodDeleteInvoice,className:"btn bnt-sm btn-danger",title:"Delete Invoice"},g.a.createElement(u.a,{icon:m.e})))}}]),n}(c.Component),h=n(65),b=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={context:{componentParent:Object(a.a)(t)},frameworkComponents:{actionRenderer:s},defaultColDef:{sortable:!0,filter:!0,resizable:!0},columnDefs:[{headerName:"Invoice No",field:"invoiceNo"},{headerName:"Invoice Date",field:"invoiceDate"},{headerName:"Due Date",field:"dueDate"},{headerName:"Currency",field:"currency"},{headerName:"Invoice To",field:"invoiceTo"},{headerName:"Action",field:"invoiceNo",cellRenderer:"actionRenderer",colId:"params",width:180}],rowData:localStorage.getItem("invoices")?JSON.parse(localStorage.getItem("invoices")):[]},t.onGridReady=function(e){t.gridApi=e.api,t.gridColumnApi=e.columnApi,t.autoSizeAll(!1)},t.autoSizeAll=function(e){var n=[];t.gridColumnApi.getAllColumns().forEach((function(t){n.push(t.colId)})),t.gridColumnApi.autoSizeColumns(n,e)},t.methodFromParent=function(e,n){if("edit"===n)t.props.history.push("/",{uuid:e.data.uuid});else{var i=t.state.rowData.find((function(t,n){return t.uuid===e.data.uuid}));if("downloadPDF"===n)h.a.downloadInvoice(i);else if("openPDF"===n)h.a.openInvoice(i);else if("printPDF"===n)h.a.printInvoice(i);else if("deleteInvoice"===n&&window.confirm("Are you sure you wish to delete this invoice?")){var o=t.state;o.rowData=o.rowData.filter((function(t,n){return t.uuid!==e.data.uuid})),t.setState(o),localStorage.setItem("invoices",JSON.stringify(o.rowData))}}},t.methodFromParent=t.methodFromParent.bind(Object(a.a)(t)),t}return Object(o.a)(n,[{key:"render",value:function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12"},g.a.createElement("h5",null,"Invoices"))),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12"},g.a.createElement("div",{style:{height:"400px",width:"100%"},className:"ag-theme-alpine"},g.a.createElement(d.AgGridReact,{rowSelection:"single",context:this.state.context,columnDefs:this.state.columnDefs,rowData:this.state.rowData,defaultColDef:this.state.defaultColDef,onGridReady:this.onGridReady,frameworkComponents:this.state.frameworkComponents})))))}}]),n}(c.Component);e.default=b},65:function(t,e,n){"use strict";var i=n(9),o=n(66),a=n.n(o),r=n(67),l=n.n(r);a.a.vfs=l.a.pdfMake.vfs;var c=function t(){Object(i.a)(this,t)};c.defaultSettings=localStorage.getItem("defaultSettings")?JSON.parse(localStorage.getItem("defaultSettings")):{imgSrc:"",invoiceFrom:"",terms:"",defaultTemplate:"temp1"},c.docDefinition=localStorage.getItem("docDefinition")?JSON.parse(localStorage.getItem("docDefinition")):{backgroundColor:"#0069D9",watermark:{text:"",opacity:.3,bold:!1,italics:!1},pageSize:"A4",pageOrientation:"portrait"},c.setSettings=function(){localStorage.getItem("defaultSettings")&&(c.defaultSettings=JSON.parse(localStorage.getItem("defaultSettings"))),localStorage.getItem("docDefinition")&&(c.docDefinition=JSON.parse(localStorage.getItem("docDefinition")))},c.downloadInvoice=function(t){c.setSettings();var e=c.getTemplateWithDef(t);a.a.createPdf(e).download("Invoice No#"+t.invoiceNo)},c.openInvoice=function(t){c.setSettings();var e=c.getTemplateWithDef(t);a.a.createPdf(e).open()},c.printInvoice=function(t){c.setSettings();var e=c.getTemplateWithDef(t);a.a.createPdf(e).print()},c.getSubtotal=function(t){return t.reduce((function(t,e){return Number(t)+Number(e.amount)}),0).toFixed(2)},c.getTotal=function(t,e,n){return(c.getSubtotal(t)-Number(e||0)+Number(n||0)).toFixed(2)},c.getTemplateWithDef=function(t){var e=null;switch(c.defaultSettings.defaultTemplate){case"temp1":e=c.generateDocDef(t);break;case"temp2":e=c.generateDocDefTemplate2(t);break;case"temp3":e=c.generateDocDefTemplate3(t);break;case"temp4":e=c.generateDocDefTemplate4(t);break;case"temp5":e=c.generateDocDefTemplate5(t);break;default:e=c.generateDocDef(t)}return e},c.generateDocDef=function(t){var e=c.docDefinition,n=e.backgroundColor,i=e.watermark,o=e.pageSize,a=e.pageOrientation,r=[[{text:"#",style:"tableHeader"},{text:"Item",style:"tableHeader"},{text:"Qty",style:"tableHeader",alignment:"center"},{text:"Rate",style:"tableHeader",alignment:"right"},{text:"GST",style:"tableHeader",alignment:"center"},{text:"Amount",style:"tableHeader",alignment:"right"}]];0===t.items.length&&r.push(["","","","","",""]);for(var l=0;l<t.items.length;l++){var g=t.items[l];r.push([l+1,g.title,{text:g.quantity,alignment:"center"},{text:g.rate,alignment:"right"},{text:g.gst,alignment:"center"},{text:g.amount,alignment:"right"}])}return{pageSize:o,pageOrientation:a,watermark:{text:i.text,color:n,opacity:Number(i.opacity),bold:i.bold,italics:i.italics},info:{title:"Invoice No#"+t.invoiceNo,author:"Bhaumik Patel",subject:"Invoice No#"+t.invoiceNo,keywords:"Invoice No#"+t.invoiceNo},footer:function(e,i,o){return[{canvas:[{type:"rect",x:0,y:0,w:o.width,h:5,color:n}]},{table:{widths:["80%","20%"],body:[[{text:t.footNote,alignment:"left",fontSize:7,margin:[40,0,0,0]},{text:"Page "+e.toString()+" of "+i+"   ",alignment:"right",margin:[0,10,40,0]}]]},layout:"noBorders"}]},header:function(t,e,i){return[{canvas:[{type:"rect",x:0,y:10,w:i.width,h:15,color:n}]}]},content:[{columns:[{width:"auto",columns:[{image:t.imgSrc?t.imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",width:100,height:100}]},{width:"*",text:[{text:"Invoice No: #"+t.invoiceNo,fontSize:15,bold:!0,alignment:"right",lineHeight:1.2},"\n",{text:"Invoice Date: "+t.invoiceDate,alignment:"right"},"\n",{text:"Due Date: "+t.dueDate,alignment:"right"}]}]},{style:"tableExample",table:{headerRows:1,widths:["auto","*"],body:[[{text:"Bill From",style:"tableHeader"},{text:"Bill For",style:"tableHeader"}],[t.invoiceFrom,t.invoiceTo]]},layout:{fillColor:function(t,e,n){return 0===t?"#CCCCCC":null}}},{style:"tableExample",table:{headerRows:1,widths:["auto","*",50,60,30,80],body:r},layout:"lightHorizontalLines"},{columns:[{width:"*",text:[{text:""!==t.terms?"Terms\n"+t.terms:"",fontSize:10}]},{width:"auto",columns:[{width:"*",text:[{text:"Subtotal",alignment:"right",lineHeight:1.2},"\n",{text:"Discounts",alignment:"right",lineHeight:1.2},"\n",{text:"Shipping",alignment:"right",lineHeight:1.2},"\n",{canvas:[{type:"line",x1:0,y1:5,x2:250,y2:5,lineWidth:3}]},{text:"Total ("+(t.currency||"USD")+")",fontSize:12,bold:!0,alignment:"right"}]},{width:"auto",text:[{text:c.getSubtotal(t.items),alignment:"right",lineHeight:1.2},"\n",{text:t.discounts>0?"-"+t.discounts:t.discounts,alignment:"right",lineHeight:1.2},"\n",{text:t.shipping,alignment:"right",lineHeight:1.2},"\n",{text:c.getTotal(t.items,t.discounts,t.shipping),fontSize:12,bold:!0,alignment:"right"}]}]}]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},tableExample:{margin:[0,5,0,15]},tableHeader:{bold:!0,fontSize:13,color:"black"}},defaultStyle:{columnGap:15}}},c.generateDocDefTemplate2=function(t){var e=c.docDefinition,n=e.backgroundColor,i=e.watermark,o=e.pageSize,r=e.pageOrientation,l=[[{text:"#",style:"tableHeader",alignment:"right",color:"white"},{text:"Item",style:"tableHeader",color:"white"},{text:"Qty",style:"tableHeader",alignment:"center",color:"white"},{text:"Rate",style:"tableHeader",alignment:"right",color:"white"},{text:"GST",style:"tableHeader",alignment:"center",color:"white"},{text:"Amount",style:"tableHeader",alignment:"right",color:"white"}]];0===t.items.length&&l.push(["","","","","",""]);for(var g=0;g<t.items.length;g++){var d=t.items[g];l.push([{text:g+1,alignment:"right"},d.title,{text:d.quantity,alignment:"center"},{text:d.rate,alignment:"right"},{text:d.gst,alignment:"center"},{text:d.amount,alignment:"right"}])}return a.a.tableLayouts={exampleLayout:{hLineWidth:function(t,e){return 0===t||t===e.table.body.length?0:t===e.table.headerRows?2:1},vLineWidth:function(t){return 0},hLineColor:function(t,e){return 1===t?"black":"#aaa"},fillColor:function(t,e){return 0===t?n:t%2===0?"#CCCCCC":null},paddingLeft:function(t){return 8},paddingRight:function(t,e){return 3},paddingTop:function(t,e){return 3},paddingBottom:function(t,e){return 3}}},{pageSize:o,pageOrientation:r,watermark:{text:i.text,color:n,opacity:Number(i.opacity),bold:i.bold,italics:i.italics},info:{title:"Invoice No#"+t.invoiceNo,author:"Bhaumik Patel",subject:"Invoice No#"+t.invoiceNo,keywords:"Invoice No#"+t.invoiceNo},footer:function(e,i,o){return[{canvas:[{type:"rect",x:0,y:0,w:o.width,h:3,color:n}]},{table:{widths:["80%","20%"],body:[[{text:t.footNote,alignment:"left",fontSize:7,margin:[40,0,0,0]},{text:"Page "+e.toString()+" of "+i+"   ",alignment:"right",margin:[0,10,40,0]}]]},layout:"noBorders"}]},header:function(t,e,i){return[{canvas:[{type:"rect",x:0,y:10,w:i.width,h:3,color:n}]}]},content:[{columns:[{width:"auto",columns:[{image:t.imgSrc?t.imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",width:100,height:100}]},{width:"*",text:[{text:t.invoiceFrom}]},{width:"*",text:[{text:"Invoice No: #"+t.invoiceNo,fontSize:15,bold:!0,alignment:"right",lineHeight:1.2},"\n",{text:"Invoice Date: "+t.invoiceDate,alignment:"right"},"\n",{text:"Due Date: "+t.dueDate,alignment:"right"}]}]},"\nBill To",{canvas:[{type:"line",x1:0,y1:0,x2:515,y2:0,lineWidth:1}]},t.invoiceTo,"\n",{style:"tableExample",table:{headerRows:1,widths:["auto","*",50,60,30,80],body:l},layout:"exampleLayout",dontBreakRows:!0},{columns:[{width:"*",text:""},{width:"auto",columns:[{width:"*",text:[{text:"Subtotal",alignment:"right",lineHeight:1.2},"\n",{text:"Discounts",alignment:"right",lineHeight:1.2},"\n",{text:"Shipping",alignment:"right",lineHeight:1.2},"\n",{text:"\t\t\tTotal ("+(t.currency||"USD")+")",fontSize:12,bold:!0,alignment:"right",background:n,color:"#FFF"}]},{width:"auto",text:[{text:c.getSubtotal(t.items),alignment:"right",lineHeight:1.2},"\n",{text:t.discounts>0?"-"+t.discounts:t.discounts,alignment:"right",lineHeight:1.2},"\n",{text:t.shipping,alignment:"right",lineHeight:1.2},"\n",{text:c.getTotal(t.items,t.discounts,t.shipping),fontSize:12,bold:!0,alignment:"right",background:n,color:"#FFF"}]}]}]},{text:[{text:""!==t.terms?"\nTerms\n"+t.terms:"",fontSize:10}]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},tableExample:{margin:[0,5,0,15]},tableHeader:{bold:!0,fontSize:13,color:"black"}},defaultStyle:{columnGap:15}}},c.generateDocDefTemplate3=function(t){var e=c.docDefinition,n=e.backgroundColor,i=e.watermark,o=e.pageSize,r=e.pageOrientation,l=[[{text:"#",style:"tableHeader",alignment:"right",color:"white"},{text:"Item",style:"tableHeader",color:"white"},{text:"Qty",style:"tableHeader",alignment:"center",color:"white"},{text:"Rate",style:"tableHeader",alignment:"right",color:"white"},{text:"GST",style:"tableHeader",alignment:"center",color:"white"},{text:"Amount",style:"tableHeader",alignment:"right",color:"white"}]];0===t.items.length&&l.push(["","","","","",""]);for(var g=0;g<t.items.length;g++){var d=t.items[g];l.push([{text:g+1,alignment:"right"},d.title,{text:d.quantity,alignment:"center"},{text:d.rate,alignment:"right"},{text:d.gst,alignment:"center"},{text:d.amount,alignment:"right"}])}a.a.tableLayouts={totalLayout:{hLineWidth:function(t,e){return 1},vLineWidth:function(t){return 0},hLineColor:function(t,e){return"#aaa"},fillColor:function(t,e){return 0===t||t%2===0?"#e8e8e8":null},paddingLeft:function(t){return 8},paddingRight:function(t,e){return 3},paddingTop:function(t,e){return 3},paddingBottom:function(t,e){return 3}},exampleLayout:{hLineWidth:function(t,e){return 0===t||t===e.table.body.length?0:t===e.table.headerRows?2:1},vLineWidth:function(t){return 0},hLineColor:function(t,e){return 1===t?"black":"#aaa"},fillColor:function(t,e){return 0===t?n:t%2===0?"#e8e8e8":null},paddingLeft:function(t){return 8},paddingRight:function(t,e){return 3},paddingTop:function(t,e){return 3},paddingBottom:function(t,e){return 3}}};var u=(new Date).toDateString();return{pageSize:o,pageOrientation:r,watermark:{text:i.text,color:n,opacity:Number(i.opacity),bold:i.bold,italics:i.italics},info:{title:"Invoice No#"+t.invoiceNo,author:"Bhaumik Patel",subject:"Invoice No#"+t.invoiceNo,keywords:"Invoice No#"+t.invoiceNo},footer:function(t,e,n){return{text:"".concat(u," : Page ").concat(t.toString()," of ").concat(e.toString()),alignment:"center",fontSize:7}},header:function(t,e,i){return[{canvas:[{type:"rect",x:0,y:10,w:i.width,h:3,color:n}]}]},content:[{columns:[{width:"*",text:[{text:t.invoiceFrom}]},{width:"auto",columns:[{image:t.imgSrc?t.imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",width:100,height:100}]},{width:"*",text:[{text:"Invoice No: #"+t.invoiceNo,fontSize:15,bold:!0,alignment:"right",lineHeight:1.2},"\n",{text:"Invoice Date: "+t.invoiceDate,alignment:"right"},"\n",{text:"Due Date: "+t.dueDate,alignment:"right"}]}]},{layout:"lightHorizontalLines",table:{headerRows:1,widths:["*"],body:[[{text:"Bill To",bold:!0,fillColor:"#F9F9F9"}],[{text:t.invoiceTo,fillColor:"#F9F9F9"}]]}},"\n",{margin:[0,0,0,0],layout:"exampleLayout",dontBreakRows:!0,table:{headerRows:1,widths:["auto","*",50,60,30,80],body:l}},{columns:[{width:"*",text:""},{width:"auto",columns:[{layout:"totalLayout",table:{headerRows:0,widths:["*",80],body:[[{text:"Subtotal",bold:!0,alignment:"right"},{text:c.getSubtotal(t.items),bold:!1,alignment:"right"}],[{text:"Discounts",bold:!0,alignment:"right"},{text:t.discounts>0?"-"+t.discounts:t.discounts,bold:!1,alignment:"right"}],[{text:"Shipping",bold:!0,alignment:"right"},{text:t.shipping,bold:!1,alignment:"right"}],[{text:"Total ("+(t.currency||"USD")+")",bold:!0,alignment:"right"},{text:c.getTotal(t.items,t.discounts,t.shipping),bold:!1,alignment:"right"}]]}}]}]},{stack:[{text:""!==t.terms?"\nTerms\n"+t.terms:"",fontSize:10},"\n\n\n\n\n",{text:"Signature / Stamp",color:n},{text:"Place: "},{text:"Date: "}]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},tableExample:{margin:[0,5,0,15]},tableHeader:{bold:!0,fontSize:13,color:"black"}},defaultStyle:{columnGap:15}}},c.generateDocDefTemplate4=function(t){var e=c.docDefinition,n=e.backgroundColor,i=e.watermark,o=e.pageSize,r=e.pageOrientation,l=[[{text:"#",style:"tableHeader",alignment:"right",color:"white"},{text:"Item",style:"tableHeader",color:"white"},{text:"Qty",style:"tableHeader",alignment:"center",color:"white"},{text:"Rate",style:"tableHeader",alignment:"right",color:"white"},{text:"GST",style:"tableHeader",alignment:"center",color:"white"},{text:"Amount",style:"tableHeader",alignment:"right",color:"white"}]];0===t.items.length&&l.push(["","","","","",""]);for(var g=0;g<t.items.length;g++){var d=t.items[g];l.push([{text:g+1,alignment:"right"},d.title,{text:d.quantity,alignment:"center"},{text:d.rate,alignment:"right"},{text:d.gst,alignment:"center"},{text:d.amount,alignment:"right"}])}a.a.tableLayouts={totalLayout:{hLineWidth:function(t,e){return 1},vLineWidth:function(t){return 0},hLineColor:function(t,e){return"#aaa"},fillColor:function(t,e){return 0===t||t%2===0?"#e8e8e8":null},paddingLeft:function(t){return 8},paddingRight:function(t,e){return 3},paddingTop:function(t,e){return 3},paddingBottom:function(t,e){return 3}},exampleLayout:{hLineWidth:function(t,e){return 0===t||t===e.table.body.length?1:t===e.table.headerRows?2:1},vLineWidth:function(t){return 1},hLineColor:function(t,e){return 0===t||t===e.table.body.length||1===t?"black":"#aaa"},fillColor:function(t,e){return 0===t?n:t%2===0?"#e8e8e8":null},paddingLeft:function(t){return 8},paddingRight:function(t,e){return 3},paddingTop:function(t,e){return 3},paddingBottom:function(t,e){return 3}}};var u=(new Date).toDateString();return{pageSize:o,pageOrientation:r,watermark:{text:i.text,color:n,opacity:Number(i.opacity),bold:i.bold,italics:i.italics},info:{title:"Invoice No#"+t.invoiceNo,author:"Bhaumik Patel",subject:"Invoice No#"+t.invoiceNo,keywords:"Invoice No#"+t.invoiceNo},footer:function(t,e,n){return{text:"".concat(u," : Page ").concat(t.toString()," of ").concat(e.toString()),alignment:"center",fontSize:8}},header:function(t,e,i){return[{canvas:[{type:"rect",x:0,y:10,w:i.width,h:3,color:n}]}]},content:[{columns:[{width:"*",text:[{text:t.invoiceFrom}]},{width:"auto",columns:[{image:t.imgSrc?t.imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",width:100,height:100}]},{text:[{text:t.invoiceTo,alignment:"right"}]}]},{columns:[{width:"*",text:[{text:"Invoice No: #"+t.invoiceNo,fontSize:15,bold:!0,lineHeight:1.2}]},{text:"Invoice Date: "+t.invoiceDate,alignment:"right"},{text:"Due Date: "+t.dueDate,alignment:"right"}]},"\n",{margin:[0,0,0,0],layout:"exampleLayout",dontBreakRows:!0,table:{headerRows:1,widths:["auto","*",50,60,30,80],body:l}},{columns:[{width:"*",text:""},{width:"auto",columns:[{layout:"totalLayout",table:{headerRows:0,widths:["*",80],body:[[{text:"Subtotal",bold:!0,alignment:"right"},{text:c.getSubtotal(t.items),bold:!1,alignment:"right"}],[{text:"Discounts",bold:!0,alignment:"right"},{text:t.discounts>0?"-"+t.discounts:t.discounts,bold:!1,alignment:"right"}],[{text:"Shipping",bold:!0,alignment:"right"},{text:t.shipping,bold:!1,alignment:"right"}],[{text:"Total ("+(t.currency||"USD")+")",bold:!0,alignment:"right"},{text:c.getTotal(t.items,t.discounts,t.shipping),bold:!1,alignment:"right"}]]}}]}]},{stack:[{text:""!==t.terms?"\nTerms\n"+t.terms:"",fontSize:10},"\n\n\n\n",{canvas:[{type:"line",x1:0,y1:5,x2:250,y2:5,lineWidth:1}]},{text:"Signature / Stamp",color:n},{text:"Place: "},{text:"Date: "}]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},tableExample:{margin:[0,5,0,15]},tableHeader:{bold:!0,fontSize:13,color:"black"}},defaultStyle:{columnGap:15}}},c.generateDocDefTemplate5=function(t){var e=c.docDefinition,n=e.backgroundColor,i=e.watermark,o=e.pageSize,a=e.pageOrientation,r=[[{text:"#",style:"tableHeader"},{text:"Item",style:"tableHeader"},{text:"Qty",style:"tableHeader",alignment:"center"},{text:"Rate",style:"tableHeader",alignment:"right"},{text:"GST",style:"tableHeader",alignment:"center"},{text:"Amount",style:"tableHeader",alignment:"right"}]];0===t.items.length&&r.push(["","","","","",""]);for(var l=0;l<t.items.length;l++){var g=t.items[l];r.push([l+1,g.title,{text:g.quantity,alignment:"center"},{text:g.rate,alignment:"right"},{text:g.gst,alignment:"center"},{text:g.amount,alignment:"right"}])}return{pageSize:o,pageOrientation:a,watermark:{text:i.text,color:n,opacity:Number(i.opacity),bold:i.bold,italics:i.italics},info:{title:"Invoice No#"+t.invoiceNo,author:"Bhaumik Patel",subject:"Invoice No#"+t.invoiceNo,keywords:"Invoice No#"+t.invoiceNo},footer:function(e,i,o){return[{canvas:[{type:"rect",x:0,y:0,w:o.width,h:5,color:n}]},{table:{widths:["80%","20%"],body:[[{text:t.footNote,alignment:"left",fontSize:7,margin:[40,0,0,0]},{text:"Page "+e.toString()+" of "+i+"   ",alignment:"right",margin:[0,10,40,0]}]]},layout:"noBorders"}]},pageMargins:[40,85,40,40],header:function(e,i,o){return[{table:{widths:["50%","50%"],body:[[{image:t.imgSrc?t.imgSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",width:70,height:50,margin:[40,10,0,0]},{margin:[40,10,40,0],text:[{text:"Invoice No: #"+t.invoiceNo,fontSize:15,bold:!0,alignment:"right",lineHeight:1.2},"\n",{text:"Invoice Date: "+t.invoiceDate,alignment:"right"},"\n",{text:"Due Date: "+t.dueDate,alignment:"right"}]}]]},layout:"noBorders"},{canvas:[{type:"rect",x:0,y:0,w:o.width,h:5,color:n}]}]},content:[{style:"tableExample",table:{headerRows:1,widths:["auto","*"],body:[[{text:"Bill From",style:"tableHeader"},{text:"Bill For",style:"tableHeader"}],[t.invoiceFrom,t.invoiceTo]]},layout:{fillColor:function(t,e,n){return 0===t?"#CCCCCC":null}}},{style:"tableExample",table:{headerRows:1,widths:["auto","*",50,60,30,80],body:r},layout:"lightHorizontalLines"},{columns:[{width:"*",text:[{text:""!==t.terms?"Terms\n"+t.terms:"",fontSize:10}]},{width:"auto",columns:[{width:"*",text:[{text:"Subtotal",alignment:"right",lineHeight:1.2},"\n",{text:"Discounts",alignment:"right",lineHeight:1.2},"\n",{text:"Shipping",alignment:"right",lineHeight:1.2},"\n",{canvas:[{type:"line",x1:0,y1:5,x2:250,y2:5,lineWidth:3}]},{text:"Total ("+(t.currency||"USD")+")",fontSize:12,bold:!0,alignment:"right"}]},{width:"auto",text:[{text:c.getSubtotal(t.items),alignment:"right",lineHeight:1.2},"\n",{text:t.discounts>0?"-"+t.discounts:t.discounts,alignment:"right",lineHeight:1.2},"\n",{text:t.shipping,alignment:"right",lineHeight:1.2},"\n",{text:c.getTotal(t.items,t.discounts,t.shipping),fontSize:12,bold:!0,alignment:"right"}]}]}]}],styles:{header:{fontSize:18,bold:!0,margin:[0,0,0,10]},subheader:{fontSize:16,bold:!0,margin:[0,10,0,5]},tableExample:{margin:[0,5,0,15]},tableHeader:{bold:!0,fontSize:13,color:"black"}},defaultStyle:{columnGap:15}}},e.a=c}}]);
//# sourceMappingURL=8.aa99c532.chunk.js.map