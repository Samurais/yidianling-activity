var path 	= require("path");

module.exports = {

  // 数据库配置
  mysqlConfig: function(env) {
    var env = +env < 7 ? "0" : +env == 7 ? "1" : "2";

    return {
      "0": {
        "host": "127.0.0.1",
        "port": 3306,
        "user": "root",
        "password": "123456",
        "database": "mysql",
        "multipleStatements": true,
        "timezone": '08:00',
      },

      "1": {
        "host": "127.0.0.1",
        "port": 3306,
        "user": "root",
        "password": "123456",
        "database": "mysql",
        "multipleStatements": true,
        "timezone": '08:00',
      },

      "2": {
        "host": "127.0.0.1",
        "port": 3306,
        "user": "root",
        "password": "123456",
        "database": "mysql",
        "multipleStatements": true,
        "timezone": '08:00',
      },
    }[env];
  },

	// 服务器配置
	ip: {

		node: {

			"0": {
				host: '127.0.0.1',
				port: 8080,
				portal: 'dev.activity.yidianling.com:8080'
      },

      "1": {
				host: '127.0.0.1',
				port: 8080,
				portal: 'dev.activity.yidianling.com:8080'
      },

      "2": {
				host: '127.0.0.1',
				port: 8080,
				portal: 'dev.activity.yidianling.com:8080'
      },

      "7": {
				host: '127.0.0.1',
				port: 7001,
				portal: 'test.activity.yidianling.com:7001'
			},

			"9": {
				host: '116.62.172.197',
				port: 9001,
				portal: 'activity.yidianling.com:9001'
			},
    },

    // redis
    redis: {

      "0": {
        host: "127.0.0.1",
        port: 9999,
        password: ""
      },

      "1": {
        host: "127.0.0.1",
        port: 9999,
        password: ""
      },

      "2": {
        host: "127.0.0.1",
        port: 9999,
        password: ""
      },

      "7": {
        host: "10.117.110.131",
        port: 6379,
        password: ""
      },

      "9": {
        host: "127.0.0.1",
        port: 9010,
        password: ""
      },
    },

		// web端请求
		webServer: {
      "0": "",
      "1": "",
      "2": "",
      "7": "",
      "9": "",
		},
  },

	// 目录结构
	path: {
		rootProject: function(env) {
			var env = +env >= 2 ? "1" : "0";
			return {
				"0": path.join(__dirname, "../"),
        "1": path.join(__dirname, "../"),
			}[env];
    },

    rootLogsProject: function(env) {
			var env = +env > 2 ? "1" : "0";
			return {
				"0": path.join(__dirname, "../../"),
        "1": path.join(__dirname, "../../../"),
			}[env];
    },
	},

	// webview环境
	dist: function(env) {
		var env = +env >= 2 ? "1" : "0";
		return {
			"0": "dev",
      "1": "prod",
		}[env];
  },

  // 日志等级
  logs: function(env) {
		var env = +env >= 2 ? "1" : "0";
		return {
			"0": "all",
      "1": "info",
		}[env];
  },
}
