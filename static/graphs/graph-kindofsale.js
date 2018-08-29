zingchart.THEME="classic";
var myConfig = {
    "background-color": "#ffffff",
    "graphset": [
        {
            "type": "bar",
            "x": "2%",
            "y": "2%",
            "height": "96%",
            "width": "92%",
            "border-width": "1px",
            "border-color": "#384653",
            "border-radius": 4,
            "background-color": "#ffffff",
            "title": {
                "text": "Graph - Kind Of Sale",
                "font-color": "#7E7E7E",
                "backgroundColor": "none",
                "font-size": "22px",
                "alpha": 1,
                "y": "15px",
                "x": "15px"
            },
            "plotarea": {
                "margin": "45 40 90 60"
            },
            "scale-x": {
                "values": [
                    "Sales by Kind Of Sale"
                ],
                "line-color": "#b0aaab",
                "line-width": 1,
                "guide": {
                    "visible": false
                },
                "item": {
                    "font-color": "#384653"
                },
                "tick": {
                    "visible": false
                }
            },
            "scale-y": {
                "values": "0:100000",
                "line-color": "#FFFFFF",
                "line-width": 1,
                "guide": {
                    "visible": true,
                    "line-style": "solid"
                },
                "item": {
                    "padding-right": "5%",
                    "font-color": "#384653"
                },
                "tick": {
                    "visible": false
                }
            },
            "series": [
                {
                    "values": [
                        
                        loc0
                    ],
                    "background-color": "#4cc2bb",
                    "text": "Kind of sale:" + nam0 ,
                    "legend-marker": {
                        "border-color": "#4cc2bb"
                    }
                },
                {
                    "values": [
                        
                        loc1
                    ],
                    "background-color": "#4c707e",
                    "text": "Kind of sale:" + nam1,
                    "legend-marker": {
                        "border-color": "#4c707e"
                    }
                },
                {
                    "values": [
                        
                        loc2
                    ],
                    "background-color": "#dd655f",
                    "text": "Kind of sale:" + nam2,
                    "legend-marker": {
                        "border-color": "#dd655f"
                    }
                },
            ],
            "tooltip": {
                "text": "%v in %t",
                "shadow": false,
                "border-radius": 4
            }
        }
    ]
};

zingchart.render({ 
	id : 'kindofsale', 
	data : myConfig, 
	height: 350, 
	width: '100%' 
});