var config = {
	id:'datesss',/*时间div id*/
	row:6,
	conbtn: false,  /*控制左右按钮显示关闭 true|false*/
	data:'yyyy年MM月dd日', /*设置时间格式*/
	week:['日','一','二','三','四','五','六'],/*设置星期一到星期五格式*/
};

// 设置
var rdata     = '上次刷新时间';
var setmor    = '更多';
var setop     = '置顶';
var morIcon   = '../img/icon/mor.png';
var dataIcon  = '../img/icon/data.png';
var userIcon  = '../img/icon/user.png';
var reIcon    = '../img/icon/s.png';
var ageJson = {
	"ageli":[
		{
			"id":1,
			"data":"2017年11月01日",
			"list":[
						{
							"stime":"00:00",
							"endtime":"01:00",
							"content":"ssssssssssssssssssssssssssssss"
						},
						{
							"stime":"09:00",
							"endtime":"10:00",
							"content":"普伊格蒙特水水水水水水水水水水水甩下我们跑了到一定的阶段他就会懂得这些——到底有多快这样看他个人。每个人都会有些闹情绪的时刻，就像周末对阵曼联的比赛中又发生了一次。问题在于你开始得到了不好的名声而且为自己招来了负面的注意力。"
						},
						{
							"stime":"10:00",
							"endtime":"18:00",
							"content":"我不介意场上到处都是奇怪的凶狠铲球但是在一些愚蠢的问题上他必须要让自己远离麻烦。我不太同意那些说阿里必须要锋芒毕露地去打比赛才能达到他的最佳状态——你可以付出一切并且同时控制好你自己。到一定的阶段他就会懂得这些——到底有多快这样看他个人。每个人都会有些闹情绪的时刻，就像周末对阵曼联的比赛中又发生了一次。问题在于你开始得到了不好的名声而且为自己招来了负面的注意力。"
						}
					]
		},
		{
			"id":2,
			"data":"2017年11月02日",
			"list":[
						{
							"stime":"09:00",
							"endtime":"16:00",
							"content":"ssssssssssssssssssssssssssssss"
						},
						{
							"stime":"18:00",
							"endtime":"18:00",
							"content":"我不介意场上到处都是奇怪的凶狠铲球但是在一些愚蠢的问题上他必须要让自己远离麻烦。我不太同意那些说阿里必须要锋芒毕露地去打比赛才能达到他的最佳状态——你可以付出一切并且同时控制好你自己。到一定的阶段他就会懂得这些——到底有多快这样看他个人。每个人都会有些闹情绪的时刻，就像周末对阵曼联的比赛中又发生了一次。问题在于你开始得到了不好的名声而且为自己招来了负面的注意力。"
						}
					]
		},
		{
			"id":3,
			"data":"2017年11月03日",
			"list":[
						{
							"stime":"1:00",
							"endtime":"16:00",
							"content":"ssssssssssssssssssssssssssssss"
						},
						{
							"stime":"18:00",
							"endtime":"23:00",
							"content":"我不介意场上到处都是奇怪的凶狠铲球但是在一些愚蠢的问题上他必须要让自己远离麻烦。我不太同意那些说阿里必须要锋芒毕露地去打比赛才能达到他的最佳状态——你可以付出一切并且同时控制好你自己。到一定的阶段他就会懂得这些——到底有多快这样看他个人。每个人都会有些闹情绪的时刻，就像周末对阵曼联的比赛中又发生了一次。问题在于你开始得到了不好的名声而且为自己招来了负面的注意力。"
						}
					]
		}
	]
},rdata,setmor,morIcon;
function lodjson(){
	var cenJson = {
		"name":"type",
		"center":[
			{
				"id":"1",
				"name":"待办事务",
				"retime":"2017年10月26日15:17:20",
				"src":"",
				"cname":"job",
				"list":[
					{
						"ctitle":"车辆派车单（2017年10月22日12:52:37）",
						"step":"1",
						"stepName":"起草",
						"rtime":"2017年10月22日12:52:37",
						"user":"admin",
						"url":"",
						"topVal":""
					},
					{
						"ctitle":"车辆派车单（2017年10月22日12:52:37）",
						"step":"2",
						"stepName":"审批",
						"rtime":"2017年10月22日12:52:37",
						"user":"admin",
						"url":"",
						"topVal":""
					},
					{
						"ctitle":"车辆派车单（2017年10月22日12:52:37）",
						"step":"3",
						"stepName":"结束",
						"rtime":"2017年10月22日12:52:37",
						"user":"admin",
						"url":"",
						"topVal":""
					}
				]
			},
			{
				"id":"2",
				"name":"通知公告",
				"retime":"2017年10月26日15:17:20",
				"src":"",
				"cname":"notice",
				"list":[
					{
						"ctitle":"土地承包期延长30年 农民可以得到些什么？",
						"step":"",
						"stepName":"",
						"rtime":"2017年10月22日12:52:37",
						"user":"东坡肘子",
						"url":"",
						"topVal":"1"
					},
					{
						"ctitle":"土地承包期延长30年 农民可以得到些什么？",
						"step":"",
						"stepName":"",
						"rtime":"2017年10月22日12:52:37",
						"user":"东坡肘子",
						"url":"",
						"topVal":"1"
					},
					{
						"ctitle":"车辆派车单（2017年10月21日12:52:37）",
						"step":"",
						"stepName":"",
						"rtime":"2017年10月22日12:52:37",
						"user":"东坡肘子",
						"url":"",
						"topVal":"0"
					}
				]
			}
		]
	};
	var voteJson = {
		"center":[
			{
				"id":"1",
				"name":"投票",
				"retime":"2017年10月26日15:17:20",
				"src":"",
				"cname":"vote",
				"list":[
					{
						"ctitle":"[2017-10-20] 关于旧计算机使用情况调查",
						"step":"1",
						"stepName":"",
						"rtime":"2017年10月22日12:52:37",
						"user":"admin",
						"url":"",
						"topVal":""
					},
					{
						"ctitle":"[2017-10-20] 关于旧计算机使用情况调查",
						"step":"2",
						"stepName":"",
						"rtime":"2017年10月22日12:52:37",
						"user":"admin",
						"url":"",
						"topVal":""
					},
					{
						"ctitle":"[2017-10-20] 关于旧计算机使用情况调查",
						"step":"3",
						"stepName":"",
						"rtime":"2017年10月22日12:52:37",
						"user":"admin",
						"url":"",
						"topVal":""
					}
				]
			}
		]
	};
	var fileJson = {
		"id":"1",
		"sname":"文件柜",
		"retime":"2017年10月26日15:17:20",
		"src":"",
		"type":"file",
		"list":[
			{
				"title":"个人文件柜",
				"step":"1",
				"stepName":"",
				"rtime":"2017年10月22日12:52:37",
				"user":"admin",
				"url":"",
				"icon":"../img/icon/pers.png",
				"topVal":""
			},
			{
				"title":"公共文件柜",
				"step":"2",
				"stepName":"",
				"rtime":"2017年10月22日12:52:37",
				"user":"admin",
				"url":"",
				"icon":"../img/icon/pub.png",
				"topVal":""
			},
			{
				"title":"个人共享",
				"step":"3",
				"stepName":"",
				"rtime":"2017年10月22日12:52:37",
				"user":"admin",
				"url":"",
				"icon":"../img/icon/cloud.png",
				"topVal":""
			}
		]
	};
	menu();
	getCenterList(cenJson);
	setTimeout(function(){
		getCalendar();
	});
	agenda();
	getFileCabinet(fileJson);
	getCenterList(voteJson);
};
if (!Object.keys) Object.keys = function(o) {
	if (o !== Object(o))
		throw new TypeError('Object.keys called on a non-object');
	var k=[],p;
	for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
	return k;
}
var con = {
	hasClass:function( elements,cName ){    
	    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );   
	},    
	addClass:function( elements,cName ){    
	    if( !this.hasClass( elements,cName ) ){
	    	if (!elements.getAttribute("class")) {
	        	elements.className += cName;
	        } else {
	        	elements.className += " "+cName;
	        }
	    };    
	},   
	removeClass:function( elements,cName ){
	    if( this.hasClass( elements,cName ) ){    
	        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ),"");  
	    };    
	},
}
function menu(){
	var json = { 
		"name": "menus",
		"menu": [
			{ 
				"title": "首页", 
				"img": "../img/icon/index.png", 
				"imgs": "../img/icon/index2.png", 
				"url":"",
				"id":"1",
				"smenu": [] 
			},{ 
				"title": "个人事物1", 
				"img": "../img/icon/job.png", 
				"imgs": "../img/icon/job2.png", 
				"url":"",
				"id":"2",
				"smenu": [
					{ 
						"title": "个人事物1", 
						"img": "../img/icon/job.png", 
						"imgs": "../img/icon/job2.png", 
						"url":"",
						"id":"1",
						"thmenu": [] 
					},
					{ 
						"title": "个人事物1", 
						"img": "../img/icon/job.png", 
						"imgs": "../img/icon/job2.png", 
						"url":"",
						"id":"1",
						"thmenu": [] 
					}
				] 
			},{
				"title":"个人事物",
				"img":"../img/icon/job.png",
				"imgs":"../img/icon/job2.png",
				"url":"",
				"id":"3",
				"smenu":[
					{'title':"二级菜单",'url':"",'id':"1","thmenu":[]},
					{'title':"二级菜单",'url':"",'id':"2","thmenu": [
							{"mtitle":"三级菜单三级菜单三级菜单","url":"org"},
							{"mtitle":"三级菜单三级菜单三级","url":"org"},
							{"mtitle":"三级菜单三级菜单","url":"org"},
							{"mtitle":"三级菜单三级","url":"org"},
							{"mtitle":"三级菜单","url":"org"}
						]
					},
					{'title':"二级菜单",'url':"",'id':"3","thmenu":[]},
					{'title':"二级菜单",'url':"",'id':"4","thmenu": [
							{"mtitle":"三级菜单三级菜单三级菜单","url":"org"},
							{"mtitle":"三级菜单三级菜单三级","url":"org"},
							{"mtitle":"三级菜单三级菜单","url":"org"},
							{"mtitle":"三级菜单三级","url":"org"},
							{"mtitle":"三级菜单","url":"org"}
						]
					},
					{'title':"二级菜单",'url':"",'id':"5","thmenu":[]},
					{'title':"二级菜单",'url':'','id':'6',"thmenu": [
							{"mtitle":"三级菜单三级菜单三级菜单","url":"org"},
							{"mtitle":"三级菜单三级菜单三级","url":"org"},
							{"mtitle":"三级菜单三级菜单","url":"org"},
							{"mtitle":"三级菜单三级","url":"org"},
							{"mtitle":"三级菜单","url":"org"}
						]
					}
				]
			},
			{ 
				"title": "外部组织机构初始化设置引导", 
				"img": "../img/icon/index.png", 
				"imgs": "../img/icon/index2.png", 
				"url":"",
				"id":"4",
				"smenu": [] 
			}
		] 
	};
	var menuID = document.getElementById("menu");
	var ul     = document.createElement("ul");
	var mjson  = json.menu;
	for (var i = 0; i < mjson.length; i++) {
		var li    = document.createElement("li");
		var title = mjson[i].title;
		var img   = mjson[i].img;
		var imgs  = mjson[i].imgs;
		var smenu = mjson[i].smenu;
		li.title  = title;
		if (smenu.length>0) {
			var sul      = document.createElement("ul");
			var div      = document.createElement("div");
			li.innerHTML = "<img src='" + img + "' class='img' />" +
							"<img src ='" + imgs + "' class='imgs' />" +
							"<span>" + title + "</span>";
			for (var s = 0; s < smenu.length; s++) { // 二级菜单
				var sli = document.createElement("li");
				var mmenu     = smenu[s].thmenu;
				var title = smenu[s].title;
				var url   = smenu[s].url;
				sli.setAttribute("title",title);
				//sli.title     = smenu[u].title;
				sli.innerHTML = "<b><a href='" + url + "'>" +
											title +
									  "</a></b>";
				if (mmenu.length > 0) {
					var mul   = document.createElement("ul");
					var clear = document.createElement("div");
					clear.setAttribute("style","clear:both");
					for (var d = 0; d < mmenu.length; d++) { // 三级菜单
						var mli       = document.createElement("li");
						var murl      = mmenu[d].url;
						var mtitle    = mmenu[d].mtitle;
						mli.title     = mtitle;
						mli.innerHTML = "<a href='" + murl + "'>" +
											mtitle +
										"</a>";
						mul.appendChild(mli);
					}
					mul.appendChild(clear);
					sli.appendChild(mul);
				}
				sul.appendChild(sli);
			}
			div.setAttribute("class","list");
			div.appendChild(sul);
			li.appendChild(div);
		} else {
			li.innerHTML  = "<a href='" + json.menu[i].url + "'><img src='" + img + "' class='img' />" +
							"<img src ='" + imgs + "' class='imgs' />" +
							"<span>" + title + "</span></a>";
		}
		ul.appendChild(li);
	}
	menuID.appendChild(ul);
}
function strToJson(str){  
     var json = (new Function("return " + str))();  
     return json;  
} 
function getCenterList(cenJson){
	var contentID = document.getElementById("content");
	var cen       = cenJson.center;
	for (var i = 0; i < cen.length; i++) {
		var div = document.createElement("div"),
		lis     = cen[i].list;
		div.setAttribute('class','list');
		if (lis.length>0) {
			var mul = document.createElement("ul"),
			main    = document.createElement("div"),
			mor     = document.createElement("div"),
			ctitile = cen[i].name,
			rtime   = getNowFormatDate(),
			cename  = cen[i].cname,
			src     = cen[i].src;
			div.innerHTML = '<div class="listNav">' +
								'<div class="title">' +  ctitile  + '</div>' +
								'<div class="data"> '+  rdata  +'：<span>' +  rtime  + '</span><img src="'+ reIcon +'"></div>' +
								'<div class="clear"></div>'
							'</div>';
			mor.setAttribute("class","mor");
			mor.innerHTML = '<a href="'+  src  +'">' +
								'<img src="' +  morIcon  + '" title="'+  setmor  +'" />' +
							'</a>';
			main.setAttribute("class","main");
			for (var r = 0; r < lis.length; r++) {
				var title = lis[r].ctitle,
				data      = lis[r].rtime, 
				user      = lis[r].user, 
				step      = lis[r].step,
				li        = document.createElement("li"),
				setype,stepColor,sname,valtop;
				if (lis[r].stepName) {
					if (step === "1" || step === 1) {
						stepColor = "colour";
					} else if (step === "2" || step === 2) {
						stepColor = "red";
					} else {
						stepColor = "orange";
					};
					sname = '<span class ="'+ stepColor +'">[' + lis[r].stepName + ']</span>';
				} else if (lis[r].topVal) {
					if (lis[r].topVal === '1' || lis[r].topVal === 1) {
						sname = '<span class="top">'+ setop +'</span>';
					} else {
						sname = ''
					}
				} else {
					sname = "";
				}
				if (cename === 'notice') {
					setype = '<div class="footer">' +
									'<span>'+ user +'</span>' +
									'<span>'+ data +'</span>' + 
								'</div>';
				} else {
					setype = '<div class="data">' +
								'<img src="'+ dataIcon +'"/>' +
								'<span>'+ data +'</span>' +
							'</div>' +
							'<div class="user">' +
								'<img src="'+ userIcon +'"/>' +
								'<span>'+ user +'</span>' +
							'</div>';
				}
				li.innerHTML = '<div class="title">' +
									 title  +  sname  + 
								'</div>' +
								'<div class="cont">' +  setype  + '<div class="clear"></div></div>';
				mul.appendChild(li);
			}
			main.appendChild(mul);
			div.appendChild(main);
			div.appendChild(mor);
			
		}
		contentID.appendChild(div);
	}
}

