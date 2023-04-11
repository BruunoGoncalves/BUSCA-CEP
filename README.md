
# Buscador de endereço a partir de um CEP

Este código em JavaScript faz uma requisição à API da BrasilAPI para buscar informações de endereço a partir de um CEP informado pelo usuário. As informações são apresentadas em campos de formulário HTML.

## Como funciona?

O código utiliza uma função assíncrona buscaCep() que é chamada quando o usuário sai do campo de entrada de CEP (blur), após uma formatação do valor do campo de CEP. Se o campo de CEP não estiver vazio, é construída uma URL com o valor do CEP e a requisição à API é feita utilizando o método fetch(). Se a resposta da API for bem-sucedida (status 200), as informações de endereço são preenchidas nos campos do formulário HTML. Caso contrário, uma mensagem de erro é exibida.
## Funcionalidades

- Busca informações de endereço a partir do CEP informado pelo usuário
- Preenche automaticamente os campos de rua, bairro, cidade e estado do formulário HTML
- Exibe uma menagem de erro caso o CEP não seja encontrado ou haja algum erro na requisição à API



## Melhorias

Futuramente será implementada a funcionalidade de buscar endereços pelo nome da rua.

