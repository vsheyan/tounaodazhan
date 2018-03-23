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
var BattleView = (function (_super) {
    __extends(BattleView, _super);
    function BattleView() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resourcepublish/eui_skins/BattleView.exml";
        return _this;
    }
    BattleView.prototype.uiCompHandler = function () {
    };
    BattleView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BattleView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return BattleView;
}(eui.Component));
__reflect(BattleView.prototype, "BattleView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BattleView.js.map