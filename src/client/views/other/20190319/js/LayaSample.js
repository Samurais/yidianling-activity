var WebGL = Laya.WebGL;
var FAIRY_FE = 'bin';
var FAIRY_DIR = '';
var resUrl = '';
Laya.init(640, 1100, WebGL);
Laya.stage.bgColor = '#FFFFFF';
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.stage.alignH = Laya.Stage.ALIGN_LEFT;
Laya.stage.alignV = Laya.Stage.ALIGN_TOP;
//ui框架配置
fairygui.UIConfig.packageFileExtension = FAIRY_FE;
fairygui.UIConfig.modalLayerColor = "rgba(0,0,0,0.85)";
loadAndShowStartSceneUi();
function loadAndShowStartSceneUi() {
    Laya.loader.load([{
            url: FAIRY_DIR + 'Pack_atlas0.png',
            type: Laya.Loader.IMAGE
        }, {
            url: FAIRY_DIR + 'Pack.' + FAIRY_FE,
            type: Laya.Loader.BUFFER
        }
    ], Laya.Handler.create(null, startup));
}
var main;
var ctrl;
var startButton;
var btns;
var aScore;
var reLoader;
var reFiles = [
    ['A1.png', 'A2.png', 'A3.png', 'A4.png'],
    ['B1.png', 'B2.png', 'B3.png', 'B4.png'],
    ['C1.png', 'C2.png', 'C3.png', 'C4.png'],
    ['D1.png', 'D2.png', 'D3.png', 'D4.png'],
    ['E1.png', 'E2.png', 'E3.png', 'E4.png'],
    ['F1.png', 'F2.png', 'F3.png', 'F4.png']
];
function startup() {
    Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
    fairygui.UIPackage.addPackage('Pack');
    main = fairygui.UIPackage.createObject('Pack', 'Main').asCom;
    main.width = fairygui.GRoot.inst.width;
    main.height = fairygui.GRoot.inst.height;
    fairygui.GRoot.inst.addChild(main);
    main.getChild('n8').asCom.getChild('bg').asLoader.url = resUrl + 'bg/1.jpg';
    main.getChild('n9').asCom.getChild('bg').asLoader.url = resUrl + 'bg/2.jpg';
    main.getChild('n10').asCom.getChild('bg').asLoader.url = resUrl + 'bg/3.jpg';
    main.getChild('n11').asCom.getChild('bg').asLoader.url = resUrl + 'bg/4.png';
    reLoader = main.getChild('n11').asCom.getChild('n3').asLoader;
    main.getChild('n11').asCom.getChild('n2').asButton.onClick(null, onFinishButton);
    main.getChild('n11').asCom.getChild('n5').asButton.onClick(null, onSaveButton);
    main.getChild('n11').asCom.getChild('n4').asButton.onClick(null, onShareButton);
    btns = [];
    for (var i = 0; i < 2; ++i) {
        btns[i] = [];
        for (var j = 0; j < 4; ++j) {
            var btn = main.getChild('n' + (8 + i)).asCom.getChild('n' + j).asButton;
            btn.onClick(null, onNext, [i, j]);
            btns[i][j] = btn;
        }
    }
    for (var j = 0; j < 6; ++j) {
        var btn = main.getChild('n10').asCom.getChild('n' + (5 + j)).asButton;
        btn.onClick(null, onFinish, [j]);
    }
    ctrl = main.getController('c1');
    startButton = main.getChild('n7').asCom.getChild('n4').asButton;
    startButton.onClick(null, gameStart);
}
function gameStart() {
    ctrl.selectedIndex = 1;
    aScore = 0;
}
/**
 * @param i 题号
 * @param j 选项
 */
function onNext(i, j) {
    aScore += (4 - j);
    ctrl.selectedIndex += 1;
}
/**
 * @param j 类型
 */
function onFinish(j) {
    var reIdx = aScore < 3 ? 0 : aScore < 5 ? 1 : aScore < 7 ? 2 : 3;
    // reLoader.url = resUrl + 're/' + reFiles[j][reIdx];
    // ctrl.selectedIndex = 4;
    window.location.href = 'c4.html?u=re/' + reFiles[j][reIdx] + '&ggg=0';
}
function onFinishButton() {
    //解锁心中烦恼
}
function onSaveButton() {
    //长按保存
}
function onShareButton() {
    //分享好友
}
//# sourceMappingURL=LayaSample.js.map
