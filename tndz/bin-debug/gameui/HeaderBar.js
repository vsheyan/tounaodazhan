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
var HeaderBar = (function (_super) {
    __extends(HeaderBar, _super);
    function HeaderBar() {
        return _super.call(this) || this;
    }
    HeaderBar.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeaderBar.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return HeaderBar;
}(eui.Component));
__reflect(HeaderBar.prototype, "HeaderBar", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=HeaderBar.js.map