var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GamePlayer = (function () {
    function GamePlayer() {
    }
    return GamePlayer;
}());
__reflect(GamePlayer.prototype, "GamePlayer");
var BagItem = (function () {
    function BagItem() {
    }
    return BagItem;
}());
__reflect(BagItem.prototype, "BagItem");
var PlayerManager = (function () {
    function PlayerManager() {
        this._player = new GamePlayer();
    }
    PlayerManager.getInstance = function () {
        return PlayerManager._instance;
    };
    /**
     * 刷新平台玩家信息
     */
    PlayerManager.prototype.updatePlatformUser = function (data) {
        this._player.name = data.name;
        this._player.headurl = data.headurl;
    };
    /**
     * 带有玩家完整信息 平台信息+游戏信息
     */
    PlayerManager.prototype.getUserInfo = function () {
        return this._player;
    };
    /**
     * 更新平台玩家信息
     */
    PlayerManager.prototype.udpateGameUser = function (data) {
    };
    PlayerManager._instance = new PlayerManager();
    return PlayerManager;
}());
__reflect(PlayerManager.prototype, "PlayerManager");
//# sourceMappingURL=PlayerManager.js.map