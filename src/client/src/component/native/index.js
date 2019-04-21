import React, {Component} from 'react';
import jump from "../../lib/jumpAPP";
import Util from "../../lib/util";

class Native extends Component {

  constructor(props) {

    super(props)
  }

  componentDidMount() {

    let jumpAPP = jump.init();

    let isFromApp = Util.getQueryString("isFromApp");

    // 课程
    $("body").on("click", ".js_app_courseDetail", function(){

      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl = `${url}/${id}${Util.urlParams(paramsData)}`;

      // 判断来源是否为APP
      if(!!isFromApp) {
        let params = {course_id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};

        url = 'http';
        jumpAPP.setParams("course_detail", params, url);

      } else {
        window.location.href = linkUrl;
      }
    });

    // 测试详情
    $("body").on("click", ".js_app_test_item", function(){

      let _this = $(this);
      let url = _this.data("url") || "";
      let ffrom = _this.data("ffrom");
      let ttab = _this.data('ttab');
      // let cps_quce = _this.data("cps_quce");
      let id = _this.data("id");
     console.log( _this.data," _this.data")
      let linkUrl =!!id ? `${url}/${id}` : `${url}`;

      let urlParams = Util.getRequestData();

      let paramsData = Util.jsonToParams(urlParams);

      if(ffrom && ffrom != "0") {
        linkUrl = `${linkUrl}?ffrom=${ffrom}&${paramsData}`;
      } else if(ttab && ttab != "0"){
        linkUrl = `${linkUrl}?ttab=${ttab}&${paramsData}`;
      }else{
        linkUrl = `${linkUrl}?${paramsData}`;
      }


      // 判断来源是否为APP
      if(!!isFromApp) {
        let params = {course_id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};
        url = 'http';
        jumpAPP.setParams("test_item", params, "ydl_app");

      } else {
        window.location.href = linkUrl;
      }
    });
    // 测试主页
    $("body").on("click", ".js_app_test_list", function(){

      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl =!!id ? `${url}/${id}${Util.urlParams(paramsData)}${location.search}` : `${url}${location.search}`;

      // 判断来源是否为APP
      if(!!isFromApp) {
        // let params = {id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};

        url = 'http';
        jumpAPP.setParams("test_list", params, "ydl_app");

      } else {
        window.location.href = linkUrl;
      }
    });

    // 专家详情
    $("body").on("click", ".js_app_expert_detail", function(){

      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl =!!id ? `${url}/${id}${Util.urlParams(paramsData)}${location.search}` : `${url}${location.search}`;

      // 判断来源是否为APP
      if(!!isFromApp) {
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
    $("body").on("click", ".js_app_order", function(){
      let _this = $(this);
      let url = _this.data("url") || "";
      let paramsData = _this.data("params") || {};
      let id = _this.data("id");

      let linkUrl =!!id ? `${url}/${id}${Util.urlParams(paramsData)}${location.search}` : `${url}${location.search}`;

      // 判断来源是否为APP
      if(!!isFromApp) {
        // let params = {id: id, url: linkUrl.replace("https://m.ydl", "https://h2.yidianling")};

        const baseUrl = linkUrl.replace("https://m.ydl", "https://h2.yidianling");
        const params = {url: `${baseUrl}/${id}`};
        const getInfoCode = encodeURIComponent(JSON.stringify(params));

        const url = `ydl-user://h5/h5?params=${getInfoCode}`;
        jumpAPP.setParamsRouter(url);


      } else {
        window.location.href = linkUrl;
      }
      return false;
    });

  }

  render() {
    return (
      <div></div>
    )
  }

}

export default Native;
