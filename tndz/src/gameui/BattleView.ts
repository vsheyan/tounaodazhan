class BattleView extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
		this.skinName = "resourcepublish/eui_skins/BattleView.exml";
	}
	private uiCompHandler() :void {
		
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}