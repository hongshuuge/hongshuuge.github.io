webpackJsonp([6],{231:function(e,t,i){"use strict";function s(e){i(775)}Object.defineProperty(t,"__esModule",{value:!0});var r=i(366),n=i.n(r);for(var o in r)["default","default"].indexOf(o)<0&&function(e){i.d(t,e,function(){return r[e]})}(o);var l=i(757),a=i(94),c=s,d=a(n.a,l.a,!1,c,null,null);t.default=d.exports},254:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HelpHint",props:{placement:{default:"top"},content:String},data:function(){return{}}}},257:function(e,t,i){t=e.exports=i(19)(void 0),t.push([e.i,".toolbar{width:100%;padding:8px;background-color:#fff;overflow:hidden;line-height:32px;border:1px solid #e6ebf5}",""])},260:function(e,t,i){"use strict";function s(e){i(262)}Object.defineProperty(t,"__esModule",{value:!0});var r=i(261),n=i(94),o=s,l=n(null,r.a,!1,o,null,null);t.default=l.exports},261:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"toolbar"},[e._t("default")],2)},r=[],n={render:s,staticRenderFns:r};t.a=n},262:function(e,t,i){var s=i(257);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(95)("08715306",s,!0,{})},270:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(254),r=i.n(s);for(var n in s)["default","default"].indexOf(n)<0&&function(e){i.d(t,e,function(){return s[e]})}(n);var o=i(271),l=i(94),a=l(r.a,o.a,!1,null,null,null);t.default=a.exports},271:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("span",{staticStyle:{"margin-right":"8px"}},[e._t("default")],2),e._v(" "),i("el-tooltip",{attrs:{content:e.content,placement:e.placement}},[i("i",{staticClass:"el-icon-question",staticStyle:{cursor:"pointer"}})])],1)},r=[],n={render:s,staticRenderFns:r};t.a=n},366:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(260),o=s(n),l=i(270),a=s(l),c=i(31),d=s(c);t.default={data:function(){var e;return e={kai:"开",guan:"关",zt:0,loading:"",shi_tip:"",xian_tip:"",deleteVisible:!1,switch_value:"",radio:"1",value:"",editAdress_value:"",province:[],cities:[],distinct:[]},r(e,"switch_value",!0),r(e,"addAdress",{region:{cities:"",province:"",distinct:""},school:"",curPrice:"",prePrice:""}),r(e,"editAdress",{region:{cities:"",province:"",distinct:""},school:"",curPrice:"",prePrice:"",regionId:"",collegeId:"",isOpening:""}),r(e,"submit",{regionId:"",province:"",city:"",county:"",isOpening:"0",curPrice:"",prePrice:"",collegeName:""}),r(e,"addVisible",!1),r(e,"editVisible",!1),r(e,"params",{name:""}),r(e,"addressDate",[]),r(e,"rules",{region:[{type:"object",required:!0,trigger:"change",fields:{province:{required:!0,message:"请选择省份",trigger:"blur"},cities:{required:!0,message:"请选择城市",trigger:"blur"},distinct:{required:!0,message:" 请选择区域",trigger:"blur"}}}],school:[{required:!0,message:"请填写详细的学校名称",trigger:"blur"}],curPrice:[{required:!0,message:"请填写当前单价",trigger:"blur"}],prePrice:[{required:!0,message:"请填写原价",trigger:"blur"}]}),r(e,"editRules",{region:[{type:"object",required:!0,trigger:"change",fields:{province:{required:!0,message:"请选择省份",trigger:"blur"},cities:{required:!0,message:"请选择城市",trigger:"blur"},distinct:{required:!0,message:" 请选择区域",trigger:"blur"}}}],school:[{required:!0,message:"请填写详细的学校名称",trigger:"blur"}],curPrice:[{required:!0,message:"请填写当前单价",trigger:"blur"}],prePrice:[{required:!0,message:"请填写原价",trigger:"blur"}]}),e},created:function(){var e=this;e.getSchools(),e.loading=!0,console.log("=================")},methods:{getSchoolList:function(){},sheng_edit:function(){},shi_edit:function(){},xian_edit:function(){},xian_s:function(e){console.log("选择了县"),console.log(e);var t=this,i=t.distinct.filter(function(t){return t.regionName==e})[0].regionId;console.log(i),t.editAdress.regionId=i,t.submit.regionId=i},cities_s:function(e){var t=this;console.log("选择了市"),console.log(e),t.addAdress.region.distinct="",t.distinct.length=0;var i=t.cities.filter(function(t){return t.regionName==e})[0].regionId;console.log(i),t.getArea("distinct",i)},province_s:function(e){var t=this;console.log("选择了省"),console.log(e),t.addAdress.region.cities="",t.addAdress.region.distinct="",t.cities.length=0,t.distinct.length=0;var i=t.province.filter(function(t){return t.regionName==e})[0].regionId;console.log(i),t.getArea("cities",i)},deleteAddress:function(){this.deleteVisible=!1},tt:function(e,t){console.log(e+" "+t);var i="",s="",r="";0==t?(i="/api/v1/location/college/close?collegeId=",s="服务关闭成功！",r="error"):(i="/api/v1/location/college/open?collegeId=",s="服务开启成功！",r="success"),this.openCollege(e,i,s,r)},openCollege:function(e,t,i,s){var r=this;d.default.post(t+e).then(function(e){console.log("res"),r.$message({showClose:!0,message:i,type:s})}).catch(function(e){r.$message.error("网络异常，请重试！"),console.log("err")})},getArea:function(e,t){var i=this;"cities"==e?d.default.get("/api/v1/location/region/next/"+t).then(function(e){console.log(e),i.cities=e.data.data}).catch(function(e){console.log(e)}):"distinct"==e&&d.default.get("/api/v1/location/region/next/"+t).then(function(e){console.log(e),i.distinct=e.data.data}).catch(function(e){console.log(e)})},sheng:function(){console.log("省选择框");var e=this;31!=e.province.length&&d.default.get("/api/v1/location/region/next/1").then(function(t){console.log(t.data.data),e.province=t.data.data}).catch(function(e){console.log(e)})},shi:function(){""==this.addAdress.region.province?this.shi_tip="请先选择省":this.shi_tip="数据正在加载中..."},xian:function(){""==this.addAdress.region.cities?this.xian_tip="请先选择市":this.xian_tip="数据正在加载中...",console.log("xian")},resetForm:function(){this.$refs.add_address.resetFields()},getSchools:function(){var e=this;e.loading=!0,d.default.get("/api/v1/location/college/list").then(function(t){e.addressDate=t.data.data,e.loading=!1}).catch(function(t){e.loading=!1,e.$message.error("网络异常，请重试！")})},addSubmitForm:function(e){var t=this;this.$refs.add_address.validate(function(i){if(i){var s=new URLSearchParams;s.append("city",e.region.cities),s.append("province",e.region.province),s.append("county",e.region.distinct),s.append("regionId",t.submit.regionId),s.append("prePrice",e.prePrice),s.append("curPrice",e.curPrice),s.append("collegeName",e.school),s.append("isOpening",0),(0,d.default)({method:"POST",url:"/api/v1/location/college",data:s}).then(function(e){this.addVisible=!1,t.$message({showClose:!0,message:"地址服务添加成功",type:"success"}),t.getSchools()}).catch(function(e){this.addVisible=!1,t.$message({showClose:!0,message:"地址服务添加失败",type:"error"})})}})},editSubmitForm:function(e){console.log(e);var t=this,i=new URLSearchParams;i.append("collegeId",e.collegeId),i.append("regionId",e.regionId),i.append("province",e.region.province),i.append("city",e.region.cities),i.append("county",e.region.distinct),i.append("curPrice",e.curPrice),i.append("prePrice",e.prePrice),i.append("isOpening",e.isOpening),i.append("collegeName",e.school),this.$refs.editAdress.validate(function(e){e?(console.log("success"),(0,d.default)({method:"PUT",url:"/api/v1/location/college",data:i}).then(function(e){t.editVisible=!1,t.$message({showClose:!0,message:"信息修改成功",type:"success"})}).catch(function(e){t.editVisible=!1,t.$message({showClose:!0,message:"信息修改失败",type:"error"})})):t.editVisible=!1})},searchUser:function(){console.log(this.params.name);for(var e=this.$refs.table.$el.querySelectorAll("tbody tr"),t=e[1].offsetHeight,i=!1,s=0;s<this.usersData.length;s++)this.params.name&&-1!=this.usersData[s].nickname.indexOf(this.params.name)?(e[s].style.backgroundColor="#85ce61",i||(scrollTo(0,s*t+66),i=!0)):e[s].style.backgroundColor="#fff"},tableAction:function(){return this.$createElement("HelpHint",{props:{content:"重置密码为123456 / 编辑用户 / 删除或恢复用户"}},"操作")},add_user:function(){this.addVisible=!0},editUser:function(e){console.log(e),this.editAdress.region.province=e.province,this.editAdress.region.cities=e.city,this.editAdress.region.distinct=e.county,this.editAdress.school=e.collegeName,this.editAdress.curPrice=e.curPrice,this.editAdress.prePrice=e.prePrice,this.editAdress.collegeId=e.collegeId,this.editAdress.regionId=e.regionId,this.editAdress.isOpening=e.isOpening,this.editVisible=!0},submit_editform:function(){this.editVisible=!1},UploadUser:function(e){},deleteUser:function(e){console.log(e),this.deleteVisible=!0},resetting:function(e){var t=this.$refs[e].$el;t.style.transform="rotate(180deg)",setTimeout(function(){t.style.transform="rotate(0deg)"},600),this.$message({message:"已经成功重置密码",type:"success"})}},components:{ToolBar:o.default,HelpHint:a.default}}},464:function(e,t,i){t=e.exports=i(19)(void 0),t.push([e.i,"",""])},757:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user-list"},[i("ToolBar",[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:e.add_user}},[e._v("添加地址服务")]),e._v(" "),i("div",{staticStyle:{float:"right"}},[i("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"请输入用户账号",size:"small",clearable:""},on:{clear:e.searchUser},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}}),e._v(" "),i("el-button",{attrs:{type:"success",icon:"el-icon-search",size:"small"},on:{click:e.searchUser}})],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.deleteVisible,width:"30%"},on:{"update:visible":function(t){e.deleteVisible=t}}},[i("span",{staticStyle:{color:"red"}},[e._v("确定删除这个服务地址吗？")]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.deleteVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.deleteAddress}},[e._v("确 定")])],1)]),e._v(" "),i("el-dialog",{attrs:{title:"添加服务地区",visible:e.addVisible},on:{"update:visible":function(t){e.addVisible=t}}},[i("el-form",{ref:"add_address",staticClass:"demo-ruleForm",attrs:{"status-icon":"","label-width":"100px",model:e.addAdress,rules:e.rules}},[i("el-form-item",{attrs:{label:"地区",prop:"region"}},[i("el-select",{attrs:{placeholder:"请选择省","no-data-text":"数据正在加载中..."},on:{focus:e.sheng,change:function(t){return e.province_s(e.addAdress.region.province)}},model:{value:e.addAdress.region.province,callback:function(t){e.$set(e.addAdress.region,"province",t)},expression:"addAdress.region.province"}},e._l(e.province,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.regionName}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.regionName))]),e._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.regionId))])])}),1),e._v(" "),i("el-select",{attrs:{placeholder:"请选择市","no-data-text":e.shi_tip},on:{focus:e.shi,change:function(t){return e.cities_s(e.addAdress.region.cities)}},model:{value:e.addAdress.region.cities,callback:function(t){e.$set(e.addAdress.region,"cities",t)},expression:"addAdress.region.cities"}},e._l(e.cities,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.regionName}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.regionName))]),e._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.regionId))])])}),1),e._v(" "),i("el-select",{attrs:{placeholder:"请选择县/区","no-data-text":e.xian_tip},on:{focus:e.xian,change:function(t){return e.xian_s(e.addAdress.region.distinct)}},model:{value:e.addAdress.region.distinct,callback:function(t){e.$set(e.addAdress.region,"distinct",t)},expression:"addAdress.region.distinct"}},e._l(e.distinct,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.regionName}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.regionName))]),e._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.regionId))])])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"学校名称",prop:"school"}},[i("el-input",{model:{value:e.addAdress.school,callback:function(t){e.$set(e.addAdress,"school",t)},expression:"addAdress.school"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"原价",prop:"prePrice"}},[i("el-input",{model:{value:e.addAdress.prePrice,callback:function(t){e.$set(e.addAdress,"prePrice",t)},expression:"addAdress.prePrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"现价",prop:"curPrice"}},[i("el-input",{model:{value:e.addAdress.curPrice,callback:function(t){e.$set(e.addAdress,"curPrice",t)},expression:"addAdress.curPrice"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addSubmitForm(e.addAdress)}}},[e._v("提交")]),e._v(" "),i("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑服务地区",visible:e.editVisible},on:{"update:visible":function(t){e.editVisible=t}}},[i("el-form",{ref:"editAdress",staticClass:"demo-ruleForm",attrs:{"status-icon":"","label-width":"100px",model:e.editAdress,rules:e.editRules}},[i("el-form-item",{attrs:{label:"学校id",prop:"collegeId"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.editAdress.collegeId,callback:function(t){e.$set(e.editAdress,"collegeId",t)},expression:"editAdress.collegeId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"地区id",prop:"regionId"}},[i("el-input",{attrs:{disabled:!0},model:{value:e.editAdress.regionId,callback:function(t){e.$set(e.editAdress,"regionId",t)},expression:"editAdress.regionId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"地区",prop:"region"}},[i("el-select",{attrs:{placeholder:"请选择省","no-data-text":"数据正在加载中..."},on:{focus:e.sheng,change:function(t){return e.province_s(e.editAdress.region.province)}},model:{value:e.editAdress.region.province,callback:function(t){e.$set(e.editAdress.region,"province",t)},expression:"editAdress.region.province"}},e._l(e.province,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.regionName}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.regionName))]),e._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.regionId))])])}),1),e._v(" "),i("el-select",{attrs:{placeholder:"请选择市","no-data-text":e.shi_tip},on:{focus:e.shi,change:function(t){return e.cities_s(e.editAdress.region.cities)}},model:{value:e.editAdress.region.cities,callback:function(t){e.$set(e.editAdress.region,"cities",t)},expression:"editAdress.region.cities"}},e._l(e.cities,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.regionName}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.regionName))]),e._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.regionId))])])}),1),e._v(" "),i("el-select",{attrs:{placeholder:"请选择县/区","no-data-text":e.xian_tip},on:{focus:e.xian,change:function(t){return e.xian_s(e.editAdress.region.distinct)}},model:{value:e.editAdress.region.distinct,callback:function(t){e.$set(e.editAdress.region,"distinct",t)},expression:"editAdress.region.distinct"}},e._l(e.distinct,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.regionName}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.regionName))]),e._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.regionId))])])}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"学校名称",prop:"school"}},[i("el-input",{model:{value:e.editAdress.school,callback:function(t){e.$set(e.editAdress,"school",t)},expression:"editAdress.school"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"原价",prop:"prePrice"}},[i("el-input",{model:{value:e.editAdress.prePrice,callback:function(t){e.$set(e.editAdress,"prePrice",t)},expression:"editAdress.prePrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"现价",prop:"curPrice"}},[i("el-input",{model:{value:e.editAdress.curPrice,callback:function(t){e.$set(e.editAdress,"curPrice",t)},expression:"editAdress.curPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"服务状态",prop:"isOpening"}},[i("el-input",{attrs:{disabled:!0},model:{value:1==e.editAdress.isOpening?e.kai:e.guan,callback:function(t){e.$set(e.editAdress,"isOpening == 1 ? kai : guan",t)},expression:"editAdress.isOpening == 1 ? kai : guan"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editSubmitForm(e.editAdress)}}},[e._v("提交")])],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.addressDate,border:""}},[i("el-table-column",{attrs:{prop:"collegeId",label:"学校id",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{prop:"regionId",label:"地区id",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{prop:"province",label:"省份",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"city",label:"市",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"county",label:"县/区",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"collegeName",label:"学校名称"}}),e._v(" "),i("el-table-column",{attrs:{prop:"prePrice",label:"原价",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"curPrice",label:"现价",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"isOpening",label:"开启/关闭服务",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0},on:{change:function(i){return e.tt(t.row.collegeId,t.row.isOpening)}},model:{value:t.row.isOpening,callback:function(i){e.$set(t.row,"isOpening",i)},expression:"scope.row.isOpening"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small",circle:""},on:{click:function(i){return e.editUser(t.row)}}}),e._v(" "),i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(i){return e.deleteUser(t.row.id)}}})]}}])})],1)],1)},r=[],n={render:s,staticRenderFns:r};t.a=n},775:function(e,t,i){var s=i(464);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(95)("275c4294",s,!0,{})}});