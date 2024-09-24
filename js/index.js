const formulario = document.getElementById('meuForm')
const inputsForm = document.querySelectorAll('.inputs')
const botao = document.querySelector("button")

formulario.addEventListener('submit', (event)=> {
    event.preventDefault();
    inputsForm.forEach((input) => {
            if(input.value.trim() === ''){
                input.classList.add('erro')
                input.classList.remove('ok')

            input.nextElementSibling.classList.add("mostrar");
            input.nextElementSibling.classList.remove("esconder");
                
                input.nextElementSibling.textContent = "Campo obrigatório";
            }else{
                input.classList.add('ok')
                input.classList.remove('erro')

            input.nextElementSibling.classList.remove("mostrar")
                input.nextElementSibling.textContent = "";
            }
          });       
});
 