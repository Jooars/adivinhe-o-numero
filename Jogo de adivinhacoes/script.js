var rand = Math.floor((Math.random() * 10) + 1)
var Par = ""  
var score = 10
var Lista_par = []
var Lista_impar = []

if (rand % 2 == 0) {
   Par = "par"
   Lista_par = ["Dica: É divisível por 2!", 
   "Dica: Multiplicado por um número par, resulta em um número par!",
   "Dica: Está entre 1 e 10", 
   "Dica: Pertençe ao conjunto dos números inteiros", 
   "Dica: É múltiplo de 2!"]
}

else if (rand % 2 == 1) {
   Par = "impar"
   Lista_impar = ["Dica: Não é um número par!", 
   "Dica: Não é múltiplo de 2", 
   "Dica: Identificar número ímpar: i = 2n + 1", 
   "Dica: A soma entre dois números inteiros consecutivos resulta em um número ímpar", 
   "Dica: n é um número pertencente ao conjunto dos números inteiros."]
}
// NÃO ESQUECE DE TIRAR ISSO AQUI!
console.log(Par)
console.log(rand)
console.log(numer)

function enviar() {
   
   var numer = document.getElementById("resp").value

   if (numer == rand) {
      document.getElementById("out").innerHTML = "Você acertou!! <br> Sua pontuação é: " + score + " <br> Atualize a página para tentar de novo!"
      
   }
   
   
   if (numer > rand) {
      document.getElementById("mouM").innerHTML = "É um número menor! E ele é " + Par
      dicas()
      
   }
   
   if (numer < rand) {
      document.getElementById("mouM").innerHTML = "É um número maior! E ele é " + Par
      dicas()
   }
   /*
   if (numer !== rand) {
      dicas()
   }
   */
}

function dicas() {
   if (Par == "par") {
      var randomTip = Lista_par[Math.floor(Math.random() * Lista_par.length)]
      document.getElementById("dica").innerHTML = randomTip
      score--
      console.log(score)
   }

   else if (Par == "impar") {
      var randomTip = Lista_impar[Math.floor(Math.random() * Lista_impar.length)]
      document.getElementById("dica").innerHTML = randomTip
      score--
   }
}