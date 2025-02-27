alert("Boas vindas ao nosso Site!");
nomeUsuario = prompt ("Qual seu nome? ");
suaIdade = prompt ("Quantos anos você tem? ");
linguagem = prompt ("Qual Linguagem de programação você está estudando?")
sim = 1
nao = 2
alert("Olá " + nomeUsuario + "! Você tem " + suaIdade + " e já esta aprendendo " + linguagem + "!");

extra = prompt ("Você gosta de estudar linguagem de Programação? Responda com o número 1 para SIM ou 2 para NÃO.")

if(extra == 1) {
   alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
   alert("Ahh que pena... Já tentou aprender outras linguagens?.")
}



 