# Yu_Yi_AmpliFocus

AmpliFocus é um **programa de foco e produtividade**.

Amplifique sua produtividade e alcance seus objetivos e metas mais rapidamente, sejam eles voltados para estudo, trabalho ou algum projeto pessoal.

### Vídeo demonstrativo: <a href="https://youtu.be/Ev0A8KpYCbA" target="_blank">https://youtu.be/Ev0A8KpYCbA</a>

### Acesse o projeto em produção aqui: <a href="https://bit.ly/3ppaJ8W" target="_blank">Clique Aqui!</a>

# 1) Proposta de projeto

## Motivação

Vivemos num mundo que nos exige cada vez mais de formas cada vez mais rápidas. Com isso, sentimos uma necessidade de buscarmos maneiras de amplificar nossa produtividade diante de tantas distrações a alguns cliques de distância.

Assim, surge a ideia do **AmpliFocus**, um programa de produtividade, que ajuda o usuário a acompanhar suas tarefas pendentes.

## Principais Funcionalidades

### Login e Signup

O programa fornece as funcionalidades de login e signup de modo que é criado um registro para cada usuário no banco de dados do backend.

### Autenticação JWT

A autenticação dos usuário se dá por meio da utilização de tokens JWT

### Armazenar tarefas 

Com o programa, é possível adicionar e remover tarefas (Tasks) a serem cumpridas por cada usuário.
Tais tarefas são armazenadas no backend do programa e são referenciadas para cada usuário.
A autenticação se dá por meio de tokens JWT.

# 2) Diagrama de classes e relacionamentos

Vide arquivo no repositório.

# 3) Bibliotecas Gráficas

## Frontend

Para o desenvolvimento do frontend da plataforma foi escolhido o **ReactJS**. 

ReactJS é uma das bibliotecas preferidas pelos desenvolvedores frontend, devido a sua flexibilidade, componentização e vasta comunidade. Plataformas como Facebook, Instagram e Reddit foram desenvolvidas com ReactJS.

### Instalação Frontend

É necessário ter instalado o NodeJs: <a href="https://nodejs.org/en/" target="_blank">https://nodejs.org/en/</a>


Em seguida no diretório **/amplifocus/frontend**, rode o seguinte comando:

### `npm install`

Por fim, para inicializar o frontend do projeto, rode:

### `npm start`

## Framework Backend

Para o backend do projeto, foi escolhido o framework **Django**.

É disponibilizado, com o Django, interface gráfica de admin do projeto, para gerenciar usuários e tabelas do banco de dados.

### Instalação Backend

É necessário ter instalado o python/pip 3.9 no seu repositorio: <a href="https://docs.python.org/3.9/using/index.html" target="_blank">https://docs.python.org/3.9/using/index.html</a>


Em seguida no diretório **/amplifocus/backend**, rode os seguintes comando:
### `pip install pipenv`

### `pipenv shell`

### `pip install -r "requirements.txt"`

Por fim, para inicializar o frontend do projeto, rode:
### `python manage.py runserver`