function agenda(){
	var contentID = document.getElementById("content"),div = document.createElement("div"),
	mor = document.createElement("div"),main  = document.createElement("div");
	div.setAttribute("style","width:100%");
	div.setAttribute("class","list");
	main.setAttribute("class","main flex");
	main.setAttribute("style","padding-right:0; width: calc(100% - 45px);");
	set.data.addClass(mor,"mor");
	mor.innerHTML = '<a href="">' +
						'<img src="' +  morIcon  + '" title="" />' +
					'</a>';
	div.innerHTML = '<div class="listNav">'+
						'<div class="title">个人日程</div>'+
						'<div class="data">'+
							 rdata +'：<span>'+getNowFormatDate()+'</span>'+
							'<img src="'+ reIcon +'">'+
						'</div>'+
						'<div class="clear"></div>' +
					'</div>';

	main.innerHTML = '<div id="'+ config.id +'"></div>';
	div.appendChild(main);
	div.appendChild(mor);
	contentID.appendChild(div);
	setTimeout(function(){
		var list = document.getElementById("clist").getElementsByTagName('div'),
		m = document.createElement("div");
		m.setAttribute("class","agelist");
		m.setAttribute("id","agelist");
		main.appendChild(m);
		clear = document.createElement("div");
		clear.setAttribute("class","clear");
		main.appendChild(clear);
		for (var i = 0; i < list.length; i++) {
			var c = list[i].getAttribute("class");
			if (c === "tody active") {
				agelist(list[i],list[i].getAttribute("value"));
			}
			var vals = list[i].getAttribute("value");
			list[i].setAttribute("onClick","agelist(this,'"+vals+"')");
		};
	});
}

