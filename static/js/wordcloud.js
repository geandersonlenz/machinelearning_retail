var myConfig = {
  type: 'wordcloud',
  options: {
    text: ['teste', 'teste', 'teste'],
    minLength: 5,
    colorType: 'palette',
    ignore: ['&#39','&#38']
  }
};    
 
zingchart.render({ 
  id: 'wordcloud', 
  data: myConfig, 
  height: 300,  //altura
  width: '100%', //largura
});