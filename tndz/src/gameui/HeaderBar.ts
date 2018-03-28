class HeaderBar extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}
	private image_userhead:eui.Image;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	
	public setUserHeader(source:string):void{
		this.image_userhead.source = source;
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}