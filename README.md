# Projeto InstaLikes (Clone do Instagram)

# Listar processos
lsof -i :3000

# Matar processos
kill -9 {PID}

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```

# Instalando capacidade de conexao com o banco (mongodb usado no projeto)
npm install mongodb




1 - Informa no projeto a capacidade de se conectar com o banco (npm install mongodb)
2 - Cria Database e Collection no mongo depois de criado é feito o deploy (Pulicacao na nuvem).

Ja temos o banco, aplicacao, string de conexao (Como unir tudo isso?)
Primeiro passo é trazer a string de conexao para o nosso projeto. Porem como essa informacao tem dados sensiveis, nao pode ir pra o github nem vazar, iremos usar variaveis de ambiente.

Como passar a string de conexao para o node de forma segura?

no packate.json
ao inves de ficar executando o projeto com o node server.js cria o script
"scripts": {
    "dev": "node --watch --env-file=.env server.js",
    "test": ""
  }

e executa com npm run dev para subir o servidor sem ter que ficar como acima.

Agora vamos fazer nosso sistema se conectar ao banco ( Cria um arquivo especifico para lidar com essa conexao) Codigo sempre sera o mesmo