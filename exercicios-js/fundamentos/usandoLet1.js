var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);

/* 
 * o let procura a variável no escopo
 * mais interno, caso não haja ele procura
 * no mais externo, e assim vai até encontrar
*/

//let tem escopo global, de função e de bloco