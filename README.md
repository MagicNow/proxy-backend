# Proxy Backend

Mini servidor para configuração dos **x-forwarded-***

## Módulos

* [HTTPS](https://nodejs.org/api/https.html) - HTTPS is the HTTP protocol over TLS/SSL. In Node.js this is implemented as a separate module.
* [Http-Proxy](https://github.com/nodejitsu/node-http-proxy) - Is an HTTP programmable proxying library that supports websockets. It is suitable for implementing components such as reverse proxies and load balancers.

## Instalação

* Clone o repositório: `git clone git@github.com:lucassant0s/sboc-proxy.git`
* Acesse o diretório do projeto: `cd sboc-proxy`
* Instalação das dependências `yarn install`

## Utilização

- Fazer uma cópia do arquivo `.env.example` ~> `cp .env.example .env`
- Preencher todos valores das variáveis de ambiente que encontram-se `.env`
```
PORT= <port> execução do servidor local

X-FORWARDED-HOST= <host> : <port> opcional
X-FORWARDED-PROTO= <protocol>
X-FORWARDED-PORT= <port> opcional
X-FORWARDED-FOR= <host>
```

## Execução

* `yarn start`

## About

Lucas N. Santos - https://lucassant0s.github.io