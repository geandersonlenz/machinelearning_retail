var myConfig = {
  "history":{
    "borderColor": "#616161",
    "borderWidth": 3,
    "y":20,
    "height": 30,
    "width": 45,
    "borderRadius": 2,
    "item":{
      "backgroundColor": "#616161",
      "borderColor":"#616161",
      "text":"Some Text",
      "fontColor":"red",
      "fontSize":10
    },
    "itemOff":{
      "backgroundColor":"#f0efef",
      "borderColor":"#bdbdbd",
      "height": 3,
      "width": 3,
      "size": 3
    }
  },
  "graphset":[
  {
 	"type": "pie", 
 	"title":{
 	  "text": "Sales by TypeOfPromotion",
 	  "align": "right",
 	  "fontColor": "#616161"
 	},
 	"legend":{
 	  "text":"%t<br>",
 	  "width": 120,
 	  "verticalAlign": "middle",
 	  "borderWidth": 0,
 	  "toggleAction": "remove",
 	  "item":{
 	    "padding": 5,
      "borderRadius": 3,
      "fontColor": "#fff",
      "align": "right",
      "width": 100
 	  },
 	  "itemOff":{
 	    "alpha": 0.7,
 	    "textAlpha": 1,
 	    "fontColor": "#616161",
 	    "textDecoration": "line-through",
 	    "lineWidth": 2
 	  },
 	  "markerOff":{
 	    "alpha": 0.2
 	  }
 	},
 	"plot":{
 	  "refAngle": 270,
 	  "decimals": 0,
 	  "thousandsSeparator": ",",
 	  "detach": false,
 	  "valueBox":{
 	    "decimals": 2
 	  },
 	  "animation":{
 	    "effect": 2,
 	    "method": 1,
 	    "sequence": 1,
 	    "onLegendToggle": false
 	  }
 	},
 	"tooltip":{
 	  "text":"%t<br>$%v",
 	  "placement": "node:out",
 	  "offsetR": 10,
 	  "width": 110,
 	  "fontColor": "#fff",
 	  "borderRadius": 3,
 	  "bold": true,
 	  "align": "right"
  },
  "scale":{
    "sizeFactor": 0.75
  },
	"series" : [
		
		{
			"values" : [typeofpromotion0],
			"target":"graph",
			"text":"Type 0",
			"backgroundColor": "#1565C0",
			"legendText": "%t<br><b>%v</b>",
			"legendMarker":{
			  "type": "circle",
			  "size": 7,
			  "borderColor": "#1565C0",
			  "borderWidth": 4,
			  "backgroundColor":"#fff"
			},
			"legendItem":{
        "backgroundColor": "#1565C0"
			}
		},
		{
			"values" : [typeofpromotion1],
			"target":"graph",
			"text":"Type 1",
			"backgroundColor": "#AD1457",
			"legendText": "%t<br><b>%v</b>",
			"legendMarker":{
			  "type": "circle",
			  "size": 7,
			  "borderColor": "#AD1457",
			  "borderWidth": 4,
			  "backgroundColor":"#fff"
			},
			"legendItem":{
        "backgroundColor": "#AD1457"
			}
		},
		{
			"values" : [typeofpromotion2],
			"target":"graph",
			"text":"Type 2",
			"backgroundColor": "#00695C",
			"legendText": "%t<br><b>%v</b>",
			"legendMarker":{
			  "type": "circle",
			  "size": 7,
			  "borderColor": "#00695C",
			  "borderWidth": 4,
			  "backgroundColor":"#fff"
			},
			"legendItem":{
        "backgroundColor": "#00695C"
			}
		},
		{
			"values" : [typeofpromotion3],
			"target":"graph",
			"text":"Type 3",
			"backgroundColor": "#EF6C00",
			"legendText": "%t<br><b>%v</b>",
			"legendMarker":{
			  "type": "circle",
			  "size": 7,
			  "borderColor": "#EF6C00",
			  "borderWidth": 4,
			  "backgroundColor":"#fff"
			},
			"legendItem":{
        "backgroundColor": "#EF6C00"
			}
		}
	]
}
]
};

zingchart.render({ 
	id : 'graphtypeofpromotion', 
	data : myConfig, 
	height: 350, 
	width: '100%' 
});