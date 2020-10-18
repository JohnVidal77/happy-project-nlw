<header align="center">
  <img src=".github/assets/logo-happy.png" align="center"/>

  <p align="center">
        <a href="https://www.linkedin.com/in/JohnVidal77/">
            <img alt="Made by John Vidal" src="https://img.shields.io/badge/made%20by-John%20Vidal-brightgreen">
        </a>
        <a href="https://github.com/JohnVidal77/nlw-pratice">
            <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JohnVidal77/happy-project-nlw">
        </a>
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/JohnVidal77/happy-project-nlw">
  <a>
    <img alt="GitHub" src="https://img.shields.io/github/license/JohnVidal77/happy-project-nlw?color=brigthgreen">
  </a>  
        <a href="https://github.com/JohnVidal77/nlw-pratice/stargazers">
            <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/johnvidal_77?style=social">
        </a>
  </p>

</header>

# Happy - NLW #3 Pratice

Projeto desenvolvido pela **Terceira Edição da Next Level Week** oferecida pela **Rocketseat**. O sistema será desenvolvido usando a **Omnistack**, ou seja, **React, React-native e NodeJS**, além de diversas outras tecnologias para produzir uma aplicação de alto desempenho.

## ❓ Sobre o projeto

O projeto tem a proposta do desenvolvimento de uma plataforma para facilitar o contato com orfanatos na região pesquisada, podendo assim, mudar o dia de uma criança carente. Que tal levar um pouco de felicidade para o mundo?

## 🎯 Metas da Semana

- [x] MVP do frontend
- [x] MVP do backend
- [ ] MVP do mobile
- [x] Configurar o Monorepo
- [ ] Adicionar teste
- [ ] Funcionalidade de excluir imagem no cadastro
- [ ] Otimizar Imagens
- [ ] Componentizar
- [ ] Traduzir README
- [ ] Migrar Mobile para dentro do monorepo

## 📖 Modules

- [Web App](https://github.com/JohnVidal77/happy-project-nlw/tree/main/modules/web)
- [Backend](https://github.com/JohnVidal77/happy-project-nlw/tree/main/modules/backend)
- [Mobile](https://github.com/JohnVidal77/happy-mobile)

## 🗂️ Estrutura

O projeto segue uma estrutura [monorepo](https://en.wikipedia.org/wiki/Monorepo), inspirado no Google e Facebook, onde todos os módulos estão dentro do mesmo repositório. Algumas vantagens dessa estrutura são simplificação de dependências, fácil compartilhamento de código entre módulos, facilidade de manutenção de funcionalidades que abrangem diversas áreas diferentes do projeto e alta escalabilidade.
No projeto é usado yarn workspace para gerenciar todo o monorepo. Na raiz do repositório existe um package.json com as informações gerais do projeto, assim como arquivos de configuração genéricos e em cada módulo existe um package.json com suas respectivas dependências e informações.
Para executar funções em diferentes módulos sem sair da raiz do projeto basta digitar o seguinte comando:

    yarn workspace {workspace_name} {script_name}

## 📜 License

O projeto está sobre a licença [MIT](./LICENSE)
