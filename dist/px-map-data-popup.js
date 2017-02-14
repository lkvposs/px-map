'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}(function(){'use strict';var PxMapDataPopup=function(){function PxMapDataPopup(){_classCallCheck(this,PxMapDataPopup)}_createClass(PxMapDataPopup,[{key:'_computeDataList',value:function _computeDataList(){if(!this.data||_typeof(this.data)!=='object')return;if(Array.isArray(this.data))return this.data;var data=[];for(var key in data){data.push(key,data[key])}return data}},{key:'_createPopup',value:function _createPopup(){var options=this._getPopupOptions({className:'map-data-popup',maxWidth:400,minWidth:300});var content=this._getPopupContent();return L.popup(options).setContent(content)}},{key:'_getPopupOptions',value:function _getPopupOptions(){var defaults=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var options=defaults;return options}},{key:'_getPopupContent',value:function _getPopupContent(){return Polymer.dom(this.root).innerHTML.trim()}},{key:'is',get:function get(){return'px-map-data-popup'}},{key:'behaviors',get:function get(){var ns=window.PxMapBehavior;return[ns.ElementInstance,ns.PopupInstance]}},{key:'properties',get:function get(){return{title:{type:String,observer:'_updatePopupContent'},data:{type:Object},_dataAsList:{type:Array,computed:'_computeDataList(data)',observer:'_updatePopupContent'}}}}]);return PxMapDataPopup}();Polymer(PxMapDataPopup)})();
//# sourceMappingURL=px-map-data-popup.js.map
