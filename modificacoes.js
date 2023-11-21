var form = document.querySelector("form")

function enviar(){
  var nome = document.querySelector("#name").value
  var email = document.querySelector("#email").value
  var assunto = document.querySelector("#subject").value
  var mensagem = document.querySelector("#smr").value

  var separarNome = nome.split(" ")
  var temNome = 0
  var temEmail = 0
  var temAssunto = 0
  var temMensagem = 0
  var i

  for(i = 0; i <separarNome.length; i++){
    if(i >= 1){
      temNome++
    }
  }

  if(temNome == 0){
    alert("O campo nome tem que ter no minimo 2 nomes!")
  }

  for(i = 0; i < email.length; i++){
    if(email[i] == '@'){
      temEmail++
    }
  }

  if(temEmail == 0){
    alert("O campo email tem que ter @!")
  }

  if(assunto.length < 5 || assunto == "" || assunto.length > 100){
    alert("O campo assunto tem que ter mais que 5 caracteres!")
  }
  else{
    temAssunto++
  }

  if(mensagem.length < 5 || mensagem == ""){
    alert("O campo mensagem tem que ter mais de 5 caracateres!")
  }
  else{
    temMensagem++
  }

  if(temAssunto != 0 && temNome != 0 && temMensagem != 0 && temEmail != 0){
    alert("Mensagem enviada com sucesso!")
  }
  else{
    form.addEventListener("submit", function(event) {
      event.preventDefault()
    })
  }
}

function doacao(){
  var opcValor = document.querySelector("#opc").value
  var outroValor = document.querySelector("#ioutroValor").value
  var nome = document.querySelector("#inome").value
  var email = document.querySelector("#iemail").value
  var cpf = document.querySelector("#icpfs").value

  var separarNome = nome.split(" ")
  var temOpc = 0
  var temNome = 0
  var temEmail = 0
  var temCpf = 0
  var cpfPonto = 0
  var cpfRisco = 0

  if(opcValor == "Opção 6" && outroValor == ""){
    alert(`Voce selecionou a opcao "Outro valor" e nao colocou um valor no campo!`)
  }
  else{
    temOpc++
  }

  for(i = 0; i <separarNome.length; i++){
    if(i >= 1){
      temNome++
    }
  }

  if(temNome == 0){
    alert("O campo nome tem que ter no minimo 2 nomes!")
  }

  for(i = 0; i < email.length; i++){
    if(email[i] == '@'){
      temEmail++
    }
  }

  if(temEmail == 0){
    alert("O campo email tem que ter @!")
  }

  for(i = 0; i < cpf.length; i++){
    if(cpf[i] == "." || cpf[i] == "-"){
      cpfPonto++
      cpfRisco++
    }
  }

  if(cpfPonto != 2 && cpfRisco != 1 && cpf.length != 14){
    alert("Campo cpf errado, como deve ser: 000.000.000-00!")
  }
  else{
    temCpf++
  }

  if(temOpc == 0 || temCpf == 0 || temNome == 0 || temEmail == 0){
    form.addEventListener("submit", function(event) {
      event.preventDefault()
    })
  }
  else{
    form.action = "doacaoFeita.html"
    form.submit()
  }
}

var nomeCar = 0
var cvcCar = 0
var numCar = 0
var cpfCar = 0
var validadeCar = 0
var cpfPontoCar = 0
var cpfRiscoCar = 0

var dataAtual = new Date()
var ano = dataAtual.getFullYear()
var mes = dataAtual.getMonth() + 1

