const strNumber = "2/4";
fracoesSimples(strNumber);

function fracoesSimples(n) {
  let strNumber = simplify(n);

  let arrStr = [];
  let strFracao = "";
  let restDivisao = 0;
  let intDivisao = 0;

  arrStr = strNumber.split("/");

  if (arrStr[1] == 0) console.log("Erro! Divisão por zero.");
  else if (arrStr[0] % arrStr[1] == 0) strFracao = arrStr[0] / arrStr[1];
  else if (Math.abs(arrStr[0]) < Math.abs(arrStr[1])) strFracao = strNumber;
  else {
    restDivisao = arrStr[0] % arrStr[1];
    intDivisao = Number.parseInt(arrStr[0] / arrStr[1]);

    strFracao = `${intDivisao} ${restDivisao}/${arrStr[1]}`;
  }

  return console.log(strFracao);
}

/*
as funções a seguir, simplify() e reduce(), para simplificação de frações foram retiradas de 
https://acervolima.com/reduza-uma-fracao-a-sua-forma-mais-simples-usando-javascript/
*/

function simplify(str) {
  var result = '', data = str.split('/'), 
      numOne = Number(data[0]), 
      numTwo = Number(data[1]);
  for (var i = Math.max(numOne, numTwo); i > 1; i--) {
  if ((numOne % i == 0) && (numTwo % i == 0)) {
      numOne /= i;
      numTwo /= i;
  }
  }
  if (numTwo === 1) {
  result = numOne.toString()
  } else {
  result = numOne.toString() + '/' + numTwo.toString()
  }
  return result;
}

function reduce(numer,denomin){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numer,denomin);
  return `${numer/gcd}/${denomin/gcd}`
}