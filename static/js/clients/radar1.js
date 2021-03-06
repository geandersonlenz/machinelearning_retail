zingchart.THEME="classic";
var myConfig = 
        {
            "type": "radar",
            "background-color": "white",
            "title": {
                "text": "Comportamento",
                "background-color": "none",
                "font-color": "000",
                "font-size": "16px"
            },
            "tooltip": {
                "text": "%t<br>%k Is %v",
                "shadow": 0,
                "border-radius": 3
            },
            "scale-k": {
                "background-color": "none",
                "values": [
                    "Quality",
                    "Efficiency",
                    "Satisfaction",
                    "Value",
                    "Cost"
                ],
                "item": {
                    "font-size": "14px",
                    "padding-left": "30px",
                    "padding-bottom": "15px"
                },
                "guide": {
                    "line-color": "#818181",
                    "line-style": "solid",
                    "line-width": "2px",
                    "items": [
                        {
                            "background-color": "#fff"
                        }
                    ]
                },
                "tick": {
                    "visible": false
                }
            },
            "scale-v": {
                "values": [
                    "Poor",
                    "Fair",
                    "Good",
                    "Very Good",
                    "Excellent"
                ],
                "ref-line": {
                    "line-width": "1px",
                    "line-color": "#818181"
                },
                "guide": {
                    "line-width": ".5px",
                    "line-style": "dashed"
                },
                "tick": {
                    "size": 10,
                    "line-width": ".5px",
                    "line-length": 0.55,
                    "line-color": "#818181"
                },
                "item": {
                    "padding-left": "9.5px",
                    "font-size": "8px"
                }
            },
            "series": [
                {
                    "values": [
                        "Fair",
                        "Poor",
                        "Good",
                        "Very Good",
                        "Good"
                    ],
                    "aspect": "line",
                    "text": "ER",
                    "line-color": "#999999",
                    "background-color": "none",
                    "line-width": "4px",
                    "alpha": "0.35",
                    "marker": {
                        "background-color": "#999999",
                        "size": "4",
                        "border-color": "#999999",
                        "alpha": "0.55"
                    }
                },
                {
                    "values": [
                        "Fair",
                        "Poor",
                        "Excellent",
                        "Excellent",
                        "Good"
                    ],
                    "aspect": "line",
                    "text": "ENT",
                    "line-color": "#666666",
                    "line-width": "4px",
                    "alpha": "0.85",
                    "marker": {
                        "background-color": "#666666",
                        "size": "4",
                        "border-color": "#666666",
                        "alpha": "0.55"
                    }
                },
                {
                    "values": [
                        "Very Good",
                        "Excellent",
                        "Very Good",
                        "Good",
                        "Excellent"
                    ],
                    "aspect": "line",
                    "text": "O&G",
                    "line-color": "#BBDFFF",
                    "line-width": "4px",
                    "alpha": "0.45",
                    "marker": {
                        "background-color": "#BBDFFF",
                        "size": "4",
                        "border-color": "#BBDFFF",
                        "alpha": "0.55"
                    }
                },
                {
                    "values": [
                        "Poor",
                        "Very Good",
                        "Good",
                        "Good",
                        "Very Good"
                    ],
                    "aspect": "line",
                    "text": "Pharmacy",
                    "line-color": "#6fbbff",
                    "line-width": "4px",
                    "alpha": "0.85",
                    "marker": {
                        "background-color": "#6fbbff",
                        "size": "4",
                        "border-color": "#6fbbff",
                        "alpha": "0.55"
                    }
                }
            ]
        };

zingchart.render({ 
	id : 'radar1', 
	data : myConfig, 
    width: '100%',
    height: 230
});