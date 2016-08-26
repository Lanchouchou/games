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
		var data =data.data;
		var a;
		var wx='';
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			wx="http://ti.3g.qq.com/open/s?aid=jumpurl&url=";
		}
		var str = '<div class="left-img"><img src="'+data.logo+'" /></div><div class="m-content"><p class="h2">'+data.name+'</p><p class="h3">109万人使用  '+data.size+'MB</p><ul class="btn"></ul></div><a download="download" onclick=';
		str = str +"_hmt.push(['_trackEvent','游戏详情','详情下载"+data.name+"'])";
		str = str + ' href="'+wx+data.fileurl+'"><div class="right-btn">安装</div></a>';
		$(".header").append(str);
		for(var i=0;i<data.tags.length;i++){
			(function(i){
				var a = '<li style="color:'+data.tags[i].color+'; background-color:'+data.tags[i].bgcolor+';">'+data.tags[i].name+'</li>';
				$(".btn").append(a);
			})(i);	
		}
		for(var i=0,n=data.imgs.length;i<n;i++){
			(function(i,n){		
				if(i==n-1){
					var sttr = '<img onload="move()" src="'+data.imgs[i]+'" />';
				}else{
					var sttr = '<img  src="'+data.imgs[i]+'" />';
				}
				$("#qg li").append(sttr);
			})(i,n);			
		}
		var sttrr = '<div class="zhedie"><p>'+data.desc+'</p></div>';		
		$(".text1").append(sttrr);
	}
	
	function move(){
		var w_a=0,
	    	mv_left=0,
	   	   	star_x,star_y,move_y,
	   	   	lefts,
	   	   	a = document.getElementById('qg'),
		   	b_w = document.body.clientWidth,/*获取浏览器宽度*/
		   	objs = document.getElementById('qg').getElementsByTagName('li');
		    /*获取li总长度*/
	    for(var i=0,ns=objs.length;i<ns;i++){
			w_a = w_a+objs[i].clientWidth;
	    }  
	   	/*开始触屏*/
	    a.addEventListener('touchstart', function(e){              	
	    	star_x = e.targetTouches[0].pageX;/*记录触屏位置*/
	    	star_y= e.targetTouches[0].pageY;
	    	lefts = Number(a.style.left.split('p')[0]);               	               
	    }, false);
	    /*触屏中*/
	    a.addEventListener('touchmove',function(e){ 
	    	var y= e.targetTouches[0].pageY;
	    	if(y-star_y<=30&&y-star_y>=-30){
	    		e.preventDefault();/*阻止默认事件*/
	    		var x = e.targetTouches[0].pageX;/*获取触屏坐标*/
		    	mv_left = lefts+x-star_x;             	  	
		    	if(mv_left>=0 && x-star_x>=0){
		    	  	a.style.left='0px';
		    	}else if(mv_left<-(w_a-b_w) && x-star_x<=0){
		    	  	a.style.left=-(w_a-b_w)+'px';
		    	}else{
		    	  	a.style.left=mv_left+'px';  
		    	}
	    	}
	    }, false);    
	}
	function ajaxfoot(urlss,hfun,type){
		var type = type?type:"GET";
		$.ajax({
		    type : type,
		    url : urlss,
		    dataType : "json",
		    success: function(data){
		      hfun(data);
		    }
		});
	}
	function hfun(data){
		var data =data.data;
		console.log(data);
		var str='<p class="h2 fs">'+data[0].title+'</p><a href="'+data[0].targetid+'"><div class="banner"><img src="'+data[0].img+'" /></div></a><p class="foot_font">'+data[0].desc+'</p>';
		$(".footer").append(str);
	}
	