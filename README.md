# Studio Ghibli

​O objetivo deste projeto é construir uma página web para visualizar um conjunto de dados que se adapte às necessidades do usuário. Essa página possibilita tanto visualizar como filtrar, ordenar os dados e mostrar informações relevantes através de cálculos agregados.

## Índice

- [1. Introdução ao Projeto](#1.-introdução-ao-projeto)
- [2. Histórias de Usuários](#2.-histórias-de-usuários)
- [3. Desenvolvimento da Interface](#3.-desenvolvimento-da-interface)
- [4. Conteúdos implementados no projeto](#5.-conteúdos-implementados-no-projeto)


## 1. Introdução ao Projeto

A escolha do tema para o projeto foi o Studio Ghibli.

Studio Ghibli é um estúdio japonês de animação, muito conhecido por seus filmes como Meu Amigo Totoro, A Viagem de Chihiro, O Castelo Animado, entre outros grandes sucessos. As animações são bem recebidas em todo o mundo e algumas receberam várias nomeações e prêmios. De todo esse fandom há um grupo que deseja interagir e ver as informações das animações e seus personagens.

A partir dessa proposta definimos que o site seria dividido em 4 páginas:

Página Inicial (Home) - Traz um menu responsivio em dispositivos móveis, e uma apresentação de imagens de filmes mais conhecidos.

Página de filmes (Films) - Possibilita a visualização de todos os filmes do estúdio em formato de cards e no verso detalhes sobre cada um. Os filmes podem ser ordenados por ordem alfabética, A-Z e Z-A.

Página de Personagens (Characters) - Apresenta cards com todos os personagens no verso algumas informações de genêro, idade e filme que participa. Podem ser ordenados por ordem alfabética, A-Z e Z-A.

Página de Dados (About) - Em formato de cards, possibilita ao usuário ter acesso à informações sobre o tema e médias. (Em construção)


## 2. Histórias de Usuários

Uma História de Usuário representa em linguagem simples o que o usuário faz, do que ele precisa e por que, de maneira concisa. As histórias para esse projeto foram escritas pensando nas necessidades de nosso usuário final. A medida que o projeto avançava, algumas histórias foram subdivididas, tendo como objetivo organizar melhor as tarefas e atender aos requisitos da aplicação.

![images](./src/images/Historias_usuario.png) 


## 3. Desenvolvimento da Interface

Após a primeira análise dos dados disponíveis, percebemos que o site contaria com com cards de filmes e personagens que seriam filtrados e ordenados. A partir desta primeira ideia foi definido o protótipo de baixa fidelidade:

![images](./src/images/Prototipo_Baixa.png) 

Desenvolvemos o prototótipo de alta fidelidade no figma, onde posteriormente fizemos algumas alterações.

![images](./src/images/Sample_Wireframe.png)

Escolhemos a Flat UI Pallate em [sitepalette](https://flatcolors.net/palette/182-flat-ui-pallate#) como referência do site [siteghibli](https://ghiblicollection.com/).

![images](./src/images/Flat_UI_Pallate.gif)

Construímos um desing responsivo para se adequar as mais diversas telas, abaixo temos o exemplo da Home acessada por um dispositivo móvel (Moto G4).

![images](./src/images/Home_MotoG4.png)


## 4. Conteúdos implementados no projeto
Para construir a interface desta aplicação, em que é possível visualizar e manipular dados, os conhecimentos abordados foram:

- HTML e CSS
- Uso de HTML semântico.
- Uso de seletores de CSS.
- Construir sua aplicação respeitando o desenho realizado (protótipo).
- Uso de flexbox em CSS.
- DOM e Web APIs
- Uso de seletores de DOM.
- Gerenciamento de eventos de DOM.
- Manipulação dinâmica de DOM. (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)
- JavaScript
- Uso de condicionais (if-else | switch | operador ternário)
- Uso de laços (for | for..in | for..of | while)
- Uso de funções (parâmetros | argumentos | valor de retorno)
- Manipular arrays (filter | map | sort | reduce)
- Manipular objects (key | value)
- Uso ES modules (import | export)
- Diferenciar entre expression e statements.
- Diferenciar entre tipos de dados atômicos e estruturados.
- Testing
- Teste unitário.
- Estrutura do código e guia de estilo
- Organizar e dividir o código em módulos (Modularização)
- Uso de identificadores descritivos (Nomenclatura | Semântica)
- Uso de linter (ESLINT)
- Git e GitHub
- Uso de comandos de git (add | commit | pull | status | push)
- Gerenciar repositórios de GitHub (clone | fork | gh-pages)
- Colaboração no Github (branches | pull requests | |tags)

## 5. Tecnologias Utilizadas 
 
 <div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img  align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="github" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
</div><br>


## 6. Sobre as desenvolvedoras



<div align='center'>

|                             Bruna Belo                       	      |                              Larissa Maranho                                	|
|:------------------------------------------------------------------------------: |:------------------------------------------------------------------------------:	|
|<img alt="Bruna Belo" src="https://avatars.githubusercontent.com/u/83475770?v=4" height='200px'></img> | <img src="https://avatars.githubusercontent.com/u/83652629?v=4" alt="" height='200px'></img> 	|
| <a href='https://github.com/belobruna'><img alt='GitHub - Bruna' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/bruna-belo/'><img alt='LinkedIn - Bruna' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img> |  <a href='https://github.com/larissamaranho'><img alt='GitHub - Larissa' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></img></a> <a href='https://www.linkedin.com/in/larissa-maranho/'><img alt='LinkedIn - Larissa' src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></img></a> 	|         

</div>




