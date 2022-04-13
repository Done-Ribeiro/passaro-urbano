## Adicionando Dependências

Boostrap 4
<code>npm install bootstrap@4.0.0 --save</code>

JQuery
<code>npm install jquery@3.2.1 --save</code>


## Configurando Dependências
Abra o arquivo <code>angular.json</code> e procure por:
![angular.json](./src/assets/styles_1.png)
Agora adicione as seguintes linhas em "Styles" e "Scripts":
![angular.json](./src/assets/styles_2.png)

### API-Fake (Json-Server)
Para adicionar globalmente o json-server executaremos o seguinte comando:
<code>npm install -g json-server</code>

Após isso, dentro da pasta app2/ criamos o arquivo <code>banco_de_dados.json</code> com os dados para a nossa API fake.

Após para executar o json-server, executamos o comando:
<code>json-server --watch banco_de_dados.json</code>
