//const redeSociais = ['facebook','instagram','twitter'];

/*
      ARRAYs
for (var i = 0; i < redeSociais.length; i++) {
console.log(`Eu tenho perfil na rede social : ${redeSociais[i]}`)
}
*/

/*
      forEach ele so intera
redeSociais.forEach(function(NomeDaRedeSocial, indice){
  console.log(`#${indice} Eu tenho perfil na rede social : ${NomeDaRedeSocial}`)
})
*/

const alunos = ["Thiago", "Julia", "Paula", "Wagner"];

const alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: "Front-end",
  };
  return itemAtual;
});
console.log(alunos2);

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);




//find procura pelo objeto no array ;; e o findIndex procura no array qual indice esta objeto
const julia = alunos2.find(function (item) {
  return item.nome == 'Julia' //true ou false
});
console.log(julia);





//every = verifica se todos objetos dentro do array é true se um for falso ele dara false

alunos2.push({nome:'lucio',
curso:'back-end',})

const todosAlunosSaoFrontEnd = alunos2.every(function (item){
return item.curso === 'Front-end'
})

console.log(todosAlunosSaoFrontEnd)



// some = verifica no array se existe algum aluno de back end verifica se algum no array possui alguma informaçao a ser pesquisada
const existeAlgumAlunoBackEnd = alunos2.some(function (item){
return item.curso === 'Back-end' && item.curso === 'Front-end';
})
console.log(existeAlgumAlunoBackEnd)



//filtra uma informação especifica de um array
const alunosDeBackend = alunos2.filter(function(item){
return item.curso === 'Front-end';
})
console.log(alunosDeBackend)




//reduce = recebe dois argumentos ele pode somar os elementos do array subtrai
const num=[10,20,30,40]
const soma = num.reduce(function(acumulador ,item){
acumulador +=item;
return acumulador;
}, 0)
console.log(soma)

// colocar mais uma pessoa no array com reduce
const nomesAlunos = alunos2.reduce(function(acumulador ,itemAtual){
acumulador += `${itemAtual.nome} `
return acumulador;
}, '')
console.log(nomesAlunos)