function doacaoCre(){
  var nomeCartao1 = document.querySelector("#inomeCartao1").value
  var cvc1 = document.querySelector("#icvc1").value
  var numCartao1 = document.querySelector("#inumeroCartao1").value
  var cpf1 = document.querySelector("#icpfTi1").value
  var validade1 = document.querySelector("#ivalidade1").value

  if(nomeCartao1 == ""){
    alert("O campo nome impresso no cartao esta vazio!")
  }
  else{
    nomeCar++
  }

  if(cvc1.length != 3){
    alert("O campo CVC esta errado!")
  }
  else{
    cvcCar++
  }

  if(numCartao1.length < 13 || numCartao1.length > 16){
    alert("O campo numero do cartao esta errado!")
  }
  else{
    numCar++
  }

  for(i = 0; i < cpf1.length; i++){
    if(cpf1[i] == "." || cpf1[i] == "-"){
      cpfPontoCar++
      cpfRiscoCar++
    }
  }

  if(cpfPontoCar != 2 && cpfRiscoCar != 1 && cpf1.length < 14 || cpf1.length > 17){
    alert("O campo cpf/cnpj esta errado, como deve ser: 000.000.000-00 ou 00.000.000/0001-00!")
  }
  else{
    cpfCar++
  }

  if(validade1 <= `${ano}-${mes}`){
    alert("O campo validade esta errado!")
  }
  else{
    validadeCar++
  }

  if(validadeCar == 0 || cvcCar == 0 || nomeCar == 0 || cpfCar == 0 || numCar == 0){
    form.addEventListener("submit", function(event) {
      event.preventDefault()
    })
  }
  else{
    doacao()
  }
}

function doacaoDeb(){
  var nomeCartao2 = document.querySelector("#inomeCartao2").value
  var cvc2 = document.querySelector("#icvc2").value
  var numCartao2 = document.querySelector("#inumeroCartao2").value
  var cpf2 = document.querySelector("#icpfTi2").value
  var validade2 = document.querySelector("#ivalidade2").value

  if(nomeCartao2 == ""){
    alert("O campo nome impresso no cartao esta vazio!")
  }
  else{
    nomeCar++
  }

  if(cvc2.length != 3){
    alert("O campo cvc esta errado!")
  }
  else{
    cvcCar++
  }

  if(numCartao2.length < 13 || numCartao2.length > 16){
    alert("O campo numero do cartao esta errado!")
  }
  else{
    numCar++
  }

  for(i = 0; i < cpf2.length; i++){
    if(cpf2[i] == "." || cpf2[i] == "-"){
      cpfPontoCar++
      cpfRiscoCar++
    }
  }

  if(cpfPontoCar != 2 && cpfRiscoCar != 1 && cpf2.length < 14 || cpf2.length > 17){
    alert("O campo cpf/cnpj esta errado, como deve ser: 000.000.000-00 ou 00.000.000/0001-00!")
  }
  else{
    cpfCar++
  }

  if(validade2 <= `${ano}-${mes}`){
    alert("O campo validade esta errado!")
  }
  else{
    validadeCar++
  }

  if(validadeCar == 0 || cvcCar == 0 || nomeCar == 0 || cpfCar == 0 || numCar == 0){
    form.addEventListener("submit", function(event) {
      event.preventDefault()
    })
  }
  else{
    doacao()
  }
}

