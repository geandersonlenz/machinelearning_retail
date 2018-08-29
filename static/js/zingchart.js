// ########### ZING CHART1

    var myConfig =         {
                "type":"hbar",
                "font-family":"Arial",
                "title":{
                    "text":"Customer Survey Response",
                    "font-family":"Arial",
                    "background-color":"none",
                    "font-color":"#A4A4A4",
                    "font-size":"18px"
                },
                "labels":[
                    {
                        "text":"DAYS",
                        "font-size":"12px",
                        "font-color":"#9d9d9d",
                        "x":"11.5%",
                        "y":"10%"
                    },
                    {
                        "text":"CUSTOMERS",
                        "font-size":"12px",
                        "font-color":"#9d9d9d",
                        "x":"20%",
                        "y":"10%"
                    },
                    {
                        "text":"GOAL",
                        "font-size":"12px",
                        "font-color":"#9d9d9d",
                        "x":"4%",
                        "y":"10%"
                    }
                ],
                "arrows":[
                  {
                    "backgroundColor":"#CCCCCC",
                    "direction":"bottom",
                    "borderWidth": 0,
                    "to":{
                      "x": "6%",
                      "y": "27%"
                    },
                    "from":{
                      "x": "6%",
                      "y": "79%"
                    }
                  }
                ],
                "shapes":[
                  {
                    "type":"circle",
                    "x": 45,
                    "y": 99,
                    "backgroundColor": "white",
                    "borderColor":"#6FA6DF",
                    "borderWidth":3,
                    "size": 14
                  },
                  {
                    "type":"circle",
                    "x": 40,
                    "y": 95,
                    "backgroundColor": "#6FA6DF",
                    "size": 2
                  },
                   {
                    "type":"circle",
                    "x": 50,
                    "y": 95,
                    "backgroundColor": "#6FA6DF",
                    "size": 2
                  },
                  {
                    "type":"pie",
                    "background-color":"#5297b6",
                    "size":8,
                    "x":45,
                    "y":100,
                    "angle-start":0,
                    "angle-end":180,
                  },
                  {
                    "type":"pie",
                    "background-color":"#fff",
                    "size":6,
                    "x":45,
                    "y":100,
                    "angle-start":0,
                    "angle-end":180,
                  },
                  {
                    "type":"circle",
                    "x": 45,
                    "y": 433,
                    "backgroundColor": "white",
                    "borderColor":"#FA8452",
                    "borderWidth":3,
                    "size": 14
                  },
                  {
                    "type":"circle",
                    "x": 40,
                    "y": 429,
                    "backgroundColor": "#FA8452",
                    "size": 2
                  },
                   {
                    "type":"circle",
                    "x": 50,
                    "y": 429,
                    "backgroundColor": "#FA8452",
                    "size": 2
                  },
                  {
                    "type":"pie",
                    "background-color":"#FA8452",
                    "size":8,
                    "x":45,
                    "y":439,
                    "angle-start":170,
                    "angle-end":10,
                  },
                  {
                    "type":"pie",
                    "background-color":"#fff",
                    "size":5,
                    "x":45,
                    "y":440,
                    "angle-start":170,
                    "angle-end":10,
                  }
                  ],
                "plot":{
                    "bars-overlap":"100%",
                    "borderRadius":8,
                    "hover-state":{
                        "visible":false
                    },
                    "animation": {
                        "delay": 300,
                        "effect": 3,
                        "speed": "500",
                        "method": "0",
                        "sequence": "3"
                    }
                },
                "plotarea":{
                    "margin":"60px 20px 20px 140px"
                },
                "scale-x":{
                    "line-color":"none",
                    "values":["120+","90-120","60-90","30-60","0-30"],
                    "tick":{
                        "visible":false
                    },
                    "guide":{
                        "visible":false
                    },
                    "item":{
                        "font-size":"14px",
                        "padding-right":"20px",
                        "auto-align":true,
                        "rules":[
                            {
                                "rule":"%i==0",
                                "font-color":"#FA8452"
                            },
                            {
                                "rule":"%i==1",
                                "font-color":"#FCAE48"
                            },
                            {
                                "rule":"%i==2",
                                "font-color":"#FCCC65"
                            },
                            {
                                "rule":"%i==3",
                                "font-color":"#A0BE4A"
                            },
                            {
                                "rule":"%i==4",
                                "font-color":"#6FA6DF"
                            }
                        ]
                    }
                },
                "scale-y":{
                    "visible":false,
                    "guide":{
                        "visible":false
                    }
                },
                "series":[
                    {
                        "values":[100,100,100,100,100],
                        "bar-width":"40px",
                        "background-color":"#f2f2f2",
                        "border-color": "#e8e3e3",
                        "border-width":2,
                        "fill-angle":90,
                        "tooltip":{
                            "visible":false
                        }
                    },
                    {
                        "values":[42,56,77,44,81],
                        "bar-width":"32px",
                        "max-trackers":0,
                        "value-box":{
                            "placement":"top-out",
                            "text":"%v",
                            "decimals":0,
                            "font-color":"#A4A4A4",
                            "font-size":"14px",
                            "alpha":0.6
                        },
                        "rules":[
                            {
                                "rule":"%i==0",
                                "background-color":"#FA8452"
                            },
                            {
                                "rule":"%i==1",
                                "background-color":"#FCAE48"
                            },
                            {
                                "rule":"%i==2",
                                "background-color":"#FCCC65"
                            },
                            {
                                "rule":"%i==3",
                                "background-color":"#A0BE4A"
                            },
                            {
                                "rule":"%i==4",
                                "background-color":"#6FA6DF"
                            }
                        ]
                    }
                ]
            };
     
    zingchart.render({ 
    	id : 'myChart', 
    	data : myConfig, 
    	height: 400, 
    	width: 625 
    });

