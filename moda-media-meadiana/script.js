function calcular(arr) {
  const moda = calcModa(arr);
  const media = calcMedia(arr).toFixed(2);
  const mediana = calcMediana(arr);
  
  const strModa = `Moda: ${moda}`;
  const strMedia = `Média: ${media}`;
  const strMediana = `Mediana: ${mediana}`;

  return [strModa, strMedia, strMediana];
}

function calcMediana(arr) {
  let mediana = 0;
  const arrRol = arr.sort((a, b) => a - b);
  const par = arr.length % 2 === 0;

  if (par) {
    const indexEsq = arrRol.length / 2 - 1;
    const indexDir = arrRol.length / 2;

    return (mediana = (arrRol[indexDir] + arrRol[indexEsq]) / 2);
  }

  return (mediana = arrRol[Math.floor(arrRol.length / 2)]);
}

function calcMedia(arr) {
  let media = arr.reduce((acumulador, atual) => acumulador + atual, 0) / arr.length;

  return media;
}

function calcModa(arr) {
  let moda = [];
  const arrRol = arr.sort((a, b) => a - b);
  const arrSemRepeticao = [...new Set(arrRol)];
  let indexArr = [];

  arrSemRepeticao.forEach((a) => {
    let contador = 0;
    arrRol.forEach((b) => {
      if (a === b) contador++;
    });

    indexArr.push(contador);
  });
  const maxIndex = Math.max(...indexArr);

  indexArr.forEach((valor, index) => {
    if (valor === maxIndex) {
      const valor = arrSemRepeticao[index];
      moda.push(valor);
    }
  });
  return moda;
}

const arrNumeros = [1, 2, 8, 8, 3, 4, 5, 5, 7, 7];
console.log(calcular(arrNumeros));