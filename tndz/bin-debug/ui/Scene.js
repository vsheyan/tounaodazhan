var Scene;
(function (Scene) {
    //https://www.cnblogs.com/gamedaybyday/p/6060424.html
    var _stage;
    //最大保存5个场景页面
    var _sceneQueen = new Array();
    //检测这个页面是否已经保存过
    var _hashScene = {};
    var _curtScene;
    function showScene(onShowScene, needSave) {
        Log.log("showScene 1");
        //如果当前场景就是将要显示的场景那么返回
        if (_curtScene == onShowScene) {
            Log.error("场景已经在显示了");
            return;
        }
        Log.log("showScene 2");
        //保证场景的唯一性
        /*if(_hashScene[onShowScene.hashCode] != undefined) {
            delete _hashScene[onShowScene.hashCode];
        }*/
        Log.log("showScene 3");
        if (needSave == true) {
            _sceneQueen.push(onShowScene);
        }
        Log.log("showScene 4");
        _curtScene = onShowScene;
        addToScene(_curtScene);
    }
    Scene.showScene = showScene;
    function setStage(stage) {
        _stage = stage;
    }
    Scene.setStage = setStage;
    /**
     * 返回上个场景
     */
    function returnScene() {
        if (_sceneQueen.length > 0) {
            _curtScene = _sceneQueen.pop();
            this.addToStage(_curtScene);
        }
        else {
            Log.error("场景已经到底了");
        }
    }
    Scene.returnScene = returnScene;
    function addToScene(dis) {
        if (_stage != null) {
            _stage.addChild(dis);
        }
        else {
            Log.log("场景为空");
        }
    }
    function delScene(dis) {
        if (_stage != null) {
            _stage.addChild(dis);
        }
        else {
            Log.log("场景为空");
        }
    }
    function getStage() {
        if (_stage == null) {
            throw new Error("stage is null");
        }
        return _stage;
    }
    Scene.getStage = getStage;
})(Scene || (Scene = {}));
//# sourceMappingURL=Scene.js.map