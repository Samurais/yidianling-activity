
/**
 * 调用此文件必须先引入 createjs， 不然会报错。
 */

export default {

  LoadQueue(data = {}){

    let queue = new createjs.LoadQueue(true);

    let manifest = data.manifest || [];

    queue.loadManifest(manifest);

    queue.addEventListener("progress", handleProgress);
    queue.addEventListener("complete", handleComplete);
    queue.addEventListener("fileload", handleFileLoad);

    function handleProgress(res) {
      typeof data.handleProgress === "function" && data.handleProgress(res.progress);
    }

    function handleComplete(res) {
      typeof data.handleComplete === "function" && data.handleComplete();
    }

    function handleFileLoad(res) {
      typeof data.handleFileLoad === "function" && data.handleFileLoad(res);
    }
  }
}
