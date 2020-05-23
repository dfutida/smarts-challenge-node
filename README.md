<h3>smarts-challenge-node</h3>

Acesse: https://github.com/dfutida/smarts-challenge-node

Baixe a versão zip no botão "Clone or download" do github.

1- Descompacte o arquivo .zip na sua área de trabalho.<br>
2- Abra o projeto no Visual Studio Code. Você pode fazer o download do programa aqui: https://code.visualstudio.com/download <br>
2.1- Instale o Node.js. Você pode fazer download aqui: https://nodejs.org/en/download/ <br>
2.2- Abra a pasta na raiz do projeto (onde estão os arquivos package.json, customers.json, README), clique com o botão direito do mouse e selecione "Open with Code" <br>
3- Abra o Terminal no VS Code e instale as dependências: <br>
    a) npm install nodemon --save <br>
    b) npm install express<br>
    c) npm install cors<br>
    d) npm install request<br>
4- Ainda no Terminal instale o servidor HTTP-SERVER <br>
    a) npm install --global http-server<br>
5- Abra 2 Terminais<br>
    a) Rode o servidor e no Terminal 1 e execute: http-server<br>
    Irá aparecer algo assim:<br>
        Starting up http-server, serving ./<br>
        Available on:<br>
            http://192.168.1.3:8080<br>
            http://127.0.0.1:8080<br>
            http://172.17.116.1:8080<br>
        Hit CTRL-C to stop the server<br>
5- Rode o projeto digitando no Terminal 2: <br>
    a) nodemon ./backend/index.js<br>
    Irá aparecer algo assim:<br>
        [nodemon] 2.0.2<br>
        [nodemon] to restart at any time, enter `rs`<br>
        [nodemon] watching dir(s): *.*<br>
        [nodemon] watching extensions: js,mjs,json<br>
        [nodemon] starting `node ./backend/index.js`<br>
        App listening on port 3000!<br>
6- Abra o navegador Google Chrome e digite na URL: http://localhost:8080/frontend/<br>
