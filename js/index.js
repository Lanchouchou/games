	function ajxafun(urls,okfun,type){
		var type = type?type:"GET";
		$.ajax({
		    type : type,
		    url : urls,
		    dataType : "json",
		    success: function(data){
		      okfun(data);
		    }
		});
	}
	function okfun(data) {
		var obj = $(".all");
		obj.html(" ");
		var data =data.data;
		var wx='';
		var a;
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			wx="http://ti.3g.qq.com/open/s?aid=jumpurl&url=";
		}		
		for(var i = 0; i < data.length; i++) {
		    var str = '<div class="column"><a href="detail.html?apkid='+data[i].apkid+'"><div class="img_box"><img src="'+data[i].logo_url+'" class="img" /></div></a>';
		    str = str + '<div class="text"><p class="title">'+data[i].name+'</p><span class="count">'+data[i].download_times_fixed+'人在用</span><span class="s">'+data[i].size_fixed+'M</span><div class="t-text">';
			for(var j=0;j<data[i].tags.length;j++){
				(function(j){
					a = '<span class="c-btn" style="background-color:'+data[i].tags[j].bgcolor+';color:'+data[i].tags[j].color+';">'+data[i].tags[j].name+'</span>';
					str = str + a;
				})(j);
			}			
		    str = str + '</div></div><a download="download" onclick=';
		    str = str + "_hmt.push(['_trackEvent','游戏列表','首页下载"+data[i].name+"'])";
		    str = str +' href="'+wx+data[i].down_url+'"><div class="btn">安装</div></a></div>';
		    obj.append(str);
		}		  
	}
