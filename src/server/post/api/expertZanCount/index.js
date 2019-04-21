
const mConfig = require("m.config");

module.exports.start = async function(app, redis) {

  // 清理数据
  //redis.del("node_expert_uid");

	app.post("/api/getExpertCount", async function(req, res){

    let uid = req.body.uid;
    let uidData = await redis.hmget("node_expert_uid", uid);

    let count = !!uidData ? uidData.count : 0;

    res.json(
      Object.assign( {}, mConfig.dataJson,
        {
          "data": {
            count,
          }
        }
      )
    );
  });

  app.post("/api/setExpertCount", async function(req, res){

    let uid = req.body.uid;
    let name = req.body.name;
    let uidData = await redis.hmget("node_expert_uid", uid);

    let count = !!uidData ? uidData.count : 0;
    +count++;

    let uidInfo = {};
    uidInfo[uid] = {
      count,
      name,
      uid,
    };

    redis.hmset("node_expert_uid", {...uidInfo});

    let rCount = await redis.hmget("node_expert_uid", uid);

    res.json(
      Object.assign({}, mConfig.dataJson, {"msg": "设置成功", "data": {
        "count": rCount.count
      }})
    );
  });

  app.post("/api/getExpertTotalCount", async function(req, res){

    let mid = req.body.mid;
    let totalUidData = await redis.hmgetall("node_expert_uid");

    if(mid = "ydlluckyml") {
      res.json(
        Object.assign( {}, mConfig.dataJson,
          {
            "data": totalUidData
          }
        )
      );
    } else {
      res.json(
        Object.assign( {}, mConfig.dataJson,
          {
            "msg": "你的数据有问题哦",
          }
        )
      );
    }
  });

}
