import{toRefs as e,ref as t,computed as n,watch as l,nextTick as a}from"@vue/composition-api";function u(e){return-1!==[null,void 0,!1].indexOf(e)}function r(e){return String(e).toLowerCase().trim()}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(a,c,s){var d=e(a),v=d.options,p=d.mode,f=d.trackBy,h=d.limit,y=d.hideSelected,m=d.createTag,g=d.label,b=d.appendNewTag,k=d.multipleLabel,_=d.object,w=d.loading,S=d.delay,O=d.resolveOnLoad,x=d.minChars,C=d.filterResults,P=d.clearOnSearch,D=d.clearOnSelect,q=d.valueProp,V=d.canDeselect,T=d.max,E=s.internalValue,B=s.externalValue,A=s.search,I=s.blurSearch,N=s.clearSearch,j=s.update,R=s.blurInput,H=s.pointer,U=t([]),$=t([]),L=t(!1),M=n((function(){var e,t=$.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var n,l=t[e];return o(n={},q.value,e),o(n,f.value,l),o(n,g.value,l),n}))),t=t.map((function(e,t){var n;return"object"===i(e)?e:(o(n={},q.value,t),o(n,f.value,e),o(n,g.value,e),n)})),U.value.length&&(t=t.concat(U.value)),t})),F=n((function(){var e=M.value;return J.value.length&&(e=J.value.concat(e)),A.value&&C.value&&(e=e.filter((function(e){return-1!==r(e[f.value]).indexOf(r(A.value))}))),y.value&&(e=e.filter((function(e){return!oe(e)}))),h.value>0&&(e=e.slice(0,h.value)),e})),W=n((function(){switch(p.value){case"single":return!u(E.value[q.value]);case"multiple":case"tags":return!u(E.value)&&E.value.length>0}})),X=n((function(){return void 0!==k&&void 0!==k.value?k.value(E.value):E.value&&E.value.length>1?"".concat(E.value.length," options selected"):"1 option selected"})),z=n((function(){return!M.value.length&&!L.value})),G=n((function(){return M.value.length>0&&0==F.value.length})),J=n((function(){var e;return!1!==m.value&&A.value?-1!==ie(A.value)?[]:[(e={},o(e,q.value,A.value),o(e,g.value,A.value),o(e,f.value,A.value),e)]:[]})),K=n((function(){switch(p.value){case"single":return null;case"multiple":case"tags":return[]}})),Q=n((function(){return w.value||L.value})),Y=function(e){switch("object"!==i(e)&&(e=re(e)),p.value){case"single":j(e);break;case"multiple":case"tags":j(E.value.concat(e))}c.emit("select",ee(e))},Z=function(e){switch("object"!==i(e)&&(e=re(e)),p.value){case"single":ne();break;case"tags":case"multiple":j(E.value.filter((function(t){return t[q.value]!=e[q.value]})))}c.emit("deselect",ee(e))},ee=function(e){return _.value?e:e[q.value]},te=function(e){Z(e)},ne=function(){j(K.value)},le=function(e){switch(p.value){case"single":return!u(E.value)&&E.value[q.value]==e[q.value];case"tags":case"multiple":return!u(E.value)&&-1!==E.value.map((function(e){return e[q.value]})).indexOf(e[q.value])}},ae=function(e){return!0===e.disabled},ue=function(){return!(void 0===T||-1===T.value||!W.value&&T.value>0)&&E.value.length>=T.value},re=function(e){return M.value[M.value.map((function(e){return String(e[q.value])})).indexOf(String(e))]},ie=function(e){return M.value.map((function(e){return r(e[f.value])})).indexOf(r(e))},oe=function(e){return"tags"===p.value&&y.value&&le(e)},ce=function(e){U.value.push(e)},se=function(){u(B.value)||(E.value=ve(B.value))},de=function(e){L.value=!0,v.value(A.value).then((function(t){$.value=t,"function"==typeof e&&e(t),L.value=!1}))},ve=function(e){return u(e)?"single"===p.value?{}:[]:_.value?e:"single"===p.value?re(e)||{}:e.filter((function(e){return!!re(e)})).map((function(e){return re(e)}))};if("single"!==p.value&&!u(B.value)&&!Array.isArray(B.value))throw new Error('v-model must be an array when using "'.concat(p.value,'" mode'));return v&&"function"==typeof v.value?O.value?de(se):1==_.value&&se():($.value=v&&v.value?v.value:[],se()),S.value>-1&&l(A,(function(e){e.length<x.value||(L.value=!0,P.value&&($.value=[]),setTimeout((function(){e==A.value&&v.value(A.value).then((function(t){e==A.value&&($.value=t,H.value=F.value.filter((function(e){return!0!==e.disabled}))[0]||null,L.value=!1)}))}),S.value))}),{flush:"sync"}),l(B,(function(e){var t,n,l;if(u(e))E.value=ve(e);else switch(p.value){case"single":(_.value?e[q.value]!=E.value[q.value]:e!=E.value[q.value])&&(E.value=ve(e));break;case"multiple":case"tags":t=_.value?e.map((function(e){return e[q.value]})):e,n=E.value.map((function(e){return e[q.value]})),l=n.slice().sort(),t.length===n.length&&t.slice().sort().every((function(e,t){return e===l[t]}))||(E.value=ve(e))}}),{deep:!0}),l((function(){return a.options}),(function(e){"function"!=typeof a.options&&($.value=a.options)}),{flush:"sync"}),{filteredOptions:F,hasSelected:W,multipleLabelText:X,extendedOptions:M,noOptions:z,noResults:G,resolving:L,busy:Q,select:Y,deselect:Z,remove:te,clear:ne,isSelected:le,isDisabled:ae,isMax:ue,getOption:re,handleOptionClick:function(e){if(!ae(e))switch(p.value){case"single":if(le(e))return void(V.value&&Z(e));Y(e),I(),R();break;case"multiple":if(le(e))return void Z(e);if(ue())return;Y(e),D.value&&N();break;case"tags":if(le(e))return void Z(e);if(ue())return;void 0===re(e[q.value])&&m.value&&(c.emit("tag",e[q.value]),b.value&&ce(e),N()),D.value&&N(),Y(e)}},handleTagRemove:function(e,t){0===t.button?te(e):t.preventDefault()},refreshOptions:function(e){de(e)},resolveOptions:de}}function s(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function v(e,t,n,l,a,u,r,i,o,c){"boolean"!=typeof r&&(o=i,i=r,r=!1);var s,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,a&&(d.functional=!0)),l&&(d._scopeId=l),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},d._ssrRegister=s):t&&(s=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),s)if(d.functional){var v=d.render;d.render=function(e,t){return s.call(t),v(e,t)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,s):[s]}return n}const p={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1}},setup(r,i){const o=function(n,l){var a=e(n),u=a.value,r=a.modelValue,i=a.mode;return{internalValue:t("single"!==i.value?[]:{}),externalValue:void 0!==l.expose?r:u}}(r,i),d=function(l,a,u){var r=e(l),i=r.searchable,o=(r.id,t(null)),c=n((function(){return i.value?-1:0}));return{multiselect:o,tabindex:c,focusInput:function(){o.value.querySelector(".multiselect-input").focus()},blurInput:function(){o.value.querySelector(".multiselect-input").blur()}}}(r),v={pointer:t(null)},p=function(t,n,l){var a=e(t),r=a.object,i=a.valueProp,o=a.mode,c=l.internalValue,s=function(e){return r.value||u(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},d=function(e){return u(e)?"single"===o.value?{}:[]:e};return{update:function(e){c.value=d(e);var t=s(e);n.emit("change",t),n.emit("input",t),n.emit("update:modelValue",t)}}}(r,i,{internalValue:o.internalValue}),f=function(a,u,r){var i=e(a),o=i.searchable,c=i.mode,s=r.internalValue,d=t(null),v=t(null),p=n((function(){return d.value?"".concat(d.value.length,"ch"):"tags"===c.value&&-1===[null,void 0].indexOf(s.value)&&s.value.length?"1ch":"100%"}));return l(d,(function(e){u.emit("search-change",e)})),{search:d,input:v,tagsSearchWidth:p,clearSearch:function(){d.value=""},focusSearch:function(){v.value.focus()},blurSearch:function(){o.value&&v.value.blur()}}}(r,i,{internalValue:o.internalValue}),h=function(l,a,u){var r=e(l),i=r.maxHeight,o=r.disabled,c=r.searchable,s=u.multiselect,d=u.blurInput,v=u.blurSearch,p=u.focusInput,f=u.focusSearch,h=t(!1),y=n((function(){return"".concat(i.value,"px")}));return{isOpen:h,contentMaxHeight:y,openDropdown:function(){o.value||(h.value=!0,a.emit("open"))},closeDropdown:function(){h.value=!1,a.emit("close")},open:function(){c&&c.value?f():p()},close:function(){c&&c.value?v():d()},handleInputMousedown:function(e){h.value&&!c.value&&(s.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),s.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(r,i,{multiselect:d.multiselect,blurInput:d.blurInput,blurSearch:f.blurSearch,focusInput:d.focusInput,focusSearch:f.focusSearch}),y=c(r,i,{externalValue:o.externalValue,internalValue:o.internalValue,search:f.search,blurSearch:f.blurSearch,clearSearch:f.clearSearch,update:p.update,blurInput:d.blurInput,pointer:v.pointer}),m=function(t,u,r){var i=e(t),o=i.id,c=i.valueProp,s=r.filteredOptions,d=r.handleOptionClick,v=r.search,p=r.pointer,f=n((function(){return s.value.filter((function(e){return!0!==e.disabled}))})),h=function(e){p.value=e},y=function(){p.value=f.value[0]||null},m=function(){p.value=null},g=function(){var e=document.getElementById(o.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return l(v,(function(e){y()})),{pointer:p,isPointed:function(e){return!!p.value&&p.value[c.value]==e[c.value]},setPointer:h,setPointerFirst:y,clearPointer:m,selectPointer:function(){p.value&&!0!==p.value.disabled?(d(p.value),m()):m()},forwardPointer:function(){if(null===p.value)h(f.value[0]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])+1;f.value.length<=e&&(e=0),h(f.value[e]||null)}a((function(){g()}))},backwardPointer:function(){if(null===p.value)h(f.value[f.value.length-1]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])-1;e<0&&(e=f.value.length-1),h(f.value[e]||null)}a((function(){g()}))}}}(r,0,{filteredOptions:y.filteredOptions,handleOptionClick:y.handleOptionClick,search:f.search,pointer:v.pointer}),g=function(t,n,l){var a=e(t).mode,u=l.internalValue,r=l.update,i=l.closeDropdown,o=l.clearPointer,c=l.search;return{handleBackspace:function(e){"single"!==a.value&&r(s(u.value).slice(0,-1))},handleEsc:function(e){i(),o(),e.target.blur()},handleSearchBackspace:function(e){""!==c.value&&e.stopPropagation()}}}(r,0,{internalValue:o.internalValue,update:p.update,closeDropdown:h.closeDropdown,clearPointer:m.clearPointer,search:f.search});return{...o,...h,...d,...v,...p,...f,...y,...m,...g}}};var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"multiselect",staticClass:"multiselect",class:["is-"+e.mode,{"is-open":e.isOpen,"is-searchable":e.searchable,"is-disabled":e.disabled,"no-caret":!e.caret}],attrs:{id:e.id},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[n("div",{staticClass:"multiselect-input",attrs:{tabindex:e.tabindex},on:{mousedown:e.handleInputMousedown,focus:e.openDropdown,blur:e.closeDropdown,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.handleEsc(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectPointer(t)}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:(t.preventDefault(),e.handleBackspace(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.backwardPointer(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.forwardPointer(t))}]}},["single"==e.mode&&e.hasSelected&&!e.search&&e.internalValue?[e._t("singlelabel",[n("div",{staticClass:"multiselect-single-label"},[e._v("\n          "+e._s(e.internalValue[e.label])+"\n        ")])],{value:e.internalValue})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",[n("div",{staticClass:"multiselect-multiple-label"},[e._v("\n          "+e._s(e.multipleLabelText)+"\n        ")])],{values:e.internalValue})]:e._e(),e._v(" "),"tags"!==e.mode&&e.searchable&&!e.disabled?[n("div",{staticClass:"multiselect-search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"input",domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.openDropdown(t)},blur:function(t){return t.stopPropagation(),e.closeDropdown(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.selectPointer(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.stopPropagation(),e.backwardPointer(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.stopPropagation(),e.forwardPointer(t))}],input:function(t){t.target.composing||(e.search=t.target.value)}}})])]:e._e(),e._v(" "),"tags"==e.mode?[n("div",{staticClass:"multiselect-tags"},[e._l(e.internalValue,(function(t,l,a){return n("span",{key:a},[e._t("tag",[n("div",{staticClass:"multiselect-tag"},[e._v("\n              "+e._s(t[e.label])+"\n              "),e.disabled?e._e():n("i",{on:{click:function(e){e.preventDefault()},mousedown:function(n){return n.preventDefault(),n.stopPropagation(),e.handleTagRemove(t,n)}}})])],{option:t,remove:e.remove,disabled:e.disabled})],2)})),e._v(" "),e.searchable&&!e.disabled?n("div",{staticClass:"multiselect-search",style:{width:e.tagsSearchWidth}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"input",style:{width:e.tagsSearchWidth},domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.openDropdown(t)},blur:function(t){return t.stopPropagation(),e.closeDropdown(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.selectPointer(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.stopPropagation(),e.backwardPointer(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.stopPropagation(),e.forwardPointer(t))}],input:function(t){t.target.composing||(e.search=t.target.value)}}})]):e._e()],2)]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",[n("div",{staticClass:"multiselect-placeholder"},[e._v("\n          "+e._s(e.placeholder)+"\n        ")])])],e._v(" "),n("transition",{attrs:{name:"multiselect-loading"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.busy,expression:"busy"}],staticClass:"multiselect-spinner"})]),e._v(" "),"single"!==e.mode&&e.hasSelected&&!e.disabled?n("a",{staticClass:"multiselect-clear",on:{click:function(t){return t.preventDefault(),e.clear(t)}}}):e._e()],2),e._v(" "),e.resolving&&e.clearOnSearch?e._e():n("transition",{attrs:{name:"multiselect"},on:{"after-leave":e.clearSearch}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[e._t("beforelist"),e._v(" "),e._l(e.filteredOptions,(function(t,l,a){return n("a",{key:a,staticClass:"multiselect-option",class:{"is-pointed":e.isPointed(t),"is-selected":e.isSelected(t),"is-disabled":e.isDisabled(t)},attrs:{tabindex:-1,href:""},on:{mousedown:function(e){e.preventDefault()},mouseenter:function(n){return e.setPointer(t)},click:function(n){return n.stopPropagation(),n.preventDefault(),e.handleOptionClick(t)}}},[e._t("option",[n("span",[e._v(e._s(t[e.label]))])],{option:t,search:e.search})],2)})),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noOptions,expression:"noOptions"}]},[e._t("nooptions",[n("div",{staticClass:"multiselect-no-options"},[e._v(e._s(e.noOptionsText))])])],2),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noResults,expression:"noResults"}]},[e._t("noresults",[n("div",{staticClass:"multiselect-no-results"},[e._v(e._s(e.noResultsText))])])],2),e._v(" "),e._t("afterlist")],2)])],1)};f._withStripped=!0;const h=v({render:f,staticRenderFns:[]},undefined,p,undefined,false,undefined,!1,void 0,void 0,void 0);export default h;
