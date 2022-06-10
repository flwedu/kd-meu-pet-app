# kd-meu-pet-app 🐱 🐶

Esse é o frontend do meu projeto "**kd Meu Pet?**", uma aplicação para cadastro e busca de animais desaparecidos.

Para o funcionamento do app, é necessário uma conexão com a API [kd-meu-pet-api](https://github.com/flwedu/kd-meu-pet-api).

Uma key da API do Google Maps também será necessária. Ela pode ser obtida em https://developers.google.com/maps?hl=pt-br

## Configurando e executando 🚀

A aplicação só funcionará caso a [kd-meu-pet-api](https://github.com/flwedu/kd-meu-pet-api) também esteja sendo executada. Por favor, clone o outro projeto e siga as instruções para execução.

Uma vez que a API REST esteja rodando, crie um arquivo `.env` na raiz do projeto. Dentro desse arquivo adicione as seguintes configurações:

```text
VITE_GOOGLE_MAPS_KEY=(👈Key para a API do Google Maps)
VITE_API_URL=(👈url para o HOST onde a API do kd-meu-pet está sendo executada)
VITE_API_PORT=(👈número da porta onde a API do kd-meu-pet está escutando)
```

Após isso, é hora de instalar as dependências:

```bash
# Instalando dependências
yarn

# Iniciando em modo dev
yarn dev

# Gerando build
yarn build
```

## Tecnologias utilizadas 💻

- Typescript
- React.js
- Jest
- Vite

## Créditos ❤️

- Ícones SVG: [oNline Web Fonts](http://www.onlinewebfonts.com)
- Background patterns: [Hero Patterns](https://heropatterns.com/)
