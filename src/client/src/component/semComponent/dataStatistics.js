
import {getRequestData} from './util';
import GUID from './guid';
/***
 * pvpu数据统计
 * @function dataStatistics
 * ***/
function dataStatistics() {
  //var urlparams = getUrlParams(window.location.href);
  const urlparams =  getRequestData(window.location.href);
  const guid = new GUID();
  // console.log("localStorage.getItem('YDLGuid')", localStorage.getItem('YDLGuid'));
  // console.log(localStorage.getItem('YDLGuid'));

  if (!localStorage.getItem('YDLGuid')) {
    localStorage.setItem('YDLGuid', guid.newGUID())
  }
  const postData = {};
  postData.unitId = urlparams.unit_id;
  postData.guid = localStorage.getItem('YDLGuid');
  postData.keywordId = urlparams.keyword_id;
  postData.url = window.location.href;
  //console.log(postData)
  $.ajax({
    type: 'POST',
    url: '//dc.ydl.com/api/PvUvStats/getPvUvStats',
    data: JSON.stringify(postData),
    dataType: "json",
    contentType: 'application/json',
    success: function () {

    }
  });
  $('<a href="#" id="serviceButton"></a>').appendTo($("#app")).click(function(){
    console.log('#serviceButton click')
    _hmt.push(['trackEvent', $G.preloadedState.data.pathname, 'click', '商务通','button']);
  })
}

export {dataStatistics};
export default dataStatistics;
