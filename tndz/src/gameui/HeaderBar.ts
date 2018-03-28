class HeaderBar extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}
	private userhead:eui.Image;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	
	public setUserHeader(source:string):void{
		this.userhead.source = source;
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}