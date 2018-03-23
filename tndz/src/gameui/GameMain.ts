class GameMain extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
		this.skinName = "resourcepublish/eui_skins/GameMain.exml";
	}
	private userhead:eui.Image;
	private uiCompHandler() :void {
		//设置头像和玩家信息
		this.updatePlayerView(PlayerManager.getInstance().getUserInfo());
	}
	
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	/**
	 * 更新玩家头像积分金币....
	 */
	private updatePlayerView(data:any):void{
		this.userhead.source = "200_png";
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}