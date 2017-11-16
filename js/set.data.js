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
	let time = new Date(),
	YY       = time.getFullYear(),
	MM       = time.getMonth()+1,
	DD       = time.getDate();
	//upmonth(YY,MM);
	set.data.calendarList(YY,MM,DD);
}
let set = {
	config:config,
	data:{
		calendarList:function(YYYY,MM,DD){
			let leap       = YYYY%4,
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
			title.setAttribute("class", "ctitle");
			if ( leap != 0 ) {
				moday[1] = 28;
			}else{
				moday[1] = 29;
			}
			con.log(config.conbtn);
			if (config.conbtn === true && "true") {
				title.innerHTML += "<div style='width:100%;text-align:center'>"+
				    					"<span onclick=up("+`${YYYY}`+","+`${MM}`+","+`${DD}`+")><</span>" +
				    					"<sapn id='tody'>"+`${tody}`+"</sapn>" +
				    					"<span onclick=down("+`${YYYY}`+","+`${MM}`+","+`${DD}`+")>></span>"+
				    			  "</div>";
			} else if (config.conbtn === false && "false") {
				title.innerHTML += "<div style='width:100%;text-align:center'>"+
				    					"<sapn id='tody'>"+`${tody}`+"</sapn>" +
				    			  "</div>";
			}
			for (var i = 0; i < set.config.week.length; i++) {
				title.innerHTML += "<div>" + `${set.config.week[i]}` + "</div>";
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
				list.innerHTML += '<div style="color:#ccc" c_value="'+this.setFormat(yer,mon,str[i],set.config.data)+'">'+ str[i] +'</div>';
			}
			math = parcur+moday[MM-1];
			num  = (7*set.config.row)-math;
			for( i = parseInt(current+1); i <= parseInt(moday[MM-1]+current); i++ ){
				if ( i%7 == 1 && i != 1 ){
					list.innerHTML += '<br>';
				}
				if (parseInt(i-current) === DD) {
					if (YYYY == toyy && MM === tomm && DD === todd) {
						list.innerHTML += '<div c_mon c_value="'+this.setFormat(YYYY,MM,parseInt(i-current),set.config.data)+'" class="tody active">'+parseInt(i-current)+'</div>';
					} else {
						list.innerHTML += '<div c_mon c_value="'+this.setFormat(YYYY,MM,parseInt(i-current),set.config.data)+'">'+parseInt(i-current)+'</div>';
					}
				} else {
					list.innerHTML += '<div c_mon c_value="'+this.setFormat(YYYY,MM,parseInt(i-current),set.config.data)+'">'+parseInt(i-current)+'</div>';
				}
			}
			mth = arr.slice(0,num);
			for (let i = 0; i < num ; i++) {
				list.innerHTML += '<div style="color:#ccc" c_value="'+this.setFormat(yer,mon,mth[i],set.config.data)+'">'+ mth[i] +'</div>';
			}
			for (let i = 0; i < list.getElementsByTagName('div').length; i++) {
				tag = list.getElementsByTagName('div');
				tag[i].addEventListener("click",function(){
					set.data.setFuncticon(tag[i]);
				});
			}
			main.appendChild(title);
			main.appendChild(list);
		},
		setFuncticon:function(tag) {
			let ctime   = tag.getAttribute("c_value"),
			beforeClass = tag.getAttribute("class"),
			partChild   = tag.parentNode.getElementsByTagName('div');
			for (var i = 0; i < partChild.length; i++) {
				if (set.data.hasClass(partChild[i],"active")) {
					set.data.removeClass(partChild[i],"active");
				}
			}
			set.data.addClass(tag,"active");
			document.getElementById("tody").innerHTML = ctime;
		},
		// 设置时间格式
		setFormat: function(yy,mm,dd,fmt){
			let v = {
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
		    for (let k in v)
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
		},
	}
}