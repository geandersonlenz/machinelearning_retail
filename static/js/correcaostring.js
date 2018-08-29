var texto = "{{ project.texto }}";

/*var textword = "";
console.log(textword);*/

str1 = texto.replace(/&#34;/g, "′"),
str2 = str1.replace(/&#39;/g, "′"),
console.log(str2);

tx = str2.replace(/′/g, " "),
console.log(tx);