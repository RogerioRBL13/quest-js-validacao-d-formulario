# Validação de Formulário

Este foi um projeto do curso de desenvolvimento em Frontend no qual primeiramente era composto em HTML e CSS apenas e que mais tarde foi usado Javascript.

## Objetivo do Projeto

🖥 Ele é um validador de formulário, onde foi implementado condições de preenchimento do formulário e todos seus campos são obrigatórios:
- Todos os campos preenchidos: os 'inputs' ficarão com a borda verde.

![image](https://github.com/user-attachments/assets/f59639d7-650f-4bee-a9fe-424db5d81a48)


- Faltou algum campo sem preencher: o 'input' correspondente ficará com a borda vermelha e com uma mensagem abaixo (campo obrigatório).
![image](https://github.com/user-attachments/assets/fc5ed4cc-9e29-4c08-ae50-407a06048be7)


No trecho do código JS a ser visto abaixo, a função "trim( )" serve para evitar que o espaço seja considerado algum caractere ou que o 'input' o intreprete, ou seja, não aceitar espaços.
```
inputsForm.forEach((input) => {
            if(input.value.trim() === ''){
                input.classList.add('erro')
                input.classList.remove('ok')
```

Então esse é o formulário com validação dos campos.

### Linguagens (tecnologias) >>
----------------------------
| HTML | CSS | Javascript |