function agelist(obj,val){
	var time = 24,
	m = document.getElementById("agelist"),
	age      = ageJson.ageli,top,h = 1,a = 1,r = 1,
	box      = document.createElement("div"),
	llist    = document.createElement("div"),
	rlist    = document.createElement("div"),nsp,
	nbsp     = "<div class='nbsp'>&nbsp;</div>";
	box.setAttribute("class","agemain");
	llist.setAttribute("class","ageleft");
	rlist.setAttribute("id","rlist");
	rlist.setAttribute("class","ageright");
	m.innerHTML="";
	for (var i = 0; i < time; i++) {
		var ift = i<10?'0'+i:i,color;
		if (i === new Date().getHours()) { color = " red";top = (i-4)*35}else{color=""};
		llist.innerHTML += "<div class='leftlist"+color+"'>" + ift + ':00' + "</div>";
		rlist.innerHTML += nbsp;
	}
	for (var i = 0; i < age.length; i++) {
		var list = age[i].list;
		if (val === age[i].data) {
			var sta = parseInt(list[0].stime);
			if (sta) {a = sta - 1};
			for (var s = 0; s < list.length; s++) {
				var t = (parseInt(list[s].endtime) - parseInt(list[s].stime)),sty,c,nclass,
				tia   = (time - sta)+s,
				eti   = time - parseInt(list[s].endtime),
				calc  = eti + t,
				diff  = calc - eti,
				hours =  new Date().getHours();
				if (parseInt(list[s].endtime) < hours || hours < parseInt(list[s].stime)) { 
					c = "background:white;";
				} else {
					c = "background:#fb5b3b;color:white;";
				}
				if (t <= 0 && "0") {
					h      = 1 + h;
					sty    = "height:36px;"+c+";";
					nclass = "nowrap listStyle";
				} else {
					h      = t + h;
					r      = (h-s)-2;
					sty    = "height:" + ((t*35)+t) +"px;-webkit-line-clamp:"+t+";"+c+";";
					nclass = "ver listStyle";
				}
				var d = 1,starlist = parseInt(list[s].stime);
				if (tia != eti) {
					var rs = s+d;
					if (s) {
						var d  = rs - 2,
						end    = parseInt(list[d].endtime),
						topsta = parseInt(list[d].stime),
						starts = parseInt(list[s].stime),
						staArr = starts - end,
						enArr  = end - topsta;
						if (enArr === 0) {
							rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
							"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
						} else if (staArr === 4 ) {
							rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
							"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
						}else{
							rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
							"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
						}
					} else {
						rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
						"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
					}
				} else {
					var starts = parseInt(list[s].stime),
					ends       = parseInt(list[s].endtime),
					enArr      = ends - starts;
					if (enArr < 2) {
						rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
						"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
					} else {
						console.log(s +":"+starts,ends);
					}
				}
				
			}
		}
	}
	// setTimeout(function(){
	// 	m.scrollTo(0,top);
	// });
	set.data.setFuncticon(obj,val);
	var  ddd= document.createElement("div");
	ddd.setAttribute("class","duori");
	box.appendChild(ddd);
	box.appendChild(llist);
	box.appendChild(rlist);
	m.appendChild(box);
}

