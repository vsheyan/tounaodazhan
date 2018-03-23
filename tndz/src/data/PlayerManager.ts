
class GamePlayer{
	public name:string;
	public headurl:string;
	public rank:number;
	public bagList:Array<BagItem>;
}
class BagItem{
	public name:string;
	public count:number;
	public quality:number;
	public imageURL:string;
}
class PlayerManager {
	private static _instance:PlayerManager = new PlayerManager();
	//玩家信息
	private _player:GamePlayer;
	public constructor() {
		this._player = new GamePlayer();
	}
	public static getInstance():PlayerManager{
		return PlayerManager._instance;
	}
	/**
	 * 刷新平台玩家信息
	 */
	public updatePlatformUser(data:any){
		this._player.name = data.name;
		this._player.headurl = data.headurl;
	}
	/**
	 * 带有玩家完整信息 平台信息+游戏信息
	 */
	public getUserInfo():GamePlayer{
		return this._player;
	}

	/**
	 * 更新平台玩家信息
	 */
	public udpateGameUser(data:any){
		
	}
}
