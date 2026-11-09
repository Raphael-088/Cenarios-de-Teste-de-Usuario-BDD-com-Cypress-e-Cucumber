# language: pt

Funcionalidade: Login no Hub de Leitura

Como usuário cadastrado
Quero realizar login no sistema
Para acessar a área administrativa

Cenário: Login com credenciais válidas

Dado que estou na página de login
Quando informo credenciais válidas
E clico no botão entrar
Então devo acessar a área administrativa

Cenário: Login com credenciais inválidas

Dado que estou na página de login
Quando informo credenciais inválidas
E clico no botão entrar
Então devo visualizar uma mensagem de erro