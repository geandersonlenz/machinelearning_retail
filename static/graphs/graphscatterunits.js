var myJson = {
"graphset":[
    {
        "type":"scatter",
        "background-color":"#fff #fbfbfb",
        "title":{
            "text":"Result(100) Normal Price and Unit Price",
            "color": "#black",
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
        "scale-x":{
            "offset-start":20,
            "offset-end":20,
            "items-overlap":true,
            "max-items":16,
        },
        "scale-y":{
            "min-value":"auto",
            "offset-start":20,
            "offset-end":20,
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
                    "background-color":"#e24b77",
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
                "text":"UnitPrice",
                "values":sec_scat
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
                "text":"NormalPrice",
                "values":scat
            }
        ]
    }
]
};
zingchart.render({ 
  id : 'graphscatterunits', 
  data : myJson, 
  height: 500, 
  width: 725 
});