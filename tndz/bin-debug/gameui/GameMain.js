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
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.uiCompHandler, _this);
        _this.skinName = "resourcepublish/eui_skins/GameMain.exml";
        return _this;
    }
    GameMain.prototype.uiCompHandler = function () {
        //设置头像和玩家信息
        this.updatePlayerView(PlayerManager.getInstance().getUserInfo());
    };
    GameMain.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    /**
     * 更新玩家头像积分金币....
     */
    GameMain.prototype.updatePlayerView = function (data) {
        this.userhead.source = "200_png";
    };
    GameMain.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameMain.js.map