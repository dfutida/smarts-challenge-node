smarts-challenge-node

Baixe a versão zip no botão "Clone or download" do github.

https://github.com/dfutida/smarts-challenge-node

1- Descompacte o arquivo .zip na sua área de trabalho.
2- Abra o projeto no Visual Studio Code. Você pode fazer o download do programa aqui: https://code.visualstudio.com/download
2.1- Instale o Node.js. Você pode fazer download aqui: https://nodejs.org/en/download/
2.2- Abra a pasta na raiz do projeto (onde estão os arquivos package.json, customers.json, README), clique com o botão direito do mouse e selecione "Open with Code"
3- Abra o Terminal no VS Code e instale as dependências: 
    a) npm install nodemon --save
    b) npm install express
    c) npm install cors
    d) npm install request
4- Ainda no Terminal instale o servidor HTTP-SERVER
    a) npm install --global http-server
5- Abra 2 Terminais
    a) Rode o servidor e no Terminal 1 e execute: http-server
    Irá aparecer algo assim:
        Starting up http-server, serving ./
        Available on:
            http://192.168.1.3:8080
            http://127.0.0.1:8080
            http://172.17.116.1:8080
        Hit CTRL-C to stop the server
5- Rode o projeto digitando no Terminal 2: 
    a) nodemon ./backend/index.js
    Irá aparecer algo assim:
        [nodemon] 2.0.2
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching dir(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node ./backend/index.js`
        App listening on port 3000!
6- Abra o navegador Google Chrome e digite na URL: http://localhost:8080/frontend/
