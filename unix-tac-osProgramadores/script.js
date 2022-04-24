const url = './cold-heart.txt';
let arrText = [];

fetch(url)
.then(r => r.text())
.then(text => {
    arrText = text.split('\r\n');
});

const showText = (command) => {
    const booleanCat = command === 'cat';
    const booleanTac = command === 'tac';

    if(!booleanCat && !booleanTac){
        return 'Apenas os comandos "cat" e "tac" são aceitos!'
    }

    if(booleanCat){
        return arrText.forEach(item => {
            console.log(item);
        })
    } else {
        return arrText.forEach((item, index) =>{
            //console.log(arrText[arrText.length-1-index])
            console.log(arrText.at(-index-1))
        })
    }
}