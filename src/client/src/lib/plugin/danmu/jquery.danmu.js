import jQuery from 'jquery';
/**
 * jQuery Generic Plugin Module
 * Version 0.1
 * Copyright (c) 2011 Cyntax Technologies - http://cyntaxtech.com
 * Licensed under the Cyntax Open Technology License
 *     http://code.cyntax.com/licenses/cyntax-open-technology
 */

(function( $ ) {
	$.jQueryPlugin = function( name ) {
		$.fn[name] = function( options ) {
			var args = Array.prototype.slice.call( arguments , 1 );
			if( this.length ) {
				return this.each( function() {
					var instance = $.data( this , name ) || $.data( this , name , new cyntax.plugins[name]( this , options )._init() );
					if( typeof options === "string" ){
						options = options.replace( /^_/ , "" );
						if( instance[options] ) {
							instance[options].apply( instance , args );
						}
					}
				});
			}
		};
	};
})( jQuery );

var cyntax = {
	plugins : {}
};;/*!
 * Pause jQuery plugin v0.1
 *
 * Copyright 2010 by Tobia Conforto <tobia.conforto@gmail.com>
 *
 * Based on Pause-resume-animation jQuery plugin by Joe Weitzel
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or(at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 51
 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */
/* Changelog:
 *
 * 0.1    2010-06-13  Initial release
 */
(function() {
	var $ = jQuery,
		pauseId = 'jQuery.pause',
		uuid = 1,
		oldAnimate = $.fn.animate,
		anims = {};

	function now() { return new Date().getTime(); }

	$.fn.animate = function(prop, speed, easing, callback) {
		var optall = $.speed(speed, easing, callback);
		optall.complete = optall.old; // unwrap callback
		return this.each(function() {
			// check pauseId
			if (! this[pauseId])
				this[pauseId] = uuid++;
			// start animation
			var opt = $.extend({}, optall);
			oldAnimate.apply($(this), [prop, $.extend({}, opt)]);
			// store data
			anims[this[pauseId]] = {
				run: true,
				prop: prop,
				opt: opt,
				start: now(),
				done: 0
			};
		});
	};

	$.fn.pause = function() {
		return this.each(function() {
			// check pauseId
			if (! this[pauseId])
				this[pauseId] = uuid++;
			// fetch data
			var data = anims[this[pauseId]];
			if (data && data.run) {
				data.done += now() - data.start;
				if (data.done > data.opt.duration) {
					// remove stale entry
					delete anims[this[pauseId]];
				} else {
					// pause animation
					$(this).stop();
					data.run = false;
				}
			}
		});
	};

	$.fn.resume = function() {
		return this.each(function() {
			// check pauseId
			if (! this[pauseId])
				this[pauseId] = uuid++;
			// fetch data
			var data = anims[this[pauseId]];
			if (data && ! data.run) {
				// resume animation
				data.opt.duration -= data.done;
				data.done = 0;
				data.run = true;
				data.start = now();
				oldAnimate.apply($(this), [data.prop, $.extend({}, data.opt)]);
			}
		});
	};
})();;/**
 * jQuery Timer Plugin
 * Project page - http://code.cyntaxtech.com/plugins/jquery-timer
 * Version 0.1.1
 * Copyright (c) 2011 Cyntax Technologies - http://cyntaxtech.com
 * dependencies: jquery.plugin.js
 * Licensed under the Cyntax Open Technology License
 *     http://code.cyntax.com/licenses/cyntax-open-technology
 * ------------------------------------
 * For details, please visit:
 * http://code.cyntaxtech.com/plugins/jquery-timer
 */

(function( $ ){
	cyntax.plugins.timer = function( ele , options ){
		this.$this = $( ele );
    this.options = $.extend( {} , this.defaults , options );
		this.timer_info = {id:null, index:null, state:0};
	};
	cyntax.plugins.timer.prototype = {
		defaults : {
			delay: 1000,      // delay in milliseconds (optional)
			repeat: false,    // true to repeat the timer continuously, or a number for repeating this number of times (optional)
			autostart: true,	// timer starts as soon as it is created, set false to start manually
			callback: null,   // callback (optional)
			url: '',          // url to load content from (optional)
			post: ''          // post data (optional)
		},
		_init : function(){
			if (this.options.autostart) {
				this.timer_info.state = 1;
				this.timer_info.id = setTimeout( $.proxy( this._timer_fn, this ) , this.options.delay);
			}
			return this;
		},
		_timer_fn : function() {
				if (typeof this.options.callback == "function")
					$.proxy( this.options.callback, this.$this ).call(this, ++this.timer_info.index);
				else if (typeof this.options.url == "string") {
					ajax_options = {
						url: this.options.url,
						context: this,
						type: (typeof this.options.post == "string" && typeof this.options.post != "" == "" ? "POST": "GET"),
						success: function(data, textStatus, jqXHR) {
							this.$this.html(data);
						}
					};
					if (typeof this.options.post == "string" && typeof this.options.post != "")
						ajax_options.data = this.options.post;
					$.ajax(ajax_options);
				}
				if ( this.options.repeat && this.timer_info.state == 1 &&
					(typeof this.options.repeat == "boolean" || parseInt(this.options.repeat) > this.timer_info.index) )
					this.timer_info.id = setTimeout( $.proxy( this._timer_fn, this ) , this.options.delay );
				else
					this.timer_id = null;
		},
		start : function() {
			if (this.timer_info.state == 0) {
				this.timer_info.index = 0;
				this.timer_info.state = 1;
				this.timer_id = setTimeout( $.proxy( this._timer_fn, this ) , this.options.delay);
			}
		},

		stop : function(){
			if ( this.timer_info.state == 1 && this.timer_info.id ) {
				clearTimeout(this.timer_info.id);
				this.timer_id = null;
			}
			this.timer_info.state = 0;
		},

		pause : function() {
			if ( this.timer_info.state == 1 && this.timer_info.id )
				clearTimeout(this.timer_info.id);
			this.timer_info.state = 0;
		},

		resume : function() {
			this.timer_info.state = 1;
			this.timer_id = setTimeout( $.proxy( this._timer_fn, this ) , this.options.delay);
		}
	};

	$.jQueryPlugin( "timer" );

})( jQuery );
;/*!
 *弹幕引擎核心
 *
 * Copyright 2015 by Liyawei Of AcGit.cc
 * @license MIT
 */

