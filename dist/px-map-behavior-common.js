'use strict';(function(){'use strict';var Common={};Common.LatLng={properties:{}};Common.LayerParent={created:function created(){this._attachedChildren=this._attachedChildren||new WeakMap},detached:function detached(){this._detachLayerChildren()},listeners:{'px-map-layer-instance-created':'_tryToAddAllChildren','px-map-layer-ready-to-add':'_tryToAddOneChild'},_tryToAddAllChildren:function _tryToAddAllChildren(evt){if(!this.elementInst||evt.srcElement!==this)return;this._attachLayerChildren()},_tryToAddOneChild:function _tryToAddOneChild(evt){if(evt.srcElement===this)return;evt.stopPropagation();if(!this.elementInst)return;this._attachLayerChild(evt.srcElement)},_attachLayerChildren:function _attachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=children[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var child=_step.value;this._attachLayerChild(child)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}},_attachLayerChild:function _attachLayerChild(childEl){var _this=this;if(this._attachedChildren.has(childEl)||!childEl.willAddInst||!childEl.addInst||!childEl.canAddInst||!childEl.canAddInst())return;this._attachedChildren.set(childEl,true);this.async(function(){childEl.willAddInst()});this.async(function(){childEl.addInst(_this.elementInst)})},_detachLayerChildren:function _detachLayerChildren(){var children=this.getEffectiveChildren();if(!children||!children.length)return;var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=children[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var child=_step2.value;this._detachLayerChild(child)}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}},_detachLayerChild:function _detachLayerChild(childEl){if(!this._attachedChildren.has(childEl)||!childEl.willRemoveInst||!childEl.removeInst)return;this._attachedChildren.delete(childEl);this.async(function(){childEl.willRemoveInst()});this.async(function(){childEl.removeInst()})}};Common.LayerChild={properties:{}};var namespace=window.PxMapBehavior=window.PxMapBehavior||{};namespace.Common=namespace.Common||Common})();
//# sourceMappingURL=px-map-behavior-common.js.map