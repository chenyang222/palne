


(function(global,factory){
	"use strict";
	factory(global)
})(typeof window !== 'undefined'?window:this,function(){
	function Plane(selector){
		return new Plane.tzy(selector)
	}
	
	Plane.prototype = {
		constructor:Plane,
		
		//背景移动方法
		
		backMove:function(){
			this[0].style.backgroundImage = 'url(images/b1.jpg)';
			var _this = this[0];
			var Y = 0;
			this[0].Timer = setInterval(function(){
				Y+=0.5;
				_this.style.backgroundPositionY = Y + 'px';
				if(Y>=1536){
					Y = 0;
				}	
			},10)
		},
		
		//主机变化
		
		myPlay:function(color,num){
			my.style.backgroundPosition = myData[color][num].poxy;
			my.style.width = myData[color][num].wiDth + 'px';
			my.style.height = myData[color][num].heiGht + 'px';	
		},		
		
		//主机选择
		myChose:function(hash){
			this[0].style.backgroundPosition = myData[hash][0].poxy;
			this[0].style.width = myData[hash][0].wiDth + 'px';
			this[0].style.height = myData[hash][0].heiGht + 'px';	
			this[0].style.left = box.offsetWidth/2 - myData[hash][0].wiDth/2 + 'px';
			this[0].style.top = document.documentElement.clientHeight - myData[hash][0].heiGht + 'px';
		},
		
		//我方子弹方法
			//子弹创建
			
			buttle:function(type,bLevel,onOff,num){
				var strong = document.createElement('strong');
				strong.style.width = bulletData[type][bLevel].wiDth+'px';
				strong.style.height = bulletData[type][bLevel].heiGht+'px';
				strong.style.backgroundPosition = bulletData[type][bLevel].poxy;
				strong.style.zIndex = '-1';
				strong.style.left = this[0].offsetLeft + this[0].offsetWidth/2 - bulletData[type][bLevel].wiDth/2 + 'px';
				strong.style.top = this[0].offsetTop - bulletData[type][bLevel].heiGht/2 + 'px';	
						
						//让子弹飞
							this.bullMove(strong,onOff,num)	
				
				return strong
			},	
			
			//子弹发射	
			fire:function(type,bLevel,onOff){
				if(onOff){
					//三发模式
					for(var i=0;i<3;i++){
						//将子弹插入到html中
						this[0].parentNode.appendChild(this.buttle(type,bLevel,onOff,i));	
					}		
				}else{
					//单发模式
						//将子弹插入到html中
						this[0].parentNode.appendChild(this.buttle(type,bLevel,onOff,0));	
				}	
			},
			
			//子弹飞行
	
			bullMove:function(obj,onOff,num){
				var _this = this[0].parentNode;
				obj.timer = setInterval(function(){
					obj.style.top = obj.offsetTop - 5 + 'px';
					if(onOff){
						obj.style.left = obj.offsetLeft + (num-1)*1  + 'px';
					}
					if(obj.offsetTop<=0){
						_this.removeChild(obj);
						clearInterval(obj.timer);
					}		
				},10)	
			},
		
		//敌机
			//small敌机出现
			enemyS:function(type){
				var n = this.random(0,enemyData[type].length);
				var span = document.createElement('span');
				span.tYpe = type;
				span.blood = enemyData[type][n].blood;
				span.style.left = Math.random()*(this[0].offsetWidth - enemyData[type][n].wiDth)+'px';
				span.style.top = -enemyData[type][n].heiGht+'px';
				span.style.width = enemyData[type][n].wiDth + 'px';
				span.style.height = enemyData[type][n].heiGht + 'px';
				span.style.backgroundPosition = enemyData[type][n].poxy;
					//血条
					var enemyDiv = document.createElement('div');
					enemyDiv.id = 'enemyHp';
					enemyDiv.style.left = (enemyData[type][n].wiDth-60)/2 + 'px';
					enemyDiv.style.top = enemyData[type][n].heiGht - 5 + 'px';
					var div = document.createElement('div');
					enemyDiv.appendChild(div)
					span.appendChild(enemyDiv);
				this[0].appendChild(span);
				//big飞机子弹速度
				//small敌机飞行
				var _this = this;
				if(span.tYpe == 'ruleSmall'){
					this.doMove(span);
				}else{
					setTimeout(function(){
						_this.enemyFire(span,n);
					},200)		
					this.enemyFly(span);	
				}
			},
			//敌机飞行
	
			enemyFly:function(obj){
				var _this = this;
				obj.timer = setInterval(function(){
					obj.style.top = obj.offsetTop + 1 + 'px';
						
						//敌机与我放飞机碰撞检测
						
						_this.buttleDuang(obj);
						
						//检测子弹与敌机
						
						_this.bEnemy(obj);
						
					if(obj.offsetTop>=_this.offsetHeight){
						_this[0].removeChild(obj);
						clearInterval(obj.timer);
					}		
				},10)	
			},
			
			//旋转
			doMove:function(obj){
				var dt = -1.59;
				var r = 150;	
				var L = obj.offsetLeft;
				var JD = 1;
				var _this = this;			
				this.move(obj,{top:150},1300,'linear',function(){
					_this.enemyFire(obj,0);
					obj.doMoveTimer = setInterval(function(){
						JD-=2.6;			
						var py = Math.sin(dt)*r;
						var px = Math.cos(dt)*r;
						obj.style.left = L + obj.offsetWidth+ py + 50 + 'px';
						obj.style.top = 160 + px + 'px';
						obj.style.transform = 'rotate('+JD+'deg)';		
						dt+=0.05;
						
						//检测子弹与敌机
							_this.bEnemy(obj);		
							
						if(dt >= 1.9){
							clearInterval(obj.doMoveTimer);	
							_this.move(obj,{top:-obj.offsetHeight},500,'linear',function(){							
								for(var i=0;i<_this[0].children.length;i++){
									if(_this[0].children[i] == obj){
										_this[0].removeChild(obj);
									}
								}
							})	
						}			
					},30);										
				});
			},		
			//敌机子弹设定
			
				//敌机子弹创建
				
				enemyButtle:function(obj,num,wzi){
					var i = document.createElement('i');
					i.tYpe = obj.tYpe;
					i.style.width = enemyData[obj.tYpe][num].bwiDth+'px';
					i.style.height = enemyData[obj.tYpe][num].bheiGht+'px';
					i.style.backgroundPosition = enemyData[obj.tYpe][num].bpoxy;
					i.style.zIndex = '-1';
					i.style.left = obj.offsetLeft + obj.offsetWidth/2 - enemyData[obj.tYpe][num].bwiDth/2 + 'px';
					i.style.top = obj.offsetTop - enemyData[obj.tYpe][num].bheiGht/2 + 'px';
						
						//敌军子弹飞行
						this.enemyBull(i,wzi);
					return i
				},
				
				//敌机开火
				
				enemyFire:function(obj,num){
					if(obj.tYpe == 'small' || obj.tYpe == 'noSmall' || obj.tYpe == 'ruleSmall'){
						this[0].appendChild(this.enemyButtle(obj,num));		
					}else if(obj.tYpe == 'mid'){
						//big六个子弹
						for(var j=0;j<6;j++){
							this[0].appendChild(this.enemyButtle(obj,num,j));			
						}
					}else if(obj.tYpe == 'big'){
						//big三个子弹
						for(var j=0;j<3;j++){
							this[0].appendChild(this.enemyButtle(obj,num,j));				
						}
					}
				},	
				
				//子弹飞行
		
				enemyBull:function(obj,wzi){
					var _this = this;
					obj.timer = setInterval(function(){
						obj.style.top = obj.offsetTop + 3 + 'px';
						_this.buttleDuang(obj);
						if(obj.tYpe == 'mid'){
							obj.style.left = obj.offsetLeft + (wzi-2.4)*1.5  + 'px';							
						}else if(obj.tYpe == 'big'){
							obj.style.left = obj.offsetLeft + (wzi-1.5)*1  + 'px';
						}
						if(obj.offsetTop>=_this[0].offsetHeight - obj.offsetHeight){
							_this[0].removeChild(obj);
							clearInterval(obj.timer);
						}	
					},10)	
					
				},			
		
		//道具
		
		suply:function(type){
			var p = document.createElement('p');
			p.style.left = Math.random()*(this[0].offsetWidth - suplyData[type][0].wiDth)+'px';
			p.tYpe = type;
			p.style.top = '0px';
			p.style.width = suplyData[type][0].wiDth + 'px';
			p.style.height = suplyData[type][0].heiGht + 'px';
			p.style.backgroundPosition = suplyData[type][0].poxy;
			this[0].appendChild(p);
			var _this = this;
			this.suplyMove(p,{top:this[0].offsetHeight},5000,'bounceBoth',function(){
				_this[0].removeChild(p);				
			});
		},		
		
		//敌军飞速弹
		
		quickSpeed:function(){
			var em = document.createElement('em');
			em.style.left = Math.random()*(this[0].offsetWidth - bulletData.enemy[0].wiDth)+'px';
			em.style.top = -bulletData.enemy[0].heiGht/2+'px';
			em.style.width = bulletData.enemy[0].wiDth + 'px';
			em.tYpe = 'quickSpeed';
			em.style.height = bulletData.enemy[0].heiGht + 'px';
			em.style.backgroundImage = 'url(images/buttle.png)';
			em.style.backgroundPosition = bulletData.enemy[0].poxy;
			this[0].appendChild(em);
			//敌军飞速弹飞行
			this.move(em,{top:this[0].offsetHeight},3000,'elasticIn',function(){
				box.removeChild(em);				
			});	
		},
		
		
		//超级导弹
		bomb:function(){
			
			 //超级导弹数量变化
				bombNum--;	
				
			if(bombNum>=0){
				use_bomb.load();
				use_bomb.play();				
				var _this = this;
				var div = document.createElement('div');
				div.style.backgroundImage = 'url(images/img_item.png)';
				div.style.backgroundPosition = '-373px -52px';
				div.style.width = '70px';
				div.style.height = '77px';
				div.style.position = 'absolute';
				div.style.top = this[0].parentNode.offsetHeight - 38 + 'px';
				div.style.left = this[0].parentNode.offsetWidth/2 - 35 + 'px';
				this[0].parentNode.appendChild(div);
				div.timer = setInterval(function(){
					div.style.top = div.offsetTop - 2 + 'px';
					if(div.offsetTop<=_this[0].parentNode.offsetHeight/2){
						clearInterval(div.timer)
						div.style.top = '0px';
						div.style.left = '0px';		
						div.style.backgroundImage = 'none';
						div.style.width = _this[0].parentNode.offsetWidth + 'px';
						div.style.height = _this[0].parentNode.offsetHeight + 'px';	
						div.style.backgroundColor = 'white';
						div.style.opacity = '0.8';
						var opNum = 0.8;
							_this.clearAenemy();
						div.style.zIndex = '999';		
						var opTimer = setInterval(function(){
							opNum-=0.1;
							div.style.opacity = opNum;
							if(opNum<=0){
								box.removeChild(div);
								clearInterval(opTimer);
							}
						},300)
					}
				},10)						
			}
			
			if(bombNum<0){
				bombNum = 0;
			}
			bombp.innerHTML = bombNum;			
		},	
		
		//清除所有敌机
		clearAenemy:function(){
			var enemySpan = box.getElementsByTagName('span');
			for(var i=0;i<enemySpan.length;i++){
				box.removeChild(enemySpan[i]);
				clearInterval(enemySpan.timer);
				i--;
			}
			
		},		
		
		//我方子弹与敌军飞机相撞
		bEnemy:function(obj){
			var strongS = box.getElementsByTagName('strong');
			var _this = this;
			for(var i=0;i<strongS.length;i++){
				if(this.duang(obj,strongS[i])){
					if(obj.blood > bullPower){
						obj.blood = obj.blood-bullPower;
						obj.firstElementChild.firstElementChild.style.width = 60*(obj.blood/enemyData[obj.tYpe][0].blood)+'px';
					}else{
						obj.firstElementChild.style.display = 'none';
						if(obj.tYpe == 'small' || obj.tYpe == 'ruleSmall' || obj.tYpe == 'noSmall'){
							enemyM1.load();
							enemyM1.play();					
							obj.style.backgroundImage = 'url(images/img_item.gif)';
							scoreNum += 10;
							_this.pins();
							obj.style.width = '65px';
							obj.style.height = '66px';
							obj.style.backgroundPosition = '0 0';
							clearInterval(obj.timer);
							this.suplyMove(obj,{top:box.offsetHeight},1000,'easeInStrong');
							clearInterval(obj.doMoveTimer);
						}else if(obj.tYpe == 'mid'){
							enemyM2.load();
							enemyM2.play();						
							obj.style.backgroundImage = 'url(images/img_item.png)';
							scoreNum += 50;
							_this.pins();
							obj.style.width = suplyData.green[0].wiDth + 'px';
							obj.style.height = suplyData.green[0].heiGht + 'px';
							obj.style.backgroundPosition = suplyData.green[0].poxy;
							clearInterval(obj.timer);
							this.suplyMove(obj,{top:box.offsetHeight},1000,'easeInStrong');				
						}else if(obj.tYpe == 'big'){
							enemyM3.load();
							enemyM3.play();						
							obj.style.backgroundImage = 'url(images/img_item.png)';
							scoreNum += 100;
							_this.pins();
							obj.style.width = suplyData.red[0].wiDth + 'px';
							obj.style.height = suplyData.red[0].heiGht + 'px';
							obj.style.backgroundPosition = suplyData.red[0].poxy;
							clearInterval(obj.timer);
							this.suplyMove(obj,{top:box.offsetHeight},1000,'easeInStrong');				
						}
					}	
					strongS[i].style.display = 'none';
				}				
			}
		},		

		
		//敌军或者敌军子弹与主机相碰
		
		buttleDuang:function(obj){
			if(this.duang(obj,my)){
				clearInterval(obj.timer);
				my.style.backgroundImage = 'none';
				my.firstElementChild.style.display = 'block';
				my.style.width = '100px';
				my.style.height = '100px';
				 	//按键功能消失		
					document.onkeyup = null;
					clearInterval(timer)
				Gameover.play();
				setTimeout(function(){
					open('Game Over.html#score='+scoreNum,'_self');			
				},2000)
			}
		},


		
		//碰撞检测
		duang:function(obj,obj2){
			var L1 = obj.offsetLeft-10;
			var T1 = obj.offsetTop-10;
			var R1 = obj.offsetLeft + obj.offsetWidth-10;
			var B1 = obj.offsetTop + obj.offsetHeight-10;
			
			var L2 = obj2.offsetLeft-10;
			var T2 = obj2.offsetTop-10;
			var R2 = obj2.offsetLeft + obj2.offsetWidth-10;
			var B2 = obj2.offsetTop + obj2.offsetHeight-10;	
			
			var duanged = false;
			if(L1>R2 || R1 < L2 || B1 < T2 || T1>B2){
				
			}else{
				duanged = true;				
			}
			return duanged		
		},		
		
		//suply score 运动函数加检测
		suplyMove:function(obj,attrs,duartion,fx,endFn){
			var old = new Date;
			var oldTime = old.getTime();
			var d = duartion;
			var j ={};
			var _this = this;
			for(var attr in attrs){
				j[attr] = {};
				j[attr].b = parseFloat(getComputedStyle(obj)[attr]);
				j[attr].c = attrs[attr] - j[attr].b; 
			}
		
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
			var New = new Date;
			var newTime = New.getTime();		
			var t = newTime - oldTime;
			if(t>=d){
				t=d;
			}
			for(var attr in j){
				var b = j[attr].b;
				var c = j[attr].c;
				var v = _this.Tween[fx](t,b,c,d);
				if(attr == 'opacity'){
					obj.style[attr] = v;
				}else{
					obj.style[attr] = v +'px';
				}			
			}	
			if(t>=d){
				clearInterval(obj.timer);		
				endFn && endFn();
			}
			if(_this.duang(obj,my)){
				if(obj.tYpe == 'small' || obj.tYpe == 'ruleSmall' || obj.tYpe == 'noSmall'){
					scoreNum += 20;
					_this.pins();
					get_score.load();
					get_score.play();			
				}else if(obj.tYpe == 'mid'){
					scoreNum += 50;
					_this.pins();	
					get_score.load();
					get_score.play();			
				}else if(obj.tYpe == 'big'){
					scoreNum += 100;
					_this.pins();
					get_score.load();
					get_score.play();			
				}else if(obj.tYpe == 'buladd'){
					bullPower++;	
					if(bullPower >= 4){
						bullPower = 4;
					}else{
						get_suply.load();
						get_suply.play();				
						Img.style.display = 'block';
						var ImgTimer = setInterval(function(){
							Img.style.left = my.offsetLeft + 'px';
							Img.style.top = my.offsetTop + 'px';					
						},10)
							//子弹升级，主机升级
							_this.myPlay(hash,bullPower-1);		
						
						setTimeout(function(){
							clearInterval(ImgTimer)
							Img.style.display = 'none';
							
						},500)				
					}
				}else if(obj.tYpe == 'more'){		
					moreonOff = true;
					get_suply.load();
					get_suply.play();			
					setTimeout(function(){
						moreonOff = false;
					},10000)
				}else if(obj.tYpe == 'zhadan'){
					get_suply.load();
					get_suply.play();			
					bombNum++;
					bombp.innerHTML = bombNum;
				}
				obj.style.display = 'none';
				box.removeChild(obj);		
			}
			
			},5)
		},		
		
		//move函数
		move:function(obj,attrs,duartion,fx,endFn){
			var old = new Date;
			var oldTime = old.getTime();
			var d = duartion;
			var j ={};
			var _this = this;
			for(var attr in attrs){
				j[attr] = {};
				j[attr].b = parseFloat(getComputedStyle(obj)[attr]);
				j[attr].c = attrs[attr] - j[attr].b; 
			}
		
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var New = new Date;
				var newTime = New.getTime();		
				var t = newTime - oldTime;
				if(t>=d){
					t=d;
				}
				for(var attr in j){
					var b = j[attr].b;
					var c = j[attr].c;
					var v = _this.Tween[fx](t,b,c,d);
					if(attr == 'opacity'){
						obj.style[attr] = v;
					}else{
						obj.style[attr] = v +'px';
					}			
				}
				//敌军或者敌军子弹与主机相碰
				_this.buttleDuang(obj);				
				if(t>=d){
					clearInterval(obj.timer);		
					endFn && endFn();
				}
			},5)
		},
		
		//分数
		pins:function(){
			var pin = document.getElementById('pin');
			var pins = pin.getElementsByTagName('img');
			//初始化
			pins[0].style.display = 'block';
			pins[0].src = 'images/0.png';
			
			for(var i=0;i<pins.length;i++){
				var pinScore = scoreNum.toString().charAt(i);
				if(pinScore != ''){
					pins[i].style.display = 'block';
					pins[i].src = 'images/'+pinScore+'.png';			
				}		
			}
		},		
		//Tween
		/*
		 	t:已运动时间（需要计算）
		 	b:起始位置（直接获取）
		 	c:要运动距离（需要计算）
		 	d:运动时间(传入)
		 * */
		Tween:Tween = {
		    linear: function (t, b, c, d){  //匀速
		        return c*t/d + b;
		    },
		    easeIn: function(t, b, c, d){  //加速曲线
		        return c*(t/=d)*t + b;
		    },
		    easeOut: function(t, b, c, d){  //减速曲线
		        return -c *(t/=d)*(t-2) + b;
		    },
		    easeBoth: function(t, b, c, d){  //加速减速曲线
		        if ((t/=d/2) < 1) {
		            return c/2*t*t + b;
		        }
		        return -c/2 * ((--t)*(t-2) - 1) + b;
		    },
		    easeInStrong: function(t, b, c, d){  //加加速曲线
		        return c*(t/=d)*t*t*t + b;
		    },
		    easeOutStrong: function(t, b, c, d){  //减减速曲线
		        return -c * ((t=t/d-1)*t*t*t - 1) + b;
		    },
		    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		        if ((t/=d/2) < 1) {
		            return c/2*t*t*t*t + b;
		        }
		        return -c/2 * ((t-=2)*t*t*t - 2) + b;
		    },
		    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		        if (t === 0) {
		            return b;
		        }
		        if ( (t /= d) == 1 ) {
		            return b+c;
		        }
		        if (!p) {
		            p=d*0.3;
		        }
		        if (!a || a < Math.abs(c)) {
		            a = c;
		            var s = p/4;
		        } else {
		            var s = p/(2*Math.PI) * Math.asin (c/a);
		        }
		        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		    },
		    elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		        if (t === 0) {
		            return b;
		        }
		        if ( (t /= d) == 1 ) {
		            return b+c;
		        }
		        if (!p) {
		            p=d*0.3;
		        }
		        if (!a || a < Math.abs(c)) {
		            a = c;
		            var s = p / 4;
		        } else {
		            var s = p/(2*Math.PI) * Math.asin (c/a);
		        }
		        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		    },
		    elasticBoth: function(t, b, c, d, a, p){
		        if (t === 0) {
		            return b;
		        }
		        if ( (t /= d/2) == 2 ) {
		            return b+c;
		        }
		        if (!p) {
		            p = d*(0.3*1.5);
		        }
		        if ( !a || a < Math.abs(c) ) {
		            a = c;
		            var s = p/4;
		        }
		        else {
		            var s = p/(2*Math.PI) * Math.asin (c/a);
		        }
		        if (t < 1) {
		            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
		                Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		        }
		        return a*Math.pow(2,-10*(t-=1)) *
		            Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		    },
		    backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		        if (typeof s == 'undefined') {
		            s = 1.70158;
		        }
		        return c*(t/=d)*t*((s+1)*t - s) + b;
		    },
		    backOut: function(t, b, c, d, s){
		        if (typeof s == 'undefined') {
		            s = 3.70158;  //回缩的距离
		        }
		        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		    },
		    backBoth: function(t, b, c, d, s){
		        if (typeof s == 'undefined') {
		            s = 1.70158;
		        }
		        if ((t /= d/2 ) < 1) {
		            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		        }
		        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		    },
		    bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
		    },
		    bounceOut: function(t, b, c, d){
		        if ((t/=d) < (1/2.75)) {
		            return c*(7.5625*t*t) + b;
		        } else if (t < (2/2.75)) {
		            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		        } else if (t < (2.5/2.75)) {
		            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		        }
		        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
		    },
		    bounceBoth: function(t, b, c, d){
		        if (t < d/2) {
		            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		        }
		        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		    }
		},
		
		//产生min到max之间的随机数
		
		random:function(min,max){
		    return Math.floor(min+Math.random()*(max-min));
		}			
		
	}
	
	
	Plane.tzy = function(selector){
		if(typeof selector == 'function'){
			document.addEventListener('DOMContentLoaded',selector);
		}else{
			//字符串就等同于选择器
			var arr = Sizzle(selector);		
			for(var i=0;i<arr.length;i++){
				this[i] = arr[i];							
			}
			this.length = arr.length;							
			return this;
		}
		
	}
	Plane.tzy.prototype = Plane.prototype;
	
	window.Plane = Plane;
	
})

