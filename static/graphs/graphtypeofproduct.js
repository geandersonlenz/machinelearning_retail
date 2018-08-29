zingchart.THEME="classic";

var myConfig = {
 	type: "pie",
 	backgroundColor : "#fff",
 	title : {
 	  text : "Sales by Type Of Product",
 	  color: '#black',
 	  backgroundColor:"#fff"
 	},
 	legend:{
 	  layout: "h",
 	  align: "center",
 	  verticalAlign: "bottom",
 	  toggleAction: "remove",
 	  header: {
 	    text: "Types",
 	    backgroundColor: "#052C4E"
 	  },
 	  shadow:0
 	},
 	plotarea: {
 	  y: 150
 	},
 	plot: {
 	  refAngle: 180,
 	  size: 250,
 	  valueBox: {
 	    placement: "in",
 	    offsetR: 20
 	  }
 	},
 	scaleR: {
 	  aperture:180
 	},
 	tooltip : {
 	  text: "%t - %v<br>Percent %npv%",
 	  textAlign: "left",
 	  shadow: 0,
 	  borderRadius: 4,
 	  borderWidth: 2,
 	  borderColor: "#fff"
 	},
	series : [
	  {
			values : [typeofproduct0],
			text: "Type 0",
			backgroundColor:"#2870B1"
		},
		{
			values : [typeofproduct1],
			text: "Type 1",
			backgroundColor:"#BB1FA8"
		},
		{
			values : [typeofproduct2],
			text: "Type 2",
			backgroundColor:"#7E971D"
		},
		
		{
			values : [typeofproduct3],
			text: "Type 3",
			backgroundColor:"#FFA72A"
			
		},
		{
			values : [typeofproduct4],
			text: "Type 4",
			backgroundColor:"#54004A"
		},
    {
			values : [typeofproduct5],
			text: "Type 5",
			backgroundColor:"#944dff"
		},
    {
			values : [typeofproduct6],
			text: "Type 6",
			backgroundColor:"#80e5ff"
		},
    {
			values : [typeofproduct7],
			text: "Type 7",
			backgroundColor:"#ffcc80"
		},
    {
			values : [typeofproduct8],
			text: "Type 8",
			backgroundColor:"#99ff99"
		},
	{
			values : [typeofproduct9],
			text: "Type 9",
			backgroundColor:"#333399"
		}
	]
};

zingchart.render({ 
	id : 'graphtypeofproduct', 
	data : myConfig, 
	height: 450, 
	width: '100%' 
});