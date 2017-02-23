'use strict';(function(){'use strict';var MarkerBaseImpl={properties:{lat:{type:Number,notify:true,observer:'shouldUpdateInst'},lng:{type:Number,notify:true,observer:'shouldUpdateInst'},name:{type:String,notify:true,observer:'shouldUpdateInst'}},canAddInst:function canAddInst(){return typeof this.lat==='number'&&typeof this.lng==='number'},createInst:function createInst(options){return L.marker(options.geometry,options.config)},updateInst:function updateInst(lastOptions,nextOptions){if(lastOptions.geometry!==nextOptions.geometry){this.elementInst.setLatLng(nextOptions.geometry)}if(lastOptions.config.icon!==nextOptions.config.icon){this.elementInst.setIcon(nextOptions.config.icon)}},getOptions:function getOptions(){var geometry=this.getLatLng();var config={};config.title=this.name||'';config.icon=this.getIcon();return{geometry:geometry,config:config}},getLatLng:function getLatLng(){if(!this.lat||!this.lng)return[];return L.latLng(this.lat,this.lng)},getIcon:function getIcon(){throw new Error('The `getIcon` method must be implemented.')}};var namespace=window.PxMapBehavior=window.PxMapBehavior||{};namespace.MarkerBase=[namespace.LayerBase,namespace.Common.LayerParent,MarkerBaseImpl]})();
//# sourceMappingURL=px-map-behavior-marker-base.js.map