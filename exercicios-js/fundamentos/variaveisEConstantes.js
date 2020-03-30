var a = 3;

let b = 4; //melhor forma de declarar a variável

/* usando a keyword var é possível declarar 
uma variável 2 vezes dentro do mesmo escopo */
var a = 30;

/* já com a keyword let só é possível declarar
uma única vez, sendo possível reatribuir o seu valor*/
b = 40;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
/*c = 50 -> Dá erro, pois não é possível reatribuir 
valor de const */

console.log(c);