function getNowFormatDate() {
	var date = new Date(),fmt='yyyy-MM-dd hh:mm:ss',
	yy = date.getFullYear(),
	mm = date.getMonth(),
	dd = date.getDate(),v = {
        "M+": mm, //月份 
        "d+": dd, //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((mm + 3) / 3), //季度 3
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) 
    	fmt = fmt.replace(RegExp.$1, (yy + "").substr(4 - RegExp.$1.length));
    for (var k in v)
    if (new RegExp("(" + k + ")").test(fmt))
    	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (v[k]) : (("00" + v[k]).substr(("" + v[k]).length)));
    return fmt;
}

function getFileCabinet(json){
	var contentID = document.getElementById("content"),
	div           = document.createElement("div"),
	lis           = json.list;
	div.setAttribute('class','list');
	if (lis.length>0) {
		var main = document.createElement("div"),
		mor      = document.createElement("div"),
		slist    = document.createElement("div"),
		title    = json.sname,
		rtime    = getNowFormatDate(),
		src      = json.src;
		set.data.addClass(slist,"slist");
		set.data.addClass(mor,"mor");
		mor.innerHTML = '<a href="'+  src  +'">' +
							'<img src="' +  morIcon  + '" title="'+  setmor  +'" />' +
						'</a>';
		main.setAttribute("class","main");
		div.innerHTML = '<div class="listNav">' +
							'<div class="title">' +  title  + '</div>' +
							'<div class="data"> '+  rdata  +'：<span>' +  rtime  + '</span><img src="'+ reIcon +'"></div>' +
							'<div class="clear"></div>' +
						'</div>';
		//alert(lis[0].title);
		for (var i = 0; i < lis.length; i++) {
			var title = lis[i].title,
			icon      = lis[i].icon,
			color     = ["colourBg","orangeBg","redBg"],
			fileli    = document.createElement("div"),
			liner     = "<div class='fileicon'><img src='"+icon+"'/></div><div class='filename'>"+title+"</div>";
			set.data.addClass(fileli,"fileli");
			set.data.addClass(fileli,color[i]);
			fileli.innerHTML = liner;
			slist.appendChild(fileli);
		}
		main.appendChild(slist);
		clear = document.createElement("div");
		clear.setAttribute("class","clear");
		main.appendChild(clear);
		div.appendChild(main);
		div.appendChild(mor);
		
	}
	contentID.appendChild(div);
}
function up(y,m,d){
    m--;
    if(m < 1){
        m = 12;
        y--;
        //d--;
    }
    set.data.calendarList(y,m,d);
}
function down(y,m,d){
    m++;
    if(m > 12){
        m = 1;
        y++;
        //d++;
    }
    set.data.calendarList(y,m,d);
}
function getCalendar(){
	var time = new Date(),
	YY       = time.getFullYear(),
	MM       = time.getMonth()+1,
	DD       = time.getDate();
	//upmonth(YY,MM);
	set.data.calendarList(YY,MM,DD);
}
var set = {
	config:config,
	data:{
		calendarList:function(YYYY,MM,DD){
			var leap       = YYYY%4,
			time           = new Date(),
			toyy           = time.getFullYear(),
			tomm           = time.getMonth()+1,
			todd           = time.getDate(),
			tody           = this.setFormat(YYYY,MM,DD,set.config.data),
			space          = [0,1,2,3,4,5,6],
			setFull        = time.setFullYear(YYYY,MM,DD),
			moday          = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
			current        = space[new Date(Date.UTC(YYYY, MM-1, 1)).getDay()], // 获取制定月份的第一天星期几
			tomoday        = '',arr = new Array(),momath,yer,mon,
			parcur         = parseInt(current),
			list           = document.createElement("div"),
			title          = document.createElement("div"),
			main           = document.getElementById(set.config.id);
			main.innerHTML ="";
			main.setAttribute("class","calendar");
			list.setAttribute("class", "clist");
			list.setAttribute("id", "clist");
			title.setAttribute("class", "ctitle");
			if ( leap != 0 ) {
				moday[1] = 28;
			}else{
				moday[1] = 29;
			}
			if (config.conbtn === true && "true") {
				title.innerHTML += "<div style='width:100%;text-align:center'>"+
				    					"<span onclick=up("+ YYYY +","+ MM +","+ DD +")><</span>" +
				    					"<sapn id='tody'>"+ tody +"</sapn>" +
				    					"<span onclick=down("+ YYYY +","+ MM +","+ DD +")>></span>"+
				    			  "</div>";
			} else if (config.conbtn === false && "false") {
				title.innerHTML += "<div style='width:100%;text-align:center'>"+
				    					"<sapn id='tody'>"+ tody +"</sapn>" +
				    			  "</div>";
			}
			for (var i = 0; i < set.config.week.length; i++) {
				title.innerHTML += "<div>" +  set.config.week[i]  + "</div>";
			}
			title.innerHTML += '<br>';
			if (moday[MM-2]) {
				momath = moday[MM-2];
			} else {
				momath = moday[11];
			};
			for (var i = 1; i < momath; i++) {
				tomoday += i + ",";
			}
			if (momath = moday[11]) {
				tomoday += moday[11];
			} else {
				tomoday += moday[MM-2];
			}
			if (MM===1) {
				yer = YYYY - 1;
				mon = 11+MM;
			} else {
				yer = YYYY;
				mon = MM-1;
			}
			arr = tomoday.split(",");
			str = arr.slice(-parcur);
			for( i = 0; i < parcur; i++ ){
				list.innerHTML += '<div style="color:#ccc" value="'+this.setFormat(yer,mon,str[i],set.config.data)+'">'+ str[i] +'</div>';
			}
			math = parcur+moday[MM-1];
			num  = (7*set.config.row)-math;
			for( i = parseInt(current+1); i <= parseInt(moday[MM-1]+current); i++ ){
				if ( i%7 == 1 && i != 1 ){
					list.innerHTML += '<br>';
				}
				if (parseInt(i-current) === DD) {
					if (YYYY == toyy && MM === tomm && DD === todd) {
						list.innerHTML += '<div c_mon value="'+this.setFormat(YYYY,MM,parseInt(i-current),set.config.data)+'" class="tody active">'+parseInt(i-current)+'</div>';
					} else {
						list.innerHTML += '<div c_mon value="'+this.setFormat(YYYY,MM,parseInt(i-current),set.config.data)+'">'+parseInt(i-current)+'</div>';
					}
				} else {
					list.innerHTML += '<div c_mon value="'+this.setFormat(YYYY,MM,parseInt(i-current),set.config.data)+'">'+parseInt(i-current)+'</div>';
				}
			}
			mth = arr.slice(0,num);
			for (var i = 0; i < num ; i++) {
				list.innerHTML += '<div style="color:#ccc" value="'+this.setFormat(yer,mon,mth[i],set.config.data)+'">'+ mth[i] +'</div>';
			}
			for (var i = 0; i < list.getElementsByTagName('div').length; i++) {
				tag = list.getElementsByTagName('div');
				// tag[i].onClick=function(){
				// 	set.data.setFuncticon(tag[i]);
				// };
			}
			main.appendChild(title);
			main.appendChild(list);
		},
		setFuncticon:function(tag,val) {
			var beforeClass = tag.getAttribute("class"),
			partChild       = tag.parentNode.getElementsByTagName('div');
			for (var i = 0; i < partChild.length; i++) {
				if (set.data.hasClass(partChild[i],"active")) {
					set.data.removeClass(partChild[i],"active");
				}
			}
			tag.setAttribute("class","active");
			//document.getElementById("tody").innerTEXT = val;
		},
		// 设置时间格式
		setFormat: function(yy,mm,dd,fmt){
			var v = {
		        "M+": mm, //月份 
		        "d+": dd, //日 
		        // "h+": this.getHours(), //小时 
		        // "m+": this.getMinutes(), //分 
		        // "s+": this.getSeconds(), //秒 
		        // "q+": Math.floor((mm + 3) / 3), //季度 
		        // "S": this.getMilliseconds() //毫秒 
		    };
		    if (/(y+)/.test(fmt)) 
		    	fmt = fmt.replace(RegExp.$1, (yy + "").substr(4 - RegExp.$1.length));
		    for (var k in v)
		    if (new RegExp("(" + k + ")").test(fmt))
		    	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (v[k]) : (("00" + v[k]).substr(("" + v[k]).length)));
		    return fmt;
		},
		hasClass:function( elements,cName ){    
		    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );   
		},    
		addClass:function( elements,cName ){    
		    if( !this.hasClass( elements,cName ) ){
		    	if (!elements.getAttribute("class")) {
		        	elements.className += cName;
		        } else {
		        	elements.className += " "+cName;
		        }
		    };    
		},   
		removeClass:function( elements,cName ){
		    if( this.hasClass( elements,cName ) ){    
		        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" ),"");  
		    };    
		}
	}
}