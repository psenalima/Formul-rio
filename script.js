
const email = document.getElementById("mail");
//console.log(email.value)





email.addEventListener("input[email]", function (event) {
  
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Preencha com seu email, não esqueça do @");
  } else {
    email.setCustomValidity("");
  }
});

//console.log
//console.dir


//ValidationExpression= \^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$\



/*function validarTel() {
 
  let re = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g
  if (! re.test(cel)) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Telefone Inválido');
    document.form.tel.cel.focus();
    return false;
  }
  return true;
}*/



function isTipo(cel)
{
	var reTipo = '^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$'

  if(!reTipo.test(cel)){
    alert("numero errado")
    return false;
  }
  else{
    return true
  }
}
//isTipo(cel)
  
//const input = document. querySelector("#cel");
//var texto = input. value;

/*input.addEventListener("input[tel]", function(event){
  let phoneRe = /(\+?55)?(0?(([14689][1-9])|(2[12478])|(3[1234578])|(5[1345])|(7[134579])))9[6-9][0-9]{7}/
  console.log('emtrou')
  if(!phoneRe.test(input)){
    console.log("numero errado")
    return false;
  }
  else{
    console.log('numero certo')
    return true
  }
})*/


function isValid() {
  //let input = 0
  //input.focus
  //input = Number(document.getElementById('cel').value); 
  input = document.getElementById("cel")
  //let texto = input.value;
  
  let phoneRe = /(\+?55)?(0?(([14689][1-9])|(2[12478])|(3[1234578])|(5[1345])|(7[134579])))9[6-9][0-9]{7}/
  if (input.value == "") {
    alert("Telefone não informado");
    input.focus();
    console.log(input.value)
    return;
  }
  else if(!phoneRe.test(input.value)){
    console.log("numero errado")
    console.log(input)
    return false;
  }
  else{
    console.log('numero certo')
    console.log(input)
    return true
  }
  //let cam = phoneRe.test(cel)
  c//onsole.log(cam)
  /*if(!phoneRe.test(cel)){
    alert('numero inválido')
    return false
  }else{
    return true
  }*/
}

isValid()

/*var telefone = '31992399288';
var regex = new RegExp('^\\(((1[1-9])|([2-9][0-9]))\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$'); 
if (regex.test(telefone)) { 
    console.log("Válido");
}
else console.log("Inválido");*/



