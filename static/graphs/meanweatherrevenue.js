var myConfig = {
 	type: 'hbullet',
 	backgroundColor: '#fff',
 	title:{
 	  text: 'Mean Revenue by Weather',
 	  fontColor: '#212121',
 	  backgroundColor: '#fff'
 	},
 	plot:{
 	  barSpace: 8,
 	  goal:{
 	    borderWidth: 0,
 	    alpha: 0.9
 	  },
 	  tooltip:{
 	    text:'%t: %v of %g',
 	    borderRadius: 3,
 	    fontSize: 12,
 	    borderWidth: 0
 	  }
 	},
 	labels:[
 	  {
 	    text:'cloudy',
 	    height: 50,
 	    width: 50,

 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/cloudy.png',
 	    hook: 'scale:name=scale-x,index=0',
 	    offsetX: -50
 	  },
 	  {
 	    text:'cold',
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/avitar22.png',
 	    hook: 'scale:name=scale-x,index=1',
 	    offsetX: -50
 	  },
 	  {
 	    text:'rainny',
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/avitar33.png',
 	    hook: 'scale:name=scale-x,index=2',
 	    offsetX: -50
 	  },
 	  {
 	    text:'sunny',
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/avitar44.png',
 	    hook: 'scale:name=scale-x,index=3',
 	    offsetX: -50
 	  }
 	],
 	scaleX:{
 	  label:{
 	    text: '',
 	    offsetX: -70
 	  },
 	  guide:{
 	    visible: true,
 	    lineWidth: 1,
 	    lineStyle: 'solid'
 	  },
 	  item:{
 	    visible: false
 	  }
 	},
 	scaleY:{
 	  guide:{
 	    visible: false
 	  },
 	  label:{
 	    text: 'Mean Revenue'
 	  }
 	},
 	plotarea:{
 	  margin:'50 50 90 120'
 	},
	series: [
		{
		  text: 'Cloudy',
			values: [kr0],
			backgroundColor:'#4d4d4d',
			
		},
		{
		  text: 'Cold',
			values: [kr1],
			color: '#black',
			backgroundColor:'#d9d9d9',
		},
		{
		  text: 'Sunny',
			values: [kr2],
			color: '#black',
			backgroundColor:'#ffff4d',
		},
    {
		  text: 'Rainny',
			values: [kr3],
			backgroundColor:'#4d94ff',
		}
	]
};

zingchart.render({ 
	id: 'meanweatherrevenue', 
	data: myConfig, 
	height: '500', 
	width: '725' 
});