(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50acb60e","chunk-2d0e902d"],{6915:function(e,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"b",function(){return l}),r.d(t,"e",function(){return i}),r.d(t,"a",function(){return s}),r.d(t,"c",function(){return c});r("7f7f"),r("c5f6");var n=r("9bd2"),a=r("da71");function o(e,t){return Object(n.a)({url:a.a+"company/query?pageNum="+e+"&pageSize="+t,method:"get",data:{}})}function l(e){var t=new URLSearchParams;return t.append("id",Number(e)),Object(n.a)({url:a.a+"company/del",method:"post",data:t})}function i(e){var t=new URLSearchParams;return t.append("id",e.id),t.append("companyName",e.companyName),t.append("type",e.type),t.append("address",e.address),t.append("chargePerson",e.chargePerson),t.append("chargePersonTel",e.chargePersonTel),t.append("proportion",e.proportion),t.append("royalties",e.royalties),t.append("minFrequency",e.minFrequency),t.append("minPrice",e.minPrice),t.append("minConversionRate",e.minConversionRate),Object(n.a)({url:a.a+"company/update",method:"post",data:t})}function s(e){var t=new URLSearchParams;for(var r in e)t.append(r,e[r]);return Object(n.a)({url:a.a+"company/add",method:"post",data:t})}function c(e){return Object(n.a)({url:a.a+"company/find?name="+e,method:"get",data:{}})}},"8c5a":function(e,t,r){"use strict";r.r(t);r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),a=(r("96cf"),r("3b8d")),o=r("6915");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var s,c,u={props:{tableData:{default:function(){return[]}},loading:{default:!1}},data:function(){return{custom:!1,isShowEdit:!1,addForm:{id:"",companyName:"",type:"",address:"",chargePerson:"",chargeId:"",chargePersonTel:"",proportion:"",royalties:"",minFrequency:"",minPrice:"",minConversionRate:""},rules:{companyName:[{required:!0,message:"该项必填!",trigger:"blur"}],type:[{required:!0,message:"该项必填!",trigger:"blur"}],address:[{required:!0,message:"该项必填!",trigger:"blur"}],chargePerson:[{required:!0,message:"该项必填!",trigger:"blur"}],chargePersonTel:[{required:!0,message:"该项必填!",trigger:"blur"}],proportion:[{type:"number",required:!0,message:"请输入数字!",trigger:"blur"}],royalties:[{required:!0,message:"该项必填!",trigger:"blur"}],minFrequency:[{required:!0,message:"该项必填!",trigger:"blur"}],minPrice:[{required:!0,message:"该项必填!",trigger:"blur"}],minConversionRate:[{required:!0,message:"该项必填!",trigger:"blur"}]},currentTableData:[],multipleSelection:[],downloadColumns:[{label:"单位名称",prop:"companyName"},{label:"编号",prop:"companyNumber"},{label:"类型",prop:"type"},{label:"单位地址",prop:"address"},{label:"负责人",prop:"chargePerson"},{label:"联系方式",prop:"chargePersonTel"},{label:"提成比例",prop:"proportion"},{label:"最小转化率",prop:"minConversionRate"},{label:"最低到店数",prop:"minFrequency"},{label:"最低客单价",prop:"minPrice"},{label:"推荐订单数",prop:"realFrequency"}]}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},methods:{handleRoute:function(){this.$router.push("/business_sell")},customClose:function(){this.custom=!1},handleDelete:(c=Object(a.a)(regeneratorRuntime.mark(function e(t){var r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(r=this).$confirm("此操作将可能造成严重后果, 是否继续?","危险操作提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){Object(o.b)(t.id).then(function(e){0===e.status?(r.$message({message:"成功",type:"success"}),r.$emit("delete")):r.$message({message:"操作失败",type:"error"})})}).catch(function(){n.$message({type:"info",message:"已取消"})});case 2:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)}),handleChange:(s=Object(a.a)(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=this).$refs.ruleForm.validate(function(e){if(!e)return!1;Object(o.e)(r.addForm).then(function(e){0===e.status?(t.$message({message:"编辑成功",type:"success"}),t.isShowEdit=!1,t.$emit("add")):t.$message({message:"编辑失败",type:"error"})})});case 2:case"end":return e.stop()}},e,this)})),function(){return s.apply(this,arguments)}),handleEdit:function(e){this.addForm=e,this.isShowEdit=!0},handleSwitchChange:function(e,t){var r=this.currentTableData[t];this.$set(this.currentTableData,t,i({},r,{type:e}))},handleSelectionChange:function(e){this.multipleSelection=e},downloadDataTranslate:function(e){return e.map(function(e){return i({},e,{type:e.type?"禁用":"正常",used:e.used?"已使用":"未使用"})})},handleDownloadXlsx:function(e){var t=this;this.$export.excel({title:"工作薄",columns:this.downloadColumns,data:this.downloadDataTranslate(e)}).then(function(){t.$message("导出表格成功")})},handleDownloadCsv:function(e){var t=this;this.$export.csv({title:"工作薄",columns:this.downloadColumns,data:this.downloadDataTranslate(e)}).then(function(){t.$message("导出CSV成功")})}}},d=r("2877"),p=function(e){e.options.__source="src/views/business/partner/componnets/PageMain/index.vue"},m=Object(d.a)(u,function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("div",[n("el-form",{attrs:{inline:!0,size:"mini"}},[n("el-form-item",{attrs:{label:"已选数据下载 [ "+r.currentTableData.length+" ]"}},[n("el-button-group",[n("el-button",{attrs:{type:"primary",size:"mini",disabled:0===r.currentTableData.length},on:{click:function(e){return r.handleDownloadXlsx(r.currentTableData)}}},[r._v("\n          xlsx\n        ")]),n("el-button",{attrs:{type:"primary",size:"mini",disabled:0===r.currentTableData.length},on:{click:function(e){return r.handleDownloadCsv(r.currentTableData)}}},[r._v("\n          csv\n        ")])],1)],1),n("el-form-item",{attrs:{label:"已选数据下载 [ "+r.multipleSelection.length+" ]"}},[n("el-button-group",[n("el-button",{attrs:{type:"primary",size:"mini",disabled:0===r.multipleSelection.length},on:{click:function(e){return r.handleDownloadXlsx(r.multipleSelection)}}},[r._v("\n          xlsx\n        ")]),n("el-button",{attrs:{type:"primary",size:"mini",disabled:0===r.multipleSelection.length},on:{click:function(e){return r.handleDownloadCsv(r.multipleSelection)}}},[r._v("\n          csv\n        ")])],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:r.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:r.currentTableData,size:"mini",stripe:""},on:{"selection-change":r.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"单位名称","show-overflow-tooltip":!0},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n        "+r._s(e.row.companyName)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"类型","show-overflow-tooltip":!0},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n        "+r._s(e.row.type)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"单位地址"},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n        "+r._s(e.row.address)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"负责人","show-overflow-tooltip":!0},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n        "+r._s(e.row.chargePerson)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"联系方式","show-overflow-tooltip":!0},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n        "+r._s(e.row.chargePersonTel)+"\n      ")]}}])}),n("el-table-column",{attrs:{label:"提成比例","show-overflow-tooltip":!0},scopedSlots:r._u([{key:"default",fn:function(e){return[r._v("\n        "+r._s(e.row.proportion)+"\n      ")]}}])}),r._e(),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:r._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit",circle:""},on:{click:function(e){return r.handleEdit(t.row)}}}),n("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(e){return r.handleDelete(t.row)}}})]}}])})],1),n("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"编辑合作单位",visible:r.isShowEdit},on:{"update:visible":function(e){r.isShowEdit=e}}},[n("el-form",{ref:"ruleForm",attrs:{model:r.addForm,"label-width":"120px",rules:r.rules,"label-position":"right"}},[n("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:r.addForm.companyName,callback:function(e){r.$set(r.addForm,"companyName",e)},expression:"addForm.companyName"}})],1),n("el-form-item",{attrs:{label:"类型",prop:"type"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:r.addForm.type,callback:function(e){r.$set(r.addForm,"type",e)},expression:"addForm.type"}})],1),n("el-form-item",{attrs:{label:"地址",prop:"address"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:r.addForm.address,callback:function(e){r.$set(r.addForm,"address",e)},expression:"addForm.address"}})],1),n("el-form-item",{attrs:{label:"负责人",prop:"chargePerson"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:r.addForm.chargePerson,callback:function(e){r.$set(r.addForm,"chargePerson",e)},expression:"addForm.chargePerson"}})],1),n("el-form-item",{attrs:{label:"负责人电话号码",prop:"chargePersonTel"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:r.addForm.chargePersonTel,callback:function(e){r.$set(r.addForm,"chargePersonTel",e)},expression:"addForm.chargePersonTel"}})],1),n("el-form-item",{attrs:{label:"提成比例",prop:"proportion"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:r.addForm.proportion,callback:function(e){r.$set(r.addForm,"proportion",r._n(e))},expression:"addForm.proportion"}})],1),n("el-form-item",{attrs:{label:"提成方式",prop:"royalties"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择提成方式"},model:{value:r.addForm.royalties,callback:function(e){r.$set(r.addForm,"royalties",e)},expression:"addForm.royalties"}},[n("el-option",{attrs:{label:"微信",value:"微信"}}),n("el-option",{attrs:{label:"支付宝",value:"支付宝"}}),n("el-option",{attrs:{label:"到店自取",value:"到店自取"}})],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){r.isShowEdit=!1}}},[r._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:r.handleChange}},[r._v("确 定")])],1)],1),n("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"员工管理",visible:r.custom,"before-close":r.customClose},on:{"update:visible":function(e){r.custom=e}}},[n("span",[r._v("员工信息")])])],1)},[],!1,null,null,null);"function"==typeof p&&p(m);t.default=m.exports}}]);