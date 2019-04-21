// window.onload = function () {

function ShowCountDown(jztime, divname) {
    let now = new Date();
    let endDate = new Date(Date.parse(jztime.replace(/-/g, "/")));
    let leftTime=endDate.getTime()-now.getTime();
    let leftsecond = parseInt(leftTime/1000);
    let day=Math.floor(leftsecond/(60*60*24));
    let hour=Math.floor((leftsecond-day*24*60*60)/3600);
    let minute=Math.floor((leftsecond-day*24*60*60-hour*3600)/60);
    let second=Math.floor(leftsecond-day*24*60*60-hour*3600-minute*60);
    if(day<0){
        day=0
    }
    if(day < 10){day = "0"+day;}
    if(hour < 10){hour = "0"+hour;}
    if(minute < 10){minute = "0"+minute;}
    if(second < 10){second = "0"+second;}
    return {
        day,
        hour,
        minute,
        second
    }
}

new Vue({
        el: "#root",
        data: {
            listsAll,
            lastTime:{
                day:"00",
                hour:"00",
                minute:"00",
                second:"00",
            },
            sell:"5",
            smallIndex:0,
            oneYuanArea,   //1元抢购
            IndexBig:0,  //时间段的索引
            IndexSmall:0, //当前小时段小的索引
            nextTimeType:{}  //倒计时间
        },
        //第一个
        created(){
            this.timeDayFun();
            this.timeWeekFun();
        },
        computed:{
            currentItem(){
                let currentItem="";
                if(this.oneYuanArea.length>0){
                    currentItem=this.oneYuanArea[this.IndexSmall].course;
                }
                return currentItem;
            }
        },
        methods:{
            //倒计时方法
            timeStart(){
                let {timeType}=this.nextTimeType;
                if(timeType){
                    timeType="2018/"+timeType;
                    window.setInterval(()=>{
                        let timeJson=ShowCountDown(timeType)
                        this.lastTime=timeJson;
                    }, 1000);
                }
            },
            //哪天高亮
            timeDayFun(){
                //判断今天是几号
                let  date = new Date();
                let today = date.getDate();
                let oneYuanArea=this.hasStart();
                let oldStartTimes=oneYuanArea.filter(item=>{
                    let day=item.time.split("/")[1];
                    if(day<today){
                        // item.isActive=false;
                        return true;
                    }
                })
                let IndexSmall=oldStartTimes.length;
                if(oldStartTimes.length===oneYuanArea.length){
                    --IndexSmall;
                }
                oneYuanArea[IndexSmall].isActive=true;
                this.oneYuanArea=oneYuanArea;
                this.IndexSmall=IndexSmall;

            },
            //哪个阶段高亮
            timeWeekFun(){
                let newStartTime=[];
                //判断今天是几号
                let today = new Date().getDate();
                newStartTime=startTimes.filter(item=>{
                    let day=item.timeType.split("/")[1];
                    if(day>today){
                        return true;
                    }
                })
                if(newStartTime.length>0){
                    this.sell=newStartTime[0].sell
                    this.nextTimeType=newStartTime[0]
                }
                this.timeStart();
            },
            hasStart(){
                //判断今天是几号
                let  date = new Date();
                let today = date.getDate();
                //start 0即将开始，1立即抢购，2已结束
                oneYuanArea.forEach(item=>{
                    let day=item.time.split("/")[1];
                    if(today<day){
                        item.course.start=0
                    }
                    else if(day==today){
                        item.course.start=1;
                    }
                    else{
                        item.course.start=2;
                    }
                })
                return oneYuanArea;
            },
            changeIndexSmall(index){
                this.oneYuanArea.forEach((item,i)=>{
                    if(index===i){
                        item.isActive=true;
                    }
                    else{
                        item.isActive=false;
                    }
                })
                this.IndexSmall=index;
                this.oneYuanArea=oneYuanArea;
            }
        }
    })
// }