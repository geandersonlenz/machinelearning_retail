var myConfig = {
  type: "pie", 
  backgroundColor: "#ffffff",
  plot: {
    borderColor: "#2B313B",
    borderWidth: 1,
    slice: 89,
    valueBox: {
      placement: 'out',
      text: '%npv%',
      fontFamily: "Open Sans"
    },
    tooltip:{
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 10",
      text: "%v"
    },
    animation:{
      effect: 2, 
      method: 5,
      speed: 500,
      sequence: 1
    }
  },
  title: {
    fontColor: "#7E7E7E",
    text: 'Graph - Display in Store',
    backgroundColor: "#ffffff",
    align: "left",
    offsetX: 10,
    fontFamily: "Open Sans",
    fontSize: 25,
    x: 20
    
  },
  subtitle: {
    offsetX: 10,
    offsetY: 10,
    fontColor: "#8e99a9",
    fontFamily: "Open Sans",
    fontSize: "16",
    
    align: "left"
  },
  plotarea: {
    margin: "20 0 0 0"  
  },
  series : [
    {
      values : [displayinstore_0],
      text: displayinstore_nam0,
      backgroundColor: '#50ADF5',
    },
    {
      values: [displayinstore_1],
      text: displayinstore_nam1,
      backgroundColor: '#FF7965'
    }
  ]
};

zingchart.render({ 
  id : 'graphdisplayinstore', 
  data : myConfig, 
  height: 350, 
  width: '100%' 
});