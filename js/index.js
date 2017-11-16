'use strict';
let column,rdata,setmor,morIcon,cenJson,voteJson,fileJson;
function lodjson(){
	menu(column);
	getCenterList(cenJson);
	setTimeout(function(){
		getCalendar();
	});
	agenda();
	getFileCabinet(fileJson);
	getCenterList(voteJson);
};

let con = {
	debug:true,
    log:function(msg){
    	try {
            if(this.debug){
                console.log(msg);
            }                  
        } catch (e){
            return 'Error:the function  log is not exist.';
        }
    },
    alert:function(msg){
        if(this.debug){
            alert(msg);
        }
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
	},
}
function menu(column){
	let menuID = document.getElementById("menu");
	let men    = column.menu;
	let ul     = document.createElement("ul");
	for (let i = 0; i < men.length; i++) {
		let smenu =  men[i].smenu;
		let li    = document.createElement("li");
		li.title  = men[i].title;
		if (smenu.length>0) {
			let smenumain = document.createElement("ul");
			let div       = document.createElement("div");
			li.innerHTML  = "<img src='" + men[i].img + "' class='img' />" +
							"<img src ='" + men[i].imgs + "' class='imgs' />" +
							"<span>" + men[i].title + "</span>";
			con.log("This is smenu :" + smenu);//.......
			for (let u = 0; u < smenu.length; u++) { // 二级菜单
				let smenulist       = document.createElement("li");
				let mmenu           = smenu[u].mmenu;
				smenulist.title     = smenu[u].title;
				smenulist.innerHTML = "<b><a href='" + smenu[u].url + "'>" +
											smenu[u].title +
									  "</a></b>";
				con.log("This is mmenu :" + mmenu);//.......
				if (mmenu.length > 0) {
					con.log("This is smenu length :" + mmenu.length);
					let mul   = document.createElement("ul");
					let clear = document.createElement("div");
					clear.setAttribute("style","clear:both");
					for (let l = 0; l < mmenu.length; l++) { // 三级菜单
						let mli       = document.createElement("li");
						mli.title     = mmenu[l].title;
						mli.innerHTML = "<a href='" + mmenu[l].url + "'>" +
											mmenu[l].title +
										"</a>";
						mul.appendChild(mli);
						con.log("This is mmenu :" + mul);//.......
					}
					mul.appendChild(clear);
					smenulist.appendChild(mul);
				}
				smenumain.appendChild(smenulist);
			}
			div.setAttribute('class','list');
			div.appendChild(smenumain);
			li.appendChild(div);
		} else {
			li.innerHTML  = "<a href='" + men[i].url + "'><img src='" + men[i].img + "' class='img' />" +
							"<img src ='" + men[i].imgs + "' class='imgs' />" +
							"<span>" + men[i].title + "</span></a>";
		}
		ul.appendChild(li);
	}
	menuID.appendChild(ul);
}

