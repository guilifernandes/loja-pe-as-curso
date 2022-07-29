let pesoPeca = 0;
undefined
let nomePeca = "";
undefined
let qtdpecasCaixas = 0;
undefined

pesoPeca = prompt("Me informe o peso da peça");
''
if (pesoPeca > 100) { 
  nomePeca = prompt("Me informe o nome da peça");
  
  if (nomePeca.length >= 3){
    qntpecasCaixa = prompt("diga a quantida de peças na sua caixa");

    if  (qntpecasCaixa >= 10) {
        console.log("A caixa ultrapassou o limite")
   } else {
    console.log(" Sua caixa está feita");
   }
  } else {
    console.log("O nome da peça deve ser maior");
  }
  } else {
    console.log.apply("A peça não possui o peso minimo permitido")
  }
