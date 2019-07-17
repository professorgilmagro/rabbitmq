## Teste de envio e recebimento de mensagem usando RabbitMQ com NodeJS

<img align="right" src="https://www.rabbitmq.com/img/RabbitMQ-logo.svg" alt="RabbitMQ">

**Executando a aplicação**

1 - Execute o docker conforme abaixo para preparar o ambiente

```ssh
    $ docker-compose up
```

2- Acesse a url abaixo para acessar o admin do RabbitMQ para checar se está tudo em ordem

-   http://localhost:15672
-   Username: `guest`
-   Password: `guest`

3- Rode o comando abaixo para iniciar a aplicação e executar o producer:

```ssh
   $ yarn start ou yarn produce
```

4- Em outro terminal, execute o consumer:

```ssh
   $ yarn consume
```
