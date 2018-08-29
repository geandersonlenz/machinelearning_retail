

    var myConfig = {
      backgroundColor:'none',
      title: {
                "text": "Propensão para Cancelar",
                "background-color": "none",
                "font-color": "000",
                "font-size": "14px"
            },
        type: "gauge",
        plot: {
          arperture:180,
          csize:4,
          backgroundColor:'none',
          tooltip:{
            visible: false
          }
        },
        scaleR: {
        minValue:0,
        maxValue:100,
        step:20,
          aperture:180,
          backgroundColor:'none',
          item: {
            padding: 5,
            fontColor : "#1E5D9E",
            fontFamily: 'Montserrat',
          offsetR:0
          },
          tick: {
            lineColor: '#D1D3D4',
            placement:'out',
            lineColor:'#1E5D9E'
          },
          center:{
            size:0,
            borderColor:'none',
            backgroundColor:'none'
          },
          ring:{
            size:3,
            rules:[
              {
                rule:'%v < 20',
                backgroundColor:'#00BAF2'
              },
              {
                rule:'%v >= 20 && %v < 40',
                backgroundColor:'#1E5D9E'
              },
              {
                rule:'%v >= 40 && %v < 75',
                backgroundColor:'#9B26AF'
              },
              {
                rule:'%v >= 75',
                backgroundColor:'#E80C60'
              }  
            ]
          }
        },
        series : [
            {
              text: "Internal",
                values : [12],
                animation:{
                    "method":5,
                    "effect":2,
                    "speed":2500
                },
                lineColor: "#00BAF2",
                backgroundColor: "#1E5D9E",
            },
     
        ]
    };
     
    zingchart.render({ 
        id : 'gauge2', 
        data:myConfig,
        height: 195, 
        width: '100%' 
    });