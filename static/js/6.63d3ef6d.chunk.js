(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[6],{239:function(e,a,t){e.exports=t.p+"static/media/Template 1.ee84c0a5.jpg"},240:function(e,a,t){e.exports=t.p+"static/media/Template 2.8b32287c.jpg"},241:function(e,a,t){e.exports=t.p+"static/media/Template 3.26819f93.jpg"},242:function(e,a,t){e.exports=t.p+"static/media/Template 4.617e4266.jpg"},243:function(e,a,t){e.exports=t.p+"static/media/Template 5.5ae6fa86.jpg"},247:function(e,a,t){"use strict";t.r(a);var n=t(46),o=t(57),l=t(9),c=t(10),m=t(16),i=t(12),r=t(11),s=t(0),d=t.n(s),u=t(244),g=t(239),h=t.n(g),p=t(240),f=t.n(p),N=t(241),S=t.n(N),b=t(242),D=t.n(b),E=t(243),v=t.n(E),C=t(21),T=t.n(C),k=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={docDefinition:localStorage.getItem("docDefinition")?JSON.parse(localStorage.getItem("docDefinition")):{backgroundColor:"#0069D9",watermark:{text:"",opacity:.3,bold:!1,italics:!1},pageSize:"A4",pageOrientation:"portrait"},defaultSettings:localStorage.getItem("defaultSettings")?JSON.parse(localStorage.getItem("defaultSettings")):{imgSrc:"",invoiceFrom:"",terms:"",defaultTemplate:"temp1",defaultCurrency:"USD",footNote:""},pageSize:["4A0","2A0","A0","A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"],pageOrientation:["portrait","landscape"],currency:[{code:"AFN",name:"Afghan Afghani"},{code:"ALL",name:"Albanian Lek"},{code:"DZD",name:"Algerian Dinar"},{code:"AOA",name:"Angolan Kwanza"},{code:"ARS",name:"Argentine Peso"},{code:"AMD",name:"Armenian Dram"},{code:"AWG",name:"Aruban Florin"},{code:"AUD",name:"Australian Dollar"},{code:"AZN",name:"Azerbaijani Manat"},{code:"BSD",name:"Bahamian Dollar"},{code:"BHD",name:"Bahraini Dinar"},{code:"BDT",name:"Bangladeshi Taka"},{code:"BBD",name:"Barbadian Dollar"},{code:"BYN",name:"Belarusian Ruble"},{code:"BZD",name:"Belize Dollar"},{code:"BMD",name:"Bermudan Dollar"},{code:"BTN",name:"Bhutanese Ngultrum"},{code:"BTC",name:"Bitcoin"},{code:"BOB",name:"Bolivian Boliviano"},{code:"BAM",name:"Bosnia-Herzegovina Convertible Mark"},{code:"BWP",name:"Botswanan Pula"},{code:"BRL",name:"Brazilian Real"},{code:"GBP",name:"British Pound Sterling"},{code:"BND",name:"Brunei Dollar"},{code:"BGN",name:"Bulgarian Lev"},{code:"BIF",name:"Burundian Franc"},{code:"XOF",name:"CFA Franc BCEAO"},{code:"XAF",name:"CFA Franc BEAC"},{code:"XPF",name:"CFP Franc"},{code:"KHR",name:"Cambodian Riel"},{code:"CAD",name:"Canadian Dollar"},{code:"CVE",name:"Cape Verdean Escudo"},{code:"KYD",name:"Cayman Islands Dollar"},{code:"CLP",name:"Chilean Peso"},{code:"CLF",name:"Chilean Unit of Account (UF)"},{code:"CNY",name:"Chinese Yuan"},{code:"CNH",name:"Chinese Yuan (Offshore)"},{code:"COP",name:"Colombian Peso"},{code:"KMF",name:"Comorian Franc"},{code:"CDF",name:"Congolese Franc"},{code:"CRC",name:"Costa Rican Col\xf3n"},{code:"HRK",name:"Croatian Kuna"},{code:"CUC",name:"Cuban Convertible Peso"},{code:"CUP",name:"Cuban Peso"},{code:"CZK",name:"Czech Republic Koruna"},{code:"DKK",name:"Danish Krone"},{code:"DJF",name:"Djiboutian Franc"},{code:"DOP",name:"Dominican Peso"},{code:"XCD",name:"East Caribbean Dollar"},{code:"EGP",name:"Egyptian Pound"},{code:"ERN",name:"Eritrean Nakfa"},{code:"ETB",name:"Ethiopian Birr"},{code:"EUR",name:"Euro"},{code:"FKP",name:"Falkland Islands Pound"},{code:"FJD",name:"Fijian Dollar"},{code:"GMD",name:"Gambian Dalasi"},{code:"GEL",name:"Georgian Lari"},{code:"GHS",name:"Ghanaian Cedi"},{code:"GIP",name:"Gibraltar Pound"},{code:"XAU",name:"Gold Ounce"},{code:"GTQ",name:"Guatemalan Quetzal"},{code:"GGP",name:"Guernsey Pound"},{code:"GNF",name:"Guinean Franc"},{code:"GYD",name:"Guyanaese Dollar"},{code:"HTG",name:"Haitian Gourde"},{code:"HNL",name:"Honduran Lempira"},{code:"HKD",name:"Hong Kong Dollar"},{code:"HUF",name:"Hungarian Forint"},{code:"ISK",name:"Icelandic Kr\xf3na"},{code:"INR",name:"Indian Rupee"},{code:"IDR",name:"Indonesian Rupiah"},{code:"IRR",name:"Iranian Rial"},{code:"IQD",name:"Iraqi Dinar"},{code:"ILS",name:"Israeli New Sheqel"},{code:"JMD",name:"Jamaican Dollar"},{code:"JPY",name:"Japanese Yen"},{code:"JEP",name:"Jersey Pound"},{code:"JOD",name:"Jordanian Dinar"},{code:"KZT",name:"Kazakhstani Tenge"},{code:"KES",name:"Kenyan Shilling"},{code:"KWD",name:"Kuwaiti Dinar"},{code:"KGS",name:"Kyrgystani Som"},{code:"LAK",name:"Laotian Kip"},{code:"LBP",name:"Lebanese Pound"},{code:"LSL",name:"Lesotho Loti"},{code:"LRD",name:"Liberian Dollar"},{code:"LYD",name:"Libyan Dinar"},{code:"MOP",name:"Macanese Pataca"},{code:"MKD",name:"Macedonian Denar"},{code:"MGA",name:"Malagasy Ariary"},{code:"MWK",name:"Malawian Kwacha"},{code:"MYR",name:"Malaysian Ringgit"},{code:"MVR",name:"Maldivian Rufiyaa"},{code:"IMP",name:"Manx pound"},{code:"MRU",name:"Mauritanian Ouguiya"},{code:"MRO",name:"Mauritanian Ouguiya (pre-2018)"},{code:"MUR",name:"Mauritian Rupee"},{code:"MXN",name:"Mexican Peso"},{code:"MDL",name:"Moldovan Leu"},{code:"MNT",name:"Mongolian Tugrik"},{code:"MAD",name:"Moroccan Dirham"},{code:"MZN",name:"Mozambican Metical"},{code:"MMK",name:"Myanma Kyat"},{code:"NAD",name:"Namibian Dollar"},{code:"NPR",name:"Nepalese Rupee"},{code:"ANG",name:"Netherlands Antillean Guilder"},{code:"TWD",name:"New Taiwan Dollar"},{code:"NZD",name:"New Zealand Dollar"},{code:"NIO",name:"Nicaraguan C\xf3rdoba"},{code:"NGN",name:"Nigerian Naira"},{code:"KPW",name:"North Korean Won"},{code:"NOK",name:"Norwegian Krone"},{code:"OMR",name:"Omani Rial"},{code:"PKR",name:"Pakistani Rupee"},{code:"XPD",name:"Palladium Ounce"},{code:"PAB",name:"Panamanian Balboa"},{code:"PGK",name:"Papua New Guinean Kina"},{code:"PYG",name:"Paraguayan Guarani"},{code:"PEN",name:"Peruvian Nuevo Sol"},{code:"PHP",name:"Philippine Peso"},{code:"XPT",name:"Platinum Ounce"},{code:"PLN",name:"Polish Zloty"},{code:"QAR",name:"Qatari Rial"},{code:"RON",name:"Romanian Leu"},{code:"RUB",name:"Russian Ruble"},{code:"RWF",name:"Rwandan Franc"},{code:"SHP",name:"Saint Helena Pound"},{code:"SVC",name:"Salvadoran Col\xf3n"},{code:"WST",name:"Samoan Tala"},{code:"SAR",name:"Saudi Riyal"},{code:"RSD",name:"Serbian Dinar"},{code:"SCR",name:"Seychellois Rupee"},{code:"SLL",name:"Sierra Leonean Leone"},{code:"XAG",name:"Silver Ounce"},{code:"SGD",name:"Singapore Dollar"},{code:"SBD",name:"Solomon Islands Dollar"},{code:"SOS",name:"Somali Shilling"},{code:"ZAR",name:"South African Rand"},{code:"KRW",name:"South Korean Won"},{code:"SSP",name:"South Sudanese Pound"},{code:"XDR",name:"Special Drawing Rights"},{code:"LKR",name:"Sri Lankan Rupee"},{code:"SDG",name:"Sudanese Pound"},{code:"SRD",name:"Surinamese Dollar"},{code:"SZL",name:"Swazi Lilangeni"},{code:"SEK",name:"Swedish Krona"},{code:"CHF",name:"Swiss Franc"},{code:"SYP",name:"Syrian Pound"},{code:"STN",name:"S\xe3o Tom\xe9 and Pr\xedncipe Dobra"},{code:"STD",name:"S\xe3o Tom\xe9 and Pr\xedncipe Dobra (pre-2018)"},{code:"TJS",name:"Tajikistani Somoni"},{code:"TZS",name:"Tanzanian Shilling"},{code:"THB",name:"Thai Baht"},{code:"TOP",name:"Tongan Pa'anga"},{code:"TTD",name:"Trinidad and Tobago Dollar"},{code:"TND",name:"Tunisian Dinar"},{code:"TRY",name:"Turkish Lira"},{code:"TMT",name:"Turkmenistani Manat"},{code:"UGX",name:"Ugandan Shilling"},{code:"UAH",name:"Ukrainian Hryvnia"},{code:"AED",name:"United Arab Emirates Dirham"},{code:"USD",name:"United States Dollar"},{code:"UYU",name:"Uruguayan Peso"},{code:"UZS",name:"Uzbekistan Som"},{code:"VUV",name:"Vanuatu Vatu"},{code:"VEF",name:"Venezuelan Bol\xedvar Fuerte (Old)"},{code:"VES",name:"Venezuelan Bol\xedvar Soberano"},{code:"VND",name:"Vietnamese Dong"},{code:"YER",name:"Yemeni Rial"},{code:"ZMW",name:"Zambian Kwacha"},{code:"ZWL",name:"Zimbabwean Dollar"}]},e.handleDefaultSettings=function(a){var t=a.target,l="checkbox"===t.type?t.checked:t.value,c=t.name;e.setState((function(e){return{defaultSettings:Object(o.a)(Object(o.a)({},e.defaultSettings),{},Object(n.a)({},c,l))}}),(function(){return e.setLocalStorage("defaultSettings",e.state.defaultSettings)}))},e.setLocalStorage=function(e,a){localStorage.setItem(e,JSON.stringify(a))},e.onImageChangeDefaultSetting=function(a){a.stopPropagation(),a.preventDefault();var t,n=a.target.files,l=n.length;if(l>0)for(t=0;t<l;t+=1){var c=n[t],i=new FileReader,r=Object(o.a)({},e.state),s=Object(m.a)(e);i.onload=function(e){r.defaultSettings.imgSrc=e.target.result,s.setState({state:r},(function(){return s.setLocalStorage("defaultSettings",r.defaultSettings)}))},i.readAsDataURL(c)}return!1},e.handleTabClick=function(e){e.preventDefault(),T()(e.target).tab("show")},e.handleSettingChange=function(a){var t=a.target.name,l=a.target.value;e.setState((function(e){return{docDefinition:Object(o.a)(Object(o.a)({},e.docDefinition),{},Object(n.a)({},t,l))}}),(function(){return e.setLocalStorage("docDefinition",e.state.docDefinition)}))},e.handleSettingWatermarkChange=function(a){var t=a.target,l="checkbox"===t.type?t.checked:t.value,c=t.name;e.setState((function(e){return{docDefinition:Object(o.a)(Object(o.a)({},e.docDefinition),{},{watermark:Object(o.a)(Object(o.a)({},e.docDefinition.watermark),{},Object(n.a)({},c,l))})}}),(function(){return e.setLocalStorage("docDefinition",e.state.docDefinition)}))},e.handleColorChange=function(a,t){e.setState((function(e){return{docDefinition:Object(o.a)(Object(o.a)({},e.docDefinition),{},{backgroundColor:a.hex})}}),(function(){return e.setLocalStorage("docDefinition",e.state.docDefinition)}))},e.handleDefaultSettings=e.handleDefaultSettings.bind(Object(m.a)(e)),e.onImageChangeDefaultSetting=e.onImageChangeDefaultSetting.bind(Object(m.a)(e)),e.handleTabClick=e.handleTabClick.bind(Object(m.a)(e)),e.handleSettingChange=e.handleSettingChange.bind(Object(m.a)(e)),e.handleSettingWatermarkChange=e.handleSettingWatermarkChange.bind(Object(m.a)(e)),e}return Object(c.a)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header"},d.a.createElement("ul",{className:"nav nav-tabs card-header-tabs",id:"bologna-list",role:"tablist"},d.a.createElement("li",{className:"nav-item"},d.a.createElement("a",{className:"nav-link active",onClick:this.handleTabClick,href:"#settings",role:"tab","aria-controls":"settings","aria-selected":"true"},"PDF Settings")),d.a.createElement("li",{className:"nav-item"},d.a.createElement("a",{className:"nav-link",onClick:this.handleTabClick,href:"#defaultsettings",role:"tab","aria-controls":"defaultsettings","aria-selected":"false"},"Default Settings")),d.a.createElement("li",{className:"nav-item"},d.a.createElement("a",{className:"nav-link",onClick:this.handleTabClick,href:"#template",role:"tab","aria-controls":"template","aria-selected":"false"},"Template")))),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"tab-content"},d.a.createElement("div",{className:"tab-pane active",id:"settings",role:"tabpanel"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-3"},d.a.createElement("p",{className:"card-text"},"Background Color"),d.a.createElement(u.a,{color:this.state.docDefinition.backgroundColor,onChangeComplete:this.handleColorChange})),d.a.createElement("div",{className:"col-md-9"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"form-group row"},d.a.createElement("label",{htmlFor:"pageOrientation",className:"col-sm-6 col-form-label"},"Page Orientation"),d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("select",{className:"form-control",name:"pageOrientation",id:"pageOrientation",value:this.state.docDefinition.pageOrientation,onChange:this.handleSettingChange},this.state.pageOrientation.map((function(e){return d.a.createElement("option",{key:e,value:e},e)})))))),d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"form-group row"},d.a.createElement("label",{htmlFor:"pageSize",className:"col-sm-6 col-form-label"},"Page Size"),d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("select",{className:"form-control",name:"pageSize",id:"pageSize",value:this.state.docDefinition.pageSize,onChange:this.handleSettingChange},this.state.pageSize.map((function(e){return d.a.createElement("option",{key:e,value:e},e)}))))))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement("fieldset",null,d.a.createElement("legend",null,"Watermark"),d.a.createElement("div",{className:"form-group row"},d.a.createElement("label",{htmlFor:"watermarkText",className:"col-sm-1 col-form-label"},"Text"),d.a.createElement("div",{className:"col-sm-11"},d.a.createElement("input",{type:"text",className:"form-control",id:"watermarkText",name:"text",maxLength:"30",onChange:this.handleSettingWatermarkChange,value:this.state.docDefinition.watermark.text}))),d.a.createElement("div",{className:"form-inline"},d.a.createElement("label",{className:"my-1 mr-2",htmlFor:"opacity"},"Opacity"),d.a.createElement("input",{type:"number",className:"form-control my-1 mr-sm-2",id:"opacity",name:"opacity",min:"0.1",max:"1",step:"0.1",onChange:this.handleSettingWatermarkChange,value:this.state.docDefinition.watermark.opacity}),d.a.createElement("div",{className:"custom-control custom-checkbox my-1 ml-3 mr-sm-2"},d.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"bold",name:"bold",checked:this.state.docDefinition.watermark.bold,onChange:this.handleSettingWatermarkChange,value:this.state.docDefinition.watermark.bold}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"bold"},"Bold")),d.a.createElement("div",{className:"custom-control custom-checkbox my-1 ml-3 mr-sm-2"},d.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"italics",name:"italics",checked:this.state.docDefinition.watermark.italics,onChange:this.handleSettingWatermarkChange,value:this.state.docDefinition.watermark.italics}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"italics"},"Italics"))))))))),d.a.createElement("div",{className:"tab-pane",id:"defaultsettings",role:"tabpanel"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"custom-file1 files color"},d.a.createElement("input",{type:"file",className:"custom-file-input1 form-control-sm",accept:"image/x-png,image/jpg,image/jpeg",id:"customFile",onChange:this.onImageChangeDefaultSetting}))),d.a.createElement("div",{className:"col-md-6"},""!==this.state.defaultSettings.imgSrc&&d.a.createElement("div",null,d.a.createElement(d.a.Fragment,null,d.a.createElement("img",{src:this.state.defaultSettings.imgSrc,className:"mr-3 rounded preview-image",alt:""}),d.a.createElement("button",{type:"button",title:"Remove logo",onClick:this.handleRemoveImageDefaultSetting,className:"btn btn-dark btn-sm preview-image-remove"},"\xd7")))))),d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"defaultCurrency"},"Default Currency"),d.a.createElement("select",{className:"form-control",name:"defaultCurrency",id:"defaultCurrency",value:this.state.defaultSettings.defaultCurrency,onChange:this.handleDefaultSettings},this.state.currency.map((function(e){return d.a.createElement("option",{key:e.code,value:e.code},e.name," (",e.code,")")})))))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"defaultInvoiceFrom"},"Invoice from"),d.a.createElement("textarea",{className:"form-control",id:"defaultInvoiceFrom",name:"invoiceFrom",rows:"3",placeholder:"Who is this invoice from?",value:this.state.defaultSettings.invoiceFrom,onChange:this.handleDefaultSettings}))),d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"defaultTerms"},"Terms"),d.a.createElement("textarea",{className:"form-control",id:"defaultTerms",name:"terms",rows:"3",placeholder:"Terms and conditions - late fees, payment methods, delivery schedule",value:this.state.defaultSettings.terms,onChange:this.handleDefaultSettings}))),d.a.createElement("div",{className:"col-md-6"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{htmlFor:"defaultFootNote"},"Foot Note"),d.a.createElement("textarea",{className:"form-control",id:"defaultFooterNotes",name:"footNote",rows:"3",placeholder:"Thank you for your business",value:this.state.defaultSettings.footNote,onChange:this.handleDefaultSettings}))))),d.a.createElement("div",{className:"tab-pane",id:"template",role:"tabpanel","aria-labelledby":"template-tab"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-3 mb-4"},d.a.createElement("div",{className:"card"},d.a.createElement("img",{src:h.a,className:"card-img-top",alt:"Template 1"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement("input",{type:"radio",className:"custom-control-input",name:"defaultTemplate",id:"temp1",value:"temp1",checked:"temp1"===this.state.defaultSettings.defaultTemplate,onChange:this.handleDefaultSettings}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"temp1"},"Template 1"))))),d.a.createElement("div",{className:"col-md-3 mb-4"},d.a.createElement("div",{className:"card"},d.a.createElement("img",{src:f.a,className:"card-img-top",alt:"Template 2"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement("input",{type:"radio",className:"custom-control-input",name:"defaultTemplate",id:"temp2",value:"temp2",checked:"temp2"===this.state.defaultSettings.defaultTemplate,onChange:this.handleDefaultSettings}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"temp2"},"Template 2"))))),d.a.createElement("div",{className:"col-md-3 mb-4"},d.a.createElement("div",{className:"card"},d.a.createElement("img",{src:S.a,className:"card-img-top",alt:"Template 3"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement("input",{type:"radio",className:"custom-control-input",name:"defaultTemplate",id:"temp3",value:"temp3",checked:"temp3"===this.state.defaultSettings.defaultTemplate,onChange:this.handleDefaultSettings}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"temp3"},"Template 3"))))),d.a.createElement("div",{className:"col-md-3 mb-4"},d.a.createElement("div",{className:"card"},d.a.createElement("img",{src:D.a,className:"card-img-top",alt:"Template 4"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement("input",{type:"radio",className:"custom-control-input",name:"defaultTemplate",id:"temp4",value:"temp4",checked:"temp4"===this.state.defaultSettings.defaultTemplate,onChange:this.handleDefaultSettings}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"temp4"},"Template 4"))))),d.a.createElement("div",{className:"col-md-3"},d.a.createElement("div",{className:"card"},d.a.createElement("img",{src:v.a,className:"card-img-top",alt:"Template 5"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement("input",{type:"radio",className:"custom-control-input",name:"defaultTemplate",id:"temp5",value:"temp5",checked:"temp5"===this.state.defaultSettings.defaultTemplate,onChange:this.handleDefaultSettings}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"temp5"},"Template 5")))))))))))))}}]),t}(s.Component);a.default=k}}]);
//# sourceMappingURL=6.63d3ef6d.chunk.js.map