function getCenterList(cenJson){
	let contentID = document.getElementById("content");
	let cen       = cenJson.center;
	for (let i = 0; i < cen.length; i++) {
		let div = document.createElement("div"),lis = cen[i].mainlist;
		div.setAttribute('class','list');
		if (lis.length>0) {
			let mul = document.createElement("ul"),
			main    = document.createElement("div"),
			mor     = document.createElement("div"),
			ctitile = cen[i].title,
			rtime   = getNowFormatDate(),
			src     = cen[i].src;
			mor.setAttribute("class","mor");
			mor.innerHTML = '<a href="'+ `${src}` +'">' +
								'<img src="' + `${morIcon}` + '" title="'+ `${setmor}` +'" />' +
							'</a>';
			main.setAttribute("class","main");
			div.innerHTML = '<div class="listNav">' +
								'<div class="title">' + `${ctitile}` + '</div>' +
								'<div class="data"> '+ `${rdata}` +'：<span>' + `${rtime}` + '</span><img src="'+`${reIcon}`+'"></div>' +
							'</div>';
			for (let l = 0; l < lis.length; l++) {
				let title = lis[l].title,
				data      = lis[l].rtime, 
				user      = lis[l].user, 
				step      = lis[l].step,
				stype     = cen[i].type,
				li        = document.createElement("li"),
				setype,stepColor,sname,valtop;
				if (lis[l].stepName) {
					if (step === "1" || step === 1) {
						stepColor = "colour";
					} else if (step === "2" || step === 2) {
						stepColor = "red";
					} else {
						stepColor = "orange";
					};
					sname = '<span class ="'+`${stepColor}`+'">[' + lis[l].stepName + ']</span>';
				} else if (lis[l].topVal) {
					if (lis[l].topVal === '1' || lis[l].topVal === 1) {
						sname = '<span class="top">'+`${setop}`+'</span>';
					} else {
						sname = ''
					}
				} else {
					sname = "";
				}
				if (stype === 'notice') {
					setype = '<div class="footer">' +
									'<span>'+`${user}`+'</span>' +
									'<span>'+`${data}`+'</span>' + 
								'</div>';
				} else {
					setype = '<div class="data">' +
										'<img src="'+`${dataIcon}`+'"/>' +
										'<span>'+`${data}`+'</span>' +
									'</div>' +
									'<div class="user">' +
										'<img src="'+`${userIcon}`+'"/>' +
										'<span>'+`${user}`+'</span>' +
									'</div>';
				}
				li.innerHTML = '<div class="title">' +
									`${title}` + `${sname}` + 
								'</div>' +
								'<div class="cont">' + `${setype}` + '</div>';
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
	let contentID = document.getElementById("content"),div = document.createElement("div"),
	mor = document.createElement("div"),main  = document.createElement("div");
	div.setAttribute("style","width:100%");
	div.setAttribute("class","list");
	main.setAttribute("class","main flex");
	main.setAttribute("style","padding-right:0; width: calc(100% - 45px);");
	set.data.addClass(mor,"mor");
	mor.innerHTML = '<a href="">' +
						'<img src="' + `${morIcon}` + '" title="" />' +
					'</a>';
	div.innerHTML = '<div class="listNav">'+
						'<div class="title">个人日程</div>'+
						'<div class="data">'+
							`${rdata}`+'：<span>'+getNowFormatDate()+'</span>'+
							'<img src="'+`${reIcon}`+'">'+
						'</div>'+
					'</div>';

	main.innerHTML = '<div id="'+`${config.id}`+'"></div>';
	div.appendChild(main);
	div.appendChild(mor);
	contentID.appendChild(div);
	setTimeout(function(){
		let list = document.getElementById(config.id).getElementsByClassName("clist")[0].getElementsByTagName('div'),
		m = document.createElement("div");
		m.setAttribute("class","agelist");
		for (let i = 0; i < list.length; i++) {
			let c = list[i].getAttribute("class");
			if (c === "tody active") {
				agelist(m,list[i].getAttribute("c_value"));
			}
			list[i].addEventListener("click",function(){
				agelist(m,this.getAttribute("c_value"));
			});
		};
		main.appendChild(m);
	});
}

function agelist(m,val){
	let time = 24,
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
	for (let i = 0; i < time; i++) {
		let ift = i<10?'0'+i:i,color;
		if (i === new Date().getHours()) { color = " red";top = (i-4)*35}else{color=""};
		llist.innerHTML += "<div class='leftlist"+color+"'>" + ift + ':00' + "</div>";
		rlist.innerHTML += nbsp;
	}
	for (let i = 0; i < age.length; i++) {
		let list = age[i].list;
		if (val === age[i].data) {
			//rlist.innerHTML = "";
			let sta = parseInt(list[0].stime);
			if (sta) {a = sta - 1};
			// for (let l = 0; l < sta; l++) {
			// 	rlist.innerHTML += nbsp;
			// }
			for (let s = 0; s < list.length; s++) {
				let t = (parseInt(list[s].endtime) - parseInt(list[s].stime)),sty,c,nclass,
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
				// if (t <= 0 && "0") {
				// 	h = 1 + h;
				// 	sty = c + 'style="height:36px;'+c+';" class="nowrap listStyle"';
				// } else {
				// 	h = t + h;
				// 	r = (h-s)-2;
				// 	sty = 'style="height:' + (t*36) +'px;-webkit-line-clamp:'+t+';'+c+';" class="ver listStyle"';
				//}
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
				//let lists = "<div '"+sty+"' title='"+list[s].content+"'>" + list[s].content+ "</div>";
				let d = 1,starlist = parseInt(list[s].stime);
				if (tia != eti) {
					let rs = s+d;
					if (s) {
						let d  = rs - 2,
						end    = parseInt(list[d].endtime),
						topsta = parseInt(list[d].stime),
						starts = parseInt(list[s].stime),
						staArr = starts - end,
						enArr  = end - topsta;
						if (enArr === 0) {
							rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
							"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
							// for (let p = 1; p < staArr; p++) {
							// 	rlist.innerHTML += nbsp;
							// }
						} else if (staArr === 4 ) {
							rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
							"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
							// for (let p = 1; p < staArr; p++) {
							// 	rlist.innerHTML += nbsp;
							// }
						}else{
							rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
							"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
							// for (let p = 0; p < staArr; p++) {
							// 	rlist.innerHTML += nbsp;
							// }
						}
						//rlist.innerHTML += lists;
					} else {
						rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
						"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
						//rlist.innerHTML += lists;
					}
				} else {
					let starts = parseInt(list[s].stime),
					ends       = parseInt(list[s].endtime),
					enArr      = ends - starts;
					if (enArr < 2) {
						// for (let m = 0; m < enArr; m++) {
						// 	rlist.innerHTML += nbsp;
						// }
						rlist.innerHTML += "<div style='top:"+ (starlist*36) +"px;"+sty+
						"' class='" + nclass + "' title='" + list[s].content+ "'>" + list[s].content + "</div>";
						//rlist.innerHTML += lists;
					} else {
						console.log(s +":"+starts,ends);
					}
				}
				
			}
			// let len = rlist.getElementsByTagName("div").length;
			// for (let q = 0; q < time - (len+r); q++) {
			// 	//rlist.innerHTML += nbsp;
			// }
		}
	}
	setTimeout(function(){
		m.scrollTo(0,top);
	});
	let  ddd= document.createElement("div");
	ddd.setAttribute("class","duori");
	box.appendChild(ddd);
	box.appendChild(llist);
	box.appendChild(rlist);
	m.appendChild(box);
}

function getNowFormatDate() {
	let date = new Date(),fmt='yyyy-MM-dd hh:mm:ss',
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
    for (let k in v)
    if (new RegExp("(" + k + ")").test(fmt))
    	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (v[k]) : (("00" + v[k]).substr(("" + v[k]).length)));
    return fmt;
}

function getFileCabinet(json){
	let contentID = document.getElementById("content"),
	div           = document.createElement("div"),
	lis           = json.mainlist;
	div.setAttribute('class','list');
	if (lis.length>0) {
		let main = document.createElement("div"),
		mor      = document.createElement("div"),
		slist    = document.createElement("div"),
		title    = json.title,
		rtime    = getNowFormatDate(),
		src      = json.src;
		set.data.addClass(slist,"slist");
		set.data.addClass(mor,"mor");
		mor.innerHTML = '<a href="'+ `${src}` +'">' +
							'<img src="' + `${morIcon}` + '" title="'+ `${setmor}` +'" />' +
						'</a>';
		main.setAttribute("class","main");
		div.innerHTML = '<div class="listNav">' +
							'<div class="title">' + `${title}` + '</div>' +
							'<div class="data"> '+ `${rdata}` +'：<span>' + `${rtime}` + '</span><img src="'+`${reIcon}`+'"></div>' +
						'</div>';
		for (let i = 0; i < lis.length; i++) {
			let title = lis[i].title,
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
		div.appendChild(main);
		div.appendChild(mor);
		
	}
	contentID.appendChild(div);
}