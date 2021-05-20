# Memória Química - 1000 Futuros Cientistas

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Sobre a Stack

A Stack [React Native](https://reactnative.dev/) + [TypeScript](https://www.typescriptlang.org/) será usada para o desenvolvimento da aplicação. Entretanto, a fim de simplificar o processo de teste pelo restante da equipe, o _workflow_ [Expo](https://expo.io/) foi escolhido. Ele permite a execução do aplicativo em modo de desenvolvimento diretamente em um Smartphone através da instalação de um aplicativo _container_, com o código de desenvolvimento sendo trafegado localmente ou mesmo através da internet (por túneis semelhantes ao [ngrok](https://ngrok.com/)).

## Configuração de desenvolvimento

### Pré-requisitos

Os requisitos para a configuração de desenvolvimento do projeto são:

- [Node.js](https://nodejs.org/en/)
  - [yarn](https://yarnpkg.com/getting-started/install) (Node.js package manager)
- Qualquer uma das opções a seguir:
  - [Android SDK + Emulador configurado](https://developer.android.com/studio);
  - [`adb`](https://developer.android.com/studio/command-line/adb) + Smartphone Android conectado via USB e com o [USB debugging](https://developer.android.com/studio/debug/dev-options#debugging) ativo;
  - Smartphone Android com aplicativo [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) instalado e na mesma rede local que o ambiente de desenvolvimento.

Para instalar o `yarn`, é suficiente, após ter o Node.js funcionando e acessível no PATH, executar:

```sh
npm i -g yarn
```

### Instalação de dependências

Após clonar o projeto, entre na pasta (`cd ./1000FC-memoria-quimica`).

O **Yarn** é um gerenciador de pacotes semelhante ao npm, mas com recursos para garantir a reprodutibilidade dos resultados em várias máquinas. Muito disso é graças ao arquivo yarn.lock que garante que todas as dependências serão instaladas exatamente nas mesmas versões e na mesma ordem.

Na pasta do projeto, instale as dependências com:

```sh
yarn install
```

Após isso, tudo deve estar configurado.

### Primeira execução

Após ter algum emulador ou smartphone pronto para iniciar o projeto, execute:

```sh
yarn android # Compila a aplicação para Android e inicializa o emulador, se disponível
```

Se um emulador ou dispositivo real estiver acessível pelo `adb`, o Expo Go será instalado e o aplicativo inicializado. Caso prefira utilizar um aparelho externo, abra o aplicativo Expo Go (instalado pela PlayStore) e escaneie o código QR no terminal. Isso deve carregar a aplicação.

### Coding-Style

O Prettier está sendo usado como _formatter_. Ele pode ser executado no projeto com `yarn prettier --write .`, mas extensões estão disponíveis para [diversos editores de código](https://prettier.io/docs/en/editors.html).

O [`commitizen`](http://commitizen.github.io/cz-cli/) está sendo usado para garantir a coesão entre os commits. Ao executar um `git commit`, um prompt será exibido.
