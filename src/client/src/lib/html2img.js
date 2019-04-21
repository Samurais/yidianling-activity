
export default {

  // 网页生成图片
	html2img(cloneElm, callback){

    // 必须回页面顶部,不然没法截取。
    $(window).scrollTop(0);

		// 获取要clone的原始节点
    let $originalDom = cloneElm;

    // 获取要clone的节点
    let $cloneDom = $originalDom.clone();

    // 放到页面底部
    $('body').append($cloneDom);

    // 得到宽高
    let w = cloneElm.innerWidth();
    let h = cloneElm.innerHeight();

    // 设置clone节点的样式
    $cloneDom.css({
      "position": "absolute",
      "top": "0",
      "z-index": "-1",
      "width":w,
      "height": h,
    }).addClass("clone-element");

    // 创建一个canvas节点
    let canvas = document.createElement("canvas");

    // 设置放大倍数，为了兼容高频手机
    let scale = 2;

    // 设置canvas的宽高
    canvas.width = w * scale;
    canvas.height = h * scale;

    // 获取context
    canvas.getContext("2d").scale(scale, scale);

    // 设置属性
    let opts = {
      scale: scale,
      canvas: canvas,
      // logging: true, //日志开关，便于查看html2canvas的内部执行流程
      width: w,
      height: h,
      useCORS: true, //【重要】开启跨域配置
    };

    html2canvas($cloneDom, opts).then(function (canvas) {

      let context = canvas.getContext('2d');

      // 【重要】关闭抗锯齿
      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;

      // 【重要】默认转化的格式为png,也可设置为其他格式
      var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height);

      typeof callback === "function" && callback(img);

      $(".clone-element").remove();
    });
	},

};