function randomNum (m,n){
  return Math.floor(Math.random()*(m - n) + n);
  }
  randomNum(1,300);


let tick = (callback, timer = null, s = 0) => {

  function run(){
    timer = setTimeout(function(){
      if(s>=300) {
        s = 0;
      };
      s++;
      callback(s);
      run();
    }, 100);
  }
  run();
}


;(function( $ ){


 var Danmu= function (element, options) {
    this.$element	= $(element);
    this.options	= options;
    $(element).data("nowtime",0);
    $(element).data("danmu_array",options.danmuss);
    $(element).data("opacity",options.opacity);
    $(element).data("paused",1);
    $(element).data("topspace",0);
    $(element).data("bottomspace",0);

    this.$element.css({
      "position":"absolute",
      "left":this.options.left*2,
      "top":this.options.top,
      "width":"100%",
      "height": "100%",
      "z-index":this.options.zindex,
      "color":options.default_font_color,
      "overflow":"hidden"
    });
  var heig=this.$element.height();

	var row_conut=parseInt(heig/options.font_size_big);
	var rows_used=new Array();

	$("<div class='timer71452'></div>").appendTo(this.$element );
  this.$timer=$(".timer71452");

  tick(function(index){

    $(element).data("nowtime",index);

    let n = index + 10;
    let nn = n > 300 ? n - 300 : n;
    let $ele = $(element).data("danmu_array");

		if($ele["new"] !== undefined) {
			if(!!$ele["new"].length) {
				if($ele[nn]) {
					$ele[nn].push($ele["new"].pop());
				}else {
					$ele[nn] = new Array();
					$ele[nn].push($ele["new"].pop());
				}
			}
	}

    heig=$(element).height();
			//row_conut=parseInt(heig/options.font_size_big);
			if($(element).data("danmu_array")[$(element).data("nowtime")]){

        var danmus=$(element).data("danmu_array")[$(element).data("nowtime")];

				for(var i=0;i<danmus.length;i++){
					var a_danmu="<div class='flying flying2' id='linshi'></div>";
          $(element).append(a_danmu);
          if(danmus[i].xinqin) {
            $("#linshi").html("<span><i class='icon iconfont' style='color:"+danmus[i].xinqin+"'>&#xe604;</i>"+danmus[i].text+"</span>");
          } else {
            $("#linshi").html("<span>"+danmus[i].text+"</span>");
          }
					if (danmus[i].hasOwnProperty('isnew')){
						$("#linshi").css({"border":"2px solid "+danmus[i].color});
					}

					//var top_local=parseInt(30+(options.height-60)*Math.random());//随机高度
          var row = parseInt(row_conut*Math.random());
          while (rows_used.indexOf(row)>=0 ){
            var row = parseInt(row_conut*Math.random());
          }
          rows_used.push(row);
          if (rows_used.length==row_conut){
            rows_used =new Array();
            row_conut=parseInt(heig/options.font_size_big);
          }
          var top_local=(row)*options.font_size_big;
          $("#linshi").css({"position":"absolute" ,"top":top_local ,"left":options.width+5});

          var fly_tmp_name="fly"+parseInt(heig*Math.random()).toString();
          $("#linshi").attr("id",fly_tmp_name);

          $('#'+fly_tmp_name).animate({left:-$('#'+fly_tmp_name).width()*2,},options.speed*2
            ,function(){
              $(this).remove();
            }
           );

				}
			}
   });
};


Danmu.DEFAULTS = {
		left: 0,
		top: 0 ,
		height: 360,
		width: 640,
		zindex :100,
		speed:5000,
		sumtime:65535	,
		danmuss:{},
		default_font_color:"#FFFFFF",
		font_size_small:16,
		font_size_big:24,
    opacity:"0.9",
    ico:"",
		top_botton_danmu_time:6000
	}

Danmu.prototype.danmu_start = function(){
	//this.$timer.timer('start');
  this.$element.data("paused",0);
  this.$element.data("danmu_array")["new"]=new Array();
};

Danmu.prototype.add_danmu = function(arg){

	if(this.$element.data("danmu_array")[arg.sign]){
		this.$element.data("danmu_array")[arg.sign].push(arg);
	}
	else{
		this.$element.data("danmu_array")["new"].push(arg);
	}
};

Danmu.prototype.refresh_danmu = function(data){
	this.$element.data("danmu_array", data);
};


function Plugin(option,arg) {
    return this.each(function () {
      var $this   = $(this);
      var options = $.extend({}, Danmu.DEFAULTS, typeof option == 'object' && option);
      var data    = $this.data('danmu');
      var action  = typeof option == 'string' ? option : NaN;
      if (!data) $this.data('danmu', (data = new Danmu(this, options)))
      if (action)	data[action](arg);
    })
};


$.fn.danmu             = Plugin;
$.fn.danmu.Constructor = Danmu;


})(jQuery);
