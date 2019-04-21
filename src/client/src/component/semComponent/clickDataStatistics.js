import Util,{getRequestData} from './util';
import GUID from './guid';
import getGlobal from 'system.global';
const global = getGlobal();

/***
 * 点击事件统计
 * @function clickDataStatistics
 * indexId {1:商务通, 2:400}
 * ***/
function clickDataStatistics(indexId) {
  const urlparams =  getRequestData(window.location.href);
  const guid = new GUID();
  const postData = {};
  if (!localStorage.getItem('YDLGuid')) {
    localStorage.setItem('YDLGuid', guid.newGUID())
  }
  postData.unitId = urlparams.unit_id;
  postData.guid = localStorage.getItem('YDLGuid');
  postData.indexId = indexId;
  postData.url = global.location.href;
  $.ajax({
    type: 'POST',
    //url: '//dc.ydl.com/api/PvUvStats/getPvUvStats',
    url: '//dc.ydl.com/api/PvUvStats/getClickNum',
    data: JSON.stringify(postData),
    dataType: "json",
    contentType: 'application/json',
    success: function () {

    }
  });
  $("#serviceButton").click();

}


export {clickDataStatistics};
export default clickDataStatistics;
