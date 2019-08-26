(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  
  contactForm.addEventListener('submit', function() {
    
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    
    const nameLength = nameValue.length;
    const emailLength = emailValue.length;
    const messageLength = messageValue.length;

    // Verifica se  todos os campos do formulario foram preenchidos
    if(nameLength == '0' && emailLength == '0' && messageLength == '0'){
      window.alert('Por favor, preencha todos os campos');
    }
      // Verifica se o campo nome foi preenchido
      else if(nameLength == '0'){
        window.alert('Campo nome está em branco. Por favor, informe seu nome.'); 
        nameInput.focus();
      } 
      //Verifica se o campo email foi preenchido
      else if(emailLength == '0'){
        window.alert('Campo email está em branco. Por favor, informe seu email.'); 
        emailInput.focus();
      }
        //Verifica se o campo email foi preenchido corretamente
        else if(emailInput.value.indexOf("@") == -1 ||   emailInput.value.indexOf(".") == -1) {
         alert("Email inválido! Por favor, verique se está preenchido corretamente: \nExemplo: xxxxx@xxxx.com.br");
         emailInput.focus();
      } 
       //Verifica se o campo foi preenchido
      else if(messageLength == '0'){
        window.alert("Campo mensagem está em branco. Por favor, deixe uma mensagem para nós.");
        messageInput.focus();
      }
      else{
        window.alert('A Green City agradece pelo contato!' );
      }
  });
})();