function doacaoEmConta(){
  var nomeCartao3 = document.querySelector("#inomeCartao3").value
  var documento = document.querySelector("#idocumento").value
  var cpf3 = document.querySelector("#icpfTi3").value
  var agencia = document.querySelector("#iagencia").value
  var diaDe = document.querySelector("#idia").value
  var conta = document.querySelector("#iconta").value
  

  if(nomeCartao3 == ""){
    alert("O campo nome do titular esta vazio!")
  }
  else{
    nomeCar++
  }

  for(i = 0; i < documento.length; i++){
    if(documento[i] == "." || documento[i] == "-"){
      cpfPontoCar++
      cpfRiscoCar++
    }
  }

  if(cpfPontoCar != 2 && cpfRiscoCar != 1 && documento.length != 14){
    alert("O campo documento esta errado, como deve ser: 000.000.000-00!")
  }
  else{
    cvcCar++
  }

  for(i = 0; i < cpf3.length; i++){
    if(cpf3[i] == "." || cpf3[i] == "-"){
      cpfPontoCar++
      cpfRiscoCar++
    }
  }

  if(cpfPontoCar != 2 && cpfRiscoCar != 1 && cpf3.length < 14 || cpf3.length > 17){
    alert("O campo cpf/cnpj esta errado, como deve ser: 000.000.000-00 ou 00.000.000/0001-00!")
  }
  else{
    cpfCar++
  }

  if(agencia.length != 4){
    alert("O campo agencia esta errado!")
  }
  else{
    numCar++
  }

  if(diaDe < 1 || diaDe > 31){
    alert("O campo dia do debito esta errado!")
  }
  else{
    validadeCar++
  }

  var contaTem = 0
  var contaCar = 0

  for(i = 0; i < conta.length; i++){
    if(conta[i] == '-'){
      contaTem++
    }
  }

  if(contaTem == 0 || conta.length < 7){
    alert("O campo conta esta errado!")
  }
  else{
    contaCar++
  }

  if(validadeCar == 0 || cvcCar == 0 || nomeCar == 0 || cpfCar == 0 || numCar == 0 || contaCar == 0){
    form.addEventListener("submit", function(event) {
      event.preventDefault()
    })
  }
  else{
    doacao()
  }
}

function criarConta(){
  var nomeCriar = document.querySelector("#inome").value
  var dataCriar = document.querySelector("#idata").value
  var emailCriar = document.querySelector("#iemail").value
  var senhaCriar = document.querySelector("#isenha").value
  var confirmarSenhaCriar = document.querySelector("#irepitaSenha").value
  var celCriar = document.querySelector("#icelular").value
  var cpfCriar = document.querySelector("#icpf").value
  var cidadeCriar = document.querySelector("#icidade").value
  
  var separarNomeCriar = nomeCriar.split(" ")

  for(i = 0; i <separarNomeCriar.length; i++){
    if(i >= 1){
      nomeCar++
    }
  }

  if(nomeCar == 0){
    alert("O campo nome tem que ter no minimo 2 nomes!")
  }

  if(dataCriar == ""){
    alert("O campo data de nascimento esta vazio!")
  }
  else{
    validadeCar++
  }
  
  for(i = 0; i < emailCriar.length; i++){
    if(emailCriar[i] == '@'){
      cvcCar++
    }
  }

  if(cvcCar == 0){
    alert("O campo email tem que ter @!")
  }

  if(senhaCriar.length <= 10){
    alert("A senha tem que ter mais de 10 caracteres!")
  }
  else{
    numCar++
  }

  if(senhaCriar != confirmarSenhaCriar){
    alert("Digite a mesma senha no campo confirmar senha!")
  }
  else{
    cpfCar++
  }

  var temCel = 0

  if(celCriar == "" || celCriar[0] != '(' || celCriar.length > 16){
    alert("O campo celular esta errado tem que ser assim: (00) 000000000!")
  }
  else{
    temCel++
  }

  for(i = 0; i < cpfCriar.length; i++){
    if(cpfCriar[i] == "." || cpfCriar[i] == "-"){
      cpfPontoCar++
      cpfRiscoCar++
    }
  }

  var cpfTemCriar = 0

  if(cpfPontoCar != 2 && cpfRiscoCar != 1 && cpfCriar.length < 14 || cpfCriar.length > 17){
    alert("O campo cpf esta errado, como deve ser: 000.000.000-00!")
  }
  else{
    cpfTemCriar++
  }

  var ciTem = 0

  if(cidadeCriar == ""){
    alert("O campo cidade esta vazio!")
  }
  else{
    ciTem++
  }

  if(nomeCar == 0 || cvcCar == 0 || numCar == 0 || cpfCar == 0 || validadeCar == 0 || temCel == 0 || cpfTemCriar == 0 || ciTem == 0){
    form.addEventListener("submit", function(event) {
      event.preventDefault()
    })
  }
  else{
    form.action = "contaCriada.html"
    form.submit()
  }
}