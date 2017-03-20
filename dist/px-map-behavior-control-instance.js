'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};(function(){'use strict';var ControlInstance={properties:{parentInstance:{type:Object,notify:true},position:{type:String,observer:'_updateControlPosition'}},observers:['_attachToParentInstance(parentInstance)'],ready:function ready(){var instance=this._createElementInstance();this._setElementInstance(instance)},attached:function attached(){this._attachToParentInstance()},detached:function detached(){this._detachFromParentInstance()},_attachToParentInstance:function _attachToParentInstance(){if(this.parentInstance&&!this.parentInstance.hasLayer(this.elementInstance)){this._bindControlParentListeners();this.elementInstance.addTo(this.parentInstance)}},_detachFromParentInstance:function _detachFromParentInstance(){if(this.parentInstance&&parentInstance.hasLayer(this.elementInstance)){this._unbindParentControlListeners();this.elementInstance.remove()}},_updateControlPosition:function _updateControlPosition(){if(!this.elementInstance||!this.position||!this.position.length)return;var position=this.elementInstance.getPosition();var newPosition=this._formatPosition(this.position);if(position!==newPosition){this.elementInstance.setPosition(newPosition)}},_formatPosition:function _formatPosition(position){return position.replace(/\-/,'')},_getControlPosition:function _getControlPosition(){if(!this.position)return undefined;return this._formatPosition(this.position)},_bindControlParentListeners:function _bindControlParentListeners(){if(_typeof(this.parentListeners)!=='object')return;for(var eventName in this.parentListeners){this.listen(this.parentElement,eventName,this.parentListeners[eventName])}},_unbindParentControlListeners:function _unbindParentControlListeners(){if(_typeof(this.parentListeners)!=='object')return;for(var eventName in this.parentListeners){this.unlisten(this.parentElement,eventName,this.parentListeners[eventName])}}};var namespace=window.PxMapBehavior=window.PxMapBehavior||{};namespace.ControlInstance=ControlInstance})();
//# sourceMappingURL=px-map-behavior-control-instance.js.map