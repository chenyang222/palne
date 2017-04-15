//我的飞机位置大小
var myData = {	
	red:[
		{
			poxy:'-0px -350px',
			wiDth:'95',
			heiGht:'87',
			bullPower:'1',
			bulltype:'heart'
		},
		{
			poxy:'-0px -263px',
			wiDth:'110',
			heiGht:'85',
			bullPower:'2',
			bulltype:'heart'
		},
		{
			poxy:'-117px -200px',
			wiDth:'110',
			heiGht:'90',
			bullPower:'3',
			bulltype:'heart'
		},
		{
			poxy:'-0px -169px',
			wiDth:'115',
			heiGht:'93',
			bullPower:'4',
			bulltype:'heart'
		}		
	],
	green:[
		{
			poxy:'-0px -89px',
			wiDth:'126',
			heiGht:'79',
			bullPower:'1',
			bulltype:'bird'
		},
		{
			poxy:'-0px -0px',
			wiDth:'135',
			heiGht:'90',
			bullPower:'2',
			bulltype:'bird'
		},
		{
			poxy:'-267px -103px',
			wiDth:'118',
			heiGht:'73',
			bullPower:'3',
			bulltype:'bird'
		},
		{
			poxy:'-267px -0px',
			wiDth:'120',
			heiGht:'103',
			bullPower:'4',
			bulltype:'bird'
		}		
	],
	blue:[
		{
			poxy:'-393px -104px',
			wiDth:'117',
			heiGht:'93',
			bullPower:'1',
			bulltype:'angel'
		},
		{
			poxy:'-392px -0px',
			wiDth:'119',
			heiGht:'99',
			bullPower:'2',
			bulltype:'angel'
		},
		{
			poxy:'-127px -107px',
			wiDth:'117',
			heiGht:'95',
			bullPower:'3',
			bulltype:'angel'			
		},
		{
			poxy:'-126px -0px',
			wiDth:'132',
			heiGht:'105',
			bullPower:'4',
			bulltype:'angel'			
		}		
	],
	orange:[
		{
			poxy:'-225px -256px',
			wiDth:'107',
			heiGht:'82',
			bullPower:'1',
			bulltype:'fire'			
		},
		{
			poxy:'-113px -290px',
			wiDth:'104',
			heiGht:'77',
			bullPower:'2',
			bulltype:'fire'			
		},
		{
			poxy:'-359px -197px',
			wiDth:'109',
			heiGht:'80',
			bullPower:'3',
			bulltype:'fire'			
		},
		{
			poxy:'-246px -177px',
			wiDth:'113',
			heiGht:'79',
			bullPower:'4',
			bulltype:'fire'			
		}		
	]	
}

//敌机位置大小
var enemyData = {	
	small:[
		{
			poxy:'-2px -559px',
			wiDth:'91',
			heiGht:'82',
			blood:'1',
			bpoxy:'-2px -630px',
			bwiDth:'29',
			bheiGht:'29'				
			
		},
		{
			poxy:'-104px -552px',
			wiDth:'99',
			heiGht:'70',
			blood:'1',
			bpoxy:'-2px -630px',
			bwiDth:'29',
			bheiGht:'29'			
		},
		{
			poxy:'-278px -552px',
			wiDth:'70',
			heiGht:'62',
			blood:'1',
			bpoxy:'-2px -630px',
			bwiDth:'29',
			bheiGht:'29'			
		}	
	],
	ruleSmall:[
		{
			poxy:'-163px -476px',
			wiDth:'102',
			heiGht:'75',
			blood:'2',
			bpoxy:'-64px -632px',
			bwiDth:'38',
			bheiGht:'34'				
		},
		{
			poxy:'-268px -477px',
			wiDth:'98',
			heiGht:'76',
			blood:'2',
			bpoxy:'-64px -632px',
			bwiDth:'38',
			bheiGht:'34'				
		}	
	],
	noSmall:[
		{
			poxy:'-3px -484px',
			wiDth:'101',
			heiGht:'73',
			blood:'3',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'			
		},
		{
			poxy:'-366px -523px',
			wiDth:'102',
			heiGht:'77',
			blood:'3',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'			
		},
		{
			poxy:'-369px -440px',
			wiDth:'113',
			heiGht:'83',
			blood:'3',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'			
		},		
	],
	mid:[
		{
			poxy:'-3px -363px',
			wiDth:'158',
			heiGht:'118',
			blood:'10',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'
		},
		{
			poxy:'-188px -341px',
			wiDth:'178',
			heiGht:'135',
			blood:'10',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'			
		},
		{
			poxy:'-367px -341px',
			wiDth:'136',
			heiGht:'99',
			blood:'10',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'			
		},
		{
			poxy:'-3px -232px',
			wiDth:'186',
			heiGht:'130',
			blood:'10',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'			
		},
		{
			poxy:'-261px -203px',
			wiDth:'194',
			heiGht:'135',
			blood:'10',
			bpoxy:'-134px -594px',
			bwiDth:'43',
			bheiGht:'68'			
		}		
	],
	big:[
		{
			poxy:'-1px -1px',
			wiDth:'260',
			heiGht:'198',
			blood:'20',
			bpoxy:'-285px -576px',
			bwiDth:'33',
			bheiGht:'77'						
		},
		{
			poxy:'-263px 0px',
			wiDth:'248',
			heiGht:'201',
			blood:'20',
			bpoxy:'-208px -575px',
			bwiDth:'38',
			bheiGht:'72'			
		}		
	]	
}
//子弹
var bulletData = {
	heart:[
		{
			poxy:'-4px -7px',
			wiDth:'19',
			heiGht:'60'			
		},
		{
			poxy:'-1px -93px',
			wiDth:'33',
			heiGht:'30'			
		},
		{
			poxy:'-49px -81px',
			wiDth:'65',
			heiGht:'44'			
		},
		{
			poxy:'-124px -75px',
			wiDth:'81',
			heiGht:'52'			
		}	
	],	
	bird:[
		{
			poxy:'-4px -7px',
			wiDth:'19',
			heiGht:'60'			
		},
		{
			poxy:'-1px -179px',
			wiDth:'35',
			heiGht:'70'			
		},
		{
			poxy:'-62px -161px',
			wiDth:'38',
			heiGht:'90'			
		},
		{
			poxy:'-125px -155px',
			wiDth:'66',
			heiGht:'98'			
		},	
	],
	angel:[
		{
			poxy:'-4px -7px',
			wiDth:'19',
			heiGht:'60'			
		},
		{
			poxy:'-1px -316px',
			wiDth:'37',
			heiGht:'66'			
		},
		{
			poxy:'-60px -290px',
			wiDth:'54',
			heiGht:'97'			
		},
		{
			poxy:'-137px -279px',
			wiDth:'62',
			heiGht:'114'			
		}		
	],
	ice:[
		{
			poxy:'-4px -7px',
			wiDth:'19',
			heiGht:'60'			
		},
		{
			poxy:'-1px -318px',
			wiDth:'34',
			heiGht:'58'			
		},
		{
			poxy:'-67px -285px',
			wiDth:'43',
			heiGht:'106'			
		},
		{
			poxy:'-137px -276px',
			wiDth:'64',
			heiGht:'117'			
		}		
	],
	fire:[
			{
			poxy:'-4px -7px',
			wiDth:'19',
			heiGht:'60'			
		},
		{
			poxy:'-1px -453px',
			wiDth:'40',
			heiGht:'52'			
		},
		{
			poxy:'-53px -441px',
			wiDth:'82',
			heiGht:'63'			
		},
		{
			poxy:'-144px -433px',
			wiDth:'114',
			heiGht:'79'			
		}		
	],
	enemy:[
		{
			poxy:'-349px -551px',
			wiDth:'63',
			heiGht:'129'			         
		}		
	]	
}

//suply道具
var suplyData = {
	zhadan:[
		{
			poxy:'-4px -3px',
			wiDth:'120',
			heiGht:'96'				
		}
	],
	red:[
		{
			poxy:'-244px -211px',
			wiDth:'38',
			heiGht:'45'				
		}
	],	
	green:[
		{
			poxy:'-284px -211px',
			wiDth:'39',
			heiGht:'46'				
		}
	],
	HP:[
		{
			poxy:'-212px -0px',
			wiDth:'79',
			heiGht:'73'				
		}
	],
	buladd:[
		{
			poxy:'-129px -81px',
			wiDth:'79',
			heiGht:'51'				
		}
	],	
	more:[
		{
			poxy:'-212px -77px',
			wiDth:'79',
			heiGht:'51'				
		}
	]	
}
