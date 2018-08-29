var myConfig = {
 	type: 'bar',
 	stacked: true,
 	title:{
 	  text:'Graph Sales by Display',
 	  adjustLayout: true
 	},
 	legend:{
 	  align: 'center',
 	  verticalAlign: 'bottom',
 	  layout: 'x3',
 	  toggleAction: 'remove'
 	},
 	scaleY:{
 	  format: "",
 	  negation: 'currency',
 	  refLine:{
 	    lineWidth: 2,
 	    lineColor: '#212121'
 	  },
 	  multiplier: true,
 	  guide:{
 	    items:[
 	      {
 	        backgroundColor:'#f5f5f5'
 	      },
 	      {
 	        backgroundColor:'#eeeeee'
 	      }
 	      ]
 	  }
 	},
 	plotarea:{
 	  margin: 'dynamic'
 	},
 	tooltip:{
 	  text:"%v",
 	  align: 'left',
 	  borderRadius: 3,
 	  fontColor:"#ffffff",
 	  negation: 'currency'
 	},
 	plot:{
 	  valueBox:{
 	    text:"%total",
 	    rules: [
   	    {
   	      rule: '%stack-top == 0',
   	      visible: 0
   	    }
   	  ]
 	  }
 	},
 
	series: [
			{
			values: [display0],
			stack: 1,
      text: namdisplay0,
			backgroundColor: '#2e7d32'
		},
    {
			values: [display1],
			stack: 2,
      text: namdisplay1,
			backgroundColor: '#9999ff'
		},
	]
};

zingchart.render({ 
	id: 'graphdisplay', 
	data: myConfig, 
	height: 350, 
	width: '100%' 
});