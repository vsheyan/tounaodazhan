
module Scene {
	//https://www.cnblogs.com/gamedaybyday/p/6060424.html
	 var _stage:egret.Stage;
	 //最大保存5个场景页面
	 var _sceneQueen:Array<eui.UIComponent> = new Array<eui.UIComponent>();
	 //检测这个页面是否已经保存过
	 var _hashScene:{[key:number]:number} = {};
	 var _curtScene:eui.UIComponent;
	 export function showScene(onShowScene:eui.UIComponent,needSave:boolean):void{
		 Log.log("showScene 1");
		 //如果当前场景就是将要显示的场景那么返回
		 if(_curtScene == onShowScene){
			Log.error("场景已经在显示了");
			return;
		 }
		 Log.log("showScene 2");
		 //保证场景的唯一性
		/*if(_hashScene[onShowScene.hashCode] != undefined) {
			delete _hashScene[onShowScene.hashCode];
		}*/
		Log.log("showScene 3");
		if(needSave == true){
			_sceneQueen.push(onShowScene);
		}
		Log.log("showScene 4");
		_curtScene = onShowScene;
		addToScene(_curtScene);
	 }
	 export function setStage(stage:egret.Stage):void{
		 _stage = stage;
	 }
	 /**
	  * 返回上个场景
	  */
	 export function returnScene():void{
		 if(_sceneQueen.length > 0){
			_curtScene = _sceneQueen.pop();
			this.addToStage(_curtScene);
		 }else{
			 Log.error("场景已经到底了");
		 }
	 }
	 function addToScene(dis:eui.UIComponent):void{
		 if(_stage != null){
			 _stage.addChild(dis);
		 }else{
			 Log.log("场景为空");
		 }
	 }
	 function delScene(dis:eui.UIComponent):void{
		 if(_stage != null){
			 _stage.addChild(dis);
		 }else{
			 Log.log("场景为空");
		 }
	 }
	 export function getStage():egret.Stage{
		 if(_stage == null){
			 throw new Error("stage is null");
		 }
		 return _stage;
	 }
}