zingchart.THEME="classic";
var promotionDays = {
    "graphset": [
        {
            "type": "bar",
            "background-color": "white",
            "title": {
                "text": "Graph Promotion Days by Category",
                "font-color": "#7E7E7E",
                "backgroundColor": "none",
                "font-size": "22px",
                "alpha": 1,
                "y": "15px",
                "x": "15px"
            },
            "tooltip": {
                "text": "%v"
            },
            "plotarea": {
                "margin": "80 30 100 30",
                "y": "125px"
            },
            "legend": {
                "layout": "x4",
                "y": "13%",
                "x": "34.5%",
                "overflow": "page",
                "alpha": 0.05,
                "shadow": false,
                "marker": {
                    "type": "circle",
                    "border-color": "none",
                    "size": "10px"
                },
                "border-width": 0,
                "maxItems": 4,
                "toggle-action": "remove",
                "pageOn": {
                    "backgroundColor": "#000",
                    "size": "10px",
                    "alpha": 0.65
                },
                "pageOff": {
                    "backgroundColor": "#7E7E7E",
                    "size": "10px",
                    "alpha": 0.65
                },
                "pageStatus": {
                    "color": "black"
                }
            },
            "plot": {
                "animation": {
                    "effect": "ANIMATION_SLIDE_BOTTOM"
                }
            },
            "scale-x": {
                "line-color": "#7E7E7E",
                "labels": [
                    "Mean Promotion Days"
                ],
                "item": {
                    "font-color": "#7e7e7e"
                },
                "guide": {
                    "visible": true
                }
            },
            "scale-y": {
                "line-color": "#7E7E7E",
                "item": {
                    "font-color": "#7e7e7e"
                },
                "values": "0:7",
                "guide": {
                    "visible": true
                },
            },
            "series": [
                {
                    "values": [
                        casual,
                        
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#fb8072",
                    "text": casual_n
                },
                {
                    "values": [
                        luxury,
                        
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#80b1d3",
                    "text": luxury_n
                },
                {
                    "values": [
                        party,
                        
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "#b3de69",
                    "text": party_n
                },
                {
                    "values": [
                        sports,
                        
                    ],
                    "borderRadiusTopLeft": 7,
                    "alpha": 0.95,
                    "background-color": "gray",
                    "text": sports_n
                }
            ]
        }
    ]
};

zingchart.render({ 
	id : 'graphmeanpromotiondays', 
	data : promotionDays, 
	height: 300, 
	width: '100%' 
});