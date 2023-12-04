/*
var nome = "Douglas";
var mensagem = "Seja bem vindo ao site, " + nome;
alert(mensagem); */

/* var nome = prompt("Qual o seu nome?");
var mensagem = "Seja bem vindo, " + nome;
alert(mensagem); 
*/

/*
 var nome = prompt("Qual o seu nome?"); //Uma variável pra capturar o nomr do aluno
var nota = prompt("Qual a sua nota?"); //Uma variável para capturar a nota do aluno

if (nota >= 60) {
    alert("Aluno " + nome + " aprovado com " + nota + "%") 
}
else {
    alert("Aluno " + nome + " reprovado com " + nota + "%")
} 
*/

/*
var idade = prompt("Qual a sua idade");


if (idade >= 18) {
    var curso = prompt("Qual o seu curso?");
    if(curso == "Programação" || curso == "programacao"){
        alert("Pessoa maior de idade. Criando códigos")
    }
    else {
        alert("Pessoa maior de idade. Cursando " + curso);
    }
}
else {
    alert("Pessoa menor de idade. Não pode estar cursando na faculdade");
}
*/

/* TAREFA DO IMC
var peso = prompt("Qual o seu peso?"); //Capturando o peso
var altura = prompt("Qual a sua altura?"); //Capturando a altura
var imc = (peso / (altura * altura)).toFixed(1); //Calculando e capturando o IMC, deixando-os com apenas uma casa decimal
alert("Seu IMC é de: " + imc); //Mostrando o IMC para o user

if (imc <= 18.5) {
    alert("Seu IMC aponta como você estando em estado de: Magreza"); //Executa somente se o IMC for menor que 18.5
}

else if (imc >= 18.6 && imc <= 24.9) {
    alert("Seu IMC aponta como você estando em estado de Normalidade"); //Executa somente se o imc estiver entre 18.6 e 24.9
}

else if (imc >= 25 && imc <= 29.9) {
    alert("Seu IMC aponta como você estando em estado de Sobrepeso"); //Executa somente se o imc estiver entre 25 e 29.9
}

else if (imc >= 30  && imc <= 39.9) {
    alert("Seu IMC aponta como você estando em estado de Obesidade"); //Executa somente se o imc estiver entre 30 e 39.9
}

else if (imc >= 40) {
    alert("Seu IMC aponta como você estando em estado de Obesidade Grave"); //Executa somente se o imc estiver acima de 40
}
*/

/* //Array - Inicio
var listaDeFilmes = ["Jogos Mortais", "Halloween", "Sexta-Feira 13", "O exorcista", "Pânico"];
console.log(listaDeFilmes);
console.log("Meu filme favorito é " + listaDeFilmes[1]);

listaDeFilmes.push ("Jogos mortais 2"); //adiciona um ou mais itens a lista

var viloes = ["Jason Voorhes", "Michael Myers", "Jigsaw", "Thanos", "Leatherface", "Voldemort", "Davy Jones"];
console.log(viloes);
console.log("Meu vilão favorito é " + viloes[3]);

viloes.pop(); //remove o último da lisa

var jogos = ["The last of us part 2", "God of War", "Gran Turismo", "Rainbow Six Siege", ""];
console.log(jogos);
console.log("Meu jogo favorito é " + jogos[0]);

jogos.shift(); //remove o primeiro da lista
jogos.splice(1,1) //Remove o item especifico (definir dois parâmetros: onde começa e a quantidade de itens a excluir)
jogos.splice(2, 0, "Portal"); // Insere um item específico (coloca ele no lugar do item 2 e o zero diz que nao iremos excluir)
*/

/*
var carro = {
    modelo: "Palio",
    ano: 2008, 
    marca: "Fiat",
    cor: "Prata"
}

console.log("Meu carro é um " + carro.modelo + " do ano " + carro.ano + " da cor " + carro.cor + " da marca " + carro.marca);
*/

/*
var listaDeAlunos = ["Douglas", "Antonio", "Diego", "Maurilio", "Alephe"];
var curso = {
    nome: "Programação de sistemas",
    horas: 200,
    alunos: listaDeAlunos,
    linguagens: ["JavaScript", "HTML", "CSS"],
}

console.log(curso)
console.log(curso.nome)
console.log(curso.linguagens)
console.log(curso.linguagens[2])
console.log(curso.alunos)

listaDeAlunos.push ("Franciso");
console.log(curso.alunos)

listaDeAlunos.forEach (aluno => console.log(aluno + " é um cursante de " + curso.nome + " cuja carga horária é de " + curso.horas + " e as liguagens aprendidas são " + curso.linguagens))
*/

/*
function somaValores(num1, num2){
    var resultado = num1 * num2;
    console.log(resultado);
}

somaValores(10, 9)
*/

/*
var cpf = "08556561539"

function formataCpf(cpf){
    console.log(cpf[0] + cpf[1] + cpf[2] + "." + cpf[3] + cpf[4] + cpf[5] + "." + cpf[6] + cpf[7] + cpf[8] + "-" + cpf[9] + cpf[10]);
}

formataCpf("08556561538")
*/


/*
var listaDeCpfs = ["08556561538", "08383336639", "12056561230", "87742335991", "82145603212", "87794562130", "56661538898"];

function formataCpf(cpf){
    console.log(cpf.slice (0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11));
}

listaDeCpfs.forEach (cpf => {
    if (cpf[0] == 8){
        console.log("CPF Inválido");
    }                               //Se o primeiro número for 8, ele exibirá o CPF como inválido
    else {
        formataCpf(cpf);
    }                               //Do contrário, ele exibirá o CPF formatado
    
})
*/


var cliente = {
    nome: prompt("Qual o seu nome?"),
    numero: prompt("Qual o seu número?"),
    cpf: prompt("Qual o seu CPF?"),
}


alert("Olá, Senhor " + cliente.nome + ". Seja bem vindo a sua conta.\n" + "Telefone: " + "(" + cliente.numero.slice(0,2) + ") " + cliente.numero.slice(2,3) + " " + cliente.numero.slice (3, 7) + "-" + cliente.numero.slice (7, 11) + "\n" + "CPF: " + cliente.cpf.slice(0, 3) + "." + cliente.cpf.slice(3, 6) + "." + cliente.cpf.slice(6, 9) + "-" + cliente.cpf.slice(9, 11))




    


/*
var numero = prompt("Digite um numero")

if (numero > 10) {
    alert("Número maior que 10");
}
else {
    alert("Número menor que 10");
}
*/