// ############################ ZING CHART2         

var myConfig = {
    "type":"bar",
    "background-color":"#fff",
    "3d-aspect":{
        "true3d":0,
        "y-angle":10,
        "depth":30
    },
    "title":{
        "text":"Sales by Category",
        "height":"40px",
        "font-weight":"normal",
        "text-color":"#ffffff"
    },
    "legend":{
        "layout":"float",
        "background-color":"none",
        "border-color":"none",
        "item":{
            "font-color":"#333"
        },
        "x":"37%",
        "y":"10%",
        "width":"90%",
        "shadow":0
    },
    "plotarea":{
        "margin":"95px 35px 50px 70px",
        "background-color":"#fff",
        "alpha":0.3
    },
    "scale-y":{
        "background-color":"#fff",
        "border-color":"#333",
        "alpha":0.5,
        "format":"$%v",
        "guide":{
            "line-style":"solid",
            "line-color":"#333",
            "alpha":0.2
        },
        "tick":{
            "line-color":"#333",
            "alpha":0.2
        },
        "item":{
            "font-color":"#333",
            "padding-right":"6px"
        }
    },
    "plot":{
      "animation":{
        "sequence": "ANIMATION_BY_PLOT"
      }
    },
    "scale-x":{
        "background-color":"#fff",
        "border-color":"#333",
        "alpha":0.5,
        "values":["Casual","Party","Sports","Luxury"],
        "guide":{
            "visible":false
        },
        "tick":{
            "line-color":"#333",
            "alpha":0.2
        },
        "item":{
            "font-size":"11px",
            "font-color":"#333"
        }
    },
    "series":[
        {
            "values":[1,2,3,4],
            "text":"Categorias",
            "background-color":"#673AB7 #9575CD",
            "border-color":"#673AB7",
            "legend-marker":{
                "border-color":"#673AB7"
            },
            "tooltip":{
                "background-color":"#673AB7",
                "text":"$%v",
                "font-size":"12px",
                "padding":"6 12",
                "border-color":"none",
                "shadow":0,
            }
        }
    ]
};
 
zingchart.render({ 
    id : 'myChart2', 
    data : myConfig, 
    height: 400, 
    width: 795,
    defaults:{
      'font-family':'sans-serif'
    }
});




// ########################## GLOBAL BROWSER USAGE  3 ##############################

var myConfig3 = {
  type: "gauge",
  plot:{
        animation:{
          effect: "2",
          method: "3",
          sequence: "ANIMATION_BY_PLOT",
          speed: "ANIMATION_SLOW"
        }
  }, 
  scaleR: {
    values: "1:100:20",
    center:{
      backgroundColor:'#009688',
      borderWidth:0
    }
  },
  series : [
    {
      values : [35],
      backgroundColor:'#009688'
    }
  ]
};

zingchart.render({ 
  id : 'myChart3', 
  data : myConfig3, 
  height: '300', 
  width:  '795'  
});

// ################################# 4 ##########################################

var myConfig =  { 
  type: "line",
  title : {
    text: "Vendas de produtos por semana"
  },
  plot: {
    animation:{
      effect:"2",
      method:"3",
      sequence: "ANIMATION_BY_PLOT",
      speed: "ANIMATION_FAST"
    }
  },
  series: [ 
    {
      values : [20,40,25,50,15]
    }, 
    {
      values : [5,30,21,18,59]
    }, 
    {
      values : [30,5,18,21,33]
    } 
  ] 
};
 
