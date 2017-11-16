// 设置console状态 true|false
con.debug = false; 

// data 

config = {
	id:'datesss',/*时间div id*/
	row:6,
	conbtn: false,  /*控制左右按钮显示关闭 true|false*/
	data:'yyyy年MM月dd日', /*设置时间格式*/
	week:['日','一','二','三','四','五','六'],/*设置星期一到星期五格式*/
};

// 设置
rdata     = '上次刷新时间';
setmor    = '更多';
setop     = '置顶';
morIcon   = '../img/icon/mor.png';
dataIcon  = '../img/icon/data.png';
userIcon  = '../img/icon/user.png';
reIcon    = '../img/icon/s.png';
column = {
	'menu':[
		{
			'title':"首页",
			'img':"../img/icon/index.png",
			'imgs':"../img/icon/index2.png",
			'url':"",
			'id':"1",
			'smenu':""
		},
		{
			'title':"个人事物",
			'img':"../img/icon/job.png",
			'imgs':"../img/icon/job2.png",
			'url':"",
			'id':"2",
			'smenu':[
				{'title':"二级菜单",'url':"",'id':"1",'mmenu':''},
				{'title':"二级菜单",'url':"",'id':"2",'mmenu': [
						{'title':"三级菜单三级菜单三级菜单",'url':"org"},
						{'title':"三级菜单三级菜单三级",'url':"org"},
						{'title':"三级菜单三级菜单",'url':"org"},
						{'title':"三级菜单三级",'url':"org"},
						{'title':"三级菜单",'url':"org"},
					]
				},
				{'title':"二级菜单",'url':"",'id':"3",'mmenu':''},
				{'title':"二级菜单",'url':"",'id':"4",'mmenu': [
						{'title':"三级菜单三级菜单三级菜单",'url':"org"},
						{'title':"三级菜单三级菜单三级",'url':"org"},
						{'title':"三级菜单三级菜单",'url':"org"},
						{'title':"三级菜单三级",'url':"org"},
						{'title':"三级菜单",'url':"org"},
					]
				},
				{'title':"二级菜单",'url':"",'id':"5",'mmenu':''},
				{'title':"二级菜单",'url':'','id':'6','mmenu': [
						{'title':"三级菜单三级菜单三级菜单",'url':"org"},
						{'title':"三级菜单三级菜单三级",'url':"org"},
						{'title':"三级菜单三级菜单",'url':"org"},
						{'title':"三级菜单三级",'url':"org"},
						{'title':"三级菜单",'url':"org"},
					]
				},
			]
		},
		{
			'title':"外部组织机构初始化设置引导",
			'img':"../img/icon/job.png",
			'imgs':"../img/icon/job2.png",
			'url':"index.html",
			'id':"1",
			'smenu':""
		},
	]
};
cenJson = {
	'center':[
		{
			'id':'1',
			'title':'待办事务',
			'retime':'2017年10月26日15:17:20',
			'src':'',
			'type':'job',
			'mainlist':[
				{
					'title':'车辆派车单（2017年10月22日12:52:37）',
					'step':'1',
					'stepName':'起草',
					'rtime':'2017年10月22日12:52:37',
					'user':'admin',
					'url':'',
					'topVal':''
				},
				{
					'title':'车辆派车单（2017年10月21日12:52:37）',
					'step':'2',
					'stepName':'审批',
					'rtime':'2017年10月21日12:52:37',
					'user':'admin',
					'url':'',
					'topVal':''
				},
				{
					'title':'车辆派车单（2017年10月19日12:52:37）',
					'step':'3',
					'stepName':'结束',
					'rtime':'2017年10月19日12:52:37',
					'user':'admin',
					'url':'',
					'topVal':''
				},
			]
		},
		{
			'id':'2',
			'title':'通知公告',
			'retime':'2017年10月26日15:17:20',
			'src':'',
			'type':'notice',
			'mainlist':[
				{
					'title':'土地承包期延长30年 农民可以得到些什么？',
					'step':'',
					'stepName':'',
					'rtime':'2017年10月22日12:52:37',
					'user':'东坡肘子',
					'url':'',
					'topVal':'1'
				},
				{
					'title':'车辆派车单（2017年10月21日12:52:37）',
					'step':'',
					'stepName':'',
					'rtime':'2017年10月22日12:52:37',
					'user':'东坡肘子',
					'url':'',
					'topVal':'0'
				},
				{
					'title':'车辆派车单（2017年10月19日12:52:37）',
					'step':'',
					'stepName':'',
					'rtime':'2017年10月22日12:52:37',
					'user':'东坡肘子',
					'url':'',
					'topVal':'1'
				},
			]
		},
	]
};
voteJson = {
	'center':[
		{
			'id':'1',
			'title':'投票',
			'retime':'2017年10月26日15:17:20',
			'src':'',
			'type':'vote',
			'mainlist':[
				{
					'title':'[2017-10-20] 关于旧计算机使用情况调查',
					'step':'1',
					'stepName':'',
					'rtime':'2017年10月22日12:52:37',
					'user':'admin',
					'url':'',
					'topVal':''
				},
				{
					'title':'[2017-10-20] 关于旧计算机使用情况调查',
					'step':'2',
					'stepName':'',
					'rtime':'2017年10月21日12:52:37',
					'user':'admin',
					'url':'',
					'topVal':''
				},
				{
					'title':'[2017-10-20] 关于旧计算机使用情况调查',
					'step':'3',
					'stepName':'',
					'rtime':'2017年10月19日12:52:37',
					'user':'admin',
					'url':'',
					'topVal':''
				},
			]
		}
	]
};
fileJson = {
	'id':'1',
	'title':'文件柜',
	'retime':'2017年10月26日15:17:20',
	'src':'',
	'type':'file',
	'mainlist':[
		{
			'title':'个人文件柜',
			'step':'1',
			'stepName':'',
			'rtime':'2017年10月22日12:52:37',
			'user':'admin',
			'url':'',
			'icon':'../img/icon/pers.png',
			'topVal':''
		},
		{
			'title':'公共文件柜',
			'step':'2',
			'stepName':'',
			'rtime':'2017年10月21日12:52:37',
			'user':'admin',
			'url':'',
			'icon':'../img/icon/pub.png',
			'topVal':''
		},
		{
			'title':'个人共享',
			'step':'3',
			'stepName':'',
			'rtime':'2017年10月19日12:52:37',
			'user':'admin',
			'url':'',
			'icon':'../img/icon/cloud.png',
			'topVal':''
		},
	]
};
ageJson = {
	'ageli':[
		{
			'id':1,
			'data':'2017年11月01日',
			'list':[
						{
							'stime':'00:00',
							'endtime':"01:00",
							'content':"ssssssssssssssssssssssssssssss"
						},
						{
							'stime':'09:00',
							'endtime':"10:00",
							'content':"普伊格蒙特水水水水水水水水水水水甩下我们跑了到一定的阶段他就会懂得这些——到底有多快这样看他个人。每个人都会有些闹情绪的时刻，就像周末对阵曼联的比赛中又发生了一次。问题在于你开始得到了不好的名声而且为自己招来了负面的注意力。"
						},
						{
							'stime':'10:00',
							'endtime':"18:00",
							'content':"我不介意场上到处都是奇怪的凶狠铲球但是在一些愚蠢的问题上他必须要让自己远离麻烦。我不太同意那些说阿里必须要锋芒毕露地去打比赛才能达到他的最佳状态——你可以付出一切并且同时控制好你自己。到一定的阶段他就会懂得这些——到底有多快这样看他个人。每个人都会有些闹情绪的时刻，就像周末对阵曼联的比赛中又发生了一次。问题在于你开始得到了不好的名声而且为自己招来了负面的注意力。"
						},
					]
		},
		{
			'id':2,
			'data':'2017年11月02日',
			'list': [
						{
							'stime':'04:00',
							'endtime':"04:00",
							'content':"阿文倒萨大大撒大苏打顶顶顶顶顶顶顶顶顶"
						},
						{'stime':'08:00','endtime':"8:00",'content':"普伊格蒙特甩下我们跑了"},
						{'stime':'10:00','endtime':"16:00",'content':"在得知西班牙加泰罗尼亚自治区前主席卡莱斯·普伊格蒙特已经前往比利时的消息后，很多支持独立的加泰民众都感到非常失望。"},					]
		},
		{
			'id':3,
			'data':'2017年11月03日',
			'list': [
						{'stime':'00:00','endtime':"5:00",'content':"普伊格蒙特甩下我们跑了ssss"},
						{'stime':'08:00','endtime':"9:00",'content':"普伊格蒙特甩下我们跑了ddd"},
						{'stime':'11:00','endtime':"17:00",'content':"在得知西班牙加泰罗尼亚自治区前主席卡莱斯·普伊格蒙特已经前往比利时的消息后，很多支持独立的加泰民众都感到非常失望。"},
						{'stime':'17:00','endtime':"17:00",'content':"虎扑11月1日讯 兰帕德在《伦敦晚旗报》上更新了自己最新的一期专栏，其中他谈到了接下来两天伦敦球队在欧冠联赛上的前景。以及关于热刺球星阿里和切尔西主帅孔蒂两人的脾气。"},
					]
		},
		{
			'id':4,
			'data':'2017年11月04日',
			'list': [
						{'stime':'09:00','endtime':"9:00",'content':"普伊格蒙特甩下我们跑了1"},
						{'stime':'15:00','endtime':"18:00",'content':"普伊格蒙特甩下我们跑了2"},
						{'stime':'18:00','endtime':"18:00",'content':"普伊格蒙特甩下我们跑了3"},
					]
		},
		{
			'id':5,
			'data':'2017年11月05日',
			'list': [
						{'stime':'08:00','endtime':"8:00",'content':"普伊格蒙特甩下我们跑了1"},
						{'stime':'11:00','endtime':"18:00",'content':"普伊格蒙特甩下我们跑了2"},
						{'stime':'20:00','endtime':"23:00",'content':"普伊格蒙特甩下我们跑了3"},
					]
		},
		{
			'id':6,
			'data':'2017年11月06日',
			'list': [
						{'stime':'08:00','endtime':"13:00",'content':"普伊格蒙特甩下我们跑了1"},
						{'stime':'11:00','endtime':"11:00",'content':"普伊格蒙特甩下我们跑了2"},
						{'stime':'20:00','endtime':"23:00",'content':"普伊格蒙特甩下我们跑了3"},
					]
		},
		{
			'id':7,
			'data':'2017年11月07日',
			'list': [
						{'stime':'10:00','endtime':"18:00",'content':"普伊格蒙特甩下我们跑了1"},
						{'stime':'11:00','endtime':"14:00",'content':"普伊格蒙特甩下我们跑了2"},
						{'stime':'13:00','endtime':"23:00",'content':"普伊格蒙特甩下我们跑了3"},
					]
		},
	]
}