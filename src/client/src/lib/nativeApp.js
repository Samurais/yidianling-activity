import jump from "./jumpAPP";
import Util from "./util";
import {getRequestData} from "../component/semComponent/util";

export default {
  init() {
    let jumpAPP = jump.init();
    let isFromApp = Util.getQueryString("isFromApp");

    // 课程
    $("body").on("click", ".js_app_courseDetail", function () {

      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl = `${url}/${id}${Util.urlParams(paramsData)}`;

      // 判断来源是否为APP
      if (!!isFromApp) {
        let params = {course_id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};

        url = 'http';
        jumpAPP.setParams("course_detail", params, url);

      } else {
        window.location.href = linkUrl;
      }
    });

    // 测试详情
    $("body").on("click", ".js_app_test_item", function () {

      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl = !!id ? `${url}/${id}${Util.urlParams(paramsData)}${location.search}` : `${url}${location.search}`;

      // 判断来源是否为APP
      if (!!isFromApp) {
        let params = {course_id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};
        url = 'http';
        jumpAPP.setParams("test_item", params, "ydl_app");

      } else {
        window.location.href = linkUrl;
      }
    });
    // 测试主页
    $("body").on("click", ".js_app_test_list", function () {

      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl = !!id ? `${url}/${id}${Util.urlParams(paramsData)}${location.search}` : `${url}${location.search}`;

      // 判断来源是否为APP
      if (!!isFromApp) {
        // let params = {id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};

        url = 'http';
        jumpAPP.setParams("test_list", params, "ydl_app");

      } else {
        window.location.href = linkUrl;
      }
    });

    // 专家详情
    $("body").on("click", ".js_app_expert_detail", function () {

      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl = !!id ? `${url}/${id}${Util.urlParams(paramsData)}${location.search}` : `${url}${location.search}`;

      // 判断来源是否为APP
      if (!!isFromApp) {
        // let params = {id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};

        const baseUrl = linkUrl.replace("https://m.ydl", "https://h2.yidianling");
        const params = {url: `${baseUrl}/${id}`};
        const getInfoCode = encodeURIComponent(JSON.stringify(params));
        const url = `ydl-user://h5/h5?params=${getInfoCode}`;
        jumpAPP.setParamsRouter(url);

      } else {
        window.location.href = linkUrl;
      }
    });

    //下单页
    $("body").on("click", ".js_app_order", function () {
      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let isFromApp = Util.getIsFromApp();

      let linkUrl = !!id ? `${url}/${id}${Util.urlParams(paramsData)}${location.search}` : `${url}${location.search}`;

      // 判断来源是否为APP
      if (!!isFromApp) {

        const baseUrl = url.replace("https://m.ydl", "https://h2.yidianling");
        const params = {url: `${baseUrl}/${id}?`};
        const getInfoCode = encodeURIComponent(JSON.stringify(params));
        const uid = Util.getRequestData().uid;

        if (uid === undefined || uid == "-1" || uid == "" || uid == "0") {

          const action_name = 'login';
          const params = {};
          const url = 'ydl_app';
          jumpAPP.setParams(action_name, params, url);
        } else {
          const url = `ydl-user://h5/h5?params=${getInfoCode}`;
          jumpAPP.setParamsRouter(url);
        }

      } else {
        window.location.href = linkUrl;
      }
      return false;
    });
  }
}
