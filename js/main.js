//主机控制
	//主机
var my = document.getElementById('my');
	//活动范围
var box = document.getElementById('box');

//more子弹开关
var moreonOff = false;

//子弹力量
var bullPower = 1;

//分数
var scoreNum = 0;

//主机种类
var hash = 'red';
if(location.hash){
	hash = location.hash.split('=')[1];
}

//游戏声音
	//子弹声音
	var bullMu = document.getElementById('bullMu');
	
	//敌机坠落声音
	var enemyM1 = document.getElementById('enemyM1');
	var enemyM2 = document.getElementById('enemyM2');
	var enemyM3 = document.getElementById('enemyM3');
	
	//获得物品声音
	var get_suply = document.getElementById('get_suply');
	//获得分数声音
	
	var get_score = document.getElementById('get_score');
	
	//游戏结束声音
	var Gameover = document.getElementById('Gameover');
	
	//超级导弹声音
	var use_bomb = document.getElementById('use_bomb');


//超级导弹数量
var bombNum = 3;
var bomb = document.getElementById('bomb');
var bombp = bomb.getElementsByTagName('p')[0];

//主机运动定时器
var timer = null;

//方向键控制开关
var Left = false;
var Top = false;
var Bottom = false;
var Right = false;

//方向键按下
document.onkeydown = function(ev){
	var ev = ev || event;
	var code = ev.keyCode;
	switch(code){
		case 37:Left = true;
		break;
		case 39:Right = true;
		break;
		case 38:Top = true;
		break;				
		case 40:Bottom = true;
		break;
	}			
}
//方向键抬起
document.onkeyup = function(ev){
	var ev = ev || event;
	var code = ev.keyCode;
	switch(code){
		case 37:Left = false;
		break;
		case 39:Right = false;
		break;
		case 38:Top = false;
		break;
		case 40:Bottom = false;
		break;	
		case 32:	
			Plane('#my').fire('angel',bullPower-1,moreonOff);
			bullMu.load();
			bullMu.play();			
		break;	
		case 70:
			Plane('#my').bomb();
		break;
	}		
}

//my运动
timer = setInterval(function(){
	//box的高度
	box.style.height = document.documentElement.clientHeight + 'px';	
	//移动限制
	if(my.offsetLeft < box.getBoundingClientRect().left){						
		Left = false;
	}
	if(my.offsetTop > box.getBoundingClientRect().top + box.offsetHeight - my.offsetHeight - 10){						
		Bottom = false;
	}
	if(my.offsetTop < box.getBoundingClientRect().top){						
		Top = false;
	}
	if(my.offsetLeft > box.offsetWidth + box.getBoundingClientRect().left - my.offsetWidth - 10){						
		Right = false;
	}		
	//上下左右移动
	if(Left){
		my.style.left = (my.offsetLeft - 5) + 'px';						
	}
	if(Top){
		my.style.top = (my.offsetTop - 5) + 'px';	
	}			
	if(Right){
		my.style.left = (my.offsetLeft + 5) + 'px';									
	}
	if(Bottom){
		my.style.top = (my.offsetTop + 5) + 'px';					
	}		
},10)


//背景变动
var backTimer = null;

//背景开始移动
Plane('#box').backMove();

//主机选择
Plane('#my').myChose(hash);	

enemy();
//敌机出现 函数改变
function enemy(){
	setInterval(function(){
		Plane('#box').enemyS('small');	
	},1000)	
	setTimeout(function(){
		setInterval(function(){
			Plane('#box').enemyS('ruleSmall');	
			Plane('#box').enemyS('ruleSmall');
		},5000)		
	},1000)
	setTimeout(function(){
		setInterval(function(){
			Plane('#box').enemyS('noSmall');	
			Plane('#box').quickSpeed();
		},8000)	
	},20000)
	setTimeout(function(){
		setInterval(function(){
			Plane('#box').enemyS('mid');	
		},10000)
	},15000)
	setTimeout(function(){
		setInterval(function(){
			Plane('#box').enemyS('big');	
			Plane('#box').quickSpeed();
		},15000)
	},25000)	
	setTimeout(function(){
		setInterval(function(){
	    	Plane('#box').suply('buladd');	
	    	setTimeout(function(){
	    		Plane('#box').suply('buladd');
	    	},4000)	
		},10000)
	},10000)	
	setTimeout(function(){	
		setInterval(function(){
	    	Plane('#box').suply('more');	
	    	setTimeout(function(){	    	
	    	Plane('#box').suply('more');
	    	},4000)		    	
		},13000)
	},16000)
	setTimeout(function(){
		setInterval(function(){
			Plane('#box').suply('zhadan');
		},80000)	
	},20000)	
}