zingchart.render({ 
  id : 'myChart4', 
  data : myConfig, 
  height: '350', 
  width: '100%' 
});


// ####################################### 5 ############################################
zingchart.THEME="classic";

var myJson = {
"graphset":[
    {
        "type":"scatter",
        "background-color":"#fff #fbfbfb",
        "title":{
            "text":"Graph",
            "color": "black",
            "background-color":"#fff"
        },
        "plotarea":{
            "margin":"60 40 dynamic dynamic"
        },
        "legend":{
            "margin-top":55,
            "shadow":0,
            "alpha":0.8,
            "border-color":"#00a679",
            "border-radius":5,
            "border-width":3,
            "adjust-layout":true,
            "cursor":"hand",
            "item":{
                "bold":true,
                "cursor":"hand"
            },
            "marker":{
                "type":"circle",
                "size":5,
                "border-color":"#fff",
                "border-width":1,
                "cursor":"hand"
            }
        },
        "shapes":[
            {
                "type":"star5",
                "x":"89%",
                "y":"24.6%",
                "size":6,
                "background-color":"#00a679"
            }
            ],
        "scale-x":{
            "offset-start":20,
            "offset-end":20,
            "items-overlap":true,
            "max-items":16,
            "label":{
                "text":"Revenue"
            }
        },
        "scale-y":{
            "min-value":"auto",
            "offset-start":20,
            "offset-end":20,
            "label":{
                "text":"Quantity"
            }
        },
        "plot":{
            "selection-mode":"multiple",
            "selected-marker":{
                "background-color":"#00a679",
                "border-width":1,
                "border-color":"#00a679",
                "size":6,
                "type":"star5"
            }
        },
        "series":[
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#ff0008",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#e24b77",
                    "color":"#e24b77",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Australia",
                "values":[[130271.28,79448]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#ff0008",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Austria",
                "values":[[7097.56,3471]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Bahrain",
                "values":[[548.40,260]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Belgium",
                "values":[[27967.42,16467]]
            },
            {
                "marker":{
                    "size":"7",
                    "type":"circle",
                    "background-color":"#1eff2d",
                    "border-width":1,
                    "border-color":"#f4df42",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Brazil",
                "values":[[1143.60,356]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Canada",
                "values":[[3666.38,2763]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Channel Islands",
                "values":[[17534.65,8394]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Cyprus",
                "values":[[8960.52,4986]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Czech Republic",
                "values":[[869.23,632]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Denmark",
                "values":[[15352.96,6284]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"EIRE",
                "values":[[203558.55,107042]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"European Community",
                "values":[[1291.75,497]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Finland",
                "values":[[15651.70,8192]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"France",
                "values":[[138220.98,78093]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Germany",
                "values":[[168052.57,89504]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Greece",
                "values":[[4029.53,1320]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Hong Kong",
                "values":[[9382.52,4387]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Iceland",
                "values":[[2790.86,1590]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Israel",
                "values":[[7907.82,4353]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Italy",
                "values":[[8987.17,4344]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Japan",
                "values":[[25049.43,19893]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Lebanon",
                "values":[[1693.88,386]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Lithuania",
                "values":[[1661.06,652]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Malta",
                "values":[[1953.66,776]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Netherlands",
                "values":[[207302.26,146639]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Norway",
                "values":[[22163.03,11828]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Poland",
                "values":[[5871.27,2720]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Portugal",
                "values":[[20066.31,11360]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Saudi Arabia",
                "values":[[131.17,75]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Singapore",
                "values":[[8121.13,4635]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Spain",
                "values":[[41283.48,19995]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Sweden",
                "values":[[28217.04,27524]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Switzerland",
                "values":[[42757.22,23339]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"USA",
                "values":[[383.95,137]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"United Arab Emirates",
                "values":[[1902.28,982]]
            },
            {
                "marker":{
                    "type":"circle",
                    "background-color":"#4c77ba",
                    "border-width":1,
                    "border-color":"#fff",
                    "shadow":0
                },
                "tooltip":{
                    "padding":10,
                    "background-color":"#FFF",
                    "border-color":"#4c77ba",
                    "color":"#4c77ba",
                    "border-width":2,
                    "alpha":"0.8",
                    "text-align":"left",
                    "border-radius":8,
                    "text":"%k / %v"
                },
                "text":"Unspecified",
                "values":[[3784.04,2659]]
            }

        ]
    }
]
};
zingchart.render({ 
    id : 'myChart5', 
    data : myJson, 
    height: 780, 
    width: '100%' 
});

// ######################################## 6 ####################################
