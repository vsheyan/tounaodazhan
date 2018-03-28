var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BagView = (function (_super) {
    __extends(BagView, _super);
    function BagView() {
        return _super.call(this) || this;
    }
    BagView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BagView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return BagView;
}(eui.Component));
__reflect(BagView.prototype, "BagView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BagView.js